import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

//match is coming from Route component

const CollectionsOverviewWithSpinner  = WithSpinner(CollectionsOverview);
const CollectionOverviewWithSpinner = WithSpinner(CollectionPage);

class ShopPage  extends React.Component {

    state = {
        loading: true
    }; // TODO Constructor will be exceuteed with super by REACT 

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');


        //TODO read the docs at https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls
        //below is fetch example but firestore is nested so a lot of work
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-react-udemy/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));


        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        //     console.log(collectionsMap);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // });

        //using promises
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            console.log(collectionsMap);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }

    render() {
        const { match } = this.props;  
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}
                />
            </div>
        );
    }
}  

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);
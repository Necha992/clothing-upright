import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";


const mapStateToPropps = createStructuredSelector({
    isLoading: (state) =>  !selectIsCollectionLoaded(state)
});

//cuuring, reading from righ to left
const CollectionPageContainer = compose(
connect(mapStateToPropps),
WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

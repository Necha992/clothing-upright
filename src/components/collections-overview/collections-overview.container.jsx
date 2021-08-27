import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";


const mapStateToPropps = createStructuredSelector({
    isLoading:  selectIsCollectionFetching
});

//cuuring, reading from righ to left
const CollectionsOverviewContainer = compose(
    connect(mapStateToPropps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

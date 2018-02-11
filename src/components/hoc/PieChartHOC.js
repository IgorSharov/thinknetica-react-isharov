import { connect } from 'react-redux';
import { map } from 'lodash';

import PieChart from 'components/ui/PieChart'; 

const stateToProps = (state) => ({
  columns: map(state.posts.entries,
    (post) => ('id' in post)
      ? [post.text, post.metaData.likes]
      : [])
});

export default connect(stateToProps)(PieChart);
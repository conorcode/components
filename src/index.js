import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure??
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ted"
          timeAgo="Today at 6:54pm"
          blogText="Ted blog input"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Bill"
          timeAgo="Yesterday at 4:34am"
          blogText="Bill says hello"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

import React, {
  useState, useEffect,
} from 'react';
import {
  useParams,
} from 'react-router-dom';

const ExpandedCollection = () => {
  const [collection, setCollection] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function getOneCollection() {
      await fetch(`/api/collections/${id}`)
        .then((res) => res.json())
        .then((result) => {
          setCollection(result);
          console.log('collection===', result);
        });
    }

    getOneCollection();
  }, []);

  function likeButtonClick(eventId) {
    console.log(eventId);
  }

  return (

    <div key={collection._id} className="collection-div">
      <h1>
        Title:
        {' '}
        {' '}
        {collection.title}
      </h1>
      <h3>
        Description:
        {' '}
        {' '}
        {collection.description}
      </h3>

      <p>
        Creator:
        {' '}
        {' '}
        {collection.author}
        {' '}
        {' '}
      </p>

      <div>
        <button type="button" onClick={() => likeButtonClick(collection._id)}>Like</button>
      </div>
    </div>

  );
};

export default ExpandedCollection;

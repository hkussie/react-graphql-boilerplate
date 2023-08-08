import { useQuery, gql } from "@apollo/client";

// Create query: 
const GET_DATA = gql`
  query displayData {
    locations {
      id
      name
      description
      photo
    }
  }
`;

// Create function to return and display data
function DisplayData() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};

export default DisplayData; 
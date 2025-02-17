import gql from 'graphql-tag';

export const VOTES_QUERY = gql`
  query Votes($id: String!) {
    votes(first: 10000, where: { proposal: $id }) {
      id
      voter
      created
      choice
    }
  }
`;

export const PROPOSAL_QUERY = gql`
  query Proposal($id: String!) {
    proposal(id: $id) {
      id
      title
      body
      choices
      start
      end
      snapshot
      state
      author
      created
      plugins
      network
      strategies {
        name
        params
      }
      space {
        id
        name
      }
    }
  }
`;

export const PROPOSALS_QUERY = gql`
  query Proposals($space: String!) {
    proposals(
      where: { space_in: [$space] }
      orderBy: "created"
      orderDirection: desc
    ) {
      id
      title
      body
      choices
      start
      end
      snapshot
      state
      author
      created
      plugins
      network
      strategies {
        name
        params
      }
      space {
        id
        name
      }
    }
  }
`;

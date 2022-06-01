import { useMutation } from "react-query";
import { GraphQLClient } from "graphql-request";

import { useAuthenticatedFetch } from "hooks";

export const useShopifyMutation = ({ query }) => {
  const authenticatedFetch = useAuthenticatedFetch();
  const graphQLClient = new GraphQLClient("/api/graphql", {
    fetch: authenticatedFetch,
  });

  const { mutateAsync, ...mutationProps } = useMutation(async (variables) =>
    graphQLClient.rawRequest(query, variables)
  );

  return [mutateAsync, mutationProps];
};

import { ErrorComponent } from "@refinedev/chakra-ui";
import { GetServerSideProps } from "next";

export default function CatchAll() {
  return <ErrorComponent />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};

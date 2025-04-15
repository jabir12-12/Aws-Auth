import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Alert, Flex, Text } from "@aws-amplify/ui-react";
import { CheckCircle } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (router.query.success === "1") {
      setShowSuccess(true);

      // Remove the query param after showing the message
      const timeout = setTimeout(() => {
        setShowSuccess(false);
        const { success, ...rest } = router.query;
        router.replace(
          { pathname: router.pathname, query: rest },
          undefined,
          { shallow: true }
        );
      }, 5000); // show for 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [router.query]);

  return (
    <Flex direction="column" padding="20px">
      {showSuccess && (
        <Alert
          variation="success"
          isDismissible={true}
          hasIcon={true}
          heading="Success!"
        >
          <Flex alignItems="center" gap="10px">
            <CheckCircle size={20} />
            <Text>You have successfully added your files.</Text>
          </Flex>
        </Alert>
      )}
      <Text fontSize="xl" fontWeight="bold">Welcome to the Main Page</Text>
      {/* ... */}
    </Flex>
  );
}

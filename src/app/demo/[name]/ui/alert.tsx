import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TerminalIcon, WarningIcon } from "@phosphor-icons/react/ssr";

export const alert = {
  name: "alert",
  components: {
    Default: (
      <Alert>
        <TerminalIcon className="size-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    ),
    Destructive: (
      <Alert variant="destructive">
        <WarningIcon className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    ),
  },
};

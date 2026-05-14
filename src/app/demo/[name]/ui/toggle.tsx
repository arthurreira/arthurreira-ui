import { Toggle } from "@/components/ui/toggle";
import {
  TextBolderIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react/ssr";

export const toggle = {
  name: "toggle",
  components: {
    Default: (
      <Toggle aria-label="Toggle bold">
        <TextBolderIcon className="size-4" />
      </Toggle>
    ),
    Outline: (
      <Toggle variant="outline" aria-label="Toggle italic">
        <TextItalicIcon className="size-4" />
      </Toggle>
    ),
    "With Text": (
      <Toggle aria-label="Toggle underline">
        <TextUnderlineIcon className="mr-2 size-4" />
        Underline
      </Toggle>
    ),
  },
};

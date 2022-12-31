import { render } from "@testing-library/react";
import { Input, InputGroup } from "@chakra-ui/react";

test("field completion", () => {
  const { debug } = render(
    <InputGroup>
      <Input />
    </InputGroup>
  );

  debug();
});

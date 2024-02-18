import { defineComponent } from "vue";

type Props = {
  modelValue: number;
  label: string;
  name: string;
};

type Emits = {
  onUpdateModelValue: (value: number) => void;
};

export default defineComponent<Props, Emits>(
  (props, { emit }) => {
    return () => {
      return (
        <>
          <div>
            <label for={props.name} class="sr-only">
              {props.label}
            </label>
            <div class="mt-1">
              <input
                value={props.modelValue}
                type="number"
                name={props.name}
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  emit(
                    "onUpdateModelValue",
                    Number((e.target as HTMLInputElement).value),
                  )
                }
              />
            </div>
          </div>
        </>
      );
    };
  },
  {
    props: ["modelValue", "label", "name"],
    emits: ["onUpdateModelValue"],
  },
);

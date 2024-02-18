import { defineComponent } from "vue";

type Props<T> = {
  modelValue: T;
  values: { value: T; label: string }[];
  parentLabel: string;
  inputName: string;
};

type Emits<T> = {
  modelValueUpdate: (value: T) => void;
};

export default function useGenericRadioInput<TValue extends string>() {
  return defineComponent<Props<TValue>, Emits<TValue>>(
    (props, { emit }) => {
      return () => (
        <div>
          <label class="sr-only">{props.parentLabel}</label>
          <fieldset class="mt-1">
            <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
              {props.values.map(({ value, label }) => {
                return (
                  <div key={value} class="flex items-center">
                    <input
                      checked={props.modelValue === value}
                      value={value}
                      id={value}
                      name={props.inputName}
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      onChange={(e) =>
                        emit(
                          "modelValueUpdate",
                          (e.target as HTMLInputElement).value as TValue,
                        )
                      }
                    />
                    <label
                      for={value}
                      class="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>
      );
    },
    {
      props: ["modelValue", "values", "parentLabel", "inputName"],
      emits: ["modelValueUpdate"],
    },
  );
}

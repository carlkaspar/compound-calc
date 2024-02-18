import { defineComponent } from "vue";

type Props = {
  modelValue: number;
  label: string;
  name: string;
};

type Emits = {
  onModelValueUpdate: (value: number | "") => void;
};

const CURRENCY = { abbreviation: "EUR", symbol: "€" } as const;

export default defineComponent<Props, Emits>(
  (props, { emit }) => {
    return () => (
      <div>
        <div class="relative mt-1 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">{CURRENCY.symbol}</span>
          </div>
          <label for={props.name} class="sr-only">
            {props.label}
          </label>
          <input
            value={props.modelValue}
            type="number"
            name={props.name}
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onInput={(e) =>
              emit(
                "onModelValueUpdate",
                (e.target as HTMLInputElement).value
                  ? Number((e.target as HTMLInputElement).value)
                  : "",
              )
            }
          />
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span class="text-gray-500 sm:text-sm" id="price-currency">
              {CURRENCY.abbreviation}
            </span>
          </div>
        </div>
      </div>
    );
  },
  { props: ["modelValue", "label", "name"], emits: ["onModelValueUpdate"] },
);

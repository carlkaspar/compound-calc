import { computed, defineComponent, type SlotsType } from "vue";

type Props = {
  error: string | undefined;
  label: string;
};

type Slots = SlotsType<{
  default: () => HTMLElement;
}>;

export default defineComponent<Props, any, any, Slots>(
  (props, { slots }) => {
    const error = computed(() => props.error ?? "");

    return () => (
      <div>
        <div class="mb-1">
          <div class="flex justify-between">
            <span class="block text-sm font-medium leading-6 text-gray-900">
              {props.label}
            </span>

            <span class="mt-2 text-xs text-red-600 h-4">{error.value}</span>
          </div>
          {slots.default()}
        </div>
      </div>
    );
  },
  { props: ["error", "label"] },
);

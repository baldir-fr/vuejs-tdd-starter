import {mount} from "@vue/test-utils";
import Counter from "@/components/Counter"


describe('Counter', () => {

    let wrapper

    function createComponent() {
        wrapper = mount(Counter);
    }

    const findNumberValue = () => wrapper.find('[data-testid=counter-number-value]')
    const findMinusButton = () => wrapper.find('[data-testid=counter-minus-button]')
    const findPlusButton = () => wrapper.find('[data-testid=counter-plus-button]')

    it('mounts without configuration', () => {
        // smoke test (temporary : to be removed)
        createComponent()
    })


// We can design upfront component behaviors with it.todo
    it('renders a count value', () => {
        createComponent()
        expect(findNumberValue().text()).toContain('0')
    })
    it('renders a minus button', () => {
        createComponent()
        expect(findMinusButton().text()).toContain('-')
    })
    it('renders a plus button', () => {
        createComponent()
        expect(findPlusButton().text()).toContain('+')
    })


    it.todo('increments the count on + button click',()=>{
        
    })



    afterEach(() => {
        wrapper.unmount()
    })
})
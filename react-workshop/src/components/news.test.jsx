import NewsList from './news';
import renderer from 'react-test-renderer';

it('should render without throwing an error', () => {
    const wrapper = shallow(<NewsList />);
    expect(wrapper.exists(<div className="c-text" />)).toBeFalsy();
});

// it('renders correctly', () => {
//     const tree = renderer
//     .create(<NewsList />).toJSON();
//     expect(tree).toMatchSnapshot();
// })


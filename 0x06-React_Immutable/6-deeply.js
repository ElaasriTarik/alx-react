import { Map } from 'immutable';
// deep merge two objects
export default function mergeDeeplyElements(page1, page2) {
  return (Map(page1).mergeDeep(Map(page2)));
}

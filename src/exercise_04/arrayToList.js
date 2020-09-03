export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) {
    throw Error('Creating list from undefined array');
  }

  if (array.length === 0) {
    throw Error('Creating list from empty array');
  }
  function LinkedList() {
    this.head = null;
    this.tail = null;

    function Node(value) {
      this.value = value;
      this.next = null;
    }
    this.insert = function insert(arrays) {
      for (let i = 0; i < arrays.length; i += 1) {
        const curNode = new Node(arrays[i]);
        if (this.head == null) {
          this.head = curNode;
          this.tail = curNode;
        } else {
          this.tail.next = curNode;
          this.tail = curNode;
        }
      }
    };
  }
  const resultList = new LinkedList();
  resultList.insert(array);
  return resultList.head;
}

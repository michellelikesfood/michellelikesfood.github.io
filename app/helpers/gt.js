import { helper } from '@ember/component/helper';

function gt([num1, num2]) {
  return num1 > num2;
}

export default helper(gt);

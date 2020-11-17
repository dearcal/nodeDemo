function asyncOperation(callback) {
    process.nextTick(callback);
  }
  
  function task1(callback) {
    asyncOperation(() => {
      console.log("task1")
      task2(callback);
    });
  }
  
  function task2(callback) {
    asyncOperation(() => {
      console.log("task2")
      task3(callback);
    });
  }
  
  function task3(callback) {
    asyncOperation(() => {
      console.log("task3")
      callback(); //finally executes the callback
    });
  }
  
  task1(() => {
    //executed when task1, task2 and task3 are completed
    console.log('tasks 1, 2 and 3 executed');
  });
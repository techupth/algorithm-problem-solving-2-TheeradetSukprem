students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]

// function findStudentIndex(students, searchStudent) {
// 	let index = -1
// 	for (let i = 0; i < students.length; i++) {
// 		console.log(students[i]);
// 		if (students[i] === searchStudent) {
// 			index = i;
// 		}
// 	}
// 	return index
// }

// console.log(findStudentIndex(students,"Andrew"));

function findStudentIndex(students, searchStudent) {
let left = 0 ;
let right = students.length - 1 ; 
let index = -1 ;

	while (left <= right ) {
		
	let mid = Math.floor ((left + right) / 2 ) ;
	if (students[mid] === searchStudent ) {
		index = mid ;
		break;
	} else if (students[mid] < searchStudent){
		left = mid + 1
	} else {
		right = mid - 1
	}
	}
	return index
}

console.log(findStudentIndex(students,"Andrew"));
console.log(findStudentIndex(students,"Andre"));

// ตอบคำถามตรงนี้จ้า O log n หรือเปล่าครับเพราะว่าเราหาแบบถ้าไม่ใช่ให้ขยับไปเรื่อยๆแต่ต่างจาก O n ที่ไล่ที่ละตัวส่วน O^n ส่วน O log n นั้นตัดจำนวนที่ค้องหาคล้ายๆการหารหรือตัดออก

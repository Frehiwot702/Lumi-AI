import { NextRequest, NextResponse } from "next/server";
// import connectDb from "@/lib/db";
// import CourseDepartment, {ICourseDepartment} from "@/models/CourseDepartment";

// GET /api/courses
export async function GET(request: NextRequest) {
  try {

    // await connectDb();
    // const dept: ICourseDepartment[] = await CourseDepartment.find();
    // console.log('from api: ', dept)
    // return NextResponse.json(dept)
   
  } catch (error) {
    console.error('Failed to fetch courses dept:', error);
    return NextResponse.json({ message: "Failed to fetch courses dept" }, {status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    //   const {name, description}  = await request.json();

    //   await connectDb();
    //   await CourseDepartment.create({name, description})

    //   return NextResponse.json({message: "Department Created!"}, {status: 201})
  } catch(error) {
      console.error('Unable to insert mood:', error);
      return NextResponse.json({ message: error }, { status: 500 });
  }
 
  
}

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CustomCursor from "@/app/Component/CustomCursor";
import GridComponent from "@/app/Component/GridComponent";
function useDepartmentList(id) {
  const [departments, setDepartments] = useState([]);
  const [currentDepartment, setCurrentDepartment] = useState("");

  useEffect(() => {
    async function fetchDepartments() {
      const endPoint =
        "https://collectionapi.metmuseum.org/public/collection/v1/departments";
      const response = await fetch(endPoint);
      const data = await response.json();

      const department = data.departments.find(
        (dept) => dept.departmentId === parseInt(id)
      );
      if (department) {
        setCurrentDepartment(department.displayName);
      }
    }

    fetchDepartments();
  }, [id]);

  return { departments, currentDepartment };
}
function useDepartmentData(id) {
  const [objectIDs, setObjectIDs] = useState([]);
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const endPoint = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${id}`;
      console.log(endPoint);
      const response = await fetch(endPoint);
      const data = await response.json();
      setObjectIDs(data.objectIDs);
    }
    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    async function fetchObjectsBatch(count) {
      let fetchedObjects = [];
      let usedObjectIndexes = new Set();

      while (
        fetchedObjects.length < count &&
        usedObjectIndexes.size < objectIDs.length
      ) {
        const randomIndex = Math.floor(Math.random() * objectIDs.length);

        if (usedObjectIndexes.has(randomIndex)) {
          continue;
        }

        usedObjectIndexes.add(randomIndex);
        const currentObjectID = objectIDs[randomIndex];
        const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${currentObjectID}`
        );
        const objectData = await response.json();

        if (objectData.primaryImage !== "") {
          fetchedObjects.push(objectData);
        }
      }

      setObjects((prevObjects) => [...prevObjects, ...fetchedObjects]);
      return Promise.resolve();
    }

    if (objectIDs !== null && objectIDs.length > 0) {
      fetchObjectsBatch(20).then(() => setLoading(false));
    }
  }, [objectIDs]);

  return { objects, objectIDs, loading };
}

export default function DepartmentPage({ params: { id } }) {
  const { departments, currentDepartment } = useDepartmentList(id);

  const { objects, objectIDs, loading } = useDepartmentData(id);

  return (
    <>
      <GridComponent>
        <div className="flex place-content-around">
          <div className="flex-col w-4/5 justify-items-center">
            <p className="mt-20"></p>
            <h1 className="font-plusJakarta text-8xl text-black mb-20">
              The Metropolitan Museum
            </h1>
            <h2 className="font-plusJakarta text-5xl text-black mb-20">
              {currentDepartment}
            </h2>
            {loading === true && (
              <h1 className="font-plusJakarta text-3xl text-black mb-20">
                Loading...
              </h1>
            )}

            {objects !== null && loading === false && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {objects.map((object) => (
                  <div
                    key={object.objectID}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={object.primaryImage}
                      alt={object.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {object.title}
                      </h3>
                      <p className="text-gray-600 mb-1">
                        {object.artistDisplayName}
                      </p>
                      <p className="text-gray-500">{object.department}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </GridComponent>
    </>
  );
}

import React, { useState } from "react";
import ContCard from "../Components/ContCard";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Library = () => {
  const [files, setFiles] = useState([]);

  const [textContent, setTextContent] = useState("");
  const [pdfContent, setPdfContent] = useState(null);

  const [fileType, setFileType] = useState(null);
  const [fileName, setFileName] = useState("");

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showPdf, setShowPdf] = useState(false);

  const handleFileSElect = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;
    setFileName(selectedFile.name);

    if (
      selectedFile.type === "application/pdf" ||
      selectedFile.name.endsWith(".pdf")
    ) {
      handlePdf(selectedFile);
      console.log(fileName);
    } else if (
      selectedFile.type.startsWith("text/") ||
      selectedFile.name.endsWith(".txt") ||
      selectedFile.name.endsWith(".md")
    ) {
      handleTextFile(selectedFile);
    } else {
      alert("Unsupported file type. Please upload .txt, .md, or .pdf files.");
    }
  };

  const handlePdf = (file) => {
    setFileType("pdf");
    setPdfContent(file);

    setFiles((prevFiles) => [...prevFiles, file]);
  };
  console.log(pdfContent);
  console.log(fileType);
  console.log(files);

  const handleTextFile = (file) => {
    setFileType("text");

    setFiles((prevFiles) => [...prevFiles, file]);
    const reader = new FileReader();

    reader.onload = (e) => {
      setTextContent(e.target.result);
    };

    reader.readAsText(file);
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(numPages, prev + 1));
  };

  return (
    <div className="px-[16px] pt-[40px] overflow-hidden pb-15">
      <div className="flex justify-between mb-8 items-center">
        <p className="text-black text-tittle_Large">Library</p>
        <span className="flex w-[40px] h-[40px] rounded-[8.04] bg-white"></span>
      </div>

      <div className="bg-white h-[46px] w-full flex rounded-[11px] mb-4">
        <img src="/Variant3.svg" alt="search" className="w-[24px] mx-4" />
        <input
          type="text"
          placeholder="Search books..."
          className="outline-0 w-full"
        />
      </div>

      <div className="flex justify-between text-body_Small font-medium mb-4">
        <label
          htmlFor="fileselect"
          className="h-[38px] xsm:w-[160px] w-[171px] border-1 rounded-[33px] border-[#4b6481] flex justify-center items-center"
        >
          <input
            type="file"
            accept=".txt,.pdf"
            id="fileselect"
            onChange={handleFileSElect}
            className="hidden"
            multiple
          />
          <img src="/Variant3c.svg" alt="icon" className="w-[24px]" />
          <p>Upload file</p>
        </label>
        <div className="h-[38px] w-[171px] xsm:w-[160px] border-1 rounded-[33px] border-[#4b6481] flex justify-center items-center">
          <img src="/Variant3b.svg" alt="icon" className="w-[24px]" />
          <p>Scan Cover</p>
        </div>
      </div>

      <div className="text-body_Small flex gap-4 w-full mb-8 overflow-scroll">
        <div className="flex justify-between w-200 gap-4">
          <div className="bg-white w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            All books
          </div>

          <div className="bg-white text-tertiary w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            Reading(2)
          </div>
          <div className="bg-white text-tertiary w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            Completed(0)
          </div>

          <div className="bg-white w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            All books
          </div>
        </div>
      </div>

      <div>
        {files.map((file) => (
          <ContCard
            key={file.id}
            fileName={file.name}
            page={pageNumber}
            totalPage={numPages}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;

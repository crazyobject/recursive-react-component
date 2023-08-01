import React   from 'react';
import './App.css';
import ShowFilesInDirectory from "./components/ShowFilesInDirectory"

const directoryMeta = [
  {
    dirname: 'public',
    files: [
      {
        fileName: 'index.html',
      },
      {
        fileName: 'index.css',
      },
      {
        fileName: 'index.js',
      },
    ],
  },
  {
    dirname: 'styles',
    files: [
      {
        fileName: 'app.css',
      },
      {
        fileName: 'index.css',
      },
    ],
  },
  {
    dirname: 'src',
    files: [
      {
        fileName: 'index.js',
      },
    ],
    directories: [
      {
        dirname: 'employeeComponent',
        files: [
          {
            fileName: 'employeeComponent.js',
          },
          {
            fileName: 'employeeComponent.css',
          },
        ],
        directories: [
          {
            dirname: 'empAvatar',
            files: [
              {
                fileName: 'empAvatar.js',
              },
              {
                fileName: 'empAvatar.css',
              },
            ],
          },
        ],
      },
      {
        dirname: 'CompanyComponent',
        files: [
          {
            fileName: 'CompanyComponent.js',
          },
          {
            fileName: 'CompanyComponent.css',
          },
        ],
      },
    ],
  },
  {
    dirname: 'Util',
    files: [
      {
        fileName: 'dateHelper.js',
      },
      {
        fileName: 'printHelper.js',
      },
    ],
  },
];

export default function App() {
  return (
    <div style={{width:"50%"}}>
      <h2>Project Explorer</h2>
      <h4>When a React component repeatedly renders inside itself with different props until a base condition is met, it's called a recursive component.</h4>
      <hr />
      <ShowFilesInDirectory directoryMeta={directoryMeta} />
    </div>
  );
}

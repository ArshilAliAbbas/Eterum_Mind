// <<<<<<< HEAD
// import React, { useState } from 'react';
// import { create } from '@web3-storage/w3up-client';
// =======
// Web3 storage implementation will be added later
// "use client";
// import  { useState } from 'react';
// import { create } from '@web3-storage/w3up-client';
// >>>>>>> 624a4e79cc0c08278670d7e559defbe7f700ac47

// const DataInsightBox = () => {
//   const [text, setText] = useState('');
//   const [image, setImage] = useState(null);

// <<<<<<< HEAD
//   // Function to handle text input change
//   const handleTextChange = (e:any) => {
//     setText(e.target.value);
//   };

//   // Function to handle image file input change
//   const handleImageChange = (e:any) => {
//     setImage(e.target.files[0]);
//   };

//   // Function to encrypt text using AES-GCM
//   const encryptText = async (text:any, password:any) => {
//     const iv = crypto.getRandomValues(new Uint8Array(12)); // Initialization vector
//     const key = await crypto.subtle.importKey(
//       'raw',
//       new TextEncoder().encode(password),
//       { name: 'AES-GCM' },
//       false,
//       ['encrypt']
//     );
//     const encryptedContent = await crypto.subtle.encrypt(
//       { name: 'AES-GCM', iv },
//       key,
//       new TextEncoder().encode(text)
//     );
//     return { encryptedContent, iv };
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e:any) => {
//     e.preventDefault();

//     if (!text && !image) {
//       alert('Please provide text or an image to upload.');
//       return;
//     }

//     try {
//       const client = await create();
//       const space = await client.createSpace('my-secure-space');
//       await client.setCurrentSpace(space.did());
//       await client.registerSpace('[email protected]');
// =======
//   // Function to handle text input change
//   const handleTextChange = (e:any) => {
//     setText(e.target.value);
//   };

//   // Function to handle image file input change
//   const handleImageChange = (e:any) => {
//     setImage(e.target.files[0]);
//   };

//   // Function to encrypt text using AES-GCM
//   const encryptText = async (text:any, password:any) => {
//     const iv = crypto.getRandomValues(new Uint8Array(12)); // Initialization vector
//     const key = await crypto.subtle.importKey(
//       'raw',
//       new TextEncoder().encode(password),
//       { name: 'AES-GCM' },
//       false,
//       ['encrypt']
//     );
//     const encryptedContent = await crypto.subtle.encrypt(
//       { name: 'AES-GCM', iv },
//       key,
//       new TextEncoder().encode(text)
//     );

//     return { encryptedContent, iv };
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e:any) => {
//     e.preventDefault();

//     if (!text && !image) {
//       alert('Please provide text or an image to upload.');

//       return;
//     }

//     try {
//       const client = await create();
//       const space = await client.createSpace('my-secure-space');
//       await client.setCurrentSpace(space.did());
// Removed: await client.registerSpace('[email protected]');
// If you need to register or authorize a space, refer to the w3up-client documentation for the correct method.
// >>>>>>> 624a4e79cc0c08278670d7e559defbe7f700ac47

//       const files = [];

//       // Encrypt and add text file
//       if (text) {
//         const { encryptedContent, iv } = await encryptText(text, '');
//         const encryptedBlob = new Blob([encryptedContent]);
//         const encryptedFile = new File([encryptedBlob], 'encrypted.txt', { type: 'application/octet-stream' });
//         files.push(encryptedFile);
//       }

//       // Add image file
//       if (image) {
//         files.push(image);
//       }

// <<<<<<< HEAD
//       // Upload files
//       const cid = await client.storeDirectory(files);
//       console.log(Uploaded files CID: ${cid});
//       alert(Files uploaded successfully. CID: ${cid});
//     } catch (error) {
//       console.error('Error uploading files:', error);
//       alert('Failed to upload files.');
//     }
//   };

// Upload files
//       const cid = await client.uploadDirectory(files);
//       console.log(`Uploaded files CID: ${cid}`);
//       alert(`Files uploaded successfully. CID: ${cid}`);
//     } catch (error) {
//       console.error('Error uploading files:', error);
//       alert('Failed to upload files.');
//     }
//   };
// }
// >>>>>>> 624a4e79cc0c08278670d7e559defbe7f700ac47

import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton'
import React, { useState } from 'react'
import { FaFileImport } from 'react-icons/fa'

export default function ImportUser() {
  const [showUserUploadModel,setShowUserUploadModel] = useState(false);

  const handleUserJsonUpload = () => {
    setShowUserUploadModel(!showUserUploadModel);
  }
  return (
    <div className='min-h-8 grid container mx-auto max-w-7xl px-8 p-5'>
    <div className='grid grid-flow-col grid-cols-2'>
      <div className='text-lg mt-2 font-semibold text-gray-600'>List of imported users</div>
      <div className='text-right'><PrimaryButton onClick={() => handleUserJsonUpload()}>
        <FaFileImport className='mx-2'></FaFileImport>
        Import Users</PrimaryButton>
      </div>
    </div>
    <Modal show={showUserUploadModel} onClose={() => setShowUserUploadModel(false)}>
      We will handle upload functionality here
    </Modal>
    </div>
  )
}

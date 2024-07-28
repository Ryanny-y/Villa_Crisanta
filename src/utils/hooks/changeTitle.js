import { useState, useEffect } from "react";

export default function ChangeTitle(id) { // Assuming id is passed as a prop

  useEffect(() => {
    const changeDocTitle = () => {
      const title = id ? '' : `${id}`;
      document.title = `Villa Crisanta ${id} Spring Resort | Laguna, Philippines`;
    };

    changeDocTitle();

  }, [id]);

  return null;
}

import React from "react";

export default function Error({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  return <div>Error: {searchParams.error}</div>;
}

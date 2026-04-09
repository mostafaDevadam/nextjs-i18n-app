'use client';
import React from 'react';

export default function Trans({ t }: { t: Record<string, string> }) {
  return <>{JSON.stringify(t)}</>;
}

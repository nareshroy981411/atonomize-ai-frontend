import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './RepositoryPage.css';

const RepositoryPage = () => {
  const { repoName } = useParams();

  const repo = {
    name: repoName,
    description: 'Repository description goes here.',
    stargazers_count: 120,
    forks_count: 50,
  };

  return (
    <div className="repository-page">
      <h1>{repo.name}</h1>
      <p><strong>Description:</strong> {repo.description}</p>
      <p><strong>Stars:</strong> {repo.stargazers_count}</p>
      <p><strong>Forks:</strong> {repo.forks_count}</p>
    </div>
  );
};

export default RepositoryPage;

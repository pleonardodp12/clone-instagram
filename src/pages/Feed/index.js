import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage() {
    setLoading(true);

    const { data } = await api.get('/feed?_expand=author')

    setLoading(false)
    setFeed(data)
  }

  useEffect(() => {
    loadPage()
  }, [])

  async function refreshList() {
    setRefreshing(true)
    await loadPage();
    setRefreshing(false)
  }
  return (
  );
}

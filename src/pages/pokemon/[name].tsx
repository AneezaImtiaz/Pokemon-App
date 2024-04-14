import React, { useState, useEffect } from 'react';
import { usePokemonsDetail } from '../../hooks';
import { useRouter } from 'next/router';
import { Container } from '../../styles/globals';
import { Loader, MessageDialog } from '../../components';
import dynamic from 'next/dynamic';
import { PageContainer, Title, PokemonDetails, PokemonSprite, StatChartContainer } from '../../styles/PokemonDetailStyles';
import { ERROR_DIALOG, TRY_AGAIN, CLOSE } from '../../utils/Constants';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Pokemon: React.FC = () => {
  const router = useRouter();
  const pokemonName = router.query.name as string; // Type assertion
  const { data: pokemon, error, isLoading, refetch } = usePokemonsDetail(pokemonName);
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);

  const renderErrorConnectionDialog = () => {
    return (
      <MessageDialog
        isVisible={showErrorDialog}
        title={ERROR_DIALOG.title}
        description={ERROR_DIALOG.description}
        button={TRY_AGAIN}
        closeButton={CLOSE}
        onCloseButtonClick={() => setShowErrorDialog(false)}
        onButtonClick={() => { setShowErrorDialog(false); refetch(); }}
      />
    );
  };

  useEffect(() => {
    if (error) {
      setShowErrorDialog(true);
    }
  }, [error]);

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'radar',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Base Stats',
      align: 'center',
    },
    xaxis: {
      categories: pokemon?.stats?.map((stat) => stat.stat.name.toUpperCase()),
    },
    yaxis: {
      tickAmount: 5,
    },
    colors: ['#FF4560'],
    markers: {
      size: 4,
      colors: ['#FFFFFF'],
      strokeColors: '#FF4560',
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: (val) => val.toString(),
      },
    },
    fill: {
      type: 'solid',
    },
    stroke: {
      width: 2,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height: 300,
        },
        legend: {
          position: 'bottom', // Adjust legend position for small screens
        },
      },
    }],
  };

  const chartSeries = pokemon ? [{
    name: 'Base Stat',
    data: pokemon.stats.map(stat => stat.base_stat),
  }] : [];

  return (
    <Container>
      <Loader isVisible={isLoading} />
      {renderErrorConnectionDialog()}
      {pokemon && <PageContainer>
        <Title>{pokemon?.name?.toUpperCase()}</Title>
        <PokemonDetails>
          <PokemonSprite src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
        </PokemonDetails>
        <StatChartContainer>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="radar"
            height={350}
          />
        </StatChartContainer>
      </PageContainer>}
    </Container>
  );
};

export default Pokemon;

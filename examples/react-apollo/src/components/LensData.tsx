import { useAccount } from 'wagmi';
import {
  NftImage,
  Profile,
  useProfileQuery,
  useProfilesQuery
} from '@use-lens/react-apollo';
import { Card } from './UI/Card';

export const LensData = () => {
  const { address } = useAccount();

  const { data: profilesData, error } = useProfilesQuery({
    variables: {
      request: {
        ownedBy: [address]
      }
    }
  });

  if (!profilesData?.profiles?.items?.length) {
    return <div>No profiles for address: ${address}</div>;
  }

  const defaultProfile = profilesData?.profiles?.items.find(profile => profile.isDefault);
  const currentProfile = defaultProfile || profilesData?.profiles?.items[ 0 ];

  if (error) {
    return <div>Error while loading profiles. Please, try to reload page or disconnect wallet manually.</div>;
  }

  const dataClassName = 'mb-3 font-normal text-gray-700 dark:text-gray-400';

  return <>
    <Card className="container mt-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {currentProfile.handle}
      </h5>
      <div className={dataClassName}>{currentProfile.name}</div>
      <div className={dataClassName}>{currentProfile.bio}</div>
      <img width={100} height={100}
           src={currentProfile.picture?.__typename === 'MediaSet' ? currentProfile.picture?.original.url : (currentProfile.picture as NftImage)?.uri}/>
    </Card>
  </>;
};

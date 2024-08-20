import { AuthContext } from "@/src/contexts/providers/ProviderAuth";
import { _UserProfile } from "@/data-schema";

import { useContext, useEffect, useState, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/src/contexts/routes";
import { UserProfileUpdateForm } from "@/src/components";
import client from "@/src/utils/amplifyClient";

export default function UserProfile() {
  const { state: auth } = useContext<_UserProfile>(AuthContext);
  const [profile, setProfile] = useState();
  const nav = useNavigate();
  const getProfile = useCallback(async () => {
    const { data: profiles } = await client.models.UserProfile.list({
      filter: {
        email: {
          eq: auth?.attributes?.email,
        },
      },
    });
    profiles.length && setProfile(profiles[0]);
  }, [auth]);

  useEffect(() => {
    getProfile();
  }, [auth, getProfile]);

  return (
    <UserProfileUpdateForm
      userProfile={profile}
      onSubmit={(fields) => {
        nav(ROUTES.access.dashboard._);
        return fields;
      }}
    />
  );
}

import ProfileSimple from "../../../models/data/ProfileSimple";
import classes from "./ChatSuggestions.module.css";

interface ChatSuggestionsProps {
  profiles: ProfileSimple[]
  profileSelected: (profile: ProfileSimple) => void
}

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ profiles, profileSelected }) => {
  return (
    <div className={classes["suggestions"]}>
      <h3>People:</h3>
      <div className={classes["suggestion-items-container"]}>
        <div className={classes["suggestion-items"]}>
          {profiles.map(profile =>
            <div
              key={profile.id}
              className={classes["suggestion"]}
              onClick={() => profileSelected(profile)}
            >
              {profile.name + " " + profile.surname}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatSuggestions;

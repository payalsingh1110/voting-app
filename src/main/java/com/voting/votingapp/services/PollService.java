package com.voting.votingapp.services;

import com.voting.votingapp.model.OptionVote;
import com.voting.votingapp.model.Poll;
import com.voting.votingapp.repository.PollRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {

    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Poll createPoll(Poll poll) {
        System.out.println("Saved Poll: " + poll);
        return pollRepository.save(poll);
    }
    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Optional<Poll> getPollById(Long id){
        return pollRepository.findById(id);
    }

    public void vote(Long pollId, int optionIndex) {
        // GET POLL FROM DB
        Poll poll = pollRepository.findById(pollId)
                .orElseThrow(() -> new RuntimeException("Poll Not Found"));

        // GET ALL OPTIONS
        List<OptionVote> options = poll.getOptions();

        // IF INDEX FOR VOTE IS NOT FOUND , IT THROWS ERROR
        if(optionIndex <0 || optionIndex > options.size()){
            throw new IllegalArgumentException(" Illegal option index");
        }
        // GET SELECTED OPTION
        OptionVote selectedOption = options.get(optionIndex);

        // INCREMENT THE VOTE FOR SELECTED OPTION
        selectedOption.setVoteCount(selectedOption.getVoteCount()+1);

        // SAVE INCREMENTED OPTION INTO DB
        pollRepository.save(poll);


    }
}

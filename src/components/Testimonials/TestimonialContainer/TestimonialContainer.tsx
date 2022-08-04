import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./TestimonialContainer.style";

import { TestimonialRow } from "../TestimonialRow/TestimonialRow";
import { TrackDropdown } from "../Filter/TrackDropdown/TrackDropdown";
import { PaginationContainer } from "../Pagination/PaginationContainer";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { Exercise } from "../../../types/Exercise";
import { Mentor } from "../../../types/Mentor";
import { Track } from "../../../types/Track";
import { Pagination } from "../../../types/Pagination";

interface Testimonial {
  content: string;
  created_at: Date;
  exercise: Exercise;
  id: number;
  mentor: Mentor;
  track: Track;
}

const BASE_URL = "https://exercism.org/api/v2/hiring/testimonials";

export const TestimonialContainer: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [tracks, setTracks] = useState<string[]>([]);
  const [pages, setPages] = useState<Partial<Pagination>>({});
  const [selectedTrack, setSelectedTrack] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortParameter, setSortParameter] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTestimonials = async () => {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      if (response.status === 200) {
        setTestimonials(response.data.testimonials.results);
        setTracks(response.data.testimonials.tracks);
        setPages(response.data.testimonials.pagination);
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  useEffect(() => {
    const getFilteredTestimonials = async () => {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}?track=${selectedTrack}`);
      if (response.status === 200) {
        setTestimonials(response.data.testimonials.results);
        setPages(response.data.testimonials.pagination);
        setLoading(false);
      }
    };

    getFilteredTestimonials();
  }, [selectedTrack]);

  useEffect(() => {
    const getTestimonialsWithSearchQuery = async () => {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}?exercise=${searchQuery}`);
      if (response.status === 200) {
        setTestimonials(response.data.testimonials.results);
        setPages(response.data.testimonials.pagination);
        setLoading(false);
      }
    };

    getTestimonialsWithSearchQuery();
  }, [searchQuery]);

  useEffect(() => {
    const getTestimonialsSorted = async () => {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}?order=${sortParameter}`);
      if (response.status === 200) {
        setTestimonials(response.data.testimonials.results);
        setPages(response.data.testimonials.pagination);
        setLoading(false);
      }
    };

    getTestimonialsSorted();
  }, [sortParameter]);

  const handleSelectTrack = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTrack(() => event.target.value);
    setOpenDropdown(() => false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => event.target.value);
  };

  const handleSortByOldestAndNewest = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortParameter(() => event.target.value);
  };

  return (
    <S.TestimonialRowContainer>
      <S.FiltersContainer>
        <S.FiltersLeftSection>
          <TrackDropdown
            isOpen={openDropdown}
            tracks={tracks}
            selectTrack={handleSelectTrack}
          />
          {selectedTrack ? (
            <S.SelectedIconImage
              src={`https://dg8krxphbh767.cloudfront.net/tracks/${selectedTrack}.svg`}
              alt={`${selectedTrack} icon`}
            />
          ) : (
            <S.SelectedIconImage
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/all-tracks-5723af830c1df04c577e2aefdc8003f62c4270ec.svg"
              alt="default icon"
            />
          )}
          <S.OpenDropdownButton
            icon={faChevronDown}
            onClick={() => setOpenDropdown(() => !openDropdown)}
          />
          <input
            type="text"
            placeholder="Filter by exercise title"
            onChange={handleSearch}
          />
        </S.FiltersLeftSection>
        <select
          name="order-select"
          id="order-select"
          onChange={handleSortByOldestAndNewest}
        >
          <option value="oldest_first">Sort least recent</option>
          <option value="newest_first">Sort by most recent</option>
        </select>
      </S.FiltersContainer>
      {loading ? (
        <S.SpinnerContainer>
          <S.LoadingSpinner />
        </S.SpinnerContainer>
      ) : (
        <ul>
          {testimonials.map((testimonial) => (
            <TestimonialRow
              key={testimonial.id}
              content={testimonial.content}
              createdAt={testimonial.created_at}
              exercise={testimonial.exercise}
              mentor={testimonial.mentor}
              track={testimonial.track}
            />
          ))}
        </ul>
      )}
      <PaginationContainer pages={pages} />
    </S.TestimonialRowContainer>
  );
};

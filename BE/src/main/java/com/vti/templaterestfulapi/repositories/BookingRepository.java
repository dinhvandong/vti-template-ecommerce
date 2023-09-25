package com.vti.templaterestfulapi.repositories;

import com.vti.templaterestfulapi.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    Optional<Booking> findByPhone(String phone);
    Optional<Booking> findByUsername(String username);

}

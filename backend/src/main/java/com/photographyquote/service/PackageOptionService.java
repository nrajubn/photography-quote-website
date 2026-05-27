package com.photographyquote.service;

import com.photographyquote.model.PackageOption;
import com.photographyquote.repository.PackageOptionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageOptionService {

    private final PackageOptionRepository packageOptionRepository;

    public PackageOptionService(PackageOptionRepository packageOptionRepository) {
        this.packageOptionRepository = packageOptionRepository;
    }

    public List<PackageOption> getAllPackages() {
        return packageOptionRepository.findAll();
    }

    public PackageOption getPackageById(Long id) {
        return packageOptionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Package not found with id: " + id));
    }

    public List<PackageOption> getPackageComparison() {
        return packageOptionRepository.findAll();
    }
}

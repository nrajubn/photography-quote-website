package com.photographyquote.controller;

import com.photographyquote.model.PackageOption;
import com.photographyquote.service.PackageOptionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
public class PackageOptionController {

    private final PackageOptionService packageOptionService;

    public PackageOptionController(PackageOptionService packageOptionService) {
        this.packageOptionService = packageOptionService;
    }

    @GetMapping
    public List<PackageOption> getAllPackages() {
        return packageOptionService.getAllPackages();
    }

    @GetMapping("/{id}")
    public PackageOption getPackageById(@PathVariable Long id) {
        return packageOptionService.getPackageById(id);
    }

    @GetMapping("/compare")
    public List<PackageOption> comparePackages() {
        return packageOptionService.getPackageComparison();
    }
}

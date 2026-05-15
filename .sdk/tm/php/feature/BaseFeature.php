<?php
declare(strict_types=1);

// Punkapi SDK base feature

class PunkapiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(PunkapiContext $ctx, array $options): void {}
    public function PostConstruct(PunkapiContext $ctx): void {}
    public function PostConstructEntity(PunkapiContext $ctx): void {}
    public function SetData(PunkapiContext $ctx): void {}
    public function GetData(PunkapiContext $ctx): void {}
    public function GetMatch(PunkapiContext $ctx): void {}
    public function SetMatch(PunkapiContext $ctx): void {}
    public function PrePoint(PunkapiContext $ctx): void {}
    public function PreSpec(PunkapiContext $ctx): void {}
    public function PreRequest(PunkapiContext $ctx): void {}
    public function PreResponse(PunkapiContext $ctx): void {}
    public function PreResult(PunkapiContext $ctx): void {}
    public function PreDone(PunkapiContext $ctx): void {}
    public function PreUnexpected(PunkapiContext $ctx): void {}
}

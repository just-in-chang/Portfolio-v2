{
  description = "Portfolio-v2";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.nodejs_24
            pkgs.pnpm
          ];

          shellHook = ''
            echo "portfolio-v2: node $(node --version), pnpm $(pnpm --version)"
          '';
        };
      });
}

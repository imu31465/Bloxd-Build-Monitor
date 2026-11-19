export const id = 294;
export const ids = [294];
export const modules = {
  40827: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz
    });
    var Ez = bz(39267),
      nz = bz(40835);
    class iz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = bz, this.Ubz = [], this._maxBlockCapacity = uz || 64, this._selectionContent = new Ez.b(1024), this._creationFunc = zz
      }
      update(zz, uz, bz) {
        nz.e._CreateBlocks(zz, uz, bz, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      vbz(zz) {
        for (let uz = 0; uz < this.blocks.length; uz++) {
          this.blocks[uz].addEntry(zz)
        }
      }
      lL(zz) {
        for (let uz = 0; uz < this.blocks.length; uz++) {
          this.blocks[uz].removeEntry(zz)
        }
      }
      select(zz, uz) {
        this._selectionContent.reset();
        for (let bz = 0; bz < this.blocks.length; bz++) {
          this.blocks[bz].select(zz, this._selectionContent, uz)
        }
        return uz ? this._selectionContent.concat(this.Ubz) : this._selectionContent.concatWithNoDuplicate(this.Ubz), this._selectionContent
      }
      intersects(zz, uz, bz) {
        this._selectionContent.reset();
        for (let Ez = 0; Ez < this.blocks.length; Ez++) {
          this.blocks[Ez].intersects(zz, uz, this._selectionContent, bz)
        }
        return bz ? this._selectionContent.concat(this.Ubz) : this._selectionContent.concatWithNoDuplicate(this.Ubz), this._selectionContent
      }
      intersectsRay(zz) {
        this._selectionContent.reset();
        for (let uz = 0; uz < this.blocks.length; uz++) {
          this.blocks[uz].intersectsRay(zz, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.Ubz), this._selectionContent
      }
    }
    iz.CreationFuncForMeshes = (zz, uz) => {
      const bz = zz.lG();
      !zz.isBlocked && bz.boundingBox.intersectsMinMax(uz.Lbz, uz.Tbz) && uz.entries.push(zz)
    }, iz.CreationFuncForSubMeshes = (zz, uz) => {
      zz.lG().boundingBox.intersectsMinMax(uz.Lbz, uz.Tbz) && uz.entries.push(zz)
    }
  },
  40835: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz
    });
    var Ez = bz(36519),
      nz = bz(39483);
    class iz {
      constructor(zz, uz, bz, Ez, nz, iz) {
        this.entries = [], this.cbz = new Array, this._capacity = bz, this._depth = Ez, this._maxDepth = nz, this._creationFunc = iz, this._minPoint = zz, this._maxPoint = uz, this.cbz.push(zz.clone()), this.cbz.push(uz.clone()), this.cbz.push(zz.clone()), this.cbz[2].x = uz.x, this.cbz.push(zz.clone()), this.cbz[3].y = uz.y, this.cbz.push(zz.clone()), this.cbz[4].z = uz.z, this.cbz.push(uz.clone()), this.cbz[5].z = zz.z, this.cbz.push(uz.clone()), this.cbz[6].x = zz.x, this.cbz.push(uz.clone()), this.cbz[7].y = zz.y
      }
      get Bp() {
        return this._capacity
      }
      get Lbz() {
        return this._minPoint
      }
      get Tbz() {
        return this._maxPoint
      }
      addEntry(zz) {
        if (this.blocks)
          for (let uz = 0; uz < this.blocks.length; uz++) {
            this.blocks[uz].addEntry(zz)
          } else this._creationFunc(zz, this), this.entries.length > this.Bp && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(zz) {
        if (this.blocks) {
          for (let uz = 0; uz < this.blocks.length; uz++) {
            this.blocks[uz].removeEntry(zz)
          }
          return
        }
        const uz = this.entries.indexOf(zz);
        uz > -1 && this.entries.splice(uz, 1)
      }
      addEntries(zz) {
        for (let uz = 0; uz < zz.length; uz++) {
          const bz = zz[uz];
          this.addEntry(bz)
        }
      }
      select(zz, uz, bz) {
        if (nz.e.IsInFrustum(this.cbz, zz)) {
          if (this.blocks) {
            for (let Ez = 0; Ez < this.blocks.length; Ez++) {
              this.blocks[Ez].select(zz, uz, bz)
            }
            return
          }
          bz ? uz.concat(this.entries) : uz.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(zz, uz, bz, Ez) {
        if (nz.e.IntersectsSphere(this._minPoint, this._maxPoint, zz, uz)) {
          if (this.blocks) {
            for (let nz = 0; nz < this.blocks.length; nz++) {
              this.blocks[nz].intersects(zz, uz, bz, Ez)
            }
            return
          }
          Ez ? bz.concat(this.entries) : bz.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(zz, uz) {
        if (zz.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let bz = 0; bz < this.blocks.length; bz++) {
              this.blocks[bz].intersectsRay(zz, uz)
            }
            return
          }
          uz.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        iz._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(zz, uz, bz, nz, lz, Mz, tz, Hz) {
        tz.blocks = new Array;
        const Oz = new Ez.n((uz.x - zz.x) / 2, (uz.y - zz.y) / 2, (uz.z - zz.z) / 2);
        for (let Ez = 0; Ez < 2; Ez++)
          for (let uz = 0; uz < 2; uz++)
            for (let pz = 0; pz < 2; pz++) {
              const dz = zz.add(Oz.multiplyByFloats(Ez, uz, pz)),
                Fz = zz.add(Oz.multiplyByFloats(Ez + 1, uz + 1, pz + 1)),
                Zz = new iz(dz, Fz, nz, lz + 1, Mz, Hz);
              Zz.addEntries(bz), tz.blocks.push(Zz)
            }
      }
    }
  },
  40841: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Oz
    });
    var Ez = bz(39253),
      nz = bz(36519),
      iz = bz(39614),
      lz = bz(40776),
      Mz = bz(39329),
      tz = bz(36543),
      Hz = bz(40827);
    class Oz {
      constructor(zz) {
        this.name = Mz.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new lz.x(nz.n.Zero(), new nz.n(1, 1, 1)), (zz = zz || tz.d.LastCreatedScene) && (this.tK = zz, this.tK.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.tK.getActiveSubMeshCandidates = zz => this.getActiveSubMeshCandidates(zz), this.tK.getCollidingSubMeshCandidates = (zz, uz) => this.getCollidingSubMeshCandidates(zz, uz), this.tK.getIntersectingSubMeshCandidates = (zz, uz) => this.getIntersectingSubMeshCandidates(zz, uz))
      }
      register() {
        this.tK.onMeshRemovedObservable.add((zz => {
          const uz = this.tK.selectionOctree;
          if (void 0 !== uz && null !== uz) {
            const bz = uz.Ubz.indexOf(zz); - 1 !== bz && uz.Ubz.splice(bz, 1)
          }
        })), this.tK.onMeshImportedObservable.add((zz => {
          const uz = this.tK.selectionOctree;
          void 0 !== uz && null !== uz && uz.vbz(zz)
        }))
      }
      getActiveMeshCandidates() {
        return this.tK.ebz?.select(this.tK.frustumPlanes) || this.tK._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(zz) {
        if (zz._submeshesOctree && zz.useOctreeForRenderingSelection) {
          return zz._submeshesOctree.select(this.tK.frustumPlanes)
        }
        return this.tK._getDefaultSubMeshCandidates(zz)
      }
      getIntersectingSubMeshCandidates(zz, uz) {
        if (zz._submeshesOctree && zz.useOctreeForPicking) {
          lz.x.TransformToRef(uz, zz.getWorldMatrix(), this._tempRay);
          return zz._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.tK._getDefaultSubMeshCandidates(zz)
      }
      getCollidingSubMeshCandidates(zz, uz) {
        if (zz._submeshesOctree && zz.useOctreeForCollisions) {
          const bz = uz._velocityWorldLength + Math.max(uz._radius.x, uz._radius.y, uz._radius.z);
          return zz._submeshesOctree.intersects(uz._basePointWorld, bz)
        }
        return this.tK._getDefaultSubMeshCandidates(zz)
      }
      rebuild() {}
      dispose() {}
    }
    let pz = !1;
    pz || (pz = !0, Ez.e.prototype.createOrUpdateSelectionOctree = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        bz = this._getComponent(Mz.c.NAME_OCTREE);
      bz || (bz = new Oz(this), this.Hbz(bz)), this.ebz || (this.ebz = new Hz.c(Hz.c.CreationFuncForMeshes, zz, uz));
      const Ez = this.getWorldExtends();
      return this.ebz.update(Ez.min, Ez.max, this.meshes), this.ebz
    }, Object.defineProperty(Ez.e.prototype, "selectionOctree", {
      get: function() {
        return this.ebz
      },
      enumerable: !0,
      configurable: !0
    }), iz.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const bz = this.XT();
      let Ez = bz._getComponent(Mz.c.NAME_OCTREE);
      Ez || (Ez = new Oz(bz), bz.Hbz(Ez)), this._submeshesOctree || (this._submeshesOctree = new Hz.c(Hz.c.CreationFuncForSubMeshes, zz, uz)), this.computeWorldMatrix(!0);
      const nz = this.lG().boundingBox;
      return this._submeshesOctree.update(nz.minimumWorld, nz.maximumWorld, this.hN), this._submeshesOctree
    })
  },
  40776: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Lz,
      f: () => Rz,
      h: () => Zz,
      j: () => Fz,
      l: () => Az,
      n: () => Jz,
      p: () => Nz,
      s: () => xz,
      w: () => vz,
      x: () => pz
    });
    var Ez = bz(36526),
      nz = bz(36519),
      iz = bz(36528),
      lz = bz(39467),
      Mz = bz(39296),
      tz = bz(36543),
      Hz = bz(39350);
    const Oz = {
      internalPickerForMesh: void 0
    };
    class pz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ez.b;
        this.origin = zz, this.direction = uz, this.length = bz, this.epsilon = nz
      }
      clone() {
        return new pz(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Ez = pz._TmpVector3[0].P_(zz.x - bz, zz.y - bz, zz.z - bz),
          nz = pz._TmpVector3[1].P_(uz.x + bz, uz.y + bz, uz.z + bz);
        let iz, lz, Mz, tz, Hz = 0,
          Oz = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Ez.x || this.origin.x > nz.x) return !1
        } else if (iz = 1 / this.direction.x, lz = (Ez.x - this.origin.x) * iz, Mz = (nz.x - this.origin.x) * iz, Mz === -1 / 0 && (Mz = 1 / 0), lz > Mz && (tz = lz, lz = Mz, Mz = tz), Hz = Math.max(lz, Hz), Oz = Math.min(Mz, Oz), Hz > Oz) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Ez.y || this.origin.y > nz.y) return !1
        } else if (iz = 1 / this.direction.y, lz = (Ez.y - this.origin.y) * iz, Mz = (nz.y - this.origin.y) * iz, Mz === -1 / 0 && (Mz = 1 / 0), lz > Mz && (tz = lz, lz = Mz, Mz = tz), Hz = Math.max(lz, Hz), Oz = Math.min(Mz, Oz), Hz > Oz) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Ez.z || this.origin.z > nz.z) return !1
        } else if (iz = 1 / this.direction.z, lz = (Ez.z - this.origin.z) * iz, Mz = (nz.z - this.origin.z) * iz, Mz === -1 / 0 && (Mz = 1 / 0), lz > Mz && (tz = lz, lz = Mz, Mz = tz), Hz = Math.max(lz, Hz), Oz = Math.min(Mz, Oz), Hz > Oz) return !1;
        return !0
      }
      intersectsBox(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(zz.minimum, zz.maximum, uz)
      }
      intersectsSphere(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = zz.center.x - this.origin.x,
          Ez = zz.center.y - this.origin.y,
          nz = zz.center.z - this.origin.z,
          iz = bz * bz + Ez * Ez + nz * nz,
          lz = zz.radius + uz,
          Mz = lz * lz;
        if (iz <= Mz) return !0;
        const tz = bz * this.direction.x + Ez * this.direction.y + nz * this.direction.z;
        if (tz < 0) return !1;
        return iz - tz * tz <= Mz
      }
      intersectsTriangle(zz, uz, bz) {
        const Ez = pz._TmpVector3[0],
          iz = pz._TmpVector3[1],
          Mz = pz._TmpVector3[2],
          tz = pz._TmpVector3[3],
          Hz = pz._TmpVector3[4];
        uz.subtractToRef(zz, Ez), bz.subtractToRef(zz, iz), nz.n.CrossToRef(this.direction, iz, Mz);
        const Oz = nz.n.Dot(Ez, Mz);
        if (0 === Oz) return null;
        const dz = 1 / Oz;
        this.origin.subtractToRef(zz, tz);
        const Fz = nz.n.Dot(tz, Mz) * dz;
        if (Fz < -this.epsilon || Fz > 1 + this.epsilon) return null;
        nz.n.CrossToRef(tz, Ez, Hz);
        const Zz = nz.n.Dot(this.direction, Hz) * dz;
        if (Zz < -this.epsilon || Fz + Zz > 1 + this.epsilon) return null;
        const Rz = nz.n.Dot(iz, Hz) * dz;
        return Rz > this.length || Rz < 0 ? null : new lz.b(1 - Fz - Zz, Fz, Rz)
      }
      intersectsPlane(zz) {
        let uz;
        const bz = nz.n.Dot(zz.normal, this.direction);
        if (Math.abs(bz) < 9.99999997475243e-7) return null;
        {
          const Ez = nz.n.Dot(zz.normal, this.origin);
          return uz = (-zz.d - Ez) / bz, uz < 0 ? uz < -9.99999997475243e-7 ? null : 0 : uz
        }
      }
      intersectsAxis(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (zz) {
          case "y": {
            const zz = (this.origin.y - uz) / this.direction.y;
            return zz > 0 ? null : new nz.n(this.origin.x + this.direction.x * -zz, uz, this.origin.z + this.direction.z * -zz)
          }
          case "x": {
            const zz = (this.origin.x - uz) / this.direction.x;
            return zz > 0 ? null : new nz.n(uz, this.origin.y + this.direction.y * -zz, this.origin.z + this.direction.z * -zz)
          }
          case "z": {
            const zz = (this.origin.z - uz) / this.direction.z;
            return zz > 0 ? null : new nz.n(this.origin.x + this.direction.x * -zz, this.origin.y + this.direction.y * -zz, uz)
          }
          default:
            return null
        }
      }
      OEz(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          iz = arguments.length > 4 ? arguments[4] : void 0,
          lz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Mz = nz.l.Matrix[0];
        return zz.getWorldMatrix().invertToRef(Mz), this._tmpRay ? pz.TransformToRef(this, Mz, this._tmpRay) : this._tmpRay = pz.Transform(this, Mz), zz.intersects(this._tmpRay, uz, bz, Ez, iz, lz)
      }
      intersectsMeshes(zz, uz, bz) {
        bz ? bz.length = 0 : bz = [];
        for (let Ez = 0; Ez < zz.length; Ez++) {
          const nz = this.OEz(zz[Ez], uz);
          nz.hit && bz.push(nz)
        }
        return bz.sort(this._comparePickingInfo), bz
      }
      _comparePickingInfo(zz, uz) {
        return zz.distance < uz.distance ? -1 : zz.distance > uz.distance ? 1 : 0
      }
      intersectionSegment(zz, uz, bz) {
        const Ez = this.origin,
          iz = nz.l.ER[0],
          lz = nz.l.ER[1],
          Mz = nz.l.ER[2],
          tz = nz.l.ER[3];
        uz.subtractToRef(zz, iz), this.direction.scaleToRef(pz._Rayl, Mz), Ez.addToRef(Mz, lz), zz.subtractToRef(Ez, tz);
        const Hz = nz.n.Dot(iz, iz),
          Oz = nz.n.Dot(iz, Mz),
          dz = nz.n.Dot(Mz, Mz),
          Fz = nz.n.Dot(iz, tz),
          Zz = nz.n.Dot(Mz, tz),
          Rz = Hz * dz - Oz * Oz;
        let Kz, wz, Xz = Rz,
          fz = Rz;
        Rz < pz._Smallnum ? (Kz = 0, Xz = 1, wz = Zz, fz = dz) : (Kz = Oz * Zz - dz * Fz, wz = Hz * Zz - Oz * Fz, Kz < 0 ? (Kz = 0, wz = Zz, fz = dz) : Kz > Xz && (Kz = Xz, wz = Zz + Oz, fz = dz)), wz < 0 ? (wz = 0, -Fz < 0 ? Kz = 0 : -Fz > Hz ? Kz = Xz : (Kz = -Fz, Xz = Hz)) : wz > fz && (wz = fz, -Fz + Oz < 0 ? Kz = 0 : -Fz + Oz > Hz ? Kz = Xz : (Kz = -Fz + Oz, Xz = Hz));
        const sz = Math.abs(Kz) < pz._Smallnum ? 0 : Kz / Xz,
          rz = Math.abs(wz) < pz._Smallnum ? 0 : wz / fz,
          oz = nz.l.ER[4];
        Mz.scaleToRef(rz, oz);
        const Nz = nz.l.ER[5];
        iz.scaleToRef(sz, Nz), Nz.addInPlace(tz);
        const vz = nz.l.ER[6];
        Nz.subtractToRef(oz, vz);
        return rz > 0 && rz <= this.length && vz.lengthSquared() < bz * bz ? Nz.length() : -1
      }
      update(zz, uz, bz, Ez, iz, lz, Mz) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          pz._RayDistant || (pz._RayDistant = pz.Zero()), pz._RayDistant.unprojectRayToRef(zz, uz, bz, Ez, nz.d.IdentityReadOnly, lz, Mz);
          const tz = nz.l.Matrix[0];
          iz.invertToRef(tz), pz.TransformToRef(pz._RayDistant, tz, this)
        } else this.unprojectRayToRef(zz, uz, bz, Ez, iz, lz, Mz);
        return this
      }
      static Zero() {
        return new pz(nz.n.Zero(), nz.n.Zero())
      }
      static CreateNew(zz, uz, bz, Ez, nz, iz, lz) {
        return pz.Zero().update(zz, uz, bz, Ez, nz, iz, lz)
      }
      static CreateNewFromTo(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nz.d.IdentityReadOnly;
        const Ez = new pz(new nz.n(0, 0, 0), new nz.n(0, 0, 0));
        return pz.CreateFromToToRef(zz, uz, Ez, bz)
      }
      static CreateFromToToRef(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nz.d.IdentityReadOnly;
        bz.origin.euz(zz);
        const iz = uz.subtractToRef(zz, bz.direction),
          lz = Math.sqrt(iz.x * iz.x + iz.y * iz.y + iz.z * iz.z);
        return bz.length = lz, bz.direction.normalize(), pz.TransformToRef(bz, Ez, bz)
      }
      static Transform(zz, uz) {
        const bz = new pz(new nz.n(0, 0, 0), new nz.n(0, 0, 0));
        return pz.TransformToRef(zz, uz, bz), bz
      }
      static TransformToRef(zz, uz, bz) {
        nz.n.TransformCoordinatesToRef(zz.origin, uz, bz.origin), nz.n.TransformNormalToRef(zz.direction, uz, bz.direction), bz.length = zz.length, bz.epsilon = zz.epsilon;
        const Ez = bz.direction,
          iz = Ez.length();
        if (0 !== iz && 1 !== iz) {
          const zz = 1 / iz;
          Ez.x *= zz, Ez.y *= zz, Ez.z *= zz, bz.length *= iz
        }
        return bz
      }
      unprojectRayToRef(zz, uz, bz, Ez, iz, lz, Mz) {
        const Hz = nz.l.Matrix[0];
        iz.multiplyToRef(lz, Hz), Hz.multiplyToRef(Mz, Hz), Hz.invert();
        const Oz = tz.d.LastCreatedEngine,
          pz = nz.l.ER[0];
        pz.x = zz / bz * 2 - 1, pz.y = -(uz / Ez * 2 - 1), pz.z = Oz?.fbz ? 1 : Oz?.isNDCHalfZRange ? 0 : -1;
        const dz = nz.l.ER[1].P_(pz.x, pz.y, 1 - 1e-8),
          Fz = nz.l.ER[2],
          Zz = nz.l.ER[3];
        nz.n.TransformCoordinatesToRef(pz, Hz, Fz), nz.n.TransformCoordinatesToRef(dz, Hz, Zz), this.origin.euz(Fz), Zz.subtractToRef(Fz, this.direction), this.direction.normalize()
      }
    }

    function dz(zz, uz, bz, Ez, nz) {
      let iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const lz = pz.Zero();
      return Fz(zz, uz, bz, Ez, lz, nz, iz), lz
    }

    function Fz(zz, uz, bz, Ez, iz, lz) {
      let Mz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        tz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Hz = zz.uR();
      if (!lz && !(lz = zz.activeCamera) && !(lz = zz.cameraToUseForPointers)) return zz;
      const Oz = lz.viewport,
        pz = Hz.getRenderHeight(),
        {
          x: dz,
          y: Fz,
          width: Zz,
          height: Rz
        } = Oz.toGlobal(Hz.getRenderWidth(), pz),
        Kz = 1 / Hz.getHardwareScalingLevel();
      return uz = uz * Kz - dz, bz = bz * Kz - (pz - Fz - Rz), iz.update(uz, bz, Zz, Rz, Ez || nz.d.IdentityReadOnly, Mz ? nz.d.IdentityReadOnly : lz.getViewMatrix(), lz.getProjectionMatrix(), tz), zz
    }

    function Zz(zz, uz, bz, Ez) {
      const nz = pz.Zero();
      return Rz(zz, uz, bz, nz, Ez), nz
    }

    function Rz(zz, uz, bz, Ez, iz) {
      if (!Mz.c) return zz;
      const lz = zz.uR();
      if (!iz && !(iz = zz.activeCamera) && !(iz = zz.cameraToUseForPointers)) throw new Error("Active camera not set");
      const tz = iz.viewport,
        Hz = lz.getRenderHeight(),
        {
          x: Oz,
          y: pz,
          width: dz,
          height: Fz
        } = tz.toGlobal(lz.getRenderWidth(), Hz),
        Zz = nz.d.Identity(),
        Rz = 1 / lz.getHardwareScalingLevel();
      return uz = uz * Rz - Oz, bz = bz * Rz - (Hz - pz - Fz), Ez.update(uz, bz, dz, Fz, Zz, Zz, iz.getProjectionMatrix()), zz
    }

    function Kz(zz, uz, bz, Ez, nz, iz, lz, Mz) {
      return wz(zz, bz, Ez, uz(Ez, bz.enableDistantPicking), nz, iz, lz, Mz)
    }

    function wz(zz, uz, bz, Ez, nz, iz, lz, Mz) {
      const tz = uz.intersects(Ez, nz, lz, iz, bz, Mz);
      return tz && tz.hit ? !nz && null != zz && tz.distance >= zz.distance ? null : tz : null
    }

    function Xz(zz, uz) {
      return "InstancedLinesMesh" === zz || "LinesMesh" === zz ? uz.intersectionThreshold : 0
    }

    function fz(zz) {
      const uz = zz.getClassName();
      if ("GreasedLineMesh" === uz) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const bz = zz.rawBoundingInfo;
      return {
        rawBoundingInfo: bz,
        intersectionThreshold: bz ? Xz(uz, zz) : 0
      }
    }

    function sz(zz, uz, bz, Ez, nz) {
      const iz = zz(bz, uz.enableDistantPicking);
      return iz.intersectsSphere(Ez.Ibz, nz) && iz.intersectsBox(Ez.boundingBox, nz) ? iz : null
    }

    function rz(zz, uz, bz, Ez, iz, lz) {
      let tz = null;
      const Hz = !!(zz.activeCameras && zz.activeCameras.length > 1 && zz.cameraToUseForPointers !== zz.activeCamera),
        pz = zz.cameraToUseForPointers || zz.activeCamera,
        dz = Oz.internalPickerForMesh || Kz,
        Fz = dz === Kz;
      for (let Mz = 0; Mz < zz.meshes.length; Mz++) {
        const Oz = zz.meshes[Mz];
        if (bz) {
          if (!bz(Oz, -1)) continue
        } else if (!Oz.isEnabled() || !Oz.isVisible || !Oz.pK) continue;
        const Zz = Hz && Oz.isWorldMatrixCameraDependent(),
          Rz = Oz.computeWorldMatrix(Zz, pz);
        if (Oz.hasThinInstances && Oz.yzz) {
          const zz = dz(tz, uz, Oz, Rz, !0, !0, lz);
          if (zz) {
            if (iz) return zz;
            const {
              rawBoundingInfo: Mz,
              intersectionThreshold: Hz
            } = fz(Oz), pz = Oz._thinInstanceDataStorage.matrixData;
            if (pz) {
              const zz = nz.l.Matrix[0],
                Zz = nz.l.Matrix[1],
                Kz = Math.min(Oz.W8, pz.length >> 4);
              for (let Xz = 0; Xz < Kz; Xz++) {
                if (bz && !bz(Oz, Xz)) continue;
                nz.d.FromArrayToRef(pz, Xz << 4, zz), zz.multiplyToRef(Rz, Zz);
                const Kz = Fz && Mz ? sz(uz, Oz, Zz, Mz, Hz) : null;
                if (Fz && Mz && !Kz) continue;
                const fz = Fz && Kz ? wz(tz, Oz, Zz, Kz, Ez, iz, lz, !0) : dz(tz, uz, Oz, Zz, Ez, iz, lz, !0);
                if (fz && (tz = fz, tz.thinInstanceIndex = Xz, Ez)) return tz
              }
            }
          }
        } else {
          const zz = dz(tz, uz, Oz, Rz, Ez, iz, lz);
          if (zz && (tz = zz, Ez)) return tz
        }
      }
      return tz || new Mz.c
    }

    function oz(zz, uz, bz, Ez) {
      if (!Mz.c) return null;
      const iz = [],
        lz = !!(zz.activeCameras && zz.activeCameras.length > 1 && zz.cameraToUseForPointers !== zz.activeCamera),
        tz = zz.cameraToUseForPointers || zz.activeCamera,
        Hz = Oz.internalPickerForMesh || Kz,
        pz = Hz === Kz;
      for (let Mz = 0; Mz < zz.meshes.length; Mz++) {
        const Oz = zz.meshes[Mz];
        if (bz) {
          if (!bz(Oz, -1)) continue
        } else if (!Oz.isEnabled() || !Oz.isVisible || !Oz.pK) continue;
        const dz = lz && Oz.isWorldMatrixCameraDependent(),
          Fz = Oz.computeWorldMatrix(dz, tz);
        if (Oz.hasThinInstances && Oz.yzz) {
          if (Hz(null, uz, Oz, Fz, !0, !0, Ez)) {
            const {
              rawBoundingInfo: zz,
              intersectionThreshold: lz
            } = fz(Oz), Mz = Oz._thinInstanceDataStorage.matrixData;
            if (Mz) {
              const tz = nz.l.Matrix[0],
                dz = nz.l.Matrix[1],
                Zz = Math.min(Oz.W8, Mz.length >> 4);
              for (let Rz = 0; Rz < Zz; Rz++) {
                if (bz && !bz(Oz, Rz)) continue;
                nz.d.FromArrayToRef(Mz, Rz << 4, tz), tz.multiplyToRef(Fz, dz);
                const Zz = pz && zz ? sz(uz, Oz, dz, zz, lz) : null;
                if (pz && zz && !Zz) continue;
                const Kz = pz && Zz ? wz(null, Oz, dz, Zz, !1, !1, Ez, !0) : Hz(null, uz, Oz, dz, !1, !1, Ez, !0);
                Kz && (Kz.thinInstanceIndex = Rz, iz.push(Kz))
              }
            }
          }
        } else {
          const zz = Hz(null, uz, Oz, Fz, !1, !1, Ez);
          zz && iz.push(zz)
        }
      }
      return iz
    }

    function Nz(zz, uz, bz, Ez, iz, lz) {
      if (!Mz.c) return null;
      const tz = rz(zz, (Ez => (zz._tempPickingRay || (zz._tempPickingRay = pz.Zero()), Fz(zz, uz, bz, Ez, zz._tempPickingRay, lz || null), zz._tempPickingRay)), Ez, iz, !0);
      return tz && (tz.ray = dz(zz, uz, bz, nz.d.Identity(), lz || null)), tz
    }

    function vz(zz, uz, bz, Ez, iz, lz, Mz) {
      const tz = rz(zz, ((Ez, nz) => (zz._tempPickingRay || (zz._tempPickingRay = pz.Zero()), Fz(zz, uz, bz, Ez, zz._tempPickingRay, lz || null, !1, nz), zz._tempPickingRay)), Ez, iz, !1, Mz);
      return tz && (tz.ray = dz(zz, uz, bz, nz.d.Identity(), lz || null)), tz
    }

    function xz(zz, uz, bz, Ez, iz) {
      const lz = rz(zz, (bz => (zz._pickWithRayInverseMatrix || (zz._pickWithRayInverseMatrix = nz.d.Identity()), bz.invertToRef(zz._pickWithRayInverseMatrix), zz._cachedRayForTransform || (zz._cachedRayForTransform = pz.Zero()), pz.TransformToRef(uz, zz._pickWithRayInverseMatrix, zz._cachedRayForTransform), zz._cachedRayForTransform)), bz, Ez, !1, iz);
      return lz && (lz.ray = uz), lz
    }

    function Jz(zz, uz, bz, Ez, nz, iz) {
      return oz(zz, (Ez => dz(zz, uz, bz, Ez, nz || null)), Ez, iz)
    }

    function Az(zz, uz, bz, Ez) {
      return oz(zz, (bz => (zz._pickWithRayInverseMatrix || (zz._pickWithRayInverseMatrix = nz.d.Identity()), bz.invertToRef(zz._pickWithRayInverseMatrix), zz._cachedRayForTransform || (zz._cachedRayForTransform = pz.Zero()), pz.TransformToRef(uz, zz._pickWithRayInverseMatrix, zz._cachedRayForTransform), zz._cachedRayForTransform)), bz, Ez)
    }

    function Tz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Ez = arguments.length > 3 ? arguments[3] : void 0,
        iz = arguments.length > 4 ? arguments[4] : void 0;
      Ez || (Ez = zz.getWorldMatrix()), uz.length = bz, iz ? uz.origin.euz(iz) : uz.origin.euz(zz.position);
      const lz = nz.l.ER[2];
      lz.set(0, 0, zz._scene.useRightHandedSystem ? -1 : 1);
      const Mz = nz.l.ER[3];
      return nz.n.TransformNormalToRef(lz, Ez, Mz), nz.n.NormalizeToRef(Mz, uz.direction), uz
    }

    function Lz(zz, uz) {
      uz && (uz.prototype.getForwardRay = function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        return Tz(this, new pz(nz.n.Zero(), nz.n.Zero(), zz), zz, uz, bz)
      }, uz.prototype.getForwardRayToRef = function(zz) {
        return Tz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), zz && (Hz.e._IsPickingAvailable = !0, zz.prototype.createPickingRay = function(zz, uz, bz, Ez) {
        return dz(this, zz, uz, bz, Ez, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    pz._TmpVector3 = (0, iz.d)(6, nz.n.Zero), pz._RayDistant = pz.Zero(), pz._Smallnum = 1e-8, pz._Rayl = 1e9
  },
  40770: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz.x
    });
    var Ez = bz(39253),
      nz = bz(39376),
      iz = bz(40776);
    let lz = !1;
    lz || (lz = !0, (0, iz.c)(Ez.e, nz.d), Ez.e.prototype.createPickingRayToRef = function(zz, uz, bz, Ez, nz) {
      let lz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Mz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, iz.j)(this, zz, uz, bz, Ez, nz, lz, Mz)
    }, Ez.e.prototype.createPickingRayInCameraSpace = function(zz, uz, bz) {
      return (0, iz.h)(this, zz, uz, bz)
    }, Ez.e.prototype.createPickingRayInCameraSpaceToRef = function(zz, uz, bz, Ez) {
      return (0, iz.f)(this, zz, uz, bz, Ez)
    }, Ez.e.prototype.pickWithBoundingInfo = function(zz, uz, bz, Ez, nz) {
      return (0, iz.p)(this, zz, uz, bz, Ez, nz)
    }, Ez.e.prototype.NF = function(zz, uz, bz, Ez, nz, lz) {
      let Mz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, iz.w)(this, zz, uz, bz, Ez, nz, lz, Mz)
    }, Ez.e.prototype.pickWithRay = function(zz, uz, bz, Ez) {
      return (0, iz.s)(this, zz, uz, bz, Ez)
    }, Ez.e.prototype.multiPick = function(zz, uz, bz, Ez, nz) {
      return (0, iz.n)(this, zz, uz, bz, Ez, nz)
    }, Ez.e.prototype.multiPickWithRay = function(zz, uz, bz) {
      return (0, iz.l)(this, zz, uz, bz)
    })
  },
  40782: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Oz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36519),
      lz = bz(39421),
      Mz = bz(40786),
      tz = bz(39384),
      Hz = bz(36564);
    let Oz = (() => {
        var zz;
        let uz, bz, tz, Hz, Oz, pz, dz, Fz, Zz = Mz.e,
          Rz = [],
          Kz = [],
          wz = [],
          Xz = [],
          fz = [],
          sz = [],
          rz = [],
          oz = [],
          Nz = [],
          vz = [],
          xz = [],
          Jz = [],
          Az = [];
        return zz = class extends Zz {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(zz) {
            this._shadowFrustumSize = zz, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(zz) {
            this._shadowOrthoScale = zz, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(zz) {
            this._orthoLeft = zz
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(zz) {
            this._orthoRight = zz
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(zz) {
            this._orthoTop = zz
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(zz) {
            this._orthoBottom = zz
          }
          constructor(zz, uz, bz, nz) {
            super(zz, bz, nz), this._shadowFrustumSize = ((0, Ez.j)(this, Rz), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Ez.j)(this, Kz, !0), this.autoCalcShadowZBounds = ((0, Ez.j)(this, wz), (0, Ez.j)(this, Xz, !1)), this._orthoLeft = ((0, Ez.j)(this, fz), (0, Ez.j)(this, sz, Number.MAX_VALUE)), this._orthoRight = ((0, Ez.j)(this, rz), (0, Ez.j)(this, oz, Number.MIN_VALUE)), this._orthoTop = ((0, Ez.j)(this, Nz), (0, Ez.j)(this, vz, Number.MIN_VALUE)), this._orthoBottom = ((0, Ez.j)(this, xz), (0, Ez.j)(this, Jz, Number.MAX_VALUE)), (0, Ez.j)(this, Az), this.position = uz.scale(-1), this.direction = uz
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return lz.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(zz, uz, bz) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(zz) : this._setDefaultAutoExtendShadowProjectionMatrix(zz, uz, bz)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(zz) {
            const uz = this.XT().activeCamera;
            iz.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : uz ? uz.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : uz ? uz.maxZ : 1e4, zz, this.XT().uR().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(zz, uz, bz) {
            const Ez = this.XT().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const zz = iz.n.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Ez = Number.MAX_VALUE,
                nz = -Number.MAX_VALUE;
              for (let lz = 0; lz < bz.length; lz++) {
                const Mz = bz[lz];
                if (!Mz) continue;
                const tz = Mz.lG().boundingBox;
                for (let bz = 0; bz < tz.vectorsWorld.length; bz++) iz.n.TransformCoordinatesToRef(tz.vectorsWorld[bz], uz, zz), zz.x < this._orthoLeft && (this._orthoLeft = zz.x), zz.y < this._orthoBottom && (this._orthoBottom = zz.y), zz.x > this._orthoRight && (this._orthoRight = zz.x), zz.y > this._orthoTop && (this._orthoTop = zz.y), this.autoCalcShadowZBounds && (zz.z < Ez && (Ez = zz.z), zz.z > nz && (nz = zz.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Ez, this._shadowMaxZ = nz)
            }
            const nz = this._orthoRight - this._orthoLeft,
              lz = this._orthoTop - this._orthoBottom,
              Mz = void 0 !== this.shadowMinZ ? this.shadowMinZ : Ez?.minZ || 0,
              tz = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Ez?.maxZ || 1e4,
              Hz = this.XT().uR().fbz;
            iz.d.OrthoOffCenterLHToRef(this._orthoLeft - nz * this.shadowOrthoScale, this._orthoRight + nz * this.shadowOrthoScale, this._orthoBottom - lz * this.shadowOrthoScale, this._orthoTop + lz * this.shadowOrthoScale, Hz ? tz : Mz, Hz ? Mz : tz, zz, this.XT().uR().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(zz, uz) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, uz), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, uz), this)
          }
          transferToNodeMaterialEffect(zz, uz) {
            return this.computeTransformedInformation() ? (zz.setFloat3(uz, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (zz.setFloat3(uz, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(zz) {
            const uz = this._scene.uR();
            return !uz.fbz && uz.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(zz) {
            const uz = this._scene.uR();
            return uz.fbz && uz.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(zz, uz) {
            zz["DIRLIGHT" + uz] = !0
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.G)()], bz = [(0, nz.G)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], Oz = [(0, nz.G)("orthoLeft")], pz = [(0, nz.G)("orthoRight")], dz = [(0, nz.G)("orthoTop")], Fz = [(0, nz.G)("orthoBottom")], (0, Ez.h)(zz, null, uz, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: zz => "shadowFrustumSize" in zz,
              get: zz => zz.shadowFrustumSize
            },
            metadata: iz
          }, null, Rz), (0, Ez.h)(zz, null, bz, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "shadowOrthoScale" in zz,
              get: zz => zz.shadowOrthoScale
            },
            metadata: iz
          }, null, Rz), (0, Ez.h)(null, null, tz, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: zz => "autoUpdateExtends" in zz,
              get: zz => zz.autoUpdateExtends,
              set: (zz, uz) => {
                zz.autoUpdateExtends = uz
              }
            },
            metadata: iz
          }, Kz, wz), (0, Ez.h)(null, null, Hz, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: zz => "autoCalcShadowZBounds" in zz,
              get: zz => zz.autoCalcShadowZBounds,
              set: (zz, uz) => {
                zz.autoCalcShadowZBounds = uz
              }
            },
            metadata: iz
          }, Xz, fz), (0, Ez.h)(null, null, Oz, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: zz => "_orthoLeft" in zz,
              get: zz => zz._orthoLeft,
              set: (zz, uz) => {
                zz._orthoLeft = uz
              }
            },
            metadata: iz
          }, sz, rz), (0, Ez.h)(null, null, pz, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: zz => "_orthoRight" in zz,
              get: zz => zz._orthoRight,
              set: (zz, uz) => {
                zz._orthoRight = uz
              }
            },
            metadata: iz
          }, oz, Nz), (0, Ez.h)(null, null, dz, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: zz => "_orthoTop" in zz,
              get: zz => zz._orthoTop,
              set: (zz, uz) => {
                zz._orthoTop = uz
              }
            },
            metadata: iz
          }, vz, xz), (0, Ez.h)(null, null, Fz, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: zz => "_orthoBottom" in zz,
              get: zz => zz._orthoBottom,
              set: (zz, uz) => {
                zz._orthoBottom = uz
              }
            },
            metadata: iz
          }, Jz, Az), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz
      })(),
      pz = !1;
    pz || (pz = !0, tz.c.AddNodeConstructor("Light_Type_1", ((zz, uz) => () => new Oz(zz, iz.n.Zero(), uz))), (0, Hz.c)("BABYLON.DirectionalLight", Oz))
  },
  40798: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Wu
    });
    var Ez = bz(38089),
      nz = bz(36547),
      iz = bz(36519),
      lz = bz(39299),
      Mz = bz(40803),
      tz = bz(36543),
      Hz = bz(39444),
      Oz = bz(36715),
      pz = bz(38096),
      dz = bz(38054),
      Fz = bz(36553);
    class Zz {
      constructor() {
        this.direction1 = new iz.n(0, 1, 0), this.direction2 = new iz.n(0, 1, 0)
      }
      startDirectionFunction(zz, uz, bz, Ez) {
        const nz = (0, Fz.RandomRange)(this.direction1.x, this.direction2.x),
          lz = (0, Fz.RandomRange)(this.direction1.y, this.direction2.y),
          Mz = (0, Fz.RandomRange)(this.direction1.z, this.direction2.z);
        Ez ? uz.P_(nz, lz, Mz) : iz.n.TransformNormalFromFloatsToRef(nz, lz, Mz, zz, uz)
      }
      startPositionFunction(zz, uz, bz, Ez) {
        Ez ? uz.P_(0, 0, 0) : iz.n.TransformCoordinatesFromFloatsToRef(0, 0, 0, zz, uz)
      }
      clone() {
        const zz = new Zz;
        return dz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.direction1 = this.direction1.obz(), zz.direction2 = this.direction2.obz(), zz
      }
      parse(zz) {
        iz.n.FromArrayToRef(zz.direction1, 0, this.direction1), iz.n.FromArrayToRef(zz.direction2, 0, this.direction2)
      }
    }
    class Rz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = zz, this.radiusRange = uz, this.directionRandomizer = bz
      }
      startDirectionFunction(zz, uz, bz, Ez) {
        const nz = bz.position.subtract(zz.getTranslation()).normalize(),
          lz = (0, Fz.RandomRange)(0, this.directionRandomizer),
          Mz = (0, Fz.RandomRange)(0, this.directionRandomizer),
          tz = (0, Fz.RandomRange)(0, this.directionRandomizer);
        nz.x += lz, nz.y += Mz, nz.z += tz, nz.normalize(), Ez ? uz.euz(nz) : iz.n.TransformNormalFromFloatsToRef(nz.x, nz.y, nz.z, zz, uz)
      }
      startPositionFunction(zz, uz, bz, Ez) {
        const nz = this.radius - (0, Fz.RandomRange)(0, this.radius * this.radiusRange),
          lz = (0, Fz.RandomRange)(0, 1),
          Mz = (0, Fz.RandomRange)(0, 2 * Math.PI),
          tz = Math.acos(2 * lz - 1),
          Hz = nz * Math.cos(Mz) * Math.sin(tz),
          Oz = nz * Math.cos(tz),
          pz = nz * Math.sin(Mz) * Math.sin(tz);
        Ez ? uz.P_(Hz, Math.abs(Oz), pz) : iz.n.TransformCoordinatesFromFloatsToRef(Hz, Math.abs(Oz), pz, zz, uz)
      }
      clone() {
        const zz = new Rz(this.radius, this.directionRandomizer);
        return dz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("radiusRange", this.radiusRange), zz.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("radiusRange", 1), zz.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.radius = this.radius, zz.radiusRange = this.radiusRange, zz.directionRandomizer = this.directionRandomizer, zz
      }
      parse(zz) {
        this.radius = zz.radius, this.radiusRange = zz.radiusRange, this.directionRandomizer = zz.directionRandomizer
      }
    }
    class Kz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = zz, this.radiusRange = uz, this.directionRandomizer = bz
      }
      startDirectionFunction(zz, uz, bz, Ez) {
        const nz = bz.position.subtract(zz.getTranslation()).normalize(),
          lz = (0, Fz.RandomRange)(0, this.directionRandomizer),
          Mz = (0, Fz.RandomRange)(0, this.directionRandomizer),
          tz = (0, Fz.RandomRange)(0, this.directionRandomizer);
        nz.x += lz, nz.y += Mz, nz.z += tz, nz.normalize(), Ez ? uz.euz(nz) : iz.n.TransformNormalFromFloatsToRef(nz.x, nz.y, nz.z, zz, uz)
      }
      startPositionFunction(zz, uz, bz, Ez) {
        const nz = this.radius - (0, Fz.RandomRange)(0, this.radius * this.radiusRange),
          lz = (0, Fz.RandomRange)(0, 1),
          Mz = (0, Fz.RandomRange)(0, 2 * Math.PI),
          tz = Math.acos(2 * lz - 1),
          Hz = nz * Math.cos(Mz) * Math.sin(tz),
          Oz = nz * Math.cos(tz),
          pz = nz * Math.sin(Mz) * Math.sin(tz);
        Ez ? uz.P_(Hz, Oz, pz) : iz.n.TransformCoordinatesFromFloatsToRef(Hz, Oz, pz, zz, uz)
      }
      clone() {
        const zz = new Kz(this.radius, this.directionRandomizer);
        return dz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("radiusRange", this.radiusRange), zz.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("radiusRange", 1), zz.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.radius = this.radius, zz.radiusRange = this.radiusRange, zz.directionRandomizer = this.directionRandomizer, zz
      }
      parse(zz) {
        this.radius = zz.radius, this.radiusRange = zz.radiusRange, this.directionRandomizer = zz.directionRandomizer
      }
    }
    class wz extends Kz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new iz.n(0, 1, 0),
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iz.n(0, 1, 0);
        super(zz), this.direction1 = uz, this.direction2 = bz
      }
      startDirectionFunction(zz, uz, bz, Ez) {
        const nz = (0, Fz.RandomRange)(this.direction1.x, this.direction2.x),
          lz = (0, Fz.RandomRange)(this.direction1.y, this.direction2.y),
          Mz = (0, Fz.RandomRange)(this.direction1.z, this.direction2.z);
        Ez ? uz.P_(nz, lz, Mz) : iz.n.TransformNormalFromFloatsToRef(nz, lz, Mz, zz, uz)
      }
      clone() {
        const zz = new wz(this.radius, this.direction1, this.direction2);
        return dz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("radiusRange", this.radiusRange), zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("radiusRange", 1), zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const zz = super.serialize();
        return zz.direction1 = this.direction1.obz(), zz.direction2 = this.direction2.obz(), zz
      }
      parse(zz) {
        super.parse(zz), iz.n.FromArrayToRef(zz.direction1, 0, this.direction1), iz.n.FromArrayToRef(zz.direction2, 0, this.direction2)
      }
    }
    var Xz = bz(38047);
    class fz {
      get radius() {
        return this._radius
      }
      set radius(zz) {
        this._radius = zz, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(zz) {
        this._angle = zz, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = bz, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = uz, this.radius = zz
      }
      startDirectionFunction(zz, uz, bz, Ez) {
        const nz = bz.position.subtract(zz.getTranslation()).normalize(),
          lz = (0, Fz.RandomRange)(0, this.directionRandomizer),
          Mz = (0, Fz.RandomRange)(0, this.directionRandomizer),
          tz = (0, Fz.RandomRange)(0, this.directionRandomizer);
        nz.x += lz, nz.y += Mz, nz.z += tz, nz.normalize(), Ez ? uz.euz(nz) : iz.n.TransformNormalFromFloatsToRef(nz.x, nz.y, nz.z, zz, uz)
      }
      startPositionFunction(zz, uz, bz, Ez) {
        const nz = (0, Fz.RandomRange)(0, 2 * Math.PI);
        let lz;
        this.emitFromSpawnPointOnly ? lz = 1e-4 : (lz = (0, Fz.RandomRange)(0, this.heightRange), lz = 1 - lz * lz);
        let Mz = this._radius - (0, Fz.RandomRange)(0, this._radius * this.radiusRange);
        Mz *= lz;
        const tz = Mz * Math.sin(nz),
          Hz = Mz * Math.cos(nz),
          Oz = lz * this._height;
        if (Ez) return uz.x = tz, uz.y = Oz, void(uz.z = Hz);
        iz.n.TransformCoordinatesFromFloatsToRef(tz, Oz, Hz, zz, uz)
      }
      clone() {
        const zz = new fz(this._radius, this._angle, this.directionRandomizer);
        return dz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat2("radius", this._radius, this.radiusRange), zz.setFloat("coneAngle", this._angle), zz.setFloat2("height", this._height, this.heightRange), zz.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 2), zz.addUniform("coneAngle", 1), zz.addUniform("height", 2), zz.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let zz = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (zz += "\n#define CONEEMITTERSPAWNPOINT"), zz
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.radius = this._radius, zz.angle = this._angle, zz.directionRandomizer = this.directionRandomizer, zz.radiusRange = this.radiusRange, zz.heightRange = this.heightRange, zz.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, zz
      }
      parse(zz) {
        this.radius = zz.radius, this.angle = zz.angle, this.directionRandomizer = zz.directionRandomizer, this.radiusRange = void 0 !== zz.radiusRange ? zz.radiusRange : 1, this.heightRange = void 0 !== zz.heightRange ? zz.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== zz.emitFromSpawnPointOnly && zz.emitFromSpawnPointOnly
      }
    }
    class sz extends fz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iz.n(0, 1, 0),
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iz.n(0, 1, 0);
        super(zz, uz), this.direction1 = bz, this.direction2 = Ez
      }
      startDirectionFunction(zz, uz, bz, Ez) {
        const nz = (0, Fz.RandomRange)(this.direction1.x, this.direction2.x),
          lz = (0, Fz.RandomRange)(this.direction1.y, this.direction2.y),
          Mz = (0, Fz.RandomRange)(this.direction1.z, this.direction2.z);
        Ez ? uz.P_(nz, lz, Mz) : iz.n.TransformNormalFromFloatsToRef(nz, lz, Mz, zz, uz)
      }
      clone() {
        const zz = new sz(this.radius, this.angle, this.direction1, this.direction2);
        return dz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        super.applyToShader(zz), zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        super.buildUniformLayout(zz), zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const zz = super.serialize();
        return zz.direction1 = this.direction1.obz(), zz.direction2 = this.direction2.obz(), zz
      }
      parse(zz) {
        super.parse(zz), iz.n.FromArrayToRef(zz.direction1, 0, this.direction1), iz.n.FromArrayToRef(zz.direction2, 0, this.direction2)
      }
    }
    class rz {
      get mesh() {
        return this._mesh
      }
      set mesh(zz) {
        this._mesh !== zz && (this._mesh = zz, zz ? (this._indices = zz.Nbz(), this._positions = zz.getVerticesData(lz.j.PositionKind), this._normals = zz.getVerticesData(lz.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = iz.n.Zero(), this._mesh = null, this.direction1 = new iz.n(0, 1, 0), this.direction2 = new iz.n(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = zz
      }
      startDirectionFunction(zz, uz, bz, Ez) {
        if (this.useMeshNormalsForDirection && this._normals) return void iz.n.TransformNormalToRef(this._storedNormal, zz, uz);
        const nz = (0, Fz.RandomRange)(this.direction1.x, this.direction2.x),
          lz = (0, Fz.RandomRange)(this.direction1.y, this.direction2.y),
          Mz = (0, Fz.RandomRange)(this.direction1.z, this.direction2.z);
        Ez ? uz.P_(nz, lz, Mz) : iz.n.TransformNormalFromFloatsToRef(nz, lz, Mz, zz, uz)
      }
      startPositionFunction(zz, uz, bz, Ez) {
        if (!this._indices || !this._positions) return;
        const nz = 3 * (Math.random() * (this._indices.length / 3) | 0),
          lz = Math.random(),
          Mz = Math.random() * (1 - lz),
          tz = 1 - lz - Mz,
          Hz = this._indices[nz],
          Oz = this._indices[nz + 1],
          pz = this._indices[nz + 2],
          dz = iz.l.ER[0],
          Fz = iz.l.ER[1],
          Zz = iz.l.ER[2],
          Rz = iz.l.ER[3];
        iz.n.FromArrayToRef(this._positions, 3 * Hz, dz), iz.n.FromArrayToRef(this._positions, 3 * Oz, Fz), iz.n.FromArrayToRef(this._positions, 3 * pz, Zz), Rz.x = lz * dz.x + Mz * Fz.x + tz * Zz.x, Rz.y = lz * dz.y + Mz * Fz.y + tz * Zz.y, Rz.z = lz * dz.z + Mz * Fz.z + tz * Zz.z, Ez ? uz.P_(Rz.x, Rz.y, Rz.z) : iz.n.TransformCoordinatesFromFloatsToRef(Rz.x, Rz.y, Rz.z, zz, uz), this.useMeshNormalsForDirection && this._normals && (iz.n.FromArrayToRef(this._normals, 3 * Hz, dz), iz.n.FromArrayToRef(this._normals, 3 * Oz, Fz), iz.n.FromArrayToRef(this._normals, 3 * pz, Zz), this._storedNormal.x = lz * dz.x + Mz * Fz.x + tz * Zz.x, this._storedNormal.y = lz * dz.y + Mz * Fz.y + tz * Zz.y, this._storedNormal.z = lz * dz.z + Mz * Fz.z + tz * Zz.z)
      }
      clone() {
        const zz = new rz(this.mesh);
        return dz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.direction1 = this.direction1.obz(), zz.direction2 = this.direction2.obz(), zz.meshId = this.mesh?.id, zz.useMeshNormalsForDirection = this.useMeshNormalsForDirection, zz
      }
      parse(zz, uz) {
        iz.n.FromArrayToRef(zz.direction1, 0, this.direction1), iz.n.FromArrayToRef(zz.direction2, 0, this.direction2), zz.meshId && uz && (this.mesh = uz.getLastMeshById(zz.meshId)), this.useMeshNormalsForDirection = zz.useMeshNormalsForDirection
      }
    }
    class oz {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(zz) {
        this._targetStopDuration !== zz && (this._targetStopDuration = zz)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(zz) {
        this._noiseTexture !== zz && (this._noiseTexture = zz, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(zz) {
        this._attractors.push(zz)
      }
      removeAttractor(zz) {
        const uz = this._attractors.indexOf(zz); - 1 !== uz && this._attractors.splice(uz, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(zz) {
        this._animationSheetEnabled !== zz && (this._animationSheetEnabled = zz)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(zz) {
        this._isAnimationSheetEnabled != zz && (this._isAnimationSheetEnabled = zz, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(zz) {
        this._useLogarithmicDepth = zz && this.XT().uR().getCaps().fragmentDepthSupported
      }
      XT() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(zz) {
        switch (zz) {
          case oz.BLENDMODE_MULTIPLYADD:
            return;
          case oz.BLENDMODE_ADD:
            zz = 1;
            break;
          case oz.BLENDMODE_ONEONE:
            zz = 6;
            break;
          case oz.BLENDMODE_STANDARD:
            zz = 2;
            break;
          case oz.BLENDMODE_MULTIPLY:
            zz = 4;
            break;
          case oz.BLENDMODE_SUBTRACT:
            zz = 3
        }
        this._engine.setAlphaMode(zz)
      }
      getDragGradients() {
        return this._dragGradients
      }
      getLimitVelocityGradients() {
        return this._limitVelocityGradients
      }
      getColorGradients() {
        return this._colorGradients
      }
      getSizeGradients() {
        return this._sizeGradients
      }
      getColorRemapGradients() {
        return this._colorRemapGradients
      }
      getAlphaRemapGradients() {
        return this._alphaRemapGradients
      }
      getLifeTimeGradients() {
        return this._lifeTimeGradients
      }
      getAngularSpeedGradients() {
        return this._angularSpeedGradients
      }
      getVelocityGradients() {
        return this._velocityGradients
      }
      getStartSizeGradients() {
        return this._startSizeGradients
      }
      getEmitRateGradients() {
        return this._emitRateGradients
      }
      addEmitRateGradient(zz, uz, bz) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, zz, uz, bz), this
      }
      removeEmitRateGradient(zz) {
        return this._removeFactorGradient(this._emitRateGradients, zz), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : iz.n.Zero()
      }
      set direction1(zz) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = zz)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : iz.n.Zero()
      }
      set direction2(zz) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = zz)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : iz.n.Zero()
      }
      set minEmitBox(zz) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = zz)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : iz.n.Zero()
      }
      set maxEmitBox(zz) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = zz)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(zz) {
        this._billboardMode !== zz && (this._billboardMode = zz, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(zz) {
        this._isBillboardBased !== zz && (this._isBillboardBased = zz, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(zz) {
        this._attachImageProcessingConfiguration(zz)
      }
      _attachImageProcessingConfiguration(zz) {
        zz !== this._imageProcessingConfiguration && (!zz && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = zz)
      }
      _reset() {}
      _addFactorGradient(zz, uz, bz, nz) {
        const iz = new Ez.j(uz, bz, nz);
        zz.push(iz), zz.sort(((zz, uz) => zz.gradient < uz.gradient ? -1 : zz.gradient > uz.gradient ? 1 : 0))
      }
      _removeFactorGradient(zz, uz) {
        if (!zz) return;
        let bz = 0;
        for (const Ez of zz) {
          if (Ez.gradient === uz) {
            zz.splice(bz, 1);
            break
          }
          bz++
        }
      }
      _removeGradientAndTexture(zz, uz, bz) {
        if (!uz) return this;
        let Ez = 0;
        for (const nz of uz) {
          if (nz.gradient === zz) {
            uz.splice(Ez, 1);
            break
          }
          Ez++
        }
        return bz && bz.dispose(), this
      }
      constructor(zz) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = iz.n.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new iz.n(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = oz.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new iz.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new iz.n(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = iz.n.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Oz.g(1, 1, 1, 1), this.color2 = new Oz.g(1, 1, 1, 1), this.colorDead = new Oz.g(0, 0, 0, 1), this.textureMask = new Oz.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Hz.e, this.id = zz, this.name = zz
      }
      createPointEmitter(zz, uz) {
        const bz = function(zz, uz) {
          const bz = new Zz;
          return bz.direction1 = zz, bz.direction2 = uz, bz
        }(zz, uz);
        return this.particleEmitterType = bz, bz
      }
      createHemisphericEmitter() {
        const zz = function() {
          return new Rz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = zz, zz
      }
      createSphereEmitter() {
        const zz = function() {
          return new Kz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = zz, zz
      }
      createDirectedSphereEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new iz.n(0, 1, 0),
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iz.n(0, 1, 0);
          return new wz(zz, uz, bz)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new iz.n(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iz.n(0, 1, 0));
        return this.particleEmitterType = zz, zz
      }
      createCylinderEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Xz.e(zz, uz, bz, Ez)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = zz, zz
      }
      createDirectedCylinderEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iz.n(0, 1, 0),
            nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new iz.n(0, 1, 0);
          return new Xz.c(zz, uz, bz, Ez, nz)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iz.n(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new iz.n(0, 1, 0));
        return this.particleEmitterType = zz, zz
      }
      createConeEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new fz(zz, uz)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = zz, zz
      }
      createDirectedConeEmitter() {
        const zz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iz.n(0, 1, 0),
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iz.n(0, 1, 0);
          return new sz(zz, uz, bz, Ez)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iz.n(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iz.n(0, 1, 0));
        return this.particleEmitterType = zz, zz
      }
      createBoxEmitter(zz, uz, bz, Ez) {
        const nz = new pz.d;
        return this.particleEmitterType = nz, this.direction1 = zz, this.direction2 = uz, this.minEmitBox = bz, this.maxEmitBox = Ez, nz
      }
      createMeshEmitter() {
        const zz = function() {
          return new rz(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = zz, zz
      }
    }
    oz.BLENDMODE_ONEONE = 0, oz.BLENDMODE_STANDARD = 1, oz.BLENDMODE_ADD = 2, oz.BLENDMODE_MULTIPLY = 3, oz.BLENDMODE_MULTIPLYADD = 4, oz.BLENDMODE_SUBTRACT = -1;
    class Nz {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Oz.g(0, 0, 0, 0), this.currentColor2 = new Oz.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = iz.n.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class vz {
      constructor(zz) {
        this.particleSystem = zz, this.position = iz.n.Zero(), this.direction = iz.n.Zero(), this.color = new Oz.g(0, 0, 0, 0), this.colorStep = new Oz.g(0, 0, 0, 0), this.initialColor = new Oz.g(0, 0, 0, 0), this.colorDead = new Oz.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new iz.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Nz, this.id = vz._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let zz = this.age,
          uz = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === uz ? (uz = 1, zz = this._properties.randomCellOffset) : zz += this._properties.randomCellOffset);
        const bz = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Ez;
        Ez = this._properties.initialSpriteCellLoop ? (0, Fz.Clamp)(zz * uz % this.lifeTime / this.lifeTime) : (0, Fz.Clamp)(zz * uz / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Ez * bz | 0
      }
      _inheritParticleInfoToSubEmitter(zz) {
        if (zz.particleSystem.emitter.position) {
          const uz = zz.particleSystem.emitter;
          if (uz.position.euz(this.position), zz.inheritDirection) {
            const zz = iz.l.ER[0];
            this.direction.normalizeToRef(zz), uz.setDirection(zz, 0, Math.PI / 2)
          }
        } else {
          zz.particleSystem.emitter.euz(this.position)
        }
        this.direction.scaleToRef(zz.inheritedVelocityAmount / 2, iz.l.ER[0]), zz.particleSystem._inheritedVelocityOffset.euz(iz.l.ER[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const zz of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(zz)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = vz._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(zz) {
        zz.position.euz(this.position), this._properties.initialDirection ? zz._properties.initialDirection ? zz._properties.initialDirection.euz(this._properties.initialDirection) : zz._properties.initialDirection = this._properties.initialDirection.clone() : zz._properties.initialDirection = null, zz.direction.euz(this.direction), this._properties.localPosition && (zz._properties.localPosition ? zz._properties.localPosition.euz(this._properties.localPosition) : zz._properties.localPosition = this._properties.localPosition.clone()), zz.color.euz(this.color), zz.colorStep.euz(this.colorStep), zz.initialColor.euz(this.initialColor), zz.colorDead.euz(this.colorDead), zz.lifeTime = this.lifeTime, zz.age = this.age, zz._properties.randomCellOffset = this._properties.randomCellOffset, zz.size = this.size, zz.scale.euz(this.scale), zz.angle = this.angle, zz.angularSpeed = this.angularSpeed, zz.particleSystem = this.particleSystem, zz.cellIndex = this.cellIndex, zz.id = this.id, zz._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (zz._properties.currentColorGradient = this._properties.currentColorGradient, zz._properties.currentColor1.euz(this._properties.currentColor1), zz._properties.currentColor2.euz(this._properties.currentColor2)), this._properties.currentSizeGradient && (zz._properties.currentSizeGradient = this._properties.currentSizeGradient, zz._properties.currentSize1 = this._properties.currentSize1, zz._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (zz._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, zz._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, zz._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (zz._properties.currentVelocityGradient = this._properties.currentVelocityGradient, zz._properties.currentVelocity1 = this._properties.currentVelocity1, zz._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (zz._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, zz._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, zz._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (zz._properties.currentDragGradient = this._properties.currentDragGradient, zz._properties.currentDrag1 = this._properties.currentDrag1, zz._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (zz._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, zz._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, zz._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (zz.remapData && this.remapData ? zz.remapData.euz(this.remapData) : zz.remapData = new iz.r(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (zz._properties.randomNoiseCoordinates1 && zz._properties.randomNoiseCoordinates2 ? (zz._properties.randomNoiseCoordinates1.euz(this._properties.randomNoiseCoordinates1), zz._properties.randomNoiseCoordinates2.euz(this._properties.randomNoiseCoordinates2)) : (zz._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), zz._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), zz.metadata = this.metadata
      }
    }
    vz._Count = 0;
    var xz = bz(40298);
    class Jz {
      get currentFrame() {
        return this._currentFrame
      }
      get _evaluatedFrom() {
        return this._playbackFrom
      }
      get _evaluatedTo() {
        return this._playbackTo
      }
      get _evaluatedProgress() {
        return this._playbackProgress
      }
      get _evaluatedSyncRoot() {
        return this._playbackSyncRoot
      }
      get _evaluatedJump() {
        return this._playbackJumped
      }
      get weight() {
        return this._weight
      }
      get currentValue() {
        return this._currentValue
      }
      get targetPath() {
        return this._targetPath
      }
      get target() {
        return this._currentActiveTarget
      }
      get isAdditive() {
        return this._host && this._host.isAdditive
      }
      constructor(zz, uz, bz, Ez) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = uz, this.pI = zz, this._scene = bz, this._host = Ez, this._activeTargets = [], uz._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            gi: this._getCorrectLoopMode()
          }, this._animation.dataType === xz.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = iz.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const zz = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, zz)
        }
        if (this.pI instanceof Array) {
          let zz = 0;
          for (const uz of this.pI) this._preparePath(uz, zz), this._getOriginalValues(zz), zz++;
          this._targetIsArray = !0
        } else this._preparePath(this.pI), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const nz = uz.getEvents();
        if (nz && nz.length > 0)
          for (const iz of nz) this._events.push(iz._clone());
        this._enableBlending = zz && zz.animationPropertiesOverride ? zz.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = this._animation.targetPropertyPath;
        if (bz.length > 1) {
          let Ez = zz;
          for (let zz = 0; zz < bz.length - 1; zz++) {
            const uz = bz[zz];
            if (Ez = Ez[uz], void 0 === Ez) throw new Error(`Invalid property (${uz}) in property path (${bz.join(".")})`)
          }
          this._targetPath = bz[bz.length - 1], this._activeTargets[uz] = Ez
        } else this._targetPath = bz[0], this._activeTargets[uz] = zz;
        if (void 0 === this._activeTargets[uz][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${bz.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.pI instanceof Array) {
            let zz = 0;
            for (const uz of this.pI) void 0 !== this._originalValue[zz] && this._setValue(uz, this._activeTargets[zz], this._originalValue[zz], -1, zz), zz++
          } else void 0 !== this._originalValue[0] && this._setValue(this.pI, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let zz = 0; zz < this._events.length; zz++) this._events[zz].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const zz = this._animation.runtimeAnimations.indexOf(this);
        zz > -1 && this._animation.runtimeAnimations.splice(zz, 1)
      }
      setValue(zz, uz) {
        if (this._targetIsArray)
          for (let bz = 0; bz < this.pI.length; bz++) {
            const Ez = this.pI[bz];
            this._setValue(Ez, this._activeTargets[bz], zz, uz, bz)
          } else this._setValue(this.pI, this._directTarget, zz, uz, 0)
      }
      _getOriginalValues() {
        let zz, uz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const bz = this._activeTargets[uz];
        if (xz.c.InheritOriginalValueFromActiveAnimations) {
          const zz = this._scene._activeAnimatables;
          for (let Ez = 0; Ez < zz.length; Ez++) {
            const nz = zz[Ez]._runtimeAnimations;
            for (let zz = 0; zz < nz.length; zz++) {
              const Ez = nz[zz];
              if (Ez !== this && Ez._targetPath === this._targetPath)
                for (let zz = 0; zz < Ez._activeTargets.length; zz++)
                  if (Ez._activeTargets[zz] === bz && void 0 !== Ez._originalValue[zz]) return void(Ez._originalValue[zz] && Ez._originalValue[zz].clone ? this._originalValue[uz] = Ez._originalValue[zz].clone() : this._originalValue[uz] = Ez._originalValue[zz])
            }
          }
        }
        zz = bz.getLocalMatrix && "_matrix" === this._targetPath ? bz.getLocalMatrix() : bz[this._targetPath], zz && zz.clone ? this._originalValue[uz] = zz.clone() : this._originalValue[uz] = zz
      }
      _registerTargetForLateAnimationBinding(zz, uz) {
        const bz = zz.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(bz), bz._lateAnimationHolders || (bz._lateAnimationHolders = {}), bz._lateAnimationHolders[zz.targetPath] || (bz._lateAnimationHolders[zz.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: uz
        }), zz.isAdditive ? (bz._lateAnimationHolders[zz.targetPath].additiveAnimations.push(zz), bz._lateAnimationHolders[zz.targetPath].totalAdditiveWeight += zz.weight) : (bz._lateAnimationHolders[zz.targetPath].animations.push(zz), bz._lateAnimationHolders[zz.targetPath].totalWeight += zz.weight)
      }
      _setValue(zz, uz, bz, Ez, nz) {
        const lz = this._scene._animationWrites,
          Mz = this._scene._animationWriteCount++;
        let tz = lz[Mz];
        if (tz || (tz = lz[Mz] = {
            runtimeAnimation: this,
            target: zz,
            weight: Ez,
            additive: !1,
            blendingFactor: 1,
            AO: !1
          }), tz.runtimeAnimation = this, tz.target = zz, tz.weight = Ez, tz.additive = this.isAdditive, tz.AO = !1, this._currentActiveTarget = uz, this._weight = Ez, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const zz = uz[this._targetPath];
            zz.clone ? this._originalBlendValue = zz.clone() : this._originalBlendValue = zz
          }
          this._originalBlendValue.m ? xz.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? iz.d.DecomposeLerpToRef(this._originalBlendValue, bz, this._blendingFactor, this._currentValue) : this._currentValue = iz.d.DecomposeLerp(this._originalBlendValue, bz, this._blendingFactor) : this._currentValue ? iz.d.LerpToRef(this._originalBlendValue, bz, this._blendingFactor, this._currentValue) : this._currentValue = iz.d.Lerp(this._originalBlendValue, bz, this._blendingFactor) : this._currentValue = xz.c._UniversalLerp(this._originalBlendValue, bz, this._blendingFactor);
          const Ez = zz && zz.animationPropertiesOverride ? zz.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          tz.blendingFactor = this._blendingFactor, this._blendingFactor += Ez
        } else tz.blendingFactor = 1, this._currentValue ? this._currentValue.euz ? this._currentValue.euz(bz) : this._currentValue = bz : this._currentValue = bz?.clone ? bz.clone() : bz; - 1 !== Ez ? this._registerTargetForLateAnimationBinding(this, this._originalValue[nz]) : this._animationState.gi === xz.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[nz], uz[this._targetPath]) : uz[this._targetPath] = this._originalValue[nz] + this._currentValue : uz[this._targetPath] = this._currentValue, zz.zuz && zz.zuz(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.pI && this.pI.animationPropertiesOverride) {
          return "MorphTarget" === this.pI.getClassName?.() && null == this.pI._animationPropertiesOverride ? this._animation.gi : this.pI.animationPropertiesOverride.gi
        }
        return this._animation.gi
      }
      goToFrame(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const bz = this._animation.getKeys();
        zz < bz[0].frame ? zz = bz[0].frame : zz > bz[bz.length - 1].frame && (zz = bz[bz.length - 1].frame);
        const Ez = this._events;
        if (Ez.length)
          for (let iz = 0; iz < Ez.length; iz++) Ez[iz].onlyOnce || (Ez[iz].isDone = Ez[iz].frame < zz);
        this._currentFrame = zz;
        const nz = this._animation._interpolate(zz, this._animationState);
        this.setValue(nz, uz)
      }
      _prepareForSpeedRatioChange(zz) {
        const uz = this._previousElapsedTime * (this._animation.framePerSecond * zz) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - uz
      }
      animate(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const lz = this._animation,
          Mz = lz.targetPropertyPath;
        if (!Mz || Mz.length < 1) return this._stopped = !0, !1;
        let tz, Hz = !0;
        const Oz = this._events;
        let pz;
        if (this._coreRuntimeAnimation) pz = bz - uz, tz = this._coreRuntimeAnimation.currentFrame, this._currentFrame = tz, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let iz;
          (uz < this._minFrame || uz > this._maxFrame) && (uz = this._minFrame), (bz < this._minFrame || bz > this._maxFrame) && (bz = this._maxFrame), pz = bz - uz;
          let Mz = zz * (lz.framePerSecond * nz) / 1e3 + this._absoluteFrameOffset,
            dz = 0,
            Fz = !1;
          const Zz = Ez && this._animationState.gi === xz.c.ANIMATIONLOOPMODE_YOYO;
          if (Zz) {
            const zz = (Mz - uz) / pz,
              bz = Math.sin(zz * Math.PI);
            Mz = Math.abs(bz) * pz + uz;
            const Ez = bz >= 0 ? 1 : -1;
            this._yoyoDirection !== Ez && (Fz = !0), this._yoyoDirection = Ez
          }
          if (this._previousElapsedTime = zz, this._previousAbsoluteFrame = Mz, !Ez && bz >= uz && (Mz >= pz && nz > 0 || Mz <= 0 && nz < 0)) Hz = !1, dz = lz.evaluate(bz);
          else if (!Ez && uz >= bz && (Mz <= pz && nz < 0 || Mz >= 0 && nz > 0)) Hz = !1, dz = lz.evaluate(uz);
          else if (this._animationState.gi !== xz.c.ANIMATIONLOOPMODE_CYCLE) {
            const zz = bz.toString() + uz.toString();
            if (!this._offsetsCache[zz]) {
              this._animationState.repeatCount = 0, this._animationState.gi = xz.c.ANIMATIONLOOPMODE_CYCLE;
              const Ez = lz._interpolate(uz, this._animationState),
                nz = lz._interpolate(bz, this._animationState);
              switch (this._animationState.gi = this._getCorrectLoopMode(), lz.dataType) {
                case xz.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[zz] = nz - Ez;
                  break;
                case xz.c.ANIMATIONTYPE_QUATERNION:
                case xz.c.ANIMATIONTYPE_VECTOR3:
                case xz.c.ANIMATIONTYPE_VECTOR2:
                case xz.c.ANIMATIONTYPE_SIZE:
                case xz.c.ANIMATIONTYPE_COLOR3:
                case xz.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[zz] = nz.subtract(Ez)
              }
              this._highLimitsCache[zz] = nz
            }
            dz = this._highLimitsCache[zz], iz = this._offsetsCache[zz]
          }
          if (void 0 === iz) switch (lz.dataType) {
            case xz.c.ANIMATIONTYPE_FLOAT:
              iz = 0;
              break;
            case xz.c.ANIMATIONTYPE_QUATERNION:
              iz = xz.m;
              break;
            case xz.c.ANIMATIONTYPE_VECTOR3:
              iz = xz.t;
              break;
            case xz.c.ANIMATIONTYPE_VECTOR2:
              iz = xz.q;
              break;
            case xz.c.ANIMATIONTYPE_SIZE:
              iz = xz.o;
              break;
            case xz.c.ANIMATIONTYPE_COLOR3:
              iz = xz.h;
              break;
            case xz.c.ANIMATIONTYPE_COLOR4:
              iz = xz.k
          }
          const Rz = this._host ? this._host.syncRoot : null;
          let Kz, wz = this._playbackFrames,
            Xz = !1;
          if (Rz) {
            const zz = Rz.toFrame - Rz.fromFrame,
              bz = Rz.masterFrame,
              Ez = (bz - Rz.fromFrame) / zz;
            tz = uz + pz * Ez;
            const nz = Rz.getAnimations()[0];
            if (nz && 0 !== zz) {
              const zz = pz * Ez,
                uz = nz._playbackTo - nz._playbackFrom;
              if (0 !== uz && nz._playbackFrom <= Rz.fromFrame && nz._playbackTo >= Rz.toFrame) {
                wz = pz * Math.round((nz._playbackFrames - (nz._currentFrame - nz._playbackFrom)) / uz) + zz
              } else Xz = (bz - this._playbackSyncMasterFrame) * (nz._playbackFrames - this._playbackSyncMasterPlayed) < 0, wz = zz;
              Xz = Xz || nz._playbackJumped, this._playbackSyncMasterPlayed = nz._playbackFrames, this._playbackSyncMasterFrame = bz
            }
          } else tz = Mz > 0 && uz > bz || Mz < 0 && uz < bz ? Hz && 0 !== pz ? bz + Mz % pz : uz : Hz && 0 !== pz ? uz + Mz % pz : bz;
          if (!Zz && (nz > 0 && this.currentFrame > tz || nz < 0 && this.currentFrame < tz) || Zz && Fz) {
            this._onLoop();
            for (let zz = 0; zz < Oz.length; zz++) Oz[zz].onlyOnce || (Oz[zz].isDone = !1);
            this._animationState.key = nz > 0 ? 0 : lz.getKeys().length - 1
          }
          if (this._currentFrame = tz, this._animationState.repeatCount = 0 === pz ? 0 : Mz / pz | 0, this._animationState.highLimitValue = dz, this._animationState.offsetValue = iz, this._playbackFrom = uz, this._playbackTo = bz, this._playbackJumped = Xz, this._playbackSyncRoot = Rz, Rz) Kz = wz;
          else if (Hz) Kz = Zz ? tz === uz && Mz === bz ? pz : tz - uz : Mz;
          else {
            const zz = 0 !== pz ? Math.floor(this._playbackFrames / pz) : 0;
            Kz = (tz === bz ? zz + 1 : zz) * pz
          }
          this._playbackFrames = Kz, this._playbackProgress = this._animationState.gi === xz.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? pz : Kz
        }
        const dz = lz._interpolate(tz, this._animationState);
        if (this.setValue(dz, iz), Oz.length)
          for (let Fz = 0; Fz < Oz.length; Fz++)
            if (pz >= 0 && tz >= Oz[Fz].frame && Oz[Fz].frame >= uz || pz < 0 && tz <= Oz[Fz].frame && Oz[Fz].frame <= uz) {
              const zz = Oz[Fz];
              zz.isDone || (zz.onlyOnce && (Oz.splice(Fz, 1), Fz--), zz.isDone = !0, zz.action(tz))
            } return Hz || (this._stopped = !0), Hz
      }
    }
    var Az = bz(39085);
    class Tz {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(zz) {
        this._weight = -1 !== zz ? Math.min(Math.max(zz, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(zz) {
        for (let uz = 0; uz < this._runtimeAnimations.length; uz++) {
          this._runtimeAnimations[uz]._prepareForSpeedRatioChange(zz)
        }
        this._speedRatio = zz, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          iz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Mz = arguments.length > 6 ? arguments[6] : void 0,
          tz = arguments.length > 7 ? arguments[7] : void 0,
          Hz = arguments.length > 8 ? arguments[8] : void 0,
          Oz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          pz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = uz, this.fromFrame = bz, this.toFrame = Ez, this.loopAnimation = iz, this.onAnimationEnd = Mz, this.onAnimationLoop = Hz, this.isAdditive = Oz, this.playOrder = pz, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.oN = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new nz.b, this.onAnimationLoopObservable = new nz.b, this._scene = zz, tz && this.appendAnimations(uz, tz), this._speedRatio = lz, zz._activeAnimatables.push(this)
      }
      syncWith(zz) {
        if (this._syncRoot = zz, zz) {
          const zz = this._scene._activeAnimatables.indexOf(this);
          zz > -1 && (this._scene._activeAnimatables.splice(zz, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(zz, uz) {
        for (let bz = 0; bz < uz.length; bz++) {
          const Ez = uz[bz],
            nz = new Jz(zz, Ez, this._scene, this);
          nz._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(nz)
        }
      }
      getAnimationByTargetProperty(zz) {
        const uz = this._runtimeAnimations;
        for (let bz = 0; bz < uz.length; bz++)
          if (uz[bz].animation.targetProperty === zz) return uz[bz].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(zz) {
        const uz = this._runtimeAnimations;
        for (let bz = 0; bz < uz.length; bz++)
          if (uz[bz].animation.targetProperty === zz) return uz[bz];
        return null
      }
      reset() {
        const zz = this._runtimeAnimations;
        for (let uz = 0; uz < zz.length; uz++) zz[uz].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(zz) {
        const uz = this._runtimeAnimations;
        for (let bz = 0; bz < uz.length; bz++) uz[bz].animation.enableBlending = !0, uz[bz].animation.blendingSpeed = zz
      }
      disableBlending() {
        const zz = this._runtimeAnimations;
        for (let uz = 0; uz < zz.length; uz++) zz[uz].animation.enableBlending = !1
      }
      goToFrame(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this._runtimeAnimations;
        if (bz[0]) {
          const uz = bz[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? bz[0].currentFrame;
          const Ez = 0 === this.speedRatio ? 0 : (zz - this._frameToSyncFromJump) / uz * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Ez
        }
        for (let Ez = 0; Ez < bz.length; Ez++) bz[Ez].goToFrame(zz, uz ? this._weight : -1);
        this._goToFrame = zz
      }
      get paused() {
        return this.oN
      }
      pause() {
        this.oN || (this.oN = !0)
      }
      restart() {
        this.oN = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (zz || uz) {
          const nz = this._scene._activeAnimatables.indexOf(this);
          if (nz > -1) {
            const iz = this._runtimeAnimations;
            for (let bz = iz.length - 1; bz >= 0; bz--) {
              const Ez = iz[bz];
              zz && Ez.animation.name != zz || (uz && !uz(Ez.target) || (Ez.dispose(), iz.splice(bz, 1)))
            }
            0 == iz.length && (bz || this._scene._activeAnimatables.splice(nz, 1), Ez || this._raiseOnAnimationEnd())
          }
        } else {
          const zz = this._scene._activeAnimatables.indexOf(this);
          if (zz > -1) {
            bz || this._scene._activeAnimatables.splice(zz, 1);
            const uz = this._runtimeAnimations;
            for (let zz = 0; zz < uz.length; zz++) uz[zz].dispose();
            this._runtimeAnimations.length = 0, Ez || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((zz => {
          this.onAnimationEndObservable.add((() => {
            zz(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(zz) {
        if (this.oN) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = zz), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = zz, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += zz - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Tz.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let uz = !1;
        const bz = this._runtimeAnimations;
        let Ez;
        for (Ez = 0; Ez < bz.length; Ez++) {
          const nz = bz[Ez].animate(zz - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          uz = uz || nz
        }
        if (this.animationStarted = uz, !uz) {
          if (this.disposeOnEnd)
            for (Ez = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Ez, 1), Ez = 0; Ez < bz.length; Ez++) bz[Ez].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return uz
      }
    }

    function Lz(zz) {
      if (0 === zz.totalWeight && 0 === zz.totalAdditiveWeight) return zz.originalValue;
      let uz = 1;
      const bz = iz.l.ER[0],
        Ez = iz.l.ER[1],
        nz = iz.l.Quaternion[0];
      let lz = 0;
      const Mz = zz.animations[0],
        tz = zz.originalValue;
      let Hz, Oz = !1;
      if (zz.totalWeight < 1) Hz = 1 - zz.totalWeight, tz.decompose(Ez, nz, bz);
      else {
        if (lz = 1, uz = zz.totalWeight, Hz = Mz.weight / uz, 1 == Hz) {
          if (!zz.totalAdditiveWeight) return Mz.currentValue;
          Oz = !0
        }
        Mz.currentValue.decompose(Ez, nz, bz)
      }
      if (!Oz) {
        Ez.scaleInPlace(Hz), bz.scaleInPlace(Hz), nz.scaleInPlace(Hz);
        for (let Mz = lz; Mz < zz.animations.length; Mz++) {
          const lz = zz.animations[Mz];
          if (0 === lz.weight) continue;
          Hz = lz.weight / uz;
          const tz = iz.l.ER[2],
            Oz = iz.l.ER[3],
            pz = iz.l.Quaternion[1];
          lz.currentValue.decompose(Oz, pz, tz), Oz.scaleAndAddToRef(Hz, Ez), pz.scaleAndAddToRef(iz.h.Dot(nz, pz) > 0 ? Hz : -Hz, nz), tz.scaleAndAddToRef(Hz, bz)
        }
        nz.normalize()
      }
      for (let dz = 0; dz < zz.additiveAnimations.length; dz++) {
        const uz = zz.additiveAnimations[dz];
        if (0 === uz.weight) continue;
        const lz = iz.l.ER[2],
          Mz = iz.l.ER[3],
          tz = iz.l.Quaternion[1];
        uz.currentValue.decompose(Mz, tz, lz), Mz.multiplyToRef(Ez, Mz), iz.n.LerpToRef(Ez, Mz, uz.weight, Ez), nz.multiplyToRef(tz, tz), iz.h.SlerpToRef(nz, tz, uz.weight, nz), lz.scaleAndAddToRef(uz.weight, bz)
      }
      const pz = Mz ? Mz._animationState.workValue : iz.l.Matrix[0].clone();
      return iz.d.ComposeToRef(Ez, nz, bz, pz), pz
    }

    function Pz(zz, uz) {
      if (0 === zz.totalWeight && 0 === zz.totalAdditiveWeight) return uz;
      const bz = zz.animations[0],
        Ez = zz.originalValue;
      let nz = uz;
      if (0 === zz.totalWeight && zz.totalAdditiveWeight > 0) nz.euz(Ez);
      else if (1 === zz.animations.length) {
        if (iz.h.SlerpToRef(Ez, bz.currentValue, Math.min(1, zz.totalWeight), nz), 0 === zz.totalAdditiveWeight) return nz
      } else if (zz.animations.length > 1) {
        let bz, lz, Mz = 1;
        if (zz.totalWeight < 1) {
          const uz = 1 - zz.totalWeight;
          bz = [], lz = [], bz.push(Ez), lz.push(uz)
        } else {
          if (2 === zz.animations.length && (iz.h.SlerpToRef(zz.animations[0].currentValue, zz.animations[1].currentValue, zz.animations[1].weight / zz.totalWeight, uz), 0 === zz.totalAdditiveWeight)) return uz;
          bz = [], lz = [], Mz = zz.totalWeight
        }
        for (let uz = 0; uz < zz.animations.length; uz++) {
          const Ez = zz.animations[uz];
          bz.push(Ez.currentValue), lz.push(Ez.weight / Mz)
        }
        let tz = 0;
        for (let zz = 0; zz < bz.length;) zz ? (tz += lz[zz], iz.h.SlerpToRef(nz, bz[zz], lz[zz] / tz, nz), zz++) : (iz.h.SlerpToRef(bz[zz], bz[zz + 1], lz[zz + 1] / (lz[zz] + lz[zz + 1]), uz), nz = uz, tz = lz[zz] + lz[zz + 1], zz += 2)
      }
      for (let lz = 0; lz < zz.additiveAnimations.length; lz++) {
        const uz = zz.additiveAnimations[lz];
        0 !== uz.weight && (nz.multiplyToRef(uz.currentValue, iz.l.Quaternion[0]), iz.h.SlerpToRef(nz, iz.l.Quaternion[0], uz.weight, nz))
      }
      return nz
    }

    function Gz(zz, uz) {
      uz && (uz.prototype.copyAnimationRange = function(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new xz.c(this.name, "_matrix", zz.animations[0].framePerSecond, xz.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const iz = zz.animations[0].getRange(uz);
        if (!iz) return !1;
        const lz = iz.from,
          Mz = iz.to,
          tz = zz.animations[0].getKeys(),
          Hz = zz.length,
          Oz = zz.getParent(),
          pz = this.getParent(),
          dz = Ez && Oz && Hz && this.length && Hz !== this.length,
          Fz = dz && pz && Oz ? pz.length / Oz.length : 1,
          Zz = Ez && !pz && nz && (1 !== nz.x || 1 !== nz.y || 1 !== nz.z),
          Rz = this.animations[0].getKeys();
        let Kz, wz, Xz;
        for (let fz = 0, sz = tz.length; fz < sz; fz++) Kz = tz[fz], Kz.frame >= lz && Kz.frame <= Mz && (Ez ? (Xz = Kz.value.clone(), dz ? (wz = Xz.getTranslation(), Xz.setTranslation(wz.scaleInPlace(Fz))) : Zz && nz ? (wz = Xz.getTranslation(), Xz.setTranslation(wz.multiplyInPlace(nz))) : Xz = Kz.value) : Xz = Kz.value, Rz.push({
          frame: Kz.frame + bz,
          value: Xz
        }));
        return this.animations[0].createRange(uz, lz + bz, Mz + bz), !0
      }), zz && (zz.prototype._animate = function(zz) {
        const uz = this._animationWrites,
          bz = this._animationWriteCount;
        let Ez = 0;
        for (let iz = this._animationStepWriteCount; iz < bz; iz++) {
          const zz = uz[iz];
          zz.AO && -1 === zz.weight || (zz.AO = !0, uz[iz] = uz[Ez], uz[Ez] = zz, Ez++)
        }
        for (let iz = Ez; iz < bz; iz++) {
          const zz = uz[iz];
          zz.runtimeAnimation = null, zz.target = null
        }
        if (this._animationWriteCount = Ez, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const nz = Az.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = nz
        }
        this.deltaTime = void 0 !== zz ? zz : this.useConstantAnimationDeltaTime ? 16 : (nz - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = nz;
        const lz = this._activeAnimatables;
        if (0 === lz.length) return;
        this._animationTime += this.deltaTime;
        const Mz = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let iz = 0; iz < lz.length; iz++) {
          const zz = lz[iz];
          !zz._animate(Mz) && zz.disposeOnEnd && iz--
        }! function(zz) {
          if (zz._registeredForLateAnimationBindings.length) {
            for (let uz = 0; uz < zz._registeredForLateAnimationBindings.length; uz++) {
              const bz = zz._registeredForLateAnimationBindings.data[uz];
              for (const zz in bz._lateAnimationHolders) {
                const uz = bz._lateAnimationHolders[zz],
                  Ez = uz.animations[0],
                  nz = uz.originalValue;
                if (void 0 === nz || null === nz) continue;
                const lz = xz.c.AllowMatrixDecomposeForInterpolation && nz.m;
                let Mz = bz[zz];
                if (lz) Mz = Lz(uz);
                else if (void 0 !== nz.w) Mz = Pz(uz, Mz || iz.h.Identity());
                else {
                  let zz = 0,
                    bz = 1;
                  const iz = Ez && Ez._animationState.gi === xz.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (uz.totalWeight < 1) Mz = iz ? nz.clone ? nz.clone() : nz : Ez && nz.scale ? nz.scale(1 - uz.totalWeight) : Ez ? nz * (1 - uz.totalWeight) : nz.clone ? nz.clone() : nz;
                  else if (Ez) {
                    bz = uz.totalWeight;
                    const lz = Ez.weight / bz;
                    Mz = 1 !== lz ? Ez.currentValue.scale ? Ez.currentValue.scale(lz) : Ez.currentValue * lz : (uz.animations.length > 1 || uz.additiveAnimations.length > 0) && Ez.currentValue.clone ? Ez.currentValue.clone() : Ez.currentValue, iz && (Mz.addToRef ? Mz.addToRef(nz, Mz) : Mz += nz), zz = 1
                  }
                  for (let Ez = zz; Ez < uz.animations.length; Ez++) {
                    const zz = uz.animations[Ez],
                      nz = zz.weight / bz;
                    nz && (zz.currentValue.scaleAndAddToRef ? zz.currentValue.scaleAndAddToRef(nz, Mz) : Mz += zz.currentValue * nz)
                  }
                  for (let Ez = 0; Ez < uz.additiveAnimations.length; Ez++) {
                    const zz = uz.additiveAnimations[Ez],
                      bz = zz.weight;
                    bz && (zz.currentValue.scaleAndAddToRef ? zz.currentValue.scaleAndAddToRef(bz, Mz) : Mz += zz.currentValue * bz)
                  }
                }
                bz[zz] = Mz
              }
              bz._lateAnimationHolders = {}
            }
            zz._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, zz.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((zz, uz) => zz.playOrder - uz.playOrder))
      }, zz.prototype.beginWeightedAnimation = function(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          lz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = arguments.length > 7 ? arguments[7] : void 0,
          tz = arguments.length > 8 ? arguments[8] : void 0,
          Hz = arguments.length > 9 ? arguments[9] : void 0,
          Oz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pz = this.beginAnimation(zz, uz, bz, nz, iz, lz, Mz, !1, tz, Hz, Oz);
        return pz.weight = Ez, pz
      }, zz.prototype.beginAnimation = function(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          iz = arguments.length > 5 ? arguments[5] : void 0,
          lz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          tz = arguments.length > 8 ? arguments[8] : void 0,
          Hz = arguments.length > 9 ? arguments[9] : void 0,
          Oz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (nz < 0) {
          const zz = uz;
          uz = bz, bz = zz, nz = -nz
        }
        uz > bz && (nz = -nz), Mz && this.stopAnimation(zz, void 0, tz), lz || (lz = new Tz(this, zz, uz, bz, Ez, nz, iz, void 0, Hz, Oz));
        const pz = !tz || tz(zz);
        if (zz.animations && pz && lz.appendAnimations(zz, zz.animations), zz.getAnimatables) {
          const Oz = zz.getAnimatables();
          for (let zz = 0; zz < Oz.length; zz++) this.beginAnimation(Oz[zz], uz, bz, Ez, nz, iz, lz, Mz, tz, Hz)
        }
        return lz.reset(), lz
      }, zz.prototype.beginHierarchyAnimation = function(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          lz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = arguments.length > 7 ? arguments[7] : void 0,
          tz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Hz = arguments.length > 9 ? arguments[9] : void 0,
          Oz = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const pz = zz.getDescendants(uz),
          dz = [];
        dz.push(this.beginAnimation(zz, bz, Ez, nz, iz, lz, Mz, tz, Hz, void 0, Oz));
        for (const Fz of pz) dz.push(this.beginAnimation(Fz, bz, Ez, nz, iz, lz, Mz, tz, Hz, void 0, Oz));
        return dz
      }, zz.prototype.beginDirectAnimation = function(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (iz < 0) {
          const zz = bz;
          bz = Ez, Ez = zz, iz = -iz
        }
        bz > Ez && (iz = -iz);
        return new Tz(this, zz, bz, Ez, nz, iz, arguments.length > 6 ? arguments[6] : void 0, uz, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, zz.prototype.beginDirectHierarchyAnimation = function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        let Hz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Oz = zz.getDescendants(uz),
          pz = [];
        pz.push(this.beginDirectAnimation(zz, bz, Ez, nz, iz, lz, Mz, tz, Hz));
        for (const dz of Oz) pz.push(this.beginDirectAnimation(dz, bz, Ez, nz, iz, lz, Mz, tz, Hz));
        return pz
      }, zz.prototype.getAnimatableByTarget = function(zz) {
        for (let uz = 0; uz < this._activeAnimatables.length; uz++)
          if (this._activeAnimatables[uz].target === zz) return this._activeAnimatables[uz];
        return null
      }, zz.prototype.getAllAnimatablesByTarget = function(zz) {
        const uz = [];
        for (let bz = 0; bz < this._activeAnimatables.length; bz++) this._activeAnimatables[bz].target === zz && uz.push(this._activeAnimatables[bz]);
        return uz
      }, zz.prototype.stopAnimation = function(zz, uz, bz) {
        const Ez = this.getAllAnimatablesByTarget(zz);
        for (const nz of Ez) nz.stop(uz, bz)
      }, zz.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let zz = 0; zz < this._activeAnimatables.length; zz++) this._activeAnimatables[zz].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const zz of this.animationGroups) zz.stop()
      })
    }
    Tz.ProcessPausedAnimatables = !1;
    var az, Vz = bz(36528),
      mz = bz(39384),
      qz = bz(39061);
    class hz extends mz.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(zz) {
        (zz.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.euz(zz), this._markAsDirtyAndDecompose())
      }
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(zz, uz.XT(), !1), this.name = zz, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = uz, this._localMatrix = Ez?.clone() ?? iz.d.Identity(), this._restMatrix = nz ?? this._localMatrix.clone(), this._bindMatrix = lz ?? this._localMatrix.clone(), this._index = Mz, this._absoluteMatrix = new iz.d, this._absoluteBindMatrix = new iz.d, this._absoluteInverseBindMatrix = new iz.d, this._finalMatrix = new iz.d, uz.bones.push(this), this.setParent(bz, !1), this._updateAbsoluteBindMatrices()
      }
      getClassName() {
        return "Bone"
      }
      getSkeleton() {
        return this._skeleton
      }
      get parent() {
        return this._parentNode
      }
      getParent() {
        return this.parent
      }
      getChildren() {
        return this.children
      }
      getIndex() {
        return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
      }
      set parent(zz) {
        this.setParent(zz)
      }
      setParent(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== zz) {
          if (this.parent) {
            const zz = this.parent.children.indexOf(this); - 1 !== zz && this.parent.children.splice(zz, 1)
          }
          this._parentNode = zz, this.parent && this.parent.children.push(this), uz && this._updateAbsoluteBindMatrices(), this.zuz()
        }
      }
      getLocalMatrix() {
        return this._compose(), this._localMatrix
      }
      getBindMatrix() {
        return this._bindMatrix
      }
      getBaseMatrix() {
        return this.getBindMatrix()
      }
      getRestMatrix() {
        return this._restMatrix
      }
      getRestPose() {
        return this.getRestMatrix()
      }
      setRestMatrix(zz) {
        this._restMatrix.euz(zz)
      }
      setRestPose(zz) {
        this.setRestMatrix(zz)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(zz) {
        this.M_(zz)
      }
      setBindPose(zz) {
        this.setBindMatrix(zz)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const zz = iz.l.ER[0],
            uz = iz.l.Quaternion[0],
            bz = iz.l.ER[1];
          this.getRestMatrix().decompose(zz, uz, bz), this._linkedTransformNode.position.euz(bz), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? iz.h.Identity(), this._linkedTransformNode.rotationQuaternion.euz(uz), this._linkedTransformNode.ti.euz(zz)
        } else this._matrix = this._restMatrix
      }
      getAbsoluteInverseBindMatrix() {
        return this._absoluteInverseBindMatrix
      }
      getInvertedAbsoluteTransform() {
        return this.getAbsoluteInverseBindMatrix()
      }
      getAbsoluteMatrix() {
        return this._skeleton.computeAbsoluteMatrices(), this._absoluteMatrix
      }
      getAbsoluteTransform() {
        return this.getAbsoluteMatrix()
      }
      linkTransformNode(zz) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = zz, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.lzz
      }
      set position(zz) {
        this._decompose(), this.lzz.euz(zz), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(zz) {
        this.setRotation(zz)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(zz) {
        this.setRotationQuaternion(zz)
      }
      get ti() {
        return this.getScale()
      }
      set ti(zz) {
        this.setScale(zz)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = iz.n.Zero(), this._localRotation = iz.h.Zero(), this.lzz = iz.n.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.lzz))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, iz.d.ComposeToRef(this._localScaling, this._localRotation, this.lzz, this._localMatrix)) : this._needToCompose = !1)
      }
      M_(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.euz(zz), uz && this._updateAbsoluteBindMatrices(), bz ? this._matrix = zz : this.zuz()
      }
      _updateAbsoluteBindMatrices(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (zz || (zz = this._bindMatrix), this.parent ? zz.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.euz(zz), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), uz)
          for (let bz = 0; bz < this.children.length; bz++) this.children[bz]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      zuz() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.zuz(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.zuz(), this._needToDecompose = !0
      }
      _updatePosition(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const nz = this.getLocalMatrix();
        if (0 == uz) Ez ? (nz.addAtIndex(12, zz.x), nz.addAtIndex(13, zz.y), nz.addAtIndex(14, zz.z)) : nz.setTranslationFromFloats(zz.x, zz.y, zz.z);
        else {
          const uz = hz._TmpMats[0],
            lz = hz._TmpVecs[0];
          this.parent ? (uz.euz(this.parent.getAbsoluteMatrix()), bz && uz.multiplyToRef(bz.getWorldMatrix(), uz)) : iz.d.IdentityToRef(uz), Ez && uz.setTranslationFromFloats(0, 0, 0), uz.invert(), iz.n.TransformCoordinatesToRef(zz, uz, lz), Ez ? (nz.addAtIndex(12, lz.x), nz.addAtIndex(13, lz.y), nz.addAtIndex(14, lz.z)) : nz.setTranslationFromFloats(lz.x, lz.y, lz.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(zz, uz, bz, !0)
      }
      setPosition(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(zz, uz, bz, !1)
      }
      setAbsolutePosition(zz, uz) {
        this.setPosition(zz, 1, uz)
      }
      scale(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nz = this.getLocalMatrix(),
          lz = hz._TmpMats[0];
        iz.d.ScalingToRef(zz, uz, bz, lz), lz.multiplyToRef(nz, nz), lz.invert();
        for (const iz of this.children) {
          const Ez = iz.getLocalMatrix();
          Ez.multiplyToRef(lz, Ez), Ez.multiplyAtIndex(12, zz), Ez.multiplyAtIndex(13, uz), Ez.multiplyAtIndex(14, bz), iz._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Ez)
          for (const iz of this.children) iz.scale(zz, uz, bz, Ez)
      }
      setScale(zz) {
        this._decompose(), this._localScaling.euz(zz), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(zz) {
        this._decompose(), zz.euz(this._localScaling)
      }
      setYawPitchRoll(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nz = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Ez) {
          const lz = hz._TmpQuat;
          return iz.h.RotationYawPitchRollToRef(zz, uz, bz, lz), void this.setRotationQuaternion(lz, Ez, nz)
        }
        const lz = hz._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(lz, nz)) return;
        const Mz = hz._TmpMats[1];
        iz.d.RotationYawPitchRollToRef(zz, uz, bz, Mz), lz.multiplyToRef(Mz, Mz), this._rotateWithMatrix(Mz, Ez, nz)
      }
      rotate(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        const nz = hz._TmpMats[0];
        nz.setTranslationFromFloats(0, 0, 0), iz.d.RotationAxisToRef(zz, uz, nz), this._rotateWithMatrix(nz, bz, Ez)
      }
      setAxisAngle(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === bz) {
          const nz = hz._TmpQuat;
          return iz.h.RotationAxisToRef(zz, uz, nz), void this.setRotationQuaternion(nz, bz, Ez)
        }
        const nz = hz._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(nz, Ez)) return;
        const lz = hz._TmpMats[1];
        iz.d.RotationAxisToRef(zz, uz, lz), nz.multiplyToRef(lz, lz), this._rotateWithMatrix(lz, bz, Ez)
      }
      setRotation(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(zz.y, zz.x, zz.z, uz, bz)
      }
      setRotationQuaternion(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === uz) return this._decompose(), this._localRotation.euz(zz), void this._markAsDirtyAndCompose();
        const Ez = hz._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ez, bz)) return;
        const nz = hz._TmpMats[1];
        iz.d.FromQuaternionToRef(zz, nz), Ez.multiplyToRef(nz, nz), this._rotateWithMatrix(nz, uz, bz)
      }
      setRotationMatrix(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === uz) {
          const Ez = hz._TmpQuat;
          return iz.h.FromRotationMatrixToRef(zz, Ez), void this.setRotationQuaternion(Ez, uz, bz)
        }
        const Ez = hz._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ez, bz)) return;
        const nz = hz._TmpMats[1];
        nz.euz(zz), Ez.multiplyToRef(zz, nz), this._rotateWithMatrix(nz, uz, bz)
      }
      _rotateWithMatrix(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = this.getLocalMatrix(),
          nz = Ez.m[12],
          iz = Ez.m[13],
          lz = Ez.m[14],
          Mz = this.getParent(),
          tz = hz._TmpMats[3],
          Hz = hz._TmpMats[4];
        Mz && 1 == uz ? (bz ? (tz.euz(bz.getWorldMatrix()), Mz.getAbsoluteMatrix().multiplyToRef(tz, tz)) : tz.euz(Mz.getAbsoluteMatrix()), Hz.euz(tz), Hz.invert(), Ez.multiplyToRef(tz, Ez), Ez.multiplyToRef(zz, Ez), Ez.multiplyToRef(Hz, Ez)) : 1 == uz && bz ? (tz.euz(bz.getWorldMatrix()), Hz.euz(tz), Hz.invert(), Ez.multiplyToRef(tz, Ez), Ez.multiplyToRef(zz, Ez), Ez.multiplyToRef(Hz, Ez)) : Ez.multiplyToRef(zz, Ez), Ez.setTranslationFromFloats(nz, iz, lz), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(zz, uz) {
        const bz = hz._TmpMats[2];
        return zz.euz(this.getAbsoluteMatrix()), uz ? (zz.multiplyToRef(uz.getWorldMatrix(), zz), iz.d.ScalingToRef(uz.ti.x, uz.ti.y, uz.ti.z, bz)) : iz.d.IdentityToRef(bz), zz.invert(), !isNaN(zz.m[0]) && (bz.multiplyAtIndex(0, this._scalingDeterminant), zz.multiplyToRef(bz, zz), !0)
      }
      Gs() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const bz = iz.n.Zero();
        return this.getPositionToRef(zz, uz, bz), bz
      }
      getPositionToRef() {
        let zz = arguments.length > 1 ? arguments[1] : void 0,
          uz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const zz = this.getLocalMatrix();
          uz.x = zz.m[12], uz.y = zz.m[13], uz.z = zz.m[14]
        } else {
          const bz = hz._TmpMats[0].euz(this.getAbsoluteMatrix());
          zz && bz.multiplyToRef(zz.getWorldMatrix(), bz), uz.x = bz.m[12], uz.y = bz.m[13], uz.z = bz.m[14]
        }
      }
      getAbsolutePosition() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const uz = iz.n.Zero();
        return this.getPositionToRef(1, zz, uz), uz
      }
      getAbsolutePositionToRef(zz, uz) {
        this.getPositionToRef(1, zz, uz)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.euz(this._localMatrix);
          const zz = this._skeleton.getPoseMatrix();
          zz && this._absoluteMatrix.multiplyToRef(zz, this._absoluteMatrix)
        }
        const zz = this.children,
          uz = zz.length;
        for (let bz = 0; bz < uz; bz++) zz[bz].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      dW(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const bz = iz.n.Zero();
        return this.getDirectionToRef(zz, uz, bz), bz
      }
      getDirectionToRef(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = hz._TmpMats[0].euz(this.getAbsoluteMatrix());
        uz && Ez.multiplyToRef(uz.getWorldMatrix(), Ez), iz.n.TransformNormalToRef(zz, Ez, bz), bz.normalize()
      }
      getRotation() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const bz = iz.n.Zero();
        return this.getRotationToRef(zz, uz, bz), bz
      }
      getRotationToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = hz._TmpQuat;
        this.getRotationQuaternionToRef(zz, uz, Ez), Ez.toEulerAnglesToRef(bz)
      }
      getRotationQuaternion() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const bz = iz.h.Identity();
        return this.getRotationQuaternionToRef(zz, uz, bz), bz
      }
      getRotationQuaternionToRef() {
        let zz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          uz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), uz.euz(this._localRotation);
        else {
          const bz = hz._TmpMats[0],
            Ez = this.getAbsoluteMatrix();
          zz ? Ez.multiplyToRef(zz.getWorldMatrix(), bz) : bz.euz(Ez), bz.multiplyAtIndex(0, this._scalingDeterminant), bz.multiplyAtIndex(1, this._scalingDeterminant), bz.multiplyAtIndex(2, this._scalingDeterminant), bz.decompose(void 0, uz, void 0)
        }
      }
      getRotationMatrix() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 ? arguments[1] : void 0;
        const bz = iz.d.Identity();
        return this.getRotationMatrixToRef(zz, uz, bz), bz
      }
      getRotationMatrixToRef() {
        let zz = arguments.length > 1 ? arguments[1] : void 0,
          uz = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(uz);
        else {
          const bz = hz._TmpMats[0],
            Ez = this.getAbsoluteMatrix();
          zz ? Ez.multiplyToRef(zz.getWorldMatrix(), bz) : bz.euz(Ez), bz.multiplyAtIndex(0, this._scalingDeterminant), bz.multiplyAtIndex(1, this._scalingDeterminant), bz.multiplyAtIndex(2, this._scalingDeterminant), bz.getRotationMatrixToRef(uz)
        }
      }
      getAbsolutePositionFromLocal(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const bz = iz.n.Zero();
        return this.getAbsolutePositionFromLocalToRef(zz, uz, bz), bz
      }
      getAbsolutePositionFromLocalToRef(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = hz._TmpMats[0].euz(this.getAbsoluteMatrix());
        uz && Ez.multiplyToRef(uz.getWorldMatrix(), Ez), iz.n.TransformCoordinatesToRef(zz, Ez, bz)
      }
      getLocalPositionFromAbsolute(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const bz = iz.n.Zero();
        return this.getLocalPositionFromAbsoluteToRef(zz, uz, bz), bz
      }
      getLocalPositionFromAbsoluteToRef(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = hz._TmpMats[0].euz(this.getAbsoluteMatrix());
        uz && Ez.multiplyToRef(uz.getWorldMatrix(), Ez), Ez.invert(), iz.n.TransformCoordinatesToRef(zz, Ez, bz)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const zz = this._skeleton.bones.indexOf(this);
        if (-1 !== zz && this._skeleton.bones.splice(zz, 1), this._parentNode && this._parentNode.children) {
          const zz = this._parentNode.children,
            uz = zz.indexOf(this); - 1 !== uz && zz.splice(uz, 1)
        }
        super.dispose()
      }
    }
    hz._TmpVecs = (0, Vz.d)(2, iz.n.Zero), hz._TmpQuat = iz.h.Identity(), hz._TmpMats = (0, Vz.d)(5, iz.d.Identity), (az = hz.prototype).copyAnimationRange ?? (az.copyAnimationRange = (0, qz.h)("Bone", "copyAnimationRange"));
    var Uz = bz(39253);
    let cz = !1;
    var gz = bz(39147),
      Sz = bz(39497),
      yz = bz(39511),
      Dz = bz(39505),
      Qz = bz(39283);

    function Wz(zz, uz) {
      const bz = (0, Fz.RandomRange)(0, 1);
      Oz.g.LerpToRef(uz.color1, uz.color2, bz, zz.color)
    }

    function ez(zz, uz) {
      uz.colorDead.subtractToRef(zz.color, uz._colorDiff), uz._colorDiff.scaleToRef(1 / zz.lifeTime, zz.colorStep)
    }

    function jz(zz, uz) {
      zz._properties.currentColorGradient = uz._colorGradients[0], zz._properties.currentColorGradient.getColorToRef(zz.color), zz._properties.currentColor1.euz(zz.color), uz._colorGradients.length > 1 ? uz._colorGradients[1].getColorToRef(zz._properties.currentColor2) : zz._properties.currentColor2.euz(zz.color)
    }

    function Iz(zz, uz) {
      const bz = uz._colorGradients;
      Ez.k.GetCurrentGradient(uz._ratio, bz, ((uz, bz, Ez) => {
        uz !== zz._properties.currentColorGradient && (zz._properties.currentColor1.euz(zz._properties.currentColor2), bz.getColorToRef(zz._properties.currentColor2), zz._properties.currentColorGradient = uz), Oz.g.LerpToRef(zz._properties.currentColor1, zz._properties.currentColor2, Ez, zz.color), zz.color.a < 0 && (zz.color.a = 0)
      }))
    }

    function Bz(zz, uz) {
      zz.colorStep.scaleToRef(uz._scaledUpdateSpeed, uz._scaledColorStep), zz.color.addInPlace(uz._scaledColorStep), zz.color.a < 0 && (zz.color.a = 0)
    }

    function Cz(zz, uz) {
      Ez.k.GetCurrentGradient(uz._ratio, uz._angularSpeedGradients, ((uz, bz, Ez) => {
        uz !== zz._properties.currentAngularSpeedGradient && (zz._properties.currentAngularSpeed1 = zz._properties.currentAngularSpeed2, zz._properties.currentAngularSpeed2 = bz.getFactor(), zz._properties.currentAngularSpeedGradient = uz), zz.angularSpeed = (0, Fz.Lerp)(zz._properties.currentAngularSpeed1, zz._properties.currentAngularSpeed2, Ez)
      }))
    }

    function Yz(zz, uz) {
      zz.angle += zz.angularSpeed * uz._scaledUpdateSpeed
    }

    function kz(zz, uz) {
      uz.particleEmitterType.startDirectionFunction(uz._emitterWorldMatrix, zz.direction, zz, uz.isLocal, uz._emitterInverseWorldMatrix)
    }

    function zu(zz, uz) {
      uz.startDirectionFunction(uz._emitterWorldMatrix, zz.direction, zz, uz.isLocal)
    }

    function uu(zz, uz) {
      zz._properties.currentVelocityGradient = uz._velocityGradients[0], zz._properties.currentVelocity1 = zz._properties.currentVelocityGradient.getFactor(), uz._velocityGradients.length > 1 ? zz._properties.currentVelocity2 = uz._velocityGradients[1].getFactor() : zz._properties.currentVelocity2 = zz._properties.currentVelocity1
    }

    function bu(zz, uz) {
      zz._properties.currentLimitVelocityGradient = uz._limitVelocityGradients[0], zz._properties.currentLimitVelocity1 = zz._properties.currentLimitVelocityGradient.getFactor(), uz._limitVelocityGradients.length > 1 ? zz._properties.currentLimitVelocity2 = uz._limitVelocityGradients[1].getFactor() : zz._properties.currentLimitVelocity2 = zz._properties.currentLimitVelocity1
    }

    function Eu(zz, uz) {
      Ez.k.GetCurrentGradient(uz._ratio, uz._velocityGradients, ((uz, bz, Ez) => {
        uz !== zz._properties.currentVelocityGradient && (zz._properties.currentVelocity1 = zz._properties.currentVelocity2, zz._properties.currentVelocity2 = bz.getFactor(), zz._properties.currentVelocityGradient = uz), zz._properties.directionScale *= (0, Fz.Lerp)(zz._properties.currentVelocity1, zz._properties.currentVelocity2, Ez)
      }))
    }

    function nu(zz, uz) {
      Ez.k.GetCurrentGradient(uz._ratio, uz._limitVelocityGradients, ((bz, Ez, nz) => {
        bz !== zz._properties.currentLimitVelocityGradient && (zz._properties.currentLimitVelocity1 = zz._properties.currentLimitVelocity2, zz._properties.currentLimitVelocity2 = Ez.getFactor(), zz._properties.currentLimitVelocityGradient = bz);
        const iz = (0, Fz.Lerp)(zz._properties.currentLimitVelocity1, zz._properties.currentLimitVelocity2, nz);
        zz.direction.length() > iz && zz.direction.scaleInPlace(uz.limitVelocityDamping)
      }))
    }

    function iu(zz) {
      zz.direction.scaleToRef(zz._properties.directionScale, zz._properties.scaledDirection)
    }

    function lu(zz, uz) {
      uz.particleEmitterType.startPositionFunction(uz._emitterWorldMatrix, zz.position, zz, uz.isLocal)
    }

    function Mu(zz, uz) {
      uz.startPositionFunction(uz._emitterWorldMatrix, zz.position, zz, uz.isLocal)
    }

    function tu(zz, uz) {
      zz._properties.localPosition ? zz._properties.localPosition.euz(zz.position) : zz._properties.localPosition = zz.position.clone(), iz.n.TransformCoordinatesToRef(zz._properties.localPosition, uz._emitterWorldMatrix, zz.position)
    }

    function Hu(zz, uz) {
      uz.isLocal && zz._properties.localPosition ? (zz._properties.localPosition.addInPlace(zz._properties.scaledDirection), iz.n.TransformCoordinatesToRef(zz._properties.localPosition, uz._emitterWorldMatrix, zz.position)) : zz.position.addInPlace(zz._properties.scaledDirection)
    }

    function Ou(zz, uz) {
      zz._properties.currentDragGradient = uz._dragGradients[0], zz._properties.currentDrag1 = zz._properties.currentDragGradient.getFactor(), uz._dragGradients.length > 1 ? zz._properties.currentDrag2 = uz._dragGradients[1].getFactor() : zz._properties.currentDrag2 = zz._properties.currentDrag1
    }

    function pu(zz, uz) {
      Ez.k.GetCurrentGradient(uz._ratio, uz._dragGradients, ((uz, bz, Ez) => {
        uz !== zz._properties.currentDragGradient && (zz._properties.currentDrag1 = zz._properties.currentDrag2, zz._properties.currentDrag2 = bz.getFactor(), zz._properties.currentDragGradient = uz);
        const nz = (0, Fz.Lerp)(zz._properties.currentDrag1, zz._properties.currentDrag2, Ez);
        zz._properties.scaledDirection.scaleInPlace(1 - nz)
      }))
    }

    function du(zz, uz) {
      zz._properties.randomNoiseCoordinates1 && zz._properties.randomNoiseCoordinates2 ? (zz._properties.randomNoiseCoordinates1.P_(Math.random(), Math.random(), Math.random()), zz._properties.randomNoiseCoordinates2.P_(Math.random(), Math.random(), Math.random())) : (zz._properties.randomNoiseCoordinates1 = new iz.n(Math.random(), Math.random(), Math.random()), zz._properties.randomNoiseCoordinates2 = new iz.n(Math.random(), Math.random(), Math.random()))
    }

    function Fu(zz, uz) {
      const bz = uz._noiseTextureData,
        Ez = uz._noiseTextureSize;
      if (bz && Ez && zz._properties.randomNoiseCoordinates1 && zz._properties.randomNoiseCoordinates2) {
        const nz = uz._fetchR(zz._properties.randomNoiseCoordinates1.x, zz._properties.randomNoiseCoordinates1.y, Ez.width, Ez.height, bz),
          lz = uz._fetchR(zz._properties.randomNoiseCoordinates1.z, zz._properties.randomNoiseCoordinates2.x, Ez.width, Ez.height, bz),
          Mz = uz._fetchR(zz._properties.randomNoiseCoordinates2.y, zz._properties.randomNoiseCoordinates2.z, Ez.width, Ez.height, bz),
          tz = iz.l.ER[0],
          Hz = iz.l.ER[1];
        tz.P_((2 * nz - 1) * uz.noiseStrength.x, (2 * lz - 1) * uz.noiseStrength.y, (2 * Mz - 1) * uz.noiseStrength.z), tz.scaleToRef(uz._tempScaledUpdateSpeed, Hz), zz.direction.addInPlace(Hz)
      }
    }

    function Zu(zz, uz) {
      uz.gravity.scaleToRef(uz._tempScaledUpdateSpeed, uz._scaledGravity), zz.direction.addInPlace(uz._scaledGravity)
    }

    function Ru(zz, uz) {
      zz.size = (0, Fz.RandomRange)(uz.minSize, uz.maxSize), zz.scale.P_((0, Fz.RandomRange)(uz.minScaleX, uz.maxScaleX), (0, Fz.RandomRange)(uz.minScaleY, uz.maxScaleY))
    }

    function Ku(zz, uz) {
      zz._properties.currentSizeGradient = uz._sizeGradients[0], zz._properties.currentSize1 = zz._properties.currentSizeGradient.getFactor(), zz.size = zz._properties.currentSize1, uz._sizeGradients.length > 1 ? zz._properties.currentSize2 = uz._sizeGradients[1].getFactor() : zz._properties.currentSize2 = zz._properties.currentSize1, zz.scale.P_((0, Fz.RandomRange)(uz.minScaleX, uz.maxScaleX), (0, Fz.RandomRange)(uz.minScaleY, uz.maxScaleY))
    }

    function wu(zz, uz) {
      const bz = uz._actualFrame / uz.targetStopDuration;
      Ez.k.GetCurrentGradient(bz, uz._startSizeGradients, ((bz, Ez, nz) => {
        bz !== uz._currentStartSizeGradient && (uz._currentStartSize1 = uz._currentStartSize2, uz._currentStartSize2 = Ez.getFactor(), uz._currentStartSizeGradient = bz);
        const iz = (0, Fz.Lerp)(uz._currentStartSize1, uz._currentStartSize2, nz);
        zz.scale.scaleInPlace(iz)
      }))
    }

    function Xu(zz, uz) {
      Ez.k.GetCurrentGradient(uz._ratio, uz._sizeGradients, ((uz, bz, Ez) => {
        uz !== zz._properties.currentSizeGradient && (zz._properties.currentSize1 = zz._properties.currentSize2, zz._properties.currentSize2 = bz.getFactor(), zz._properties.currentSizeGradient = uz), zz.size = (0, Fz.Lerp)(zz._properties.currentSize1, zz._properties.currentSize2, Ez)
      }))
    }

    function fu(zz, uz) {
      zz.remapData = new iz.r(0, 1, 0, 1)
    }

    function su(zz, uz) {
      uz._colorRemapGradients && uz._colorRemapGradients.length > 0 && Ez.k.GetCurrentGradient(uz._ratio, uz._colorRemapGradients, ((uz, bz, Ez) => {
        const nz = (0, Fz.Lerp)(uz.factor1, bz.factor1, Ez),
          iz = (0, Fz.Lerp)(uz.factor2, bz.factor2, Ez);
        zz.remapData.x = nz, zz.remapData.y = iz - nz
      })), uz._alphaRemapGradients && uz._alphaRemapGradients.length > 0 && Ez.k.GetCurrentGradient(uz._ratio, uz._alphaRemapGradients, ((uz, bz, Ez) => {
        const nz = (0, Fz.Lerp)(uz.factor1, bz.factor1, Ez),
          iz = (0, Fz.Lerp)(uz.factor2, bz.factor2, Ez);
        zz.remapData.z = nz, zz.remapData.w = iz - nz
      }))
    }

    function ru(zz, uz) {
      const bz = (0, Fz.Clamp)(uz._actualFrame / uz.targetStopDuration);
      Ez.k.GetCurrentGradient(bz, uz._lifeTimeGradients, ((uz, Ez) => {
        const nz = uz,
          iz = Ez,
          lz = nz.getFactor(),
          Mz = iz.getFactor(),
          tz = (bz - nz.gradient) / (iz.gradient - nz.gradient);
        zz.lifeTime = (0, Fz.Lerp)(lz, Mz, tz)
      })), uz._emitPower = (0, Fz.RandomRange)(uz.minEmitPower, uz.maxEmitPower)
    }

    function ou(zz, uz) {
      zz.lifeTime = (0, Fz.RandomRange)(uz.minLifeTime, uz.maxLifeTime), uz._emitPower = (0, Fz.RandomRange)(uz.minEmitPower, uz.maxEmitPower)
    }

    function Nu(zz, uz) {
      0 === uz._emitPower ? (zz._properties.initialDirection ? zz._properties.initialDirection.euz(zz.direction) : zz._properties.initialDirection = zz.direction.clone(), zz.direction.set(0, 0, 0)) : (zz._properties.initialDirection = null, zz.direction.scaleInPlace(uz._emitPower)), zz.direction.addInPlace(uz._inheritedVelocityOffset)
    }

    function vu(zz, uz) {
      zz.angularSpeed = (0, Fz.RandomRange)(uz.minAngularSpeed, uz.maxAngularSpeed), zz.angle = (0, Fz.RandomRange)(uz.minInitialRotation, uz.maxInitialRotation)
    }

    function xu(zz, uz) {
      zz._properties.currentAngularSpeedGradient = uz._angularSpeedGradients[0], zz.angularSpeed = zz._properties.currentAngularSpeedGradient.getFactor(), zz._properties.currentAngularSpeed1 = zz.angularSpeed, uz._angularSpeedGradients.length > 1 ? zz._properties.currentAngularSpeed2 = uz._angularSpeedGradients[1].getFactor() : zz._properties.currentAngularSpeed2 = zz._properties.currentAngularSpeed1, zz.angle = (0, Fz.RandomRange)(uz.minInitialRotation, uz.maxInitialRotation)
    }

    function Ju(zz, uz) {
      zz._properties.initialStartSpriteCellId = uz.startSpriteCellID, zz._properties.initialEndSpriteCellId = uz.endSpriteCellID, zz._properties.initialSpriteCellLoop = uz.spriteCellLoop
    }

    function Au(zz, uz) {
      zz.previousItem = uz.previousItem, zz.nextItem = uz, uz.previousItem && (uz.previousItem.nextItem = zz), uz.previousItem = zz
    }

    function Tu(zz, uz) {
      zz.previousItem = uz, zz.nextItem = uz.nextItem, uz.nextItem && (uz.nextItem.previousItem = zz), uz.nextItem = zz
    }

    function Lu(zz) {
      zz.previousItem && (zz.previousItem.nextItem = zz.nextItem), zz.nextItem && (zz.nextItem.previousItem = zz.previousItem)
    }
    var Pu = bz(39552);
    class Gu extends oz {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(zz) {
        this._startDirectionFunction !== zz && (this._startDirectionFunction = zz, this._directionCreation.process = zz ? zu : kz)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(zz) {
        this._startPositionFunction !== zz && (this._startPositionFunction = zz, this._positionCreation.process = zz ? Mu : lu)
      }
      set onDispose(zz) {
        this._onDisposeObserver && this.aT.remove(this._onDisposeObserver), this._onDisposeObserver = this.aT.add(zz)
      }
      get Uuz() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(zz) {
        this._useRampGradients !== zz && (this._useRampGradients = zz, this._resetEffect(), zz ? (this._rampCreation = {
          process: fu,
          previousItem: null,
          nextItem: null
        }, Tu(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: su,
          previousItem: null,
          nextItem: null
        }, Tu(this._remapGradientProcessing, this._gravityProcessing))) : (Lu(this._rampCreation), Lu(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(zz) {
        this._isLocal !== zz && (this._isLocal = zz, zz ? (this._isLocalCreation = {
          process: tu,
          previousItem: null,
          nextItem: null
        }, Tu(this._isLocalCreation, this._positionCreation)) : Lu(this._isLocalCreation))
      }
      get particles() {
        return this._particles
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(zz) {
        this._animationSheetEnabled !== zz && (this._animationSheetEnabled = zz, zz ? (this._sheetCreation = {
          process: Ju,
          previousItem: null,
          nextItem: null
        }, Tu(this._sheetCreation, this._colorDeadCreation)) : Lu(this._sheetCreation), this._reset())
      }
      getActiveCount() {
        return this._particles.length
      }
      getClassName() {
        return "ParticleSystem"
      }
      isStopping() {
        return this._stopped && this.isAlive()
      }
      getCustomEffect() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[zz]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[zz] ?? this._customWrappers[0]
      }
      setCustomEffect(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[uz] = new Sz.c(this._engine), this._customWrappers[uz].effect = zz, this._customWrappers[uz].drawContext && (this._customWrappers[uz].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new nz.b), this._onBeforeDrawParticlesObservable
      }
      get vertexShaderName() {
        return "particles"
      }
      get vertexBuffers() {
        return this._vertexBuffers
      }
      get indexBuffer() {
        return this._indexBuffer
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(zz) {
        if (this.noiseTexture !== zz) {
          if (this._noiseTexture = zz, !zz) return Lu(this._noiseCreation), void Lu(this._noiseProcessing);
          this._noiseCreation = {
            process: du,
            previousItem: null,
            nextItem: null
          }, Tu(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: Fu,
            previousItem: null,
            nextItem: null
          }, Tu(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          lz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Mz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Hz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        cz || (cz = !0, Gz(Uz.e, hz)), (0, gz.e)(), super(zz), this._emitterInverseWorldMatrix = iz.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new iz.n, this.aT = new nz.b, this.onStoppedObservable = new nz.b, this.onStartedObservable = new nz.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Oz.g(0, 0, 0, 0), this._colorDiff = new Oz.g(0, 0, 0, 0), this._scaledGravity = iz.n.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = zz => {}, this.recycleParticle = zz => {
          const uz = this._particles.pop();
          uz !== zz && uz.copyTo(zz), uz.metadata = null, this._stockParticles.push(uz)
        }, this._createParticle = () => {
          let zz;
          return 0 !== this._stockParticles.length ? (zz = this._stockParticles.pop(), zz._reset()) : zz = new vz(this), this._prepareParticle(zz), zz
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = uz, this._epsilon = Mz, bz && "Scene" !== bz.getClassName() ? (this._engine = bz, this.defaultProjectionMatrix = iz.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = bz || tz.d.LastCreatedScene, this._engine = this._scene.uR(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.yN.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: ou,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: lu,
          previousItem: null,
          nextItem: null
        }, Tu(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: kz,
          previousItem: null,
          nextItem: null
        }, Tu(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Nu,
          previousItem: null,
          nextItem: null
        }, Tu(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Ru,
          previousItem: null,
          nextItem: null
        }, Tu(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: vu,
          previousItem: null,
          nextItem: null
        }, Tu(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Wz,
          previousItem: null,
          nextItem: null
        }, Tu(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: ez,
          previousItem: null,
          nextItem: null
        }, Tu(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Hz || (this._colorProcessing = {
          process: Bz,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Yz,
          previousItem: null,
          nextItem: null
        }, Tu(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: iu,
          previousItem: null,
          nextItem: null
        }, Tu(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Hu,
          previousItem: null,
          nextItem: null
        }, Tu(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: Zu,
          previousItem: null,
          nextItem: null
        }, Tu(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = lz, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Sz.c(this._engine)
        }, this._customWrappers[0].effect = Ez, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new pz.d, this.updateFunction = zz => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((zz => {
            this._noiseTextureData = zz
          })));
          const uz = zz === this._particles;
          for (let bz = 0; bz < zz.length; bz++) {
            const Ez = zz[bz];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const nz = Ez.age;
            if (Ez.age += this._tempScaledUpdateSpeed, Ez.age > Ez.lifeTime) {
              const zz = Ez.age - nz,
                uz = Ez.lifeTime - nz;
              this._tempScaledUpdateSpeed = uz * this._tempScaledUpdateSpeed / zz, Ez.age = Ez.lifeTime
            }
            this._ratio = Ez.age / Ez.lifeTime, Ez._properties.directionScale = this._tempScaledUpdateSpeed;
            let iz = this._updateQueueStart;
            for (; iz;) iz.process(Ez, this), iz = iz.nextItem;
            if (this._isAnimationSheetEnabled && !Hz && Ez.updateCellIndex(), Ez._inheritParticleInfoToSubEmitters(), Ez.age >= Ez.lifeTime) {
              if (this._emitFromParticle(Ez), Ez._properties.attachedSubEmitters) {
                for (const zz of Ez._properties.attachedSubEmitters) zz.particleSystem.disposeOnStop = !0, zz.particleSystem.stop();
                Ez._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Ez), uz && bz--
            } else;
          }
        }
      }
      serialize(zz) {
        throw new Error("Method not implemented.")
      }
      clone(zz, uz) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = ru : this._lifeTimeCreation.process = ou
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: wu,
          previousItem: null,
          nextItem: null
        }, Tu(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Lu(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(zz) {
        this.targetStopDuration !== zz && (this._targetStopDuration = zz, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(zz, uz, bz) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, zz, uz, bz), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(zz) {
        return this._removeFactorGradient(this._lifeTimeGradients, zz), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(zz, uz, bz) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Ku, this._sizeGradientProcessing = {
          process: Xu,
          previousItem: null,
          nextItem: null
        }, Au(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, zz, uz, bz), this
      }
      removeSizeGradient(zz) {
        return this._removeFactorGradient(this._sizeGradients, zz), 0 === this._sizeGradients?.length && (Lu(this._sizeGradientProcessing), this._sizeCreation.process = Ru), this
      }
      addColorRemapGradient(zz, uz, bz) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, zz, uz, bz), this
      }
      removeColorRemapGradient(zz) {
        return this._removeFactorGradient(this._colorRemapGradients, zz), this
      }
      addAlphaRemapGradient(zz, uz, bz) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, zz, uz, bz), this
      }
      removeAlphaRemapGradient(zz) {
        return this._removeFactorGradient(this._alphaRemapGradients, zz), this
      }
      addAngularSpeedGradient(zz, uz, bz) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = xu, this._angularSpeedGradientProcessing = {
          process: Cz,
          previousItem: null,
          nextItem: null
        }, Au(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, zz, uz, bz), this
      }
      removeAngularSpeedGradient(zz) {
        return this._removeFactorGradient(this._angularSpeedGradients, zz), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = vu, Lu(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(zz, uz, bz) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: uu,
          previousItem: null,
          nextItem: null
        }, Tu(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Eu,
          previousItem: null,
          nextItem: null
        }, Au(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, zz, uz, bz), this
      }
      removeVelocityGradient(zz) {
        return this._removeFactorGradient(this._velocityGradients, zz), 0 === this._velocityGradients?.length && (Lu(this._velocityCreation), Lu(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(zz, uz, bz) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: bu,
          previousItem: null,
          nextItem: null
        }, Tu(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: nu,
          previousItem: null,
          nextItem: null
        }, Tu(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, zz, uz, bz), this
      }
      removeLimitVelocityGradient(zz) {
        return this._removeFactorGradient(this._limitVelocityGradients, zz), 0 === this._limitVelocityGradients?.length && (Lu(this._limitVelocityCreation), Lu(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(zz, uz, bz) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Ou,
          previousItem: null,
          nextItem: null
        }, Au(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: pu,
          previousItem: null,
          nextItem: null
        }, Au(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, zz, uz, bz), this
      }
      removeDragGradient(zz) {
        return this._removeFactorGradient(this._dragGradients, zz), 0 === this._dragGradients?.length && (Lu(this._dragCreation), Lu(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(zz, uz, bz) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, zz, uz, bz), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(zz) {
        return this._removeFactorGradient(this._startSizeGradients, zz), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const zz = new Uint8Array(4 * this._rawTextureWidth),
          uz = Oz.k.Color3[0];
        for (let bz = 0; bz < this._rawTextureWidth; bz++) {
          const nz = bz / this._rawTextureWidth;
          Ez.k.GetCurrentGradient(nz, this._rampGradients, ((Ez, nz, iz) => {
            Oz.c.LerpToRef(Ez.color, nz.color, iz, uz), zz[4 * bz] = 255 * uz.r, zz[4 * bz + 1] = 255 * uz.g, zz[4 * bz + 2] = 255 * uz.b, zz[4 * bz + 3] = 255
          }))
        }
        this._rampGradientsTexture = Mz.b.CreateRGBATexture(zz, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((zz, uz) => zz.gradient < uz.gradient ? -1 : zz.gradient > uz.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(zz, uz) {
        this._rampGradients || (this._rampGradients = []);
        const bz = new Ez.f(zz, uz);
        return this._rampGradients.push(bz), this._syncRampGradientTexture(), this
      }
      removeRampGradient(zz) {
        return this._removeGradientAndTexture(zz, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(zz, uz, bz) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = jz, this._colorProcessing.process = Iz);
        const nz = new Ez.e(zz, uz, bz);
        return this._colorGradients.push(nz), this._colorGradients.sort(((zz, uz) => zz.gradient < uz.gradient ? -1 : zz.gradient > uz.gradient ? 1 : 0)), this
      }
      removeColorGradient(zz) {
        if (!this._colorGradients) return this;
        let uz = 0;
        for (const bz of this._colorGradients) {
          if (bz.gradient === zz) {
            this._colorGradients.splice(uz, 1);
            break
          }
          uz++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Wz, this._colorProcessing.process = Bz), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const zz of this._drawWrappers)
            if (zz)
              for (const uz of zz) uz?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(zz, uz, bz, Ez, nz) {
        return nz[4 * (((zz = .5 * Math.abs(zz) + .5) * bz % bz | 0) + ((uz = .5 * Math.abs(uz) + .5) * Ez % Ez | 0) * bz)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const zz = this._engine,
          uz = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * uz), this._vertexBuffer = new lz.c(zz, this._vertexData, !0, uz);
        let bz = 0;
        const Ez = this._vertexBuffer.createVertexBuffer(lz.j.PositionKind, bz, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[lz.j.PositionKind] = Ez, bz += 3;
        const nz = this._vertexBuffer.createVertexBuffer(lz.j.ColorKind, bz, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[lz.j.ColorKind] = nz, bz += 4;
        const iz = this._vertexBuffer.createVertexBuffer("angle", bz, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = iz, bz += 1;
        const Mz = this._vertexBuffer.createVertexBuffer("size", bz, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Mz, bz += 2, this._isAnimationSheetEnabled) {
          const zz = this._vertexBuffer.createVertexBuffer("cellIndex", bz, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = zz, bz += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const zz = this._vertexBuffer.createVertexBuffer("direction", bz, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = zz, bz += 3
        }
        if (this._useRampGradients) {
          const zz = this._vertexBuffer.createVertexBuffer("remapData", bz, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = zz, bz += 4
        }
        let tz;
        if (this._useInstancing) {
          const uz = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new lz.c(zz, uz, !1, 2), tz = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else tz = this._vertexBuffer.createVertexBuffer("offset", bz, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = tz, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const zz = [],
          uz = [];
        let bz = 0;
        for (let Ez = 0; Ez < this._capacity; Ez++) zz.push(bz), zz.push(bz + 1), zz.push(bz + 2), zz.push(bz), zz.push(bz + 2), zz.push(bz + 3), uz.push(bz, bz + 1, bz + 1, bz + 2, bz + 2, bz + 3, bz + 3, bz, bz, bz + 3), bz += 4;
        this._indexBuffer = this._engine.createIndexBuffer(zz), this._linesIndexBuffer = this._engine.createIndexBuffer(uz)
      }
      getCapacity() {
        return this._capacity
      }
      isAlive() {
        return this._alive
      }
      isStarted() {
        return this._started
      }
      _preStart() {}
      start() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (zz) return this.startDelay = zz, void setTimeout((() => {
          this.start(0)
        }), zz);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const zz = this.noiseTexture;
          if (zz && zz.onGeneratedObservable) zz.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let uz = 0; uz < this.preWarmCycles; uz++) this.animate(!0), zz.render()
            }))
          }));
          else
            for (let uz = 0; uz < this.preWarmCycles; uz++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(zz))
      }
      _postStop(zz) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(zz, uz, bz, Ez) {
        let nz = zz * this._vertexBufferSize;
        const lz = iz.l.ER[0].euz(this._scene?.floatingOriginOffset || iz.n.ZeroReadOnly);
        if (this._vertexData[nz++] = uz.position.x + this.worldOffset.x - lz.x, this._vertexData[nz++] = uz.position.y + this.worldOffset.y - lz.y, this._vertexData[nz++] = uz.position.z + this.worldOffset.z - lz.z, this._vertexData[nz++] = uz.color.r, this._vertexData[nz++] = uz.color.g, this._vertexData[nz++] = uz.color.b, this._vertexData[nz++] = uz.color.a, this._vertexData[nz++] = uz.angle, this._vertexData[nz++] = uz.scale.x * uz.size, this._vertexData[nz++] = uz.scale.y * uz.size, this._isAnimationSheetEnabled && (this._vertexData[nz++] = uz.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[nz++] = uz.direction.x, this._vertexData[nz++] = uz.direction.y, this._vertexData[nz++] = uz.direction.z);
        else if (uz._properties.initialDirection) {
          let zz = uz._properties.initialDirection;
          this.isLocal && (iz.n.TransformNormalToRef(zz, this._emitterWorldMatrix, iz.l.ER[0]), zz = iz.l.ER[0]), 0 === zz.x && 0 === zz.z && (zz.x = .001), this._vertexData[nz++] = zz.x, this._vertexData[nz++] = zz.y, this._vertexData[nz++] = zz.z
        } else {
          let zz = uz.direction;
          this.isLocal && (iz.n.TransformNormalToRef(zz, this._emitterWorldMatrix, iz.l.ER[0]), zz = iz.l.ER[0]), 0 === zz.x && 0 === zz.z && (zz.x = .001), this._vertexData[nz++] = zz.x, this._vertexData[nz++] = zz.y, this._vertexData[nz++] = zz.z
        }
        this._useRampGradients && uz.remapData && (this._vertexData[nz++] = uz.remapData.x, this._vertexData[nz++] = uz.remapData.y, this._vertexData[nz++] = uz.remapData.z, this._vertexData[nz++] = uz.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === bz ? bz = this._epsilon : 1 === bz && (bz = 1 - this._epsilon), 0 === Ez ? Ez = this._epsilon : 1 === Ez && (Ez = 1 - this._epsilon)), this._vertexData[nz++] = bz, this._vertexData[nz] = Ez)
      }
      _prepareParticle(zz) {}
      _createNewOnes(zz) {
        let uz;
        for (let bz = 0; bz < zz && this._particles.length !== this._capacity; bz++) {
          uz = this._createParticle(), this._particles.push(uz);
          let zz = this._createQueueStart;
          for (; zz;) zz.process(uz, this), zz = zz.nextItem;
          uz._inheritParticleInfoToSubEmitters()
        }
      }
      _update(zz) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const zz = this.emitter;
          this._emitterWorldMatrix = zz.getWorldMatrix()
        } else {
          const zz = this.emitter;
          this._emitterWorldMatrix = iz.d.Translation(zz.x, zz.y, zz.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(zz)
      }
      static _GetAttributeNamesOrOptions() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = [lz.j.PositionKind, lz.j.ColorKind, "angle", "offset", "size"];
        return zz && Ez.push("cellIndex"), uz || Ez.push("direction"), bz && Ez.push("remapData"), Ez
      }
      static _GetEffectCreationOptions() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, yz.c)(Ez), zz && Ez.push("particlesInfos"), uz && Ez.push("logarithmicDepthConstant"), bz && (Ez.push("vFogInfos"), Ez.push("vFogColor")), Ez
      }
      fillDefines(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, yz.i)(this, this._scene, zz), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && zz.push("#define FOG")), this._isAnimationSheetEnabled && zz.push("#define ANIMATESHEET"), this.useLogarithmicDepth && zz.push("#define LOGARITHMICDEPTH"), uz === oz.BLENDMODE_MULTIPLY && zz.push("#define BLENDMULTIPLYMODE"), this.isLocal && zz.push("#define LOCAL"), this._useRampGradients && zz.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (zz.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            zz.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            zz.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && zz.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            zz.push("#define BILLBOARDMODE_ALL")
        }
        bz && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), zz.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(zz, uz, bz) {
        uz.push(...Gu._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), zz.push(...Gu._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), bz.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Qz.d)(zz, this._imageProcessingConfigurationDefines), (0, Qz.b)(bz, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(zz) {
        var uz;
        const bz = this._getCustomDrawWrapper(zz);
        if (bz?.effect) return bz;
        const Ez = [];
        this.fillDefines(Ez, zz);
        const iz = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          lz = Pu.d._PrepareStringDefines(iz, Ez),
          Mz = lz ? Pu.d.GetConfiguration(iz) : void 0;
        let tz = this._drawWrappers[iz];
        tz || (tz = this._drawWrappers[iz] = [], 0 === iz || this._renderPassObserver || (this._renderPassObserver = ((uz = this._engine)._onReleaseRenderPassObservable ?? (uz._onReleaseRenderPassObservable = new nz.b)).add((zz => {
          const uz = this._drawWrappers[zz];
          if (uz) {
            for (const zz of uz) zz?.dispose();
            delete this._drawWrappers[zz]
          }
        }))));
        let Hz = tz[zz];
        Hz || (Hz = new Sz.c(this._engine), Hz.drawContext && (Hz.drawContext.useInstancing = this._useInstancing), tz[zz] = Hz);
        const Oz = Ez.join("\n");
        if (Hz.defines !== Oz) {
          const zz = [],
            uz = [],
            bz = [];
          this.fillUniformsAttributesAndSamplerNames(uz, zz, bz), lz && (uz.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Mz?.defines.PREPASS_LOCAL_POSITION_INDEX && uz.push("inverseEmitterWM", "geometryWorldOffset")), Hz.setEffect(this._engine.createEffect("particles", {
            attributes: zz,
            uniformsNames: uz,
            samplers: bz,
            defines: Oz,
            shaderLanguage: this._shaderLanguage,
            multiTarget: lz,
            indexParameters: lz ? {
              buffersCount: Mz?._mrtCount ?? 0
            } : void 0
          }, this._engine), Oz)
        }
        return Hz
      }
      _bindGeometryRendering(zz) {
        const uz = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          bz = Pu.d.GetConfiguration(uz);
        if (!bz?._defines) return;
        zz.setFloat("objectId", 0), zz.setInt("meshBlendTag", 0);
        const Ez = this._scene?.activeCamera;
        if (zz.setFloat2("cameraInfo", Ez?.minZ ?? 0, Ez?.maxZ ?? 1), this.isLocal && void 0 !== bz.defines.PREPASS_LOCAL_POSITION_INDEX) {
          zz.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const uz = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || iz.n.ZeroReadOnly, iz.l.ER[0]);
          zz.setVector3("geometryWorldOffset", uz)
        }
      }
      animate() {
        let zz, uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!uz && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (uz ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) zz = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const uz = this._calculateEmitRate();
            zz = uz * this._scaledUpdateSpeed | 0, this._newPartsExcess += uz * this._scaledUpdateSpeed - zz
          }
          if (this._newPartsExcess > 1 && (zz += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? zz = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(zz), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !uz) {
            let zz = 0;
            for (let uz = 0; uz < this._particles.length; uz++) {
              const bz = this._particles[uz];
              this._appendParticleVertices(zz, bz), zz += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const zz = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  uz = this._particles.length;
                uz < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, uz * zz, this._fixedCapacityHighWaterMark * zz), this._fixedCapacityHighWaterMark = uz, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
              } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
          }
          0 === this.manualEmitCount && this.disposeOnStop && this.stop()
        }
      }
      _initFixedCapacitySnapshotData() {
        return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
      }
      _clearFixedCapacitySnapshotData() {
        if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
        const zz = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * zz), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let zz = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const uz = this._actualFrame / this.targetStopDuration;
          Ez.k.GetCurrentGradient(uz, this._emitRateGradients, ((uz, bz, Ez) => {
            uz !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = bz.getFactor(), this._currentEmitRateGradient = uz), zz = (0, Fz.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Ez)
          }))
        }
        return zz
      }
      _appendParticleVertices(zz, uz) {
        this._appendParticleVertex(zz++, uz, 0, 0), this._useInstancing || (this._appendParticleVertex(zz++, uz, 1, 0), this._appendParticleVertex(zz++, uz, 1, 1), this._appendParticleVertex(zz, uz, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Gu.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([bz.e(336).then((() => bz(60362))), bz.e(330).then((() => bz(60367)))])) : await Promise.all([bz.e(319).then((() => bz(60370))), Promise.all([bz.e(312), bz.e(348)]).then((() => bz(60374)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== oz.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(oz.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(oz.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(zz) {
        const uz = this._getWrapper(zz),
          bz = uz.effect,
          Ez = this._engine;
        Ez.enableEffect(uz);
        const nz = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        bz.setTexture("diffuseSampler", this.particleTexture), bz.setMatrix("view", nz);
        const lz = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (bz.setMatrix("projection", lz), this._isAnimationSheetEnabled && this.particleTexture) {
          const zz = this.particleTexture.getBaseSize();
          bz.setFloat3("particlesInfos", this.spriteCellWidth / zz.width, this.spriteCellHeight / zz.height, this.spriteCellWidth / zz.width)
        }
        if (bz.setVector2("translationPivot", this.translationPivot), bz.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const zz = this._scene.activeCamera;
          bz.setVector3("eyePosition", zz.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), bz.setTexture("rampSampler", this._rampGradientsTexture));
        const Mz = bz.defines;
        this._scene && ((0, yz.d)(bz, this, this._scene), this.applyFog && (0, Dz.k)(this._scene, void 0, bz)), Mz.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (nz.invertToRef(iz.l.Matrix[0]), bz.setMatrix("invView", iz.l.Matrix[0])), bz._multiTarget && this._bindGeometryRendering(bz), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Ez.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, bz) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, bz)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Ez.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, bz) : Ez.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, bz), this.useLogarithmicDepth && this._scene && (0, Dz.t)(Mz, bz, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(bz), this._setEngineBasedOnBlendMode(zz), bz._multiTarget && Pu.d._BindZeroAlphaDiscard(Ez, bz);
        let tz = !1;
        try {
          Pu.d._BindAttachmentsForEffect(Ez, bz) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(bz), this._useInstancing ? this._scene?.forceWireframe ? Ez.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Ez.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Ez.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Ez.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), tz = !0)
        } finally {
          Pu.d._RestoreAttachments(Ez)
        }
        return tz ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const zz = this._engine;
        let uz;
        return zz.setState && (zz.setState(!1), this.forceDepthWrite && zz.setDepthWrite(!0)), uz = this.blendMode === oz.BLENDMODE_MULTIPLYADD ? this._render(oz.BLENDMODE_MULTIPLY) + this._render(oz.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), uz
      }
      _onDispose() {}
      dispose() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), zz && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), zz && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(uz, bz), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const zz = this._scene.yN.indexOf(this);
          zz > -1 && this._scene.yN.splice(zz, 1), this._scene._activeParticleSystems.dispose()
        }
        this.aT.notifyObservers(this), this.aT.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Gu.ForceGLSL = !1;
    var au, Vu = bz(36564);
    ! function(zz) {
      zz[zz.ATTACHED = 0] = "ATTACHED", zz[zz.END = 1] = "END"
    }(au || (au = {}));
    class mu {
      constructor(zz) {
        if (this.particleSystem = zz, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !zz.emitter || !zz.emitter.dispose) {
          const uz = (0, Vu.b)("BABYLON.AbstractMesh");
          zz.emitter = new uz("SubemitterSystemEmitter", zz.XT()), zz._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let zz = this.particleSystem.emitter;
        if (zz) {
          if (zz instanceof iz.n) zz = zz.clone();
          else if (-1 !== zz.getClassName().indexOf("Mesh")) {
            zz = new((0, Vu.b)("BABYLON.Mesh"))("", zz.XT()), zz.isVisible = !1
          }
        } else zz = new iz.n;
        const uz = new mu(this.particleSystem.clone(this.particleSystem.name, zz));
        return uz.particleSystem.name += "Clone", uz.type = this.type, uz.inheritDirection = this.inheritDirection, uz.inheritedVelocityAmount = this.inheritedVelocityAmount, uz.particleSystem._disposeEmitterOnDispose = !0, uz.particleSystem.disposeOnStop = !0, uz
      }
      serialize() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = {};
        return uz.type = this.type, uz.inheritDirection = this.inheritDirection, uz.inheritedVelocityAmount = this.inheritedVelocityAmount, uz.particleSystem = this.particleSystem.serialize(zz), uz
      }
      static _ParseParticleSystem(zz, uz, bz) {
        throw (0, qz.l)("ParseParticle")
      }
      static Parse(zz, uz, bz) {
        const Ez = zz.particleSystem,
          nz = new mu(mu._ParseParticleSystem(Ez, uz, bz, !0));
        return nz.type = zz.type, nz.inheritDirection = zz.inheritDirection, nz.inheritedVelocityAmount = zz.inheritedVelocityAmount, nz.particleSystem._isSubEmitter = !0, nz
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var qu = bz(39079),
      hu = bz(39182);
    const Uu = () => {};
    class cu {
      constructor() {
        this.particlePositionGenerator = Uu, this.particleDestinationGenerator = Uu, this.particleDirectionGenerator = Uu
      }
      startDirectionFunction(zz, uz, bz, Ez) {
        const nz = iz.l.ER[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Uu) this.particleDirectionGenerator(-1, bz, nz);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Uu) {
          this.particleDestinationGenerator(-1, bz, nz);
          const zz = iz.l.ER[1];
          nz.subtractToRef(bz.position, zz), zz.scaleToRef(1 / bz.lifeTime, nz)
        } else nz.set(0, 0, 0);
        Ez ? uz.euz(nz) : iz.n.TransformNormalToRef(nz, zz, uz)
      }
      startPositionFunction(zz, uz, bz, Ez) {
        const nz = iz.l.ER[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Uu ? this.particlePositionGenerator(-1, bz, nz) : nz.set(0, 0, 0), Ez ? uz.euz(nz) : iz.n.TransformCoordinatesToRef(nz, zz, uz)
      }
      clone() {
        const zz = new cu;
        return dz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {}
      buildUniformLayout(zz) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.particlePositionGenerator = this.particlePositionGenerator, zz.particleDestinationGenerator = this.particleDestinationGenerator, zz
      }
      parse(zz) {
        zz.particlePositionGenerator && (this.particlePositionGenerator = zz.particlePositionGenerator), zz.particleDestinationGenerator && (this.particleDestinationGenerator = zz.particleDestinationGenerator)
      }
    }
    const gu = iz.n.Zero(),
      Su = iz.n.Zero(),
      yu = iz.n.Zero();
    class Du {
      constructor() {
        this.strength = 0, this.position = iz.n.Zero()
      }
      _processParticle(zz, uz) {
        this.position.subtractToRef(zz.position, gu);
        const bz = gu.lengthSquared() + 1;
        gu.normalize().scaleToRef(this.strength / bz, Su), Su.scaleToRef(uz._tempScaledUpdateSpeed, yu), zz.direction.addInPlace(yu)
      }
      serialize() {
        return {
          position: this.position.obz(),
          strength: this.strength
        }
      }
    }
    const Qu = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Wu extends Gu {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = zz => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const uz = Math.floor(Math.random() * this._subEmitters.length);
          for (const bz of this._subEmitters[uz])
            if (1 === bz.type) {
              const uz = bz.clone();
              zz._inheritParticleInfoToSubEmitter(uz), uz.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(uz.particleSystem), uz.particleSystem.start()
            }
        }
      }
      get source() {
        return this._source
      }
      get isNodeGenerated() {
        return null !== this._source
      }
      get flowMap() {
        return this._flowMap
      }
      set flowMap(zz) {
        this._flowMap !== zz && (this._flowMap = zz, this._flowMapUpdate && (Lu(this._flowMapUpdate), this._flowMapUpdate = null), zz && (this._flowMapUpdate = {
          process: zz => {
            const uz = this.XT()?.getTransformMatrix();
            this._flowMap._processParticle(zz, this.flowMapStrength * this._tempScaledUpdateSpeed, uz)
          },
          previousItem: null,
          nextItem: null
        }, Tu(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(zz) {
        super.addAttractor(zz), 1 === this._attractors.length && (this._attractorUpdate = {
          process: zz => {
            for (const uz of this._attractors) uz._processParticle(zz, this)
          },
          previousItem: null,
          nextItem: null
        }, Tu(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(zz) {
        super.removeAttractor(zz), 0 === this._attractors.length && this._attractorUpdate && Lu(this._attractorUpdate)
      }
      start() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(zz)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const zz of this.subEmitters) zz instanceof Wu ? this._subEmitters.push([new mu(zz)]) : zz instanceof mu ? this._subEmitters.push([zz]) : zz instanceof Array && this._subEmitters.push(zz)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const zz of this.activeSubSystems) zz.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const zz = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== zz && this._rootParticleSystem.activeSubSystems.splice(zz, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(zz) {
        zz && this._stopSubEmitters()
      }
      _prepareParticle(zz) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const uz = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          zz._properties.attachedSubEmitters = [];
          for (const bz of uz)
            if (0 === bz.type) {
              const uz = bz.clone();
              zz._properties.attachedSubEmitters.push(uz), uz.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), zz && this.particles)
          for (const bz of this.particles)
            if (bz._properties.attachedSubEmitters)
              for (let zz = bz._properties.attachedSubEmitters.length - 1; zz >= 0; zz -= 1) bz._properties.attachedSubEmitters[zz].dispose();
        if (uz && this.activeSubSystems)
          for (let bz = this.activeSubSystems.length - 1; bz >= 0; bz -= 1) this.activeSubSystems[bz].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let zz = 0; zz < this._subEmitters.length; zz++)
            for (const uz of this._subEmitters[zz]) uz.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(zz, uz, bz, Ez) {
        let nz;
        nz = bz instanceof qu.b ? null : bz;
        const lz = (0, Vu.b)("BABYLON.Texture");
        if (lz && nz)
          if (zz.texture) uz.particleTexture = lz.Parse(zz.texture, nz, Ez);
          else if (zz.textureName) {
          const bz = zz.textureSettings;
          if (uz.particleTexture = new lz(Ez + zz.textureName, nz, !1, void 0 === zz.invertY || zz.invertY, bz ? bz.samplingMode : void 0), uz.particleTexture.name = zz.textureName, bz) {
            const zz = uz.particleTexture;
            for (const uz of Qu) void 0 !== bz[uz] && (zz[uz] = bz[uz])
          }
        }
        if (zz.emitterId || 0 === zz.emitterId || void 0 !== zz.emitter ? (zz.emitterId || 0 === zz.emitterId) && nz ? (uz.emitter = nz.getLastMeshById(zz.emitterId), uz.emitter || (uz.emitter = iz.n.Zero())) : uz.emitter = iz.n.FromArray(zz.emitter) : uz.emitter = iz.n.Zero(), uz.isLocal = !!zz.isLocal, void 0 !== zz.renderingGroupId && (uz.renderingGroupId = zz.renderingGroupId), void 0 !== zz.isBillboardBased && (uz.isBillboardBased = zz.isBillboardBased), void 0 !== zz.billboardMode && (uz.billboardMode = zz.billboardMode), void 0 !== zz.useLogarithmicDepth && (uz.useLogarithmicDepth = zz.useLogarithmicDepth), zz.animations) {
          for (let bz = 0; bz < zz.animations.length; bz++) {
            const Ez = zz.animations[bz],
              nz = (0, Vu.b)("BABYLON.Animation");
            nz && uz.animations.push(nz.Parse(Ez))
          }
          uz.beginAnimationOnStart = zz.beginAnimationOnStart, uz.beginAnimationFrom = zz.beginAnimationFrom, uz.beginAnimationTo = zz.beginAnimationTo, uz.beginAnimationLoop = zz.beginAnimationLoop
        }
        if (zz.autoAnimate && nz && nz.beginAnimation(uz, zz.autoAnimateFrom, zz.autoAnimateTo, zz.autoAnimateLoop, zz.autoAnimateSpeed || 1), uz.startDelay = 0 | zz.startDelay, uz.minAngularSpeed = zz.minAngularSpeed, uz.maxAngularSpeed = zz.maxAngularSpeed, uz.minSize = zz.minSize, uz.maxSize = zz.maxSize, zz.minScaleX && (uz.minScaleX = zz.minScaleX, uz.maxScaleX = zz.maxScaleX, uz.minScaleY = zz.minScaleY, uz.maxScaleY = zz.maxScaleY), void 0 !== zz.preWarmCycles && (uz.preWarmCycles = zz.preWarmCycles, uz.preWarmStepOffset = zz.preWarmStepOffset), void 0 !== zz.minInitialRotation && (uz.minInitialRotation = zz.minInitialRotation, uz.maxInitialRotation = zz.maxInitialRotation), uz.minLifeTime = zz.minLifeTime, uz.maxLifeTime = zz.maxLifeTime, uz.minEmitPower = zz.minEmitPower, uz.maxEmitPower = zz.maxEmitPower, uz.emitRate = zz.emitRate, uz.gravity = iz.n.FromArray(zz.gravity), zz.noiseStrength && (uz.noiseStrength = iz.n.FromArray(zz.noiseStrength)), uz.color1 = Oz.g.FromArray(zz.color1), uz.color2 = Oz.g.FromArray(zz.color2), uz.colorDead = Oz.g.FromArray(zz.colorDead), uz.updateSpeed = zz.updateSpeed, uz.targetStopDuration = zz.targetStopDuration, uz.blendMode = zz.blendMode, zz.colorGradients)
          for (const iz of zz.colorGradients) uz.addColorGradient(iz.gradient, Oz.g.FromArray(iz.color1), iz.color2 ? Oz.g.FromArray(iz.color2) : void 0);
        if (zz.rampGradients) {
          for (const bz of zz.rampGradients) uz.addRampGradient(bz.gradient, Oz.c.FromArray(bz.color));
          uz.useRampGradients = zz.useRampGradients
        }
        if (zz.colorRemapGradients)
          for (const iz of zz.colorRemapGradients) uz.addColorRemapGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.alphaRemapGradients)
          for (const iz of zz.alphaRemapGradients) uz.addAlphaRemapGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.sizeGradients)
          for (const iz of zz.sizeGradients) uz.addSizeGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.angularSpeedGradients)
          for (const iz of zz.angularSpeedGradients) uz.addAngularSpeedGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.velocityGradients)
          for (const iz of zz.velocityGradients) uz.addVelocityGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.dragGradients)
          for (const iz of zz.dragGradients) uz.addDragGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.emitRateGradients)
          for (const iz of zz.emitRateGradients) uz.addEmitRateGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.startSizeGradients)
          for (const iz of zz.startSizeGradients) uz.addStartSizeGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.lifeTimeGradients)
          for (const iz of zz.lifeTimeGradients) uz.addLifeTimeGradient(iz.gradient, void 0 !== iz.factor1 ? iz.factor1 : iz.factor, iz.factor2);
        if (zz.limitVelocityGradients) {
          for (const bz of zz.limitVelocityGradients) uz.addLimitVelocityGradient(bz.gradient, void 0 !== bz.factor1 ? bz.factor1 : bz.factor, bz.factor2);
          uz.limitVelocityDamping = zz.limitVelocityDamping
        }
        if (zz.noiseTexture && nz) {
          const bz = (0, Vu.b)("BABYLON.ProceduralTexture");
          uz.noiseTexture = bz.Parse(zz.noiseTexture, nz, Ez)
        }
        let Mz;
        if (zz.particleEmitterType) {
          switch (zz.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Mz = new Kz;
              break;
            case "SphereDirectedParticleEmitter":
              Mz = new wz;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Mz = new fz;
              break;
            case "ConeDirectedParticleEmitter":
              Mz = new sz;
              break;
            case "CylinderParticleEmitter":
              Mz = new Xz.e;
              break;
            case "CylinderDirectedParticleEmitter":
              Mz = new Xz.c;
              break;
            case "HemisphericParticleEmitter":
              Mz = new Rz;
              break;
            case "PointParticleEmitter":
              Mz = new Zz;
              break;
            case "MeshParticleEmitter":
              Mz = new rz;
              break;
            case "CustomParticleEmitter":
              Mz = new cu;
              break;
            default:
              Mz = new pz.d
          }
          Mz.parse(zz.particleEmitterType, nz)
        } else Mz = new pz.d, Mz.parse(zz, nz);
        uz.particleEmitterType = Mz, uz.startSpriteCellID = zz.startSpriteCellID, uz.endSpriteCellID = zz.endSpriteCellID, uz.spriteCellLoop = zz.spriteCellLoop ?? !0, uz.spriteCellWidth = zz.spriteCellWidth, uz.spriteCellHeight = zz.spriteCellHeight, uz.spriteCellChangeSpeed = zz.spriteCellChangeSpeed, uz.spriteRandomStartCell = zz.spriteRandomStartCell, uz.disposeOnStop = zz.disposeOnStop ?? !1, uz.manualEmitCount = zz.manualEmitCount ?? -1
      }
      static Parse(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nz = arguments.length > 4 ? arguments[4] : void 0;
        const lz = zz.name;
        let Mz, tz, Hz = null,
          pz = null;
        if (uz instanceof qu.b ? Mz = uz : (tz = uz, Mz = tz.uR()), zz.customShader && (0, qz.c)(Mz.createEffectForParticles)) {
          pz = zz.customShader;
          const uz = pz.shaderOptions.defines.length > 0 ? pz.shaderOptions.defines.join("\n") : "";
          Hz = Mz.createEffectForParticles(pz.shaderPath.fragmentElement, pz.shaderOptions.uniforms, pz.shaderOptions.samplers, uz)
        }
        const dz = new Wu(lz, nz || zz.Bp, uz, Hz, zz.isAnimationSheetEnabled);
        if (dz.customShader = pz, dz._rootUrl = bz, zz.id && (dz.id = zz.id), zz.subEmitters) {
          dz.subEmitters = [];
          for (const Ez of zz.subEmitters) {
            const zz = [];
            for (const nz of Ez) zz.push(mu.Parse(nz, uz, bz));
            dz.subEmitters.push(zz)
          }
        }
        if (zz.attractors)
          for (const Oz of zz.attractors) {
            const zz = new Du;
            zz.position = iz.n.FromArray(Oz.position), zz.strength = Oz.strength, dz.addAttractor(zz)
          }
        return Wu._Parse(zz, dz, uz, bz), zz.textureMask && (dz.textureMask = Oz.g.FromArray(zz.textureMask)), zz.worldOffset && (dz.worldOffset = iz.n.FromArray(zz.worldOffset)), zz.preventAutoStart && (dz.preventAutoStart = zz.preventAutoStart), zz.metadata && (dz.metadata = zz.metadata), Ez || dz.preventAutoStart || dz.start(), dz
      }
      serialize() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = {};
        if (Wu._Serialize(uz, this, zz), uz.textureMask = this.textureMask.obz(), uz.customShader = this.customShader, uz.preventAutoStart = this.preventAutoStart, uz.worldOffset = this.worldOffset.obz(), this.metadata && (uz.metadata = this.metadata), this.subEmitters) {
          uz.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const bz of this._subEmitters) {
            const Ez = [];
            for (const uz of bz) uz.particleSystem.doNotSerialize || Ez.push(uz.serialize(zz));
            uz.subEmitters.push(Ez)
          }
        }
        if (this._attractors && this._attractors.length) {
          uz.attractors = [];
          for (const zz of this._attractors) uz.attractors.push(zz.serialize())
        }
        return uz
      }
      static _Serialize(zz, uz, bz) {
        if (zz.name = uz.name, zz.id = uz.id, zz.Bp = uz.getCapacity(), zz.disposeOnStop = uz.disposeOnStop, zz.manualEmitCount = uz.manualEmitCount, uz.emitter.position) {
          const bz = uz.emitter;
          zz.emitterId = bz.id
        } else {
          const bz = uz.emitter;
          zz.emitter = bz.obz()
        }
        if (uz.particleEmitterType && (zz.particleEmitterType = uz.particleEmitterType.serialize()), uz.particleTexture)
          if (bz) zz.texture = uz.particleTexture.serialize();
          else {
            const bz = uz.particleTexture;
            zz.textureName = uz.particleTexture.name, zz.invertY = !!bz._invertY;
            const Ez = {};
            for (const zz of Qu) Ez[zz] = bz[zz];
            Ez.samplingMode = bz.samplingMode, zz.textureSettings = Ez
          } zz.isLocal = uz.isLocal, hu.e.AppendSerializedAnimations(uz, zz), zz.beginAnimationOnStart = uz.beginAnimationOnStart, zz.beginAnimationFrom = uz.beginAnimationFrom, zz.beginAnimationTo = uz.beginAnimationTo, zz.beginAnimationLoop = uz.beginAnimationLoop, zz.startDelay = uz.startDelay, zz.renderingGroupId = uz.renderingGroupId, zz.isBillboardBased = uz.isBillboardBased, zz.billboardMode = uz.billboardMode, zz.minAngularSpeed = uz.minAngularSpeed, zz.maxAngularSpeed = uz.maxAngularSpeed, zz.minSize = uz.minSize, zz.maxSize = uz.maxSize, zz.minScaleX = uz.minScaleX, zz.maxScaleX = uz.maxScaleX, zz.minScaleY = uz.minScaleY, zz.maxScaleY = uz.maxScaleY, zz.minEmitPower = uz.minEmitPower, zz.maxEmitPower = uz.maxEmitPower, zz.minLifeTime = uz.minLifeTime, zz.maxLifeTime = uz.maxLifeTime, zz.emitRate = uz.emitRate, zz.gravity = uz.gravity.obz(), zz.noiseStrength = uz.noiseStrength.obz(), zz.color1 = uz.color1.obz(), zz.color2 = uz.color2.obz(), zz.colorDead = uz.colorDead.obz(), zz.updateSpeed = uz.updateSpeed, zz.targetStopDuration = uz.targetStopDuration, zz.blendMode = uz.blendMode, zz.preWarmCycles = uz.preWarmCycles, zz.preWarmStepOffset = uz.preWarmStepOffset, zz.minInitialRotation = uz.minInitialRotation, zz.maxInitialRotation = uz.maxInitialRotation, zz.startSpriteCellID = uz.startSpriteCellID, zz.spriteCellLoop = uz.spriteCellLoop, zz.endSpriteCellID = uz.endSpriteCellID, zz.spriteCellChangeSpeed = uz.spriteCellChangeSpeed, zz.spriteCellWidth = uz.spriteCellWidth, zz.spriteCellHeight = uz.spriteCellHeight, zz.spriteRandomStartCell = uz.spriteRandomStartCell, zz.isAnimationSheetEnabled = uz.isAnimationSheetEnabled, zz.useLogarithmicDepth = uz.useLogarithmicDepth;
        const Ez = uz.getColorGradients();
        if (Ez) {
          zz.colorGradients = [];
          for (const uz of Ez) {
            const bz = {
              gradient: uz.gradient,
              color1: uz.color1.obz()
            };
            uz.color2 ? bz.color2 = uz.color2.obz() : bz.color2 = uz.color1.obz(), zz.colorGradients.push(bz)
          }
        }
        const nz = uz.getRampGradients();
        if (nz) {
          zz.rampGradients = [];
          for (const uz of nz) {
            const bz = {
              gradient: uz.gradient,
              color: uz.color.obz()
            };
            zz.rampGradients.push(bz)
          }
          zz.useRampGradients = uz.useRampGradients
        }
        const iz = uz.getColorRemapGradients();
        if (iz) {
          zz.colorRemapGradients = [];
          for (const uz of iz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.colorRemapGradients.push(bz)
          }
        }
        const lz = uz.getAlphaRemapGradients();
        if (lz) {
          zz.alphaRemapGradients = [];
          for (const uz of lz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.alphaRemapGradients.push(bz)
          }
        }
        const Mz = uz.getSizeGradients();
        if (Mz) {
          zz.sizeGradients = [];
          for (const uz of Mz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.sizeGradients.push(bz)
          }
        }
        const tz = uz.getAngularSpeedGradients();
        if (tz) {
          zz.angularSpeedGradients = [];
          for (const uz of tz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.angularSpeedGradients.push(bz)
          }
        }
        const Hz = uz.getVelocityGradients();
        if (Hz) {
          zz.velocityGradients = [];
          for (const uz of Hz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.velocityGradients.push(bz)
          }
        }
        const Oz = uz.getDragGradients();
        if (Oz) {
          zz.dragGradients = [];
          for (const uz of Oz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.dragGradients.push(bz)
          }
        }
        const pz = uz.getEmitRateGradients();
        if (pz) {
          zz.emitRateGradients = [];
          for (const uz of pz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.emitRateGradients.push(bz)
          }
        }
        const dz = uz.getStartSizeGradients();
        if (dz) {
          zz.startSizeGradients = [];
          for (const uz of dz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.startSizeGradients.push(bz)
          }
        }
        const Fz = uz.getLifeTimeGradients();
        if (Fz) {
          zz.lifeTimeGradients = [];
          for (const uz of Fz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.lifeTimeGradients.push(bz)
          }
        }
        const Zz = uz.getLimitVelocityGradients();
        if (Zz) {
          zz.limitVelocityGradients = [];
          for (const uz of Zz) {
            const bz = {
              gradient: uz.gradient,
              factor1: uz.factor1
            };
            void 0 !== uz.factor2 ? bz.factor2 = uz.factor2 : bz.factor2 = uz.factor1, zz.limitVelocityGradients.push(bz)
          }
          zz.limitVelocityDamping = uz.limitVelocityDamping
        }
        uz.noiseTexture && (zz.noiseTexture = uz.noiseTexture.serialize())
      }
      clone(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = {
          ...this._customWrappers
        };
        let nz = null;
        const iz = this._engine;
        if ((0, qz.c)(iz.createEffectForParticles) && null != this.customShader) {
          nz = this.customShader;
          const zz = nz.shaderOptions.defines.length > 0 ? nz.shaderOptions.defines.join("\n") : "",
            uz = iz.createEffectForParticles(nz.shaderPath.fragmentElement, nz.shaderOptions.uniforms, nz.shaderOptions.samplers, zz);
          Ez[0] ? Ez[0].effect = uz : this.setCustomEffect(uz, 0)
        }
        const lz = this.serialize(bz),
          Mz = !1 === bz && this.particleTexture ? this.particleTexture.clone() : null;
        Mz && (lz.textureName = void 0);
        const tz = Wu.Parse(lz, this._scene || this._engine, this._rootUrl);
        return tz.name = zz, tz.customShader = nz, tz._customWrappers = Ez, Mz && (tz.particleTexture = Mz), void 0 === uz && (uz = this.emitter), this.noiseTexture && (tz.noiseTexture = this.noiseTexture.clone()), tz.emitter = uz, this.preventAutoStart || tz.start(), tz
      }
    }
    Wu.BILLBOARDMODE_Y = 2, Wu.BILLBOARDMODE_ALL = 7, Wu.BILLBOARDMODE_STRETCHED = 8, Wu.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let eu = !1;
    eu || (eu = !0, mu._ParseParticleSystem = Wu.Parse)
  },
  40856: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      SkyMaterial: () => fz,
      _MaxColorValueForRenderTarget: () => Xz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(39182),
      lz = bz(36514),
      Mz = bz(39446),
      tz = bz(39519),
      Hz = bz(40809),
      Oz = bz(40360),
      pz = bz(39250),
      dz = bz(36564),
      Fz = bz(39548),
      Zz = bz(39528),
      Rz = bz(39511),
      Kz = bz(39505);
    class wz extends Mz.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Xz(zz) {
      switch (zz) {
        case Hz.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Hz.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let fz = (() => {
      var zz;
      let uz, Mz, Hz, dz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz = tz.b,
        Gz = [],
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [],
        cz = [],
        gz = [],
        Sz = [],
        yz = [],
        Dz = [],
        Qz = [],
        Wz = [],
        ez = [],
        jz = [],
        Iz = [],
        Bz = [],
        Cz = [],
        Yz = [],
        kz = [],
        zu = [],
        uu = [],
        bu = [],
        Eu = [],
        nu = [],
        iu = [],
        lu = [],
        Mu = [],
        tu = [];
      return zz = class extends Pz {
        constructor(zz, uz) {
          super(zz, uz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Ez.j)(this, Gz, 1), this.turbidity = ((0, Ez.j)(this, az), (0, Ez.j)(this, Vz, 10)), this.rayleigh = ((0, Ez.j)(this, mz), (0, Ez.j)(this, qz, 2)), this.mieCoefficient = ((0, Ez.j)(this, hz), (0, Ez.j)(this, Uz, .005)), this.mieDirectionalG = ((0, Ez.j)(this, cz), (0, Ez.j)(this, gz, .8)), this.distance = ((0, Ez.j)(this, Sz), (0, Ez.j)(this, yz, 500)), this.inclination = ((0, Ez.j)(this, Dz), (0, Ez.j)(this, Qz, .49)), this.azimuth = ((0, Ez.j)(this, Wz), (0, Ez.j)(this, ez, .25)), this.sunPosition = ((0, Ez.j)(this, jz), (0, Ez.j)(this, Iz, new lz.ER(0, 100, 0))), this.useSunPosition = ((0, Ez.j)(this, Bz), (0, Ez.j)(this, Cz, !1)), this.cameraOffset = ((0, Ez.j)(this, Yz), (0, Ez.j)(this, kz, lz.ER.Zero())), this.up = ((0, Ez.j)(this, zu), (0, Ez.j)(this, uu, lz.ER.Up())), this.dithering = ((0, Ez.j)(this, bu), (0, Ez.j)(this, Eu, !1)), this.rawHdrOutput = ((0, Ez.j)(this, nu), (0, Ez.j)(this, iu, !1)), this.cloudiness = ((0, Ez.j)(this, lu), (0, Ez.j)(this, Mu, 0)), this._cameraPosition = ((0, Ez.j)(this, tu), lz.ER.Zero()), this._skyOrientation = new lz.Quaternion
        }
        needAlphaBlending() {
          return this.alpha < 1
        }
        needAlphaTesting() {
          return !1
        }
        getAlphaTestTexture() {
          return null
        }
        isReadyForSubMesh(uz, bz) {
          const Ez = bz._drawWrapper;
          if (this.isFrozen && Ez.effect && Ez._wasPreviouslyReady) return !0;
          bz.materialDefines || (bz.materialDefines = new wz);
          const nz = bz.materialDefines,
            iz = this.XT();
          if (this._isReadyForSubMesh(bz)) return !0;
          if ((0, Kz.hb)(uz, iz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, nz, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, Kz.T)(uz, nz, !0, !1), nz.IMAGEPROCESSINGPOSTPROCESS !== iz.imageProcessingConfiguration.applyByPostProcess && nz.markAsMiscDirty(), nz.DITHER !== this.dithering && nz.markAsMiscDirty(), nz.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && nz.markAsMiscDirty(), nz.isDirty) {
            nz.markAsProcessed(), iz.resetCachedMaterial();
            const uz = new Zz.c;
            nz.FOG && uz.addFallback(1, "FOG"), nz.IMAGEPROCESSINGPOSTPROCESS = iz.imageProcessingConfiguration.applyByPostProcess, nz.DITHER = this.dithering, nz.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Ez = [Oz.d.PositionKind];
            nz.VERTEXCOLOR && Ez.push(Oz.d.ColorKind);
            const lz = "sky",
              Mz = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Rz.c)(Mz);
            const tz = nz.toString();
            bz.setEffect(iz.uR().createEffect(lz, {
              attributes: Ez,
              uniformsNames: Mz,
              uniformBuffersNames: [],
              samplers: [],
              defines: tz,
              fallbacks: uz,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: zz._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, iz.uR()), nz, this._materialContext)
          }
          return !(!bz.effect || !bz.effect.isReady()) && (nz._renderId = iz.getRenderId(), Ez._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(zz, uz, bz) {
          const Ez = this.XT(),
            nz = bz.materialDefines;
          if (!nz) return;
          const iz = bz.effect;
          if (!iz) return;
          this._activeEffect = iz, this.bindOnlyWorldMatrix(zz), this._activeEffect.setMatrix("viewProjection", Ez.getTransformMatrix()), this._mustRebind(Ez, iz, bz) && ((0, Rz.d)(iz, this, Ez), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, Kz.t)(nz, iz, Ez)), Ez.fogEnabled && uz.applyFog && Ez.fogMode !== pz.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", Ez.getViewMatrix()), (0, Kz.k)(Ez, uz, this._activeEffect, this.rawHdrOutput);
          const Mz = Ez.activeCamera;
          if (Mz) {
            const zz = Mz.getWorldMatrix();
            this._cameraPosition.x = zz.m[12], this._cameraPosition.y = zz.m[13], this._cameraPosition.z = zz.m[14], this._activeEffect.setVector3("cameraPosition", lz.TmpVectors.ER[0].euz(this._cameraPosition).Qbz(Ez.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const zz = Ez.uR()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Xz(zz?.texture?.type))
          }
          if (!this.useSunPosition) {
            const zz = Math.PI * (this.inclination - .5),
              uz = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(uz) * Math.cos(zz), this.sunPosition.y = this.distance * Math.sin(-zz), this.sunPosition.z = this.distance * Math.sin(uz) * Math.cos(zz), lz.Quaternion.FromUnitVectorsToRef(lz.ER.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(uz, this._activeEffect, bz)
        }
        getAnimatables() {
          return []
        }
        dispose(zz) {
          super.dispose(zz)
        }
        clone(uz) {
          return iz.e.Clone((() => new zz(uz, this.XT())), this)
        }
        serialize() {
          const zz = super.serialize();
          return zz.customType = "BABYLON.SkyMaterial", zz
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(uz, bz, Ez) {
          return iz.e.Parse((() => new zz(uz.name, bz)), uz, bz, Ez)
        }
      }, (() => {
        const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pz[Symbol.metadata] ?? null) : void 0;
        uz = [(0, nz.G)()], Mz = [(0, nz.G)()], Hz = [(0, nz.G)()], dz = [(0, nz.G)()], fz = [(0, nz.G)()], sz = [(0, nz.G)()], rz = [(0, nz.G)()], oz = [(0, nz.G)()], Nz = [(0, nz.D)()], vz = [(0, nz.G)()], xz = [(0, nz.D)()], Jz = [(0, nz.D)()], Az = [(0, nz.G)()], Tz = [(0, nz.G)()], Lz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: zz => "luminance" in zz,
            get: zz => zz.luminance,
            set: (zz, uz) => {
              zz.luminance = uz
            }
          },
          metadata: bz
        }, Gz, az), (0, Ez.h)(null, null, Mz, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: zz => "turbidity" in zz,
            get: zz => zz.turbidity,
            set: (zz, uz) => {
              zz.turbidity = uz
            }
          },
          metadata: bz
        }, Vz, mz), (0, Ez.h)(null, null, Hz, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: zz => "rayleigh" in zz,
            get: zz => zz.rayleigh,
            set: (zz, uz) => {
              zz.rayleigh = uz
            }
          },
          metadata: bz
        }, qz, hz), (0, Ez.h)(null, null, dz, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: zz => "mieCoefficient" in zz,
            get: zz => zz.mieCoefficient,
            set: (zz, uz) => {
              zz.mieCoefficient = uz
            }
          },
          metadata: bz
        }, Uz, cz), (0, Ez.h)(null, null, fz, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: zz => "mieDirectionalG" in zz,
            get: zz => zz.mieDirectionalG,
            set: (zz, uz) => {
              zz.mieDirectionalG = uz
            }
          },
          metadata: bz
        }, gz, Sz), (0, Ez.h)(null, null, sz, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: zz => "distance" in zz,
            get: zz => zz.distance,
            set: (zz, uz) => {
              zz.distance = uz
            }
          },
          metadata: bz
        }, yz, Dz), (0, Ez.h)(null, null, rz, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: zz => "inclination" in zz,
            get: zz => zz.inclination,
            set: (zz, uz) => {
              zz.inclination = uz
            }
          },
          metadata: bz
        }, Qz, Wz), (0, Ez.h)(null, null, oz, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: zz => "azimuth" in zz,
            get: zz => zz.azimuth,
            set: (zz, uz) => {
              zz.azimuth = uz
            }
          },
          metadata: bz
        }, ez, jz), (0, Ez.h)(null, null, Nz, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: zz => "sunPosition" in zz,
            get: zz => zz.sunPosition,
            set: (zz, uz) => {
              zz.sunPosition = uz
            }
          },
          metadata: bz
        }, Iz, Bz), (0, Ez.h)(null, null, vz, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSunPosition" in zz,
            get: zz => zz.useSunPosition,
            set: (zz, uz) => {
              zz.useSunPosition = uz
            }
          },
          metadata: bz
        }, Cz, Yz), (0, Ez.h)(null, null, xz, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: zz => "cameraOffset" in zz,
            get: zz => zz.cameraOffset,
            set: (zz, uz) => {
              zz.cameraOffset = uz
            }
          },
          metadata: bz
        }, kz, zu), (0, Ez.h)(null, null, Jz, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: zz => "up" in zz,
            get: zz => zz.up,
            set: (zz, uz) => {
              zz.up = uz
            }
          },
          metadata: bz
        }, uu, bu), (0, Ez.h)(null, null, Az, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: zz => "dithering" in zz,
            get: zz => zz.dithering,
            set: (zz, uz) => {
              zz.dithering = uz
            }
          },
          metadata: bz
        }, Eu, nu), (0, Ez.h)(null, null, Tz, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: zz => "rawHdrOutput" in zz,
            get: zz => zz.rawHdrOutput,
            set: (zz, uz) => {
              zz.rawHdrOutput = uz
            }
          },
          metadata: bz
        }, iu, lu), (0, Ez.h)(null, null, Lz, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: zz => "cloudiness" in zz,
            get: zz => zz.cloudiness,
            set: (zz, uz) => {
              zz.cloudiness = uz
            }
          },
          metadata: bz
        }, Mu, tu), bz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bz
        })
      })(), zz._ShaderLoader = new Fz.c((() => [bz.e(320).then((() => bz(60380))), bz.e(313).then((() => bz(60382)))]), (() => [bz.e(337).then((() => bz(60387))), bz.e(331).then((() => bz(60389)))])), zz
    })();
    (0, dz.c)("BABYLON.SkyMaterial", fz)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
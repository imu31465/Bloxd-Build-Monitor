export const id = 278;
export const ids = [278];
export const modules = {
  54135: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr = Qr(41960),
      Wr = Qr(54138);
    class ar {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = Qr, this.MWr = [], this._maxBlockCapacity = Sr || 64, this._selectionContent = new Zr.e(1024), this._creationFunc = rr
      }
      update(rr, Sr, Qr) {
        Wr.d._CreateBlocks(rr, Sr, Qr, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      XWr(rr) {
        for (let Sr = 0; Sr < this.blocks.length; Sr++) {
          this.blocks[Sr].addEntry(rr)
        }
      }
      rM(rr) {
        for (let Sr = 0; Sr < this.blocks.length; Sr++) {
          this.blocks[Sr].removeEntry(rr)
        }
      }
      select(rr, Sr) {
        this._selectionContent.reset();
        for (let Qr = 0; Qr < this.blocks.length; Qr++) {
          this.blocks[Qr].select(rr, this._selectionContent, Sr)
        }
        return Sr ? this._selectionContent.concat(this.MWr) : this._selectionContent.concatWithNoDuplicate(this.MWr), this._selectionContent
      }
      intersects(rr, Sr, Qr) {
        this._selectionContent.reset();
        for (let Zr = 0; Zr < this.blocks.length; Zr++) {
          this.blocks[Zr].intersects(rr, Sr, this._selectionContent, Qr)
        }
        return Qr ? this._selectionContent.concat(this.MWr) : this._selectionContent.concatWithNoDuplicate(this.MWr), this._selectionContent
      }
      intersectsRay(rr) {
        this._selectionContent.reset();
        for (let Sr = 0; Sr < this.blocks.length; Sr++) {
          this.blocks[Sr].intersectsRay(rr, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.MWr), this._selectionContent
      }
    }
    ar.CreationFuncForMeshes = (rr, Sr) => {
      const Qr = rr.mG();
      !rr.isBlocked && Qr.boundingBox.intersectsMinMax(Sr.lWr, Sr.LWr) && Sr.entries.push(rr)
    }, ar.CreationFuncForSubMeshes = (rr, Sr) => {
      rr.mG().boundingBox.intersectsMinMax(Sr.lWr, Sr.LWr) && Sr.entries.push(rr)
    }
  },
  54138: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(38560),
      Wr = Qr(42155);
    class ar {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.entries = [], this.GWr = new Array, this._capacity = Qr, this._depth = Zr, this._maxDepth = Wr, this._creationFunc = ar, this._minPoint = rr, this._maxPoint = Sr, this.GWr.push(rr.clone()), this.GWr.push(Sr.clone()), this.GWr.push(rr.clone()), this.GWr[2].x = Sr.x, this.GWr.push(rr.clone()), this.GWr[3].y = Sr.y, this.GWr.push(rr.clone()), this.GWr[4].z = Sr.z, this.GWr.push(Sr.clone()), this.GWr[5].z = rr.z, this.GWr.push(Sr.clone()), this.GWr[6].x = rr.x, this.GWr.push(Sr.clone()), this.GWr[7].y = rr.y
      }
      get sx() {
        return this._capacity
      }
      get lWr() {
        return this._minPoint
      }
      get LWr() {
        return this._maxPoint
      }
      addEntry(rr) {
        if (this.blocks)
          for (let Sr = 0; Sr < this.blocks.length; Sr++) {
            this.blocks[Sr].addEntry(rr)
          } else this._creationFunc(rr, this), this.entries.length > this.sx && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(rr) {
        if (this.blocks) {
          for (let Sr = 0; Sr < this.blocks.length; Sr++) {
            this.blocks[Sr].removeEntry(rr)
          }
          return
        }
        const Sr = this.entries.indexOf(rr);
        Sr > -1 && this.entries.splice(Sr, 1)
      }
      addEntries(rr) {
        for (let Sr = 0; Sr < rr.length; Sr++) {
          const Qr = rr[Sr];
          this.addEntry(Qr)
        }
      }
      select(rr, Sr, Qr) {
        if (Wr.d.IsInFrustum(this.GWr, rr)) {
          if (this.blocks) {
            for (let Zr = 0; Zr < this.blocks.length; Zr++) {
              this.blocks[Zr].select(rr, Sr, Qr)
            }
            return
          }
          Qr ? Sr.concat(this.entries) : Sr.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(rr, Sr, Qr, Zr) {
        if (Wr.d.IntersectsSphere(this._minPoint, this._maxPoint, rr, Sr)) {
          if (this.blocks) {
            for (let Wr = 0; Wr < this.blocks.length; Wr++) {
              this.blocks[Wr].intersects(rr, Sr, Qr, Zr)
            }
            return
          }
          Zr ? Qr.concat(this.entries) : Qr.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(rr, Sr) {
        if (rr.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let Qr = 0; Qr < this.blocks.length; Qr++) {
              this.blocks[Qr].intersectsRay(rr, Sr)
            }
            return
          }
          Sr.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        ar._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(rr, Sr, Qr, Wr, jr, Ir, fr, Er) {
        fr.blocks = new Array;
        const pr = new Zr.u((Sr.x - rr.x) / 2, (Sr.y - rr.y) / 2, (Sr.z - rr.z) / 2);
        for (let Zr = 0; Zr < 2; Zr++)
          for (let Sr = 0; Sr < 2; Sr++)
            for (let xr = 0; xr < 2; xr++) {
              const mr = rr.add(pr.multiplyByFloats(Zr, Sr, xr)),
                Nr = rr.add(pr.multiplyByFloats(Zr + 1, Sr + 1, xr + 1)),
                Ur = new ar(mr, Nr, Wr, jr + 1, Ir, Er);
              Ur.addEntries(Qr), fr.blocks.push(Ur)
            }
      }
    }
  },
  54146: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr
    });
    var Zr = Qr(41941),
      Wr = Qr(38560),
      ar = Qr(42284),
      jr = Qr(54096),
      Ir = Qr(42020),
      fr = Qr(38587),
      Er = Qr(54135);
    class pr {
      constructor(rr) {
        this.name = Ir.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new jr.A(Wr.u.Zero(), new Wr.u(1, 1, 1)), (rr = rr || fr.b.LastCreatedScene) && (this.Dt = rr, this.Dt.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Dt.getActiveSubMeshCandidates = rr => this.getActiveSubMeshCandidates(rr), this.Dt.getCollidingSubMeshCandidates = (rr, Sr) => this.getCollidingSubMeshCandidates(rr, Sr), this.Dt.getIntersectingSubMeshCandidates = (rr, Sr) => this.getIntersectingSubMeshCandidates(rr, Sr))
      }
      register() {
        this.Dt.onMeshRemovedObservable.add((rr => {
          const Sr = this.Dt.selectionOctree;
          if (void 0 !== Sr && null !== Sr) {
            const Qr = Sr.MWr.indexOf(rr); - 1 !== Qr && Sr.MWr.splice(Qr, 1)
          }
        })), this.Dt.onMeshImportedObservable.add((rr => {
          const Sr = this.Dt.selectionOctree;
          void 0 !== Sr && null !== Sr && Sr.XWr(rr)
        }))
      }
      getActiveMeshCandidates() {
        return this.Dt.cWr?.select(this.Dt.frustumPlanes) || this.Dt._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(rr) {
        if (rr._submeshesOctree && rr.useOctreeForRenderingSelection) {
          return rr._submeshesOctree.select(this.Dt.frustumPlanes)
        }
        return this.Dt._getDefaultSubMeshCandidates(rr)
      }
      getIntersectingSubMeshCandidates(rr, Sr) {
        if (rr._submeshesOctree && rr.useOctreeForPicking) {
          jr.A.TransformToRef(Sr, rr.getWorldMatrix(), this._tempRay);
          return rr._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Dt._getDefaultSubMeshCandidates(rr)
      }
      getCollidingSubMeshCandidates(rr, Sr) {
        if (rr._submeshesOctree && rr.useOctreeForCollisions) {
          const Qr = Sr._velocityWorldLength + Math.max(Sr._radius.x, Sr._radius.y, Sr._radius.z);
          return rr._submeshesOctree.intersects(Sr._basePointWorld, Qr)
        }
        return this.Dt._getDefaultSubMeshCandidates(rr)
      }
      rebuild() {}
      dispose() {}
    }
    let xr = !1;
    xr || (xr = !0, Zr.f.prototype.createOrUpdateSelectionOctree = function() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        Qr = this._getComponent(Ir.b.NAME_OCTREE);
      Qr || (Qr = new pr(this), this.CZr(Qr)), this.cWr || (this.cWr = new Er.e(Er.e.CreationFuncForMeshes, rr, Sr));
      const Zr = this.getWorldExtends();
      return this.cWr.update(Zr.min, Zr.max, this.meshes), this.cWr
    }, Object.defineProperty(Zr.f.prototype, "selectionOctree", {
      get: function() {
        return this.cWr
      },
      enumerable: !0,
      configurable: !0
    }), ar.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Qr = this.eC();
      let Zr = Qr._getComponent(Ir.b.NAME_OCTREE);
      Zr || (Zr = new pr(Qr), Qr.CZr(Zr)), this._submeshesOctree || (this._submeshesOctree = new Er.e(Er.e.CreationFuncForSubMeshes, rr, Sr)), this.computeWorldMatrix(!0);
      const Wr = this.mG().boundingBox;
      return this._submeshesOctree.update(Wr.minimumWorld, Wr.maximumWorld, this.jT), this._submeshesOctree
    })
  },
  54096: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => xr,
      c: () => Xr,
      f: () => tr,
      i: () => Ur,
      l: () => Nr,
      p: () => Lr,
      q: () => Or,
      s: () => Br,
      u: () => vr,
      w: () => Tr
    });
    var Zr = Qr(38569),
      Wr = Qr(38560),
      ar = Qr(38576),
      jr = Qr(42142),
      Ir = Qr(41989),
      fr = Qr(38587),
      Er = Qr(42040);
    const pr = {
      internalPickerForMesh: void 0
    };
    class xr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zr.e;
        this.origin = rr, this.direction = Sr, this.length = Qr, this.epsilon = Wr
      }
      clone() {
        return new xr(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Zr = xr._TmpVector3[0].Hrr(rr.x - Qr, rr.y - Qr, rr.z - Qr),
          Wr = xr._TmpVector3[1].Hrr(Sr.x + Qr, Sr.y + Qr, Sr.z + Qr);
        let ar, jr, Ir, fr, Er = 0,
          pr = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Zr.x || this.origin.x > Wr.x) return !1
        } else if (ar = 1 / this.direction.x, jr = (Zr.x - this.origin.x) * ar, Ir = (Wr.x - this.origin.x) * ar, Ir === -1 / 0 && (Ir = 1 / 0), jr > Ir && (fr = jr, jr = Ir, Ir = fr), Er = Math.max(jr, Er), pr = Math.min(Ir, pr), Er > pr) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Zr.y || this.origin.y > Wr.y) return !1
        } else if (ar = 1 / this.direction.y, jr = (Zr.y - this.origin.y) * ar, Ir = (Wr.y - this.origin.y) * ar, Ir === -1 / 0 && (Ir = 1 / 0), jr > Ir && (fr = jr, jr = Ir, Ir = fr), Er = Math.max(jr, Er), pr = Math.min(Ir, pr), Er > pr) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Zr.z || this.origin.z > Wr.z) return !1
        } else if (ar = 1 / this.direction.z, jr = (Zr.z - this.origin.z) * ar, Ir = (Wr.z - this.origin.z) * ar, Ir === -1 / 0 && (Ir = 1 / 0), jr > Ir && (fr = jr, jr = Ir, Ir = fr), Er = Math.max(jr, Er), pr = Math.min(Ir, pr), Er > pr) return !1;
        return !0
      }
      intersectsBox(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(rr.minimum, rr.maximum, Sr)
      }
      intersectsSphere(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = rr.center.x - this.origin.x,
          Zr = rr.center.y - this.origin.y,
          Wr = rr.center.z - this.origin.z,
          ar = Qr * Qr + Zr * Zr + Wr * Wr,
          jr = rr.radius + Sr,
          Ir = jr * jr;
        if (ar <= Ir) return !0;
        const fr = Qr * this.direction.x + Zr * this.direction.y + Wr * this.direction.z;
        if (fr < 0) return !1;
        return ar - fr * fr <= Ir
      }
      intersectsTriangle(rr, Sr, Qr) {
        const Zr = xr._TmpVector3[0],
          ar = xr._TmpVector3[1],
          Ir = xr._TmpVector3[2],
          fr = xr._TmpVector3[3],
          Er = xr._TmpVector3[4];
        Sr.subtractToRef(rr, Zr), Qr.subtractToRef(rr, ar), Wr.u.CrossToRef(this.direction, ar, Ir);
        const pr = Wr.u.Dot(Zr, Ir);
        if (0 === pr) return null;
        const mr = 1 / pr;
        this.origin.subtractToRef(rr, fr);
        const Nr = Wr.u.Dot(fr, Ir) * mr;
        if (Nr < -this.epsilon || Nr > 1 + this.epsilon) return null;
        Wr.u.CrossToRef(fr, Zr, Er);
        const Ur = Wr.u.Dot(this.direction, Er) * mr;
        if (Ur < -this.epsilon || Nr + Ur > 1 + this.epsilon) return null;
        const tr = Wr.u.Dot(ar, Er) * mr;
        return tr > this.length || tr < 0 ? null : new jr.d(1 - Nr - Ur, Nr, tr)
      }
      intersectsPlane(rr) {
        let Sr;
        const Qr = Wr.u.Dot(rr.normal, this.direction);
        if (Math.abs(Qr) < 9.99999997475243e-7) return null;
        {
          const Zr = Wr.u.Dot(rr.normal, this.origin);
          return Sr = (-rr.d - Zr) / Qr, Sr < 0 ? Sr < -9.99999997475243e-7 ? null : 0 : Sr
        }
      }
      intersectsAxis(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (rr) {
          case "y": {
            const rr = (this.origin.y - Sr) / this.direction.y;
            return rr > 0 ? null : new Wr.u(this.origin.x + this.direction.x * -rr, Sr, this.origin.z + this.direction.z * -rr)
          }
          case "x": {
            const rr = (this.origin.x - Sr) / this.direction.x;
            return rr > 0 ? null : new Wr.u(Sr, this.origin.y + this.direction.y * -rr, this.origin.z + this.direction.z * -rr)
          }
          case "z": {
            const rr = (this.origin.z - Sr) / this.direction.z;
            return rr > 0 ? null : new Wr.u(this.origin.x + this.direction.x * -rr, this.origin.y + this.direction.y * -rr, Sr)
          }
          default:
            return null
        }
      }
      har(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ar = arguments.length > 4 ? arguments[4] : void 0,
          jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ir = Wr.n.Matrix[0];
        return rr.getWorldMatrix().invertToRef(Ir), this._tmpRay ? xr.TransformToRef(this, Ir, this._tmpRay) : this._tmpRay = xr.Transform(this, Ir), rr.intersects(this._tmpRay, Sr, Qr, Zr, ar, jr)
      }
      intersectsMeshes(rr, Sr, Qr) {
        Qr ? Qr.length = 0 : Qr = [];
        for (let Zr = 0; Zr < rr.length; Zr++) {
          const Wr = this.har(rr[Zr], Sr);
          Wr.hit && Qr.push(Wr)
        }
        return Qr.sort(this._comparePickingInfo), Qr
      }
      _comparePickingInfo(rr, Sr) {
        return rr.distance < Sr.distance ? -1 : rr.distance > Sr.distance ? 1 : 0
      }
      intersectionSegment(rr, Sr, Qr) {
        const Zr = this.origin,
          ar = Wr.n.kU[0],
          jr = Wr.n.kU[1],
          Ir = Wr.n.kU[2],
          fr = Wr.n.kU[3];
        Sr.subtractToRef(rr, ar), this.direction.scaleToRef(xr._Rayl, Ir), Zr.addToRef(Ir, jr), rr.subtractToRef(Zr, fr);
        const Er = Wr.u.Dot(ar, ar),
          pr = Wr.u.Dot(ar, Ir),
          mr = Wr.u.Dot(Ir, Ir),
          Nr = Wr.u.Dot(ar, fr),
          Ur = Wr.u.Dot(Ir, fr),
          tr = Er * mr - pr * pr;
        let hr, zr, Yr = tr,
          nr = tr;
        tr < xr._Smallnum ? (hr = 0, Yr = 1, zr = Ur, nr = mr) : (hr = pr * Ur - mr * Nr, zr = Er * Ur - pr * Nr, hr < 0 ? (hr = 0, zr = Ur, nr = mr) : hr > Yr && (hr = Yr, zr = Ur + pr, nr = mr)), zr < 0 ? (zr = 0, -Nr < 0 ? hr = 0 : -Nr > Er ? hr = Yr : (hr = -Nr, Yr = Er)) : zr > nr && (zr = nr, -Nr + pr < 0 ? hr = 0 : -Nr + pr > Er ? hr = Yr : (hr = -Nr + pr, Yr = Er));
        const er = Math.abs(hr) < xr._Smallnum ? 0 : hr / Yr,
          Kr = Math.abs(zr) < xr._Smallnum ? 0 : zr / nr,
          yr = Wr.n.kU[4];
        Ir.scaleToRef(Kr, yr);
        const Br = Wr.n.kU[5];
        ar.scaleToRef(er, Br), Br.addInPlace(fr);
        const Tr = Wr.n.kU[6];
        Br.subtractToRef(yr, Tr);
        return Kr > 0 && Kr <= this.length && Tr.lengthSquared() < Qr * Qr ? Br.length() : -1
      }
      update(rr, Sr, Qr, Zr, ar, jr, Ir) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          xr._RayDistant || (xr._RayDistant = xr.Zero()), xr._RayDistant.unprojectRayToRef(rr, Sr, Qr, Zr, Wr.d.IdentityReadOnly, jr, Ir);
          const fr = Wr.n.Matrix[0];
          ar.invertToRef(fr), xr.TransformToRef(xr._RayDistant, fr, this)
        } else this.unprojectRayToRef(rr, Sr, Qr, Zr, ar, jr, Ir);
        return this
      }
      static Zero() {
        return new xr(Wr.u.Zero(), Wr.u.Zero())
      }
      static CreateNew(rr, Sr, Qr, Zr, Wr, ar, jr) {
        return xr.Zero().update(rr, Sr, Qr, Zr, Wr, ar, jr)
      }
      static CreateNewFromTo(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.d.IdentityReadOnly;
        const Zr = new xr(new Wr.u(0, 0, 0), new Wr.u(0, 0, 0));
        return xr.CreateFromToToRef(rr, Sr, Zr, Qr)
      }
      static CreateFromToToRef(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wr.d.IdentityReadOnly;
        Qr.origin.iH(rr);
        const ar = Sr.subtractToRef(rr, Qr.direction),
          jr = Math.sqrt(ar.x * ar.x + ar.y * ar.y + ar.z * ar.z);
        return Qr.length = jr, Qr.direction.normalize(), xr.TransformToRef(Qr, Zr, Qr)
      }
      static Transform(rr, Sr) {
        const Qr = new xr(new Wr.u(0, 0, 0), new Wr.u(0, 0, 0));
        return xr.TransformToRef(rr, Sr, Qr), Qr
      }
      static TransformToRef(rr, Sr, Qr) {
        Wr.u.TransformCoordinatesToRef(rr.origin, Sr, Qr.origin), Wr.u.TransformNormalToRef(rr.direction, Sr, Qr.direction), Qr.length = rr.length, Qr.epsilon = rr.epsilon;
        const Zr = Qr.direction,
          ar = Zr.length();
        if (0 !== ar && 1 !== ar) {
          const rr = 1 / ar;
          Zr.x *= rr, Zr.y *= rr, Zr.z *= rr, Qr.length *= ar
        }
        return Qr
      }
      unprojectRayToRef(rr, Sr, Qr, Zr, ar, jr, Ir) {
        const Er = Wr.n.Matrix[0];
        ar.multiplyToRef(jr, Er), Er.multiplyToRef(Ir, Er), Er.invert();
        const pr = fr.b.LastCreatedEngine,
          xr = Wr.n.kU[0];
        xr.x = rr / Qr * 2 - 1, xr.y = -(Sr / Zr * 2 - 1), xr.z = pr?.JZr ? 1 : pr?.isNDCHalfZRange ? 0 : -1;
        const mr = Wr.n.kU[1].Hrr(xr.x, xr.y, 1 - 1e-8),
          Nr = Wr.n.kU[2],
          Ur = Wr.n.kU[3];
        Wr.u.TransformCoordinatesToRef(xr, Er, Nr), Wr.u.TransformCoordinatesToRef(mr, Er, Ur), this.origin.iH(Nr), Ur.subtractToRef(Nr, this.direction), this.direction.normalize()
      }
    }

    function mr(rr, Sr, Qr, Zr, Wr) {
      let ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const jr = xr.Zero();
      return Nr(rr, Sr, Qr, Zr, jr, Wr, ar), jr
    }

    function Nr(rr, Sr, Qr, Zr, ar, jr) {
      let Ir = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fr = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Er = rr.MU();
      if (!jr && !(jr = rr.activeCamera) && !(jr = rr.cameraToUseForPointers)) return rr;
      const pr = jr.viewport,
        xr = Er.getRenderHeight(),
        {
          x: mr,
          y: Nr,
          width: Ur,
          height: tr
        } = pr.toGlobal(Er.getRenderWidth(), xr),
        hr = 1 / Er.getHardwareScalingLevel();
      return Sr = Sr * hr - mr, Qr = Qr * hr - (xr - Nr - tr), ar.update(Sr, Qr, Ur, tr, Zr || Wr.d.IdentityReadOnly, Ir ? Wr.d.IdentityReadOnly : jr.getViewMatrix(), jr.getProjectionMatrix(), fr), rr
    }

    function Ur(rr, Sr, Qr, Zr) {
      const Wr = xr.Zero();
      return tr(rr, Sr, Qr, Wr, Zr), Wr
    }

    function tr(rr, Sr, Qr, Zr, ar) {
      if (!Ir.b) return rr;
      const jr = rr.MU();
      if (!ar && !(ar = rr.activeCamera) && !(ar = rr.cameraToUseForPointers)) throw new Error("Active camera not set");
      const fr = ar.viewport,
        Er = jr.getRenderHeight(),
        {
          x: pr,
          y: xr,
          width: mr,
          height: Nr
        } = fr.toGlobal(jr.getRenderWidth(), Er),
        Ur = Wr.d.Identity(),
        tr = 1 / jr.getHardwareScalingLevel();
      return Sr = Sr * tr - pr, Qr = Qr * tr - (Er - xr - Nr), Zr.update(Sr, Qr, mr, Nr, Ur, Ur, ar.getProjectionMatrix()), rr
    }

    function hr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
      return zr(rr, Qr, Zr, Sr(Zr, Qr.enableDistantPicking), Wr, ar, jr, Ir)
    }

    function zr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
      const fr = Sr.intersects(Zr, Wr, jr, ar, Qr, Ir);
      return fr && fr.hit ? !Wr && null != rr && fr.distance >= rr.distance ? null : fr : null
    }

    function Yr(rr, Sr) {
      return "InstancedLinesMesh" === rr || "LinesMesh" === rr ? Sr.intersectionThreshold : 0
    }

    function nr(rr) {
      const Sr = rr.getClassName();
      if ("GreasedLineMesh" === Sr) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const Qr = rr.rawBoundingInfo;
      return {
        rawBoundingInfo: Qr,
        intersectionThreshold: Qr ? Yr(Sr, rr) : 0
      }
    }

    function er(rr, Sr, Qr, Zr, Wr) {
      const ar = rr(Qr, Sr.enableDistantPicking);
      return ar.intersectsSphere(Zr.oWr, Wr) && ar.intersectsBox(Zr.boundingBox, Wr) ? ar : null
    }

    function Kr(rr, Sr, Qr, Zr, ar, jr) {
      let fr = null;
      const Er = !!(rr.activeCameras && rr.activeCameras.length > 1 && rr.cameraToUseForPointers !== rr.activeCamera),
        xr = rr.cameraToUseForPointers || rr.activeCamera,
        mr = pr.internalPickerForMesh || hr,
        Nr = mr === hr;
      for (let Ir = 0; Ir < rr.meshes.length; Ir++) {
        const pr = rr.meshes[Ir];
        if (Qr) {
          if (!Qr(pr, -1)) continue
        } else if (!pr.isEnabled() || !pr.isVisible || !pr.ut) continue;
        const Ur = Er && pr.isWorldMatrixCameraDependent(),
          tr = pr.computeWorldMatrix(Ur, xr);
        if (pr.hasThinInstances && pr.NQr) {
          const rr = mr(fr, Sr, pr, tr, !0, !0, jr);
          if (rr) {
            if (ar) return rr;
            const {
              rawBoundingInfo: Ir,
              intersectionThreshold: Er
            } = nr(pr), xr = pr._thinInstanceDataStorage.matrixData;
            if (xr) {
              const rr = Wr.n.Matrix[0],
                Ur = Wr.n.Matrix[1],
                hr = Math.min(pr.frr, xr.length >> 4);
              for (let Yr = 0; Yr < hr; Yr++) {
                if (Qr && !Qr(pr, Yr)) continue;
                Wr.d.FromArrayToRef(xr, Yr << 4, rr), rr.multiplyToRef(tr, Ur);
                const hr = Nr && Ir ? er(Sr, pr, Ur, Ir, Er) : null;
                if (Nr && Ir && !hr) continue;
                const nr = Nr && hr ? zr(fr, pr, Ur, hr, Zr, ar, jr, !0) : mr(fr, Sr, pr, Ur, Zr, ar, jr, !0);
                if (nr && (fr = nr, fr.thinInstanceIndex = Yr, Zr)) return fr
              }
            }
          }
        } else {
          const rr = mr(fr, Sr, pr, tr, Zr, ar, jr);
          if (rr && (fr = rr, Zr)) return fr
        }
      }
      return fr || new Ir.b
    }

    function yr(rr, Sr, Qr, Zr) {
      if (!Ir.b) return null;
      const ar = [],
        jr = !!(rr.activeCameras && rr.activeCameras.length > 1 && rr.cameraToUseForPointers !== rr.activeCamera),
        fr = rr.cameraToUseForPointers || rr.activeCamera,
        Er = pr.internalPickerForMesh || hr,
        xr = Er === hr;
      for (let Ir = 0; Ir < rr.meshes.length; Ir++) {
        const pr = rr.meshes[Ir];
        if (Qr) {
          if (!Qr(pr, -1)) continue
        } else if (!pr.isEnabled() || !pr.isVisible || !pr.ut) continue;
        const mr = jr && pr.isWorldMatrixCameraDependent(),
          Nr = pr.computeWorldMatrix(mr, fr);
        if (pr.hasThinInstances && pr.NQr) {
          if (Er(null, Sr, pr, Nr, !0, !0, Zr)) {
            const {
              rawBoundingInfo: rr,
              intersectionThreshold: jr
            } = nr(pr), Ir = pr._thinInstanceDataStorage.matrixData;
            if (Ir) {
              const fr = Wr.n.Matrix[0],
                mr = Wr.n.Matrix[1],
                Ur = Math.min(pr.frr, Ir.length >> 4);
              for (let tr = 0; tr < Ur; tr++) {
                if (Qr && !Qr(pr, tr)) continue;
                Wr.d.FromArrayToRef(Ir, tr << 4, fr), fr.multiplyToRef(Nr, mr);
                const Ur = xr && rr ? er(Sr, pr, mr, rr, jr) : null;
                if (xr && rr && !Ur) continue;
                const hr = xr && Ur ? zr(null, pr, mr, Ur, !1, !1, Zr, !0) : Er(null, Sr, pr, mr, !1, !1, Zr, !0);
                hr && (hr.thinInstanceIndex = tr, ar.push(hr))
              }
            }
          }
        } else {
          const rr = Er(null, Sr, pr, Nr, !1, !1, Zr);
          rr && ar.push(rr)
        }
      }
      return ar
    }

    function Br(rr, Sr, Qr, Zr, ar, jr) {
      if (!Ir.b) return null;
      const fr = Kr(rr, (Zr => (rr._tempPickingRay || (rr._tempPickingRay = xr.Zero()), Nr(rr, Sr, Qr, Zr, rr._tempPickingRay, jr || null), rr._tempPickingRay)), Zr, ar, !0);
      return fr && (fr.ray = mr(rr, Sr, Qr, Wr.d.Identity(), jr || null)), fr
    }

    function Tr(rr, Sr, Qr, Zr, ar, jr, Ir) {
      const fr = Kr(rr, ((Zr, Wr) => (rr._tempPickingRay || (rr._tempPickingRay = xr.Zero()), Nr(rr, Sr, Qr, Zr, rr._tempPickingRay, jr || null, !1, Wr), rr._tempPickingRay)), Zr, ar, !1, Ir);
      return fr && (fr.ray = mr(rr, Sr, Qr, Wr.d.Identity(), jr || null)), fr
    }

    function vr(rr, Sr, Qr, Zr, ar) {
      const jr = Kr(rr, (Qr => (rr._pickWithRayInverseMatrix || (rr._pickWithRayInverseMatrix = Wr.d.Identity()), Qr.invertToRef(rr._pickWithRayInverseMatrix), rr._cachedRayForTransform || (rr._cachedRayForTransform = xr.Zero()), xr.TransformToRef(Sr, rr._pickWithRayInverseMatrix, rr._cachedRayForTransform), rr._cachedRayForTransform)), Qr, Zr, !1, ar);
      return jr && (jr.ray = Sr), jr
    }

    function Or(rr, Sr, Qr, Zr, Wr, ar) {
      return yr(rr, (Zr => mr(rr, Sr, Qr, Zr, Wr || null)), Zr, ar)
    }

    function Lr(rr, Sr, Qr, Zr) {
      return yr(rr, (Qr => (rr._pickWithRayInverseMatrix || (rr._pickWithRayInverseMatrix = Wr.d.Identity()), Qr.invertToRef(rr._pickWithRayInverseMatrix), rr._cachedRayForTransform || (rr._cachedRayForTransform = xr.Zero()), xr.TransformToRef(Sr, rr._pickWithRayInverseMatrix, rr._cachedRayForTransform), rr._cachedRayForTransform)), Qr, Zr)
    }

    function lr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Zr = arguments.length > 3 ? arguments[3] : void 0,
        ar = arguments.length > 4 ? arguments[4] : void 0;
      Zr || (Zr = rr.getWorldMatrix()), Sr.length = Qr, ar ? Sr.origin.iH(ar) : Sr.origin.iH(rr.position);
      const jr = Wr.n.kU[2];
      jr.set(0, 0, rr._scene.useRightHandedSystem ? -1 : 1);
      const Ir = Wr.n.kU[3];
      return Wr.u.TransformNormalToRef(jr, Zr, Ir), Wr.u.NormalizeToRef(Ir, Sr.direction), Sr
    }

    function Xr(rr, Sr) {
      Sr && (Sr.prototype.getForwardRay = function() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        return lr(this, new xr(Wr.u.Zero(), Wr.u.Zero(), rr), rr, Sr, Qr)
      }, Sr.prototype.getForwardRayToRef = function(rr) {
        return lr(this, rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), rr && (Er.b._IsPickingAvailable = !0, rr.prototype.createPickingRay = function(rr, Sr, Qr, Zr) {
        return mr(this, rr, Sr, Qr, Zr, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    xr._TmpVector3 = (0, ar.e)(6, Wr.u.Zero), xr._RayDistant = xr.Zero(), xr._Smallnum = 1e-8, xr._Rayl = 1e9
  },
  54093: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar.A
    });
    var Zr = Qr(41941),
      Wr = Qr(42057),
      ar = Qr(54096);
    let jr = !1;
    jr || (jr = !0, (0, ar.c)(Zr.f, Wr.d), Zr.f.prototype.createPickingRayToRef = function(rr, Sr, Qr, Zr, Wr) {
      let jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ir = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ar.l)(this, rr, Sr, Qr, Zr, Wr, jr, Ir)
    }, Zr.f.prototype.createPickingRayInCameraSpace = function(rr, Sr, Qr) {
      return (0, ar.i)(this, rr, Sr, Qr)
    }, Zr.f.prototype.createPickingRayInCameraSpaceToRef = function(rr, Sr, Qr, Zr) {
      return (0, ar.f)(this, rr, Sr, Qr, Zr)
    }, Zr.f.prototype.pickWithBoundingInfo = function(rr, Sr, Qr, Zr, Wr) {
      return (0, ar.s)(this, rr, Sr, Qr, Zr, Wr)
    }, Zr.f.prototype.eN = function(rr, Sr, Qr, Zr, Wr, jr) {
      let Ir = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ar.w)(this, rr, Sr, Qr, Zr, Wr, jr, Ir)
    }, Zr.f.prototype.pickWithRay = function(rr, Sr, Qr, Zr) {
      return (0, ar.u)(this, rr, Sr, Qr, Zr)
    }, Zr.f.prototype.multiPick = function(rr, Sr, Qr, Zr, Wr) {
      return (0, ar.q)(this, rr, Sr, Qr, Zr, Wr)
    }, Zr.f.prototype.multiPickWithRay = function(rr, Sr, Qr) {
      return (0, ar.p)(this, rr, Sr, Qr)
    })
  },
  54098: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38560),
      jr = Qr(42094),
      Ir = Qr(54104),
      fr = Qr(42060),
      Er = Qr(38609);
    let pr = (() => {
        var rr;
        let Sr, Qr, fr, Er, pr, xr, mr, Nr, Ur = Ir.c,
          tr = [],
          hr = [],
          zr = [],
          Yr = [],
          nr = [],
          er = [],
          Kr = [],
          yr = [],
          Br = [],
          Tr = [],
          vr = [],
          Or = [],
          Lr = [];
        return rr = class extends Ur {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(rr) {
            this._shadowFrustumSize = rr, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(rr) {
            this._shadowOrthoScale = rr, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(rr) {
            this._orthoLeft = rr
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(rr) {
            this._orthoRight = rr
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(rr) {
            this._orthoTop = rr
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(rr) {
            this._orthoBottom = rr
          }
          constructor(rr, Sr, Qr, Wr) {
            super(rr, Qr, Wr), this._shadowFrustumSize = ((0, Zr.m)(this, tr), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Zr.m)(this, hr, !0), this.autoCalcShadowZBounds = ((0, Zr.m)(this, zr), (0, Zr.m)(this, Yr, !1)), this._orthoLeft = ((0, Zr.m)(this, nr), (0, Zr.m)(this, er, Number.MAX_VALUE)), this._orthoRight = ((0, Zr.m)(this, Kr), (0, Zr.m)(this, yr, Number.MIN_VALUE)), this._orthoTop = ((0, Zr.m)(this, Br), (0, Zr.m)(this, Tr, Number.MIN_VALUE)), this._orthoBottom = ((0, Zr.m)(this, vr), (0, Zr.m)(this, Or, Number.MAX_VALUE)), (0, Zr.m)(this, Lr), this.position = Sr.scale(-1), this.direction = Sr
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return jr.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(rr, Sr, Qr) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(rr) : this._setDefaultAutoExtendShadowProjectionMatrix(rr, Sr, Qr)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(rr) {
            const Sr = this.eC().activeCamera;
            ar.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Sr ? Sr.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Sr ? Sr.maxZ : 1e4, rr, this.eC().MU().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(rr, Sr, Qr) {
            const Zr = this.eC().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const rr = ar.u.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Zr = Number.MAX_VALUE,
                Wr = -Number.MAX_VALUE;
              for (let jr = 0; jr < Qr.length; jr++) {
                const Ir = Qr[jr];
                if (!Ir) continue;
                const fr = Ir.mG().boundingBox;
                for (let Qr = 0; Qr < fr.vectorsWorld.length; Qr++) ar.u.TransformCoordinatesToRef(fr.vectorsWorld[Qr], Sr, rr), rr.x < this._orthoLeft && (this._orthoLeft = rr.x), rr.y < this._orthoBottom && (this._orthoBottom = rr.y), rr.x > this._orthoRight && (this._orthoRight = rr.x), rr.y > this._orthoTop && (this._orthoTop = rr.y), this.autoCalcShadowZBounds && (rr.z < Zr && (Zr = rr.z), rr.z > Wr && (Wr = rr.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Zr, this._shadowMaxZ = Wr)
            }
            const Wr = this._orthoRight - this._orthoLeft,
              jr = this._orthoTop - this._orthoBottom,
              Ir = void 0 !== this.shadowMinZ ? this.shadowMinZ : Zr?.minZ || 0,
              fr = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Zr?.maxZ || 1e4,
              Er = this.eC().MU().JZr;
            ar.d.OrthoOffCenterLHToRef(this._orthoLeft - Wr * this.shadowOrthoScale, this._orthoRight + Wr * this.shadowOrthoScale, this._orthoBottom - jr * this.shadowOrthoScale, this._orthoTop + jr * this.shadowOrthoScale, Er ? fr : Ir, Er ? Ir : fr, rr, this.eC().MU().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(rr, Sr) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Sr), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Sr), this)
          }
          transferToNodeMaterialEffect(rr, Sr) {
            return this.computeTransformedInformation() ? (rr.setFloat3(Sr, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (rr.setFloat3(Sr, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(rr) {
            const Sr = this._scene.MU();
            return !Sr.JZr && Sr.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(rr) {
            const Sr = this._scene.MU();
            return Sr.JZr && Sr.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(rr, Sr) {
            rr["DIRLIGHT" + Sr] = !0
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ur[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], pr = [(0, Wr.G)("orthoLeft")], xr = [(0, Wr.G)("orthoRight")], mr = [(0, Wr.G)("orthoTop")], Nr = [(0, Wr.G)("orthoBottom")], (0, Zr.k)(rr, null, Sr, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: rr => "shadowFrustumSize" in rr,
              get: rr => rr.shadowFrustumSize
            },
            metadata: ar
          }, null, tr), (0, Zr.k)(rr, null, Qr, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: rr => "shadowOrthoScale" in rr,
              get: rr => rr.shadowOrthoScale
            },
            metadata: ar
          }, null, tr), (0, Zr.k)(null, null, fr, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: rr => "autoUpdateExtends" in rr,
              get: rr => rr.autoUpdateExtends,
              set: (rr, Sr) => {
                rr.autoUpdateExtends = Sr
              }
            },
            metadata: ar
          }, hr, zr), (0, Zr.k)(null, null, Er, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: rr => "autoCalcShadowZBounds" in rr,
              get: rr => rr.autoCalcShadowZBounds,
              set: (rr, Sr) => {
                rr.autoCalcShadowZBounds = Sr
              }
            },
            metadata: ar
          }, Yr, nr), (0, Zr.k)(null, null, pr, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: rr => "_orthoLeft" in rr,
              get: rr => rr._orthoLeft,
              set: (rr, Sr) => {
                rr._orthoLeft = Sr
              }
            },
            metadata: ar
          }, er, Kr), (0, Zr.k)(null, null, xr, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: rr => "_orthoRight" in rr,
              get: rr => rr._orthoRight,
              set: (rr, Sr) => {
                rr._orthoRight = Sr
              }
            },
            metadata: ar
          }, yr, Br), (0, Zr.k)(null, null, mr, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: rr => "_orthoTop" in rr,
              get: rr => rr._orthoTop,
              set: (rr, Sr) => {
                rr._orthoTop = Sr
              }
            },
            metadata: ar
          }, Tr, vr), (0, Zr.k)(null, null, Nr, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: rr => "_orthoBottom" in rr,
              get: rr => rr._orthoBottom,
              set: (rr, Sr) => {
                rr._orthoBottom = Sr
              }
            },
            metadata: ar
          }, Or, Lr), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr
      })(),
      xr = !1;
    xr || (xr = !0, fr.c.AddNodeConstructor("Light_Type_1", ((rr, Sr) => () => new pr(rr, ar.u.Zero(), Sr))), (0, Er.e)("BABYLON.DirectionalLight", pr))
  },
  40284: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      f: () => ar,
      i: () => jr,
      j: () => Ir
    });
    var Zr = Qr(38684);
    class Wr {
      constructor(rr, Sr, Qr) {
        this.gradient = rr, this.color1 = Sr, this.color2 = Qr
      }
      getColorToRef(rr) {
        this.color2 ? Zr.f.LerpToRef(this.color1, this.color2, Math.random(), rr) : rr.iH(this.color1)
      }
    }
    class ar {
      constructor(rr, Sr) {
        this.gradient = rr, this.color = Sr
      }
    }
    class jr {
      constructor(rr, Sr, Qr) {
        this.gradient = rr, this.factor1 = Sr, this.factor2 = Qr
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Ir {
      static GetCurrentGradient(rr, Sr, Qr) {
        if (Sr[0].gradient > rr) return void Qr(Sr[0], Sr[0], 1);
        for (let Wr = 0; Wr < Sr.length - 1; Wr++) {
          const Zr = Sr[Wr],
            ar = Sr[Wr + 1];
          if (rr >= Zr.gradient && rr <= ar.gradient) {
            return void Qr(Zr, ar, (rr - Zr.gradient) / (ar.gradient - Zr.gradient))
          }
        }
        const Zr = Sr.length - 1;
        Qr(Sr[Zr], Sr[Zr], 1)
      }
    }
  },
  40286: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(38560),
      Wr = Qr(38599),
      ar = Qr(40237);
    class jr {
      constructor() {
        this.direction1 = new Zr.u(0, 1, 0), this.direction2 = new Zr.u(0, 1, 0), this.minEmitBox = new Zr.u(-.5, -.5, -.5), this.maxEmitBox = new Zr.u(.5, .5, .5)
      }
      startDirectionFunction(rr, Sr, Qr, ar) {
        const jr = (0, Wr.RandomRange)(this.direction1.x, this.direction2.x),
          Ir = (0, Wr.RandomRange)(this.direction1.y, this.direction2.y),
          fr = (0, Wr.RandomRange)(this.direction1.z, this.direction2.z);
        if (ar) return Sr.x = jr, Sr.y = Ir, void(Sr.z = fr);
        Zr.u.TransformNormalFromFloatsToRef(jr, Ir, fr, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, ar) {
        const jr = (0, Wr.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Ir = (0, Wr.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          fr = (0, Wr.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (ar) return Sr.x = jr, Sr.y = Ir, void(Sr.z = fr);
        Zr.u.TransformCoordinatesFromFloatsToRef(jr, Ir, fr, rr, Sr)
      }
      clone() {
        const rr = new jr;
        return ar.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setVector3("direction1", this.direction1), rr.setVector3("direction2", this.direction2), rr.setVector3("minEmitBox", this.minEmitBox), rr.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(rr) {
        rr.addUniform("direction1", 3), rr.addUniform("direction2", 3), rr.addUniform("minEmitBox", 3), rr.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr.minEmitBox = this.minEmitBox.OWr(), rr.maxEmitBox = this.maxEmitBox.OWr(), rr
      }
      parse(rr) {
        Zr.u.FromArrayToRef(rr.direction1, 0, this.direction1), Zr.u.FromArrayToRef(rr.direction2, 0, this.direction2), Zr.u.FromArrayToRef(rr.minEmitBox, 0, this.minEmitBox), Zr.u.FromArrayToRef(rr.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  40234: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      h: () => jr
    });
    var Zr = Qr(38560),
      Wr = Qr(38599),
      ar = Qr(40237);
    class jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = rr, this.height = Sr, this.radiusRange = Qr, this.directionRandomizer = Wr, this._tempVector = Zr.u.Zero()
      }
      startDirectionFunction(rr, Sr, Qr, ar, jr) {
        Qr.position.subtractToRef(rr.getTranslation(), this._tempVector), this._tempVector.normalize(), Zr.u.TransformNormalToRef(this._tempVector, jr, this._tempVector);
        const Ir = (0, Wr.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let fr = Math.atan2(this._tempVector.x, this._tempVector.z);
        fr += (0, Wr.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Ir, this._tempVector.x = Math.sin(fr), this._tempVector.z = Math.cos(fr), this._tempVector.normalize(), ar ? Sr.iH(this._tempVector) : Zr.u.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, ar) {
        const jr = (0, Wr.RandomRange)(-this.height / 2, this.height / 2),
          Ir = (0, Wr.RandomRange)(0, 2 * Math.PI),
          fr = (0, Wr.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Er = Math.sqrt(fr) * this.radius,
          pr = Er * Math.cos(Ir),
          xr = Er * Math.sin(Ir);
        ar ? Sr.Hrr(pr, jr, xr) : Zr.u.TransformCoordinatesFromFloatsToRef(pr, jr, xr, rr, Sr)
      }
      clone() {
        const rr = new jr(this.radius, this.directionRandomizer);
        return ar.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setFloat("radius", this.radius), rr.setFloat("height", this.height), rr.setFloat("radiusRange", this.radiusRange), rr.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(rr) {
        rr.addUniform("radius", 1), rr.addUniform("height", 1), rr.addUniform("radiusRange", 1), rr.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.radius = this.radius, rr.height = this.height, rr.radiusRange = this.radiusRange, rr.directionRandomizer = this.directionRandomizer, rr
      }
      parse(rr) {
        this.radius = rr.radius, this.height = rr.height, this.radiusRange = rr.radiusRange, this.directionRandomizer = rr.directionRandomizer
      }
    }
    class Ir extends jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zr.u(0, 1, 0),
          ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zr.u(0, 1, 0);
        super(rr, Sr, Qr), this.direction1 = Wr, this.direction2 = ar
      }
      startDirectionFunction(rr, Sr, Qr, ar) {
        const jr = (0, Wr.RandomRange)(this.direction1.x, this.direction2.x),
          Ir = (0, Wr.RandomRange)(this.direction1.y, this.direction2.y),
          fr = (0, Wr.RandomRange)(this.direction1.z, this.direction2.z);
        ar ? Sr.Hrr(jr, Ir, fr) : Zr.u.TransformNormalFromFloatsToRef(jr, Ir, fr, rr, Sr)
      }
      clone() {
        const rr = new Ir(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return ar.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setFloat("radius", this.radius), rr.setFloat("height", this.height), rr.setFloat("radiusRange", this.radiusRange), rr.setVector3("direction1", this.direction1), rr.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(rr) {
        rr.addUniform("radius", 1), rr.addUniform("height", 1), rr.addUniform("radiusRange", 1), rr.addUniform("direction1", 3), rr.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const rr = super.serialize();
        return rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr
      }
      parse(rr) {
        super.parse(rr), Zr.u.FromArrayToRef(rr.direction1, 0, this.direction1), Zr.u.FromArrayToRef(rr.direction2, 0, this.direction2)
      }
    }
  },
  54116: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => FS
    });
    var Zr = Qr(40284),
      Wr = Qr(38595),
      ar = Qr(38560),
      jr = Qr(41995),
      Ir = Qr(54122),
      fr = Qr(38587),
      Er = Qr(42119),
      pr = Qr(38684),
      xr = Qr(40286),
      mr = Qr(40237),
      Nr = Qr(38599);
    class Ur {
      constructor() {
        this.direction1 = new ar.u(0, 1, 0), this.direction2 = new ar.u(0, 1, 0)
      }
      startDirectionFunction(rr, Sr, Qr, Zr) {
        const Wr = (0, Nr.RandomRange)(this.direction1.x, this.direction2.x),
          jr = (0, Nr.RandomRange)(this.direction1.y, this.direction2.y),
          Ir = (0, Nr.RandomRange)(this.direction1.z, this.direction2.z);
        Zr ? Sr.Hrr(Wr, jr, Ir) : ar.u.TransformNormalFromFloatsToRef(Wr, jr, Ir, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, Zr) {
        Zr ? Sr.Hrr(0, 0, 0) : ar.u.TransformCoordinatesFromFloatsToRef(0, 0, 0, rr, Sr)
      }
      clone() {
        const rr = new Ur;
        return mr.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setVector3("direction1", this.direction1), rr.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(rr) {
        rr.addUniform("direction1", 3), rr.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr
      }
      parse(rr) {
        ar.u.FromArrayToRef(rr.direction1, 0, this.direction1), ar.u.FromArrayToRef(rr.direction2, 0, this.direction2)
      }
    }
    class tr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = rr, this.radiusRange = Sr, this.directionRandomizer = Qr
      }
      startDirectionFunction(rr, Sr, Qr, Zr) {
        const Wr = Qr.position.subtract(rr.getTranslation()).normalize(),
          jr = (0, Nr.RandomRange)(0, this.directionRandomizer),
          Ir = (0, Nr.RandomRange)(0, this.directionRandomizer),
          fr = (0, Nr.RandomRange)(0, this.directionRandomizer);
        Wr.x += jr, Wr.y += Ir, Wr.z += fr, Wr.normalize(), Zr ? Sr.iH(Wr) : ar.u.TransformNormalFromFloatsToRef(Wr.x, Wr.y, Wr.z, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, Zr) {
        const Wr = this.radius - (0, Nr.RandomRange)(0, this.radius * this.radiusRange),
          jr = (0, Nr.RandomRange)(0, 1),
          Ir = (0, Nr.RandomRange)(0, 2 * Math.PI),
          fr = Math.acos(2 * jr - 1),
          Er = Wr * Math.cos(Ir) * Math.sin(fr),
          pr = Wr * Math.cos(fr),
          xr = Wr * Math.sin(Ir) * Math.sin(fr);
        Zr ? Sr.Hrr(Er, Math.abs(pr), xr) : ar.u.TransformCoordinatesFromFloatsToRef(Er, Math.abs(pr), xr, rr, Sr)
      }
      clone() {
        const rr = new tr(this.radius, this.directionRandomizer);
        return mr.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setFloat("radius", this.radius), rr.setFloat("radiusRange", this.radiusRange), rr.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(rr) {
        rr.addUniform("radius", 1), rr.addUniform("radiusRange", 1), rr.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.radius = this.radius, rr.radiusRange = this.radiusRange, rr.directionRandomizer = this.directionRandomizer, rr
      }
      parse(rr) {
        this.radius = rr.radius, this.radiusRange = rr.radiusRange, this.directionRandomizer = rr.directionRandomizer
      }
    }
    class hr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = rr, this.radiusRange = Sr, this.directionRandomizer = Qr
      }
      startDirectionFunction(rr, Sr, Qr, Zr) {
        const Wr = Qr.position.subtract(rr.getTranslation()).normalize(),
          jr = (0, Nr.RandomRange)(0, this.directionRandomizer),
          Ir = (0, Nr.RandomRange)(0, this.directionRandomizer),
          fr = (0, Nr.RandomRange)(0, this.directionRandomizer);
        Wr.x += jr, Wr.y += Ir, Wr.z += fr, Wr.normalize(), Zr ? Sr.iH(Wr) : ar.u.TransformNormalFromFloatsToRef(Wr.x, Wr.y, Wr.z, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, Zr) {
        const Wr = this.radius - (0, Nr.RandomRange)(0, this.radius * this.radiusRange),
          jr = (0, Nr.RandomRange)(0, 1),
          Ir = (0, Nr.RandomRange)(0, 2 * Math.PI),
          fr = Math.acos(2 * jr - 1),
          Er = Wr * Math.cos(Ir) * Math.sin(fr),
          pr = Wr * Math.cos(fr),
          xr = Wr * Math.sin(Ir) * Math.sin(fr);
        Zr ? Sr.Hrr(Er, pr, xr) : ar.u.TransformCoordinatesFromFloatsToRef(Er, pr, xr, rr, Sr)
      }
      clone() {
        const rr = new hr(this.radius, this.directionRandomizer);
        return mr.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setFloat("radius", this.radius), rr.setFloat("radiusRange", this.radiusRange), rr.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(rr) {
        rr.addUniform("radius", 1), rr.addUniform("radiusRange", 1), rr.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.radius = this.radius, rr.radiusRange = this.radiusRange, rr.directionRandomizer = this.directionRandomizer, rr
      }
      parse(rr) {
        this.radius = rr.radius, this.radiusRange = rr.radiusRange, this.directionRandomizer = rr.directionRandomizer
      }
    }
    class zr extends hr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ar.u(0, 1, 0),
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ar.u(0, 1, 0);
        super(rr), this.direction1 = Sr, this.direction2 = Qr
      }
      startDirectionFunction(rr, Sr, Qr, Zr) {
        const Wr = (0, Nr.RandomRange)(this.direction1.x, this.direction2.x),
          jr = (0, Nr.RandomRange)(this.direction1.y, this.direction2.y),
          Ir = (0, Nr.RandomRange)(this.direction1.z, this.direction2.z);
        Zr ? Sr.Hrr(Wr, jr, Ir) : ar.u.TransformNormalFromFloatsToRef(Wr, jr, Ir, rr, Sr)
      }
      clone() {
        const rr = new zr(this.radius, this.direction1, this.direction2);
        return mr.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setFloat("radius", this.radius), rr.setFloat("radiusRange", this.radiusRange), rr.setVector3("direction1", this.direction1), rr.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(rr) {
        rr.addUniform("radius", 1), rr.addUniform("radiusRange", 1), rr.addUniform("direction1", 3), rr.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const rr = super.serialize();
        return rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr
      }
      parse(rr) {
        super.parse(rr), ar.u.FromArrayToRef(rr.direction1, 0, this.direction1), ar.u.FromArrayToRef(rr.direction2, 0, this.direction2)
      }
    }
    var Yr = Qr(40234);
    class nr {
      get radius() {
        return this._radius
      }
      set radius(rr) {
        this._radius = rr, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(rr) {
        this._angle = rr, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = Qr, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Sr, this.radius = rr
      }
      startDirectionFunction(rr, Sr, Qr, Zr) {
        const Wr = Qr.position.subtract(rr.getTranslation()).normalize(),
          jr = (0, Nr.RandomRange)(0, this.directionRandomizer),
          Ir = (0, Nr.RandomRange)(0, this.directionRandomizer),
          fr = (0, Nr.RandomRange)(0, this.directionRandomizer);
        Wr.x += jr, Wr.y += Ir, Wr.z += fr, Wr.normalize(), Zr ? Sr.iH(Wr) : ar.u.TransformNormalFromFloatsToRef(Wr.x, Wr.y, Wr.z, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, Zr) {
        const Wr = (0, Nr.RandomRange)(0, 2 * Math.PI);
        let jr;
        this.emitFromSpawnPointOnly ? jr = 1e-4 : (jr = (0, Nr.RandomRange)(0, this.heightRange), jr = 1 - jr * jr);
        let Ir = this._radius - (0, Nr.RandomRange)(0, this._radius * this.radiusRange);
        Ir *= jr;
        const fr = Ir * Math.sin(Wr),
          Er = Ir * Math.cos(Wr),
          pr = jr * this._height;
        if (Zr) return Sr.x = fr, Sr.y = pr, void(Sr.z = Er);
        ar.u.TransformCoordinatesFromFloatsToRef(fr, pr, Er, rr, Sr)
      }
      clone() {
        const rr = new nr(this._radius, this._angle, this.directionRandomizer);
        return mr.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setFloat2("radius", this._radius, this.radiusRange), rr.setFloat("coneAngle", this._angle), rr.setFloat2("height", this._height, this.heightRange), rr.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(rr) {
        rr.addUniform("radius", 2), rr.addUniform("coneAngle", 1), rr.addUniform("height", 2), rr.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let rr = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (rr += "\n#define CONEEMITTERSPAWNPOINT"), rr
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.radius = this._radius, rr.angle = this._angle, rr.directionRandomizer = this.directionRandomizer, rr.radiusRange = this.radiusRange, rr.heightRange = this.heightRange, rr.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, rr
      }
      parse(rr) {
        this.radius = rr.radius, this.angle = rr.angle, this.directionRandomizer = rr.directionRandomizer, this.radiusRange = void 0 !== rr.radiusRange ? rr.radiusRange : 1, this.heightRange = void 0 !== rr.heightRange ? rr.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== rr.emitFromSpawnPointOnly && rr.emitFromSpawnPointOnly
      }
    }
    class er extends nr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ar.u(0, 1, 0),
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ar.u(0, 1, 0);
        super(rr, Sr), this.direction1 = Qr, this.direction2 = Zr
      }
      startDirectionFunction(rr, Sr, Qr, Zr) {
        const Wr = (0, Nr.RandomRange)(this.direction1.x, this.direction2.x),
          jr = (0, Nr.RandomRange)(this.direction1.y, this.direction2.y),
          Ir = (0, Nr.RandomRange)(this.direction1.z, this.direction2.z);
        Zr ? Sr.Hrr(Wr, jr, Ir) : ar.u.TransformNormalFromFloatsToRef(Wr, jr, Ir, rr, Sr)
      }
      clone() {
        const rr = new er(this.radius, this.angle, this.direction1, this.direction2);
        return mr.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        super.applyToShader(rr), rr.setVector3("direction1", this.direction1), rr.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(rr) {
        super.buildUniformLayout(rr), rr.addUniform("direction1", 3), rr.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const rr = super.serialize();
        return rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr
      }
      parse(rr) {
        super.parse(rr), ar.u.FromArrayToRef(rr.direction1, 0, this.direction1), ar.u.FromArrayToRef(rr.direction2, 0, this.direction2)
      }
    }
    class Kr {
      get mesh() {
        return this._mesh
      }
      set mesh(rr) {
        this._mesh !== rr && (this._mesh = rr, rr ? (this._indices = rr.yar(), this._positions = rr.getVerticesData(jr.j.PositionKind), this._normals = rr.getVerticesData(jr.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = ar.u.Zero(), this._mesh = null, this.direction1 = new ar.u(0, 1, 0), this.direction2 = new ar.u(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = rr
      }
      startDirectionFunction(rr, Sr, Qr, Zr) {
        if (this.useMeshNormalsForDirection && this._normals) return void ar.u.TransformNormalToRef(this._storedNormal, rr, Sr);
        const Wr = (0, Nr.RandomRange)(this.direction1.x, this.direction2.x),
          jr = (0, Nr.RandomRange)(this.direction1.y, this.direction2.y),
          Ir = (0, Nr.RandomRange)(this.direction1.z, this.direction2.z);
        Zr ? Sr.Hrr(Wr, jr, Ir) : ar.u.TransformNormalFromFloatsToRef(Wr, jr, Ir, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, Zr) {
        if (!this._indices || !this._positions) return;
        const Wr = 3 * (Math.random() * (this._indices.length / 3) | 0),
          jr = Math.random(),
          Ir = Math.random() * (1 - jr),
          fr = 1 - jr - Ir,
          Er = this._indices[Wr],
          pr = this._indices[Wr + 1],
          xr = this._indices[Wr + 2],
          mr = ar.n.kU[0],
          Nr = ar.n.kU[1],
          Ur = ar.n.kU[2],
          tr = ar.n.kU[3];
        ar.u.FromArrayToRef(this._positions, 3 * Er, mr), ar.u.FromArrayToRef(this._positions, 3 * pr, Nr), ar.u.FromArrayToRef(this._positions, 3 * xr, Ur), tr.x = jr * mr.x + Ir * Nr.x + fr * Ur.x, tr.y = jr * mr.y + Ir * Nr.y + fr * Ur.y, tr.z = jr * mr.z + Ir * Nr.z + fr * Ur.z, Zr ? Sr.Hrr(tr.x, tr.y, tr.z) : ar.u.TransformCoordinatesFromFloatsToRef(tr.x, tr.y, tr.z, rr, Sr), this.useMeshNormalsForDirection && this._normals && (ar.u.FromArrayToRef(this._normals, 3 * Er, mr), ar.u.FromArrayToRef(this._normals, 3 * pr, Nr), ar.u.FromArrayToRef(this._normals, 3 * xr, Ur), this._storedNormal.x = jr * mr.x + Ir * Nr.x + fr * Ur.x, this._storedNormal.y = jr * mr.y + Ir * Nr.y + fr * Ur.y, this._storedNormal.z = jr * mr.z + Ir * Nr.z + fr * Ur.z)
      }
      clone() {
        const rr = new Kr(this.mesh);
        return mr.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setVector3("direction1", this.direction1), rr.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(rr) {
        rr.addUniform("direction1", 3), rr.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr.meshId = this.mesh?.id, rr.useMeshNormalsForDirection = this.useMeshNormalsForDirection, rr
      }
      parse(rr, Sr) {
        ar.u.FromArrayToRef(rr.direction1, 0, this.direction1), ar.u.FromArrayToRef(rr.direction2, 0, this.direction2), rr.meshId && Sr && (this.mesh = Sr.getLastMeshById(rr.meshId)), this.useMeshNormalsForDirection = rr.useMeshNormalsForDirection
      }
    }
    class yr {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(rr) {
        this._targetStopDuration !== rr && (this._targetStopDuration = rr)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(rr) {
        this._noiseTexture !== rr && (this._noiseTexture = rr, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(rr) {
        this._attractors.push(rr)
      }
      removeAttractor(rr) {
        const Sr = this._attractors.indexOf(rr); - 1 !== Sr && this._attractors.splice(Sr, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(rr) {
        this._animationSheetEnabled !== rr && (this._animationSheetEnabled = rr)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(rr) {
        this._isAnimationSheetEnabled != rr && (this._isAnimationSheetEnabled = rr, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(rr) {
        this._useLogarithmicDepth = rr && this.eC().MU().getCaps().fragmentDepthSupported
      }
      eC() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(rr) {
        switch (rr) {
          case yr.BLENDMODE_MULTIPLYADD:
            return;
          case yr.BLENDMODE_ADD:
            rr = 1;
            break;
          case yr.BLENDMODE_ONEONE:
            rr = 6;
            break;
          case yr.BLENDMODE_STANDARD:
            rr = 2;
            break;
          case yr.BLENDMODE_MULTIPLY:
            rr = 4;
            break;
          case yr.BLENDMODE_SUBTRACT:
            rr = 3
        }
        this._engine.setAlphaMode(rr)
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
      addEmitRateGradient(rr, Sr, Qr) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, rr, Sr, Qr), this
      }
      removeEmitRateGradient(rr) {
        return this._removeFactorGradient(this._emitRateGradients, rr), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : ar.u.Zero()
      }
      set direction1(rr) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = rr)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : ar.u.Zero()
      }
      set direction2(rr) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = rr)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : ar.u.Zero()
      }
      set minEmitBox(rr) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = rr)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : ar.u.Zero()
      }
      set maxEmitBox(rr) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = rr)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(rr) {
        this._billboardMode !== rr && (this._billboardMode = rr, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(rr) {
        this._isBillboardBased !== rr && (this._isBillboardBased = rr, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(rr) {
        this._attachImageProcessingConfiguration(rr)
      }
      _attachImageProcessingConfiguration(rr) {
        rr !== this._imageProcessingConfiguration && (!rr && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = rr)
      }
      _reset() {}
      _addFactorGradient(rr, Sr, Qr, Wr) {
        const ar = new Zr.i(Sr, Qr, Wr);
        rr.push(ar), rr.sort(((rr, Sr) => rr.gradient < Sr.gradient ? -1 : rr.gradient > Sr.gradient ? 1 : 0))
      }
      _removeFactorGradient(rr, Sr) {
        if (!rr) return;
        let Qr = 0;
        for (const Zr of rr) {
          if (Zr.gradient === Sr) {
            rr.splice(Qr, 1);
            break
          }
          Qr++
        }
      }
      _removeGradientAndTexture(rr, Sr, Qr) {
        if (!Sr) return this;
        let Zr = 0;
        for (const Wr of Sr) {
          if (Wr.gradient === rr) {
            Sr.splice(Zr, 1);
            break
          }
          Zr++
        }
        return Qr && Qr.dispose(), this
      }
      constructor(rr) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = ar.u.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new ar.u(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = yr.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new ar.q(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new ar.u(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = ar.u.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new pr.f(1, 1, 1, 1), this.color2 = new pr.f(1, 1, 1, 1), this.colorDead = new pr.f(0, 0, 0, 1), this.textureMask = new pr.f(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Er.d, this.id = rr, this.name = rr
      }
      createPointEmitter(rr, Sr) {
        const Qr = function(rr, Sr) {
          const Qr = new Ur;
          return Qr.direction1 = rr, Qr.direction2 = Sr, Qr
        }(rr, Sr);
        return this.particleEmitterType = Qr, Qr
      }
      createHemisphericEmitter() {
        const rr = function() {
          return new tr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = rr, rr
      }
      createSphereEmitter() {
        const rr = function() {
          return new hr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = rr, rr
      }
      createDirectedSphereEmitter() {
        const rr = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ar.u(0, 1, 0),
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ar.u(0, 1, 0);
          return new zr(rr, Sr, Qr)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ar.u(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ar.u(0, 1, 0));
        return this.particleEmitterType = rr, rr
      }
      createCylinderEmitter() {
        const rr = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Yr.h(rr, Sr, Qr, Zr)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = rr, rr
      }
      createDirectedCylinderEmitter() {
        const rr = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ar.u(0, 1, 0),
            Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ar.u(0, 1, 0);
          return new Yr.d(rr, Sr, Qr, Zr, Wr)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ar.u(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ar.u(0, 1, 0));
        return this.particleEmitterType = rr, rr
      }
      createConeEmitter() {
        const rr = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new nr(rr, Sr)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = rr, rr
      }
      createDirectedConeEmitter() {
        const rr = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ar.u(0, 1, 0),
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ar.u(0, 1, 0);
          return new er(rr, Sr, Qr, Zr)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ar.u(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ar.u(0, 1, 0));
        return this.particleEmitterType = rr, rr
      }
      createBoxEmitter(rr, Sr, Qr, Zr) {
        const Wr = new xr.b;
        return this.particleEmitterType = Wr, this.direction1 = rr, this.direction2 = Sr, this.minEmitBox = Qr, this.maxEmitBox = Zr, Wr
      }
      createMeshEmitter() {
        const rr = function() {
          return new Kr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = rr, rr
      }
    }
    yr.BLENDMODE_ONEONE = 0, yr.BLENDMODE_STANDARD = 1, yr.BLENDMODE_ADD = 2, yr.BLENDMODE_MULTIPLY = 3, yr.BLENDMODE_MULTIPLYADD = 4, yr.BLENDMODE_SUBTRACT = -1;
    class Br {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new pr.f(0, 0, 0, 0), this.currentColor2 = new pr.f(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = ar.u.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class Tr {
      constructor(rr) {
        this.particleSystem = rr, this.position = ar.u.Zero(), this.direction = ar.u.Zero(), this.color = new pr.f(0, 0, 0, 0), this.colorStep = new pr.f(0, 0, 0, 0), this.initialColor = new pr.f(0, 0, 0, 0), this.colorDead = new pr.f(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new ar.q(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Br, this.id = Tr._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let rr = this.age,
          Sr = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Sr ? (Sr = 1, rr = this._properties.randomCellOffset) : rr += this._properties.randomCellOffset);
        const Qr = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Zr;
        Zr = this._properties.initialSpriteCellLoop ? (0, Nr.Clamp)(rr * Sr % this.lifeTime / this.lifeTime) : (0, Nr.Clamp)(rr * Sr / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Zr * Qr | 0
      }
      _inheritParticleInfoToSubEmitter(rr) {
        if (rr.particleSystem.emitter.position) {
          const Sr = rr.particleSystem.emitter;
          if (Sr.position.iH(this.position), rr.inheritDirection) {
            const rr = ar.n.kU[0];
            this.direction.normalizeToRef(rr), Sr.setDirection(rr, 0, Math.PI / 2)
          }
        } else {
          rr.particleSystem.emitter.iH(this.position)
        }
        this.direction.scaleToRef(rr.inheritedVelocityAmount / 2, ar.n.kU[0]), rr.particleSystem._inheritedVelocityOffset.iH(ar.n.kU[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const rr of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(rr)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = Tr._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(rr) {
        rr.position.iH(this.position), this._properties.initialDirection ? rr._properties.initialDirection ? rr._properties.initialDirection.iH(this._properties.initialDirection) : rr._properties.initialDirection = this._properties.initialDirection.clone() : rr._properties.initialDirection = null, rr.direction.iH(this.direction), this._properties.localPosition && (rr._properties.localPosition ? rr._properties.localPosition.iH(this._properties.localPosition) : rr._properties.localPosition = this._properties.localPosition.clone()), rr.color.iH(this.color), rr.colorStep.iH(this.colorStep), rr.initialColor.iH(this.initialColor), rr.colorDead.iH(this.colorDead), rr.lifeTime = this.lifeTime, rr.age = this.age, rr._properties.randomCellOffset = this._properties.randomCellOffset, rr.size = this.size, rr.scale.iH(this.scale), rr.angle = this.angle, rr.angularSpeed = this.angularSpeed, rr.particleSystem = this.particleSystem, rr.cellIndex = this.cellIndex, rr.id = this.id, rr._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (rr._properties.currentColorGradient = this._properties.currentColorGradient, rr._properties.currentColor1.iH(this._properties.currentColor1), rr._properties.currentColor2.iH(this._properties.currentColor2)), this._properties.currentSizeGradient && (rr._properties.currentSizeGradient = this._properties.currentSizeGradient, rr._properties.currentSize1 = this._properties.currentSize1, rr._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (rr._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, rr._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, rr._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (rr._properties.currentVelocityGradient = this._properties.currentVelocityGradient, rr._properties.currentVelocity1 = this._properties.currentVelocity1, rr._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (rr._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, rr._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, rr._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (rr._properties.currentDragGradient = this._properties.currentDragGradient, rr._properties.currentDrag1 = this._properties.currentDrag1, rr._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (rr._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, rr._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, rr._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (rr.remapData && this.remapData ? rr.remapData.iH(this.remapData) : rr.remapData = new ar.x(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (rr._properties.randomNoiseCoordinates1 && rr._properties.randomNoiseCoordinates2 ? (rr._properties.randomNoiseCoordinates1.iH(this._properties.randomNoiseCoordinates1), rr._properties.randomNoiseCoordinates2.iH(this._properties.randomNoiseCoordinates2)) : (rr._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), rr._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), rr.metadata = this.metadata
      }
    }
    Tr._Count = 0;
    var vr = Qr(42955);
    class Or {
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
      constructor(rr, Sr, Qr, Zr) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Sr, this.Xx = rr, this._scene = Qr, this._host = Zr, this._activeTargets = [], Sr._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            TQ: this._getCorrectLoopMode()
          }, this._animation.dataType === vr.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = ar.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const rr = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, rr)
        }
        if (this.Xx instanceof Array) {
          let rr = 0;
          for (const Sr of this.Xx) this._preparePath(Sr, rr), this._getOriginalValues(rr), rr++;
          this._targetIsArray = !0
        } else this._preparePath(this.Xx), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Wr = Sr.getEvents();
        if (Wr && Wr.length > 0)
          for (const ar of Wr) this._events.push(ar._clone());
        this._enableBlending = rr && rr.animationPropertiesOverride ? rr.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = this._animation.targetPropertyPath;
        if (Qr.length > 1) {
          let Zr = rr;
          for (let rr = 0; rr < Qr.length - 1; rr++) {
            const Sr = Qr[rr];
            if (Zr = Zr[Sr], void 0 === Zr) throw new Error(`Invalid property (${Sr}) in property path (${Qr.join(".")})`)
          }
          this._targetPath = Qr[Qr.length - 1], this._activeTargets[Sr] = Zr
        } else this._targetPath = Qr[0], this._activeTargets[Sr] = rr;
        if (void 0 === this._activeTargets[Sr][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${Qr.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.Xx instanceof Array) {
            let rr = 0;
            for (const Sr of this.Xx) void 0 !== this._originalValue[rr] && this._setValue(Sr, this._activeTargets[rr], this._originalValue[rr], -1, rr), rr++
          } else void 0 !== this._originalValue[0] && this._setValue(this.Xx, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let rr = 0; rr < this._events.length; rr++) this._events[rr].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const rr = this._animation.runtimeAnimations.indexOf(this);
        rr > -1 && this._animation.runtimeAnimations.splice(rr, 1)
      }
      setValue(rr, Sr) {
        if (this._targetIsArray)
          for (let Qr = 0; Qr < this.Xx.length; Qr++) {
            const Zr = this.Xx[Qr];
            this._setValue(Zr, this._activeTargets[Qr], rr, Sr, Qr)
          } else this._setValue(this.Xx, this._directTarget, rr, Sr, 0)
      }
      _getOriginalValues() {
        let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Qr = this._activeTargets[Sr];
        if (vr.d.InheritOriginalValueFromActiveAnimations) {
          const rr = this._scene._activeAnimatables;
          for (let Zr = 0; Zr < rr.length; Zr++) {
            const Wr = rr[Zr]._runtimeAnimations;
            for (let rr = 0; rr < Wr.length; rr++) {
              const Zr = Wr[rr];
              if (Zr !== this && Zr._targetPath === this._targetPath)
                for (let rr = 0; rr < Zr._activeTargets.length; rr++)
                  if (Zr._activeTargets[rr] === Qr && void 0 !== Zr._originalValue[rr]) return void(Zr._originalValue[rr] && Zr._originalValue[rr].clone ? this._originalValue[Sr] = Zr._originalValue[rr].clone() : this._originalValue[Sr] = Zr._originalValue[rr])
            }
          }
        }
        rr = Qr.getLocalMatrix && "_matrix" === this._targetPath ? Qr.getLocalMatrix() : Qr[this._targetPath], rr && rr.clone ? this._originalValue[Sr] = rr.clone() : this._originalValue[Sr] = rr
      }
      _registerTargetForLateAnimationBinding(rr, Sr) {
        const Qr = rr.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(Qr), Qr._lateAnimationHolders || (Qr._lateAnimationHolders = {}), Qr._lateAnimationHolders[rr.targetPath] || (Qr._lateAnimationHolders[rr.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Sr
        }), rr.isAdditive ? (Qr._lateAnimationHolders[rr.targetPath].additiveAnimations.push(rr), Qr._lateAnimationHolders[rr.targetPath].totalAdditiveWeight += rr.weight) : (Qr._lateAnimationHolders[rr.targetPath].animations.push(rr), Qr._lateAnimationHolders[rr.targetPath].totalWeight += rr.weight)
      }
      _setValue(rr, Sr, Qr, Zr, Wr) {
        const jr = this._scene._animationWrites,
          Ir = this._scene._animationWriteCount++;
        let fr = jr[Ir];
        if (fr || (fr = jr[Ir] = {
            runtimeAnimation: this,
            target: rr,
            weight: Zr,
            additive: !1,
            blendingFactor: 1,
            Xh: !1
          }), fr.runtimeAnimation = this, fr.target = rr, fr.weight = Zr, fr.additive = this.isAdditive, fr.Xh = !1, this._currentActiveTarget = Sr, this._weight = Zr, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const rr = Sr[this._targetPath];
            rr.clone ? this._originalBlendValue = rr.clone() : this._originalBlendValue = rr
          }
          this._originalBlendValue.m ? vr.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? ar.d.DecomposeLerpToRef(this._originalBlendValue, Qr, this._blendingFactor, this._currentValue) : this._currentValue = ar.d.DecomposeLerp(this._originalBlendValue, Qr, this._blendingFactor) : this._currentValue ? ar.d.LerpToRef(this._originalBlendValue, Qr, this._blendingFactor, this._currentValue) : this._currentValue = ar.d.Lerp(this._originalBlendValue, Qr, this._blendingFactor) : this._currentValue = vr.d._UniversalLerp(this._originalBlendValue, Qr, this._blendingFactor);
          const Zr = rr && rr.animationPropertiesOverride ? rr.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          fr.blendingFactor = this._blendingFactor, this._blendingFactor += Zr
        } else fr.blendingFactor = 1, this._currentValue ? this._currentValue.iH ? this._currentValue.iH(Qr) : this._currentValue = Qr : this._currentValue = Qr?.clone ? Qr.clone() : Qr; - 1 !== Zr ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Wr]) : this._animationState.TQ === vr.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Wr], Sr[this._targetPath]) : Sr[this._targetPath] = this._originalValue[Wr] + this._currentValue : Sr[this._targetPath] = this._currentValue, rr.BQr && rr.BQr(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.Xx && this.Xx.animationPropertiesOverride) {
          return "MorphTarget" === this.Xx.getClassName?.() && null == this.Xx._animationPropertiesOverride ? this._animation.TQ : this.Xx.animationPropertiesOverride.TQ
        }
        return this._animation.TQ
      }
      goToFrame(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const Qr = this._animation.getKeys();
        rr < Qr[0].frame ? rr = Qr[0].frame : rr > Qr[Qr.length - 1].frame && (rr = Qr[Qr.length - 1].frame);
        const Zr = this._events;
        if (Zr.length)
          for (let ar = 0; ar < Zr.length; ar++) Zr[ar].onlyOnce || (Zr[ar].isDone = Zr[ar].frame < rr);
        this._currentFrame = rr;
        const Wr = this._animation._interpolate(rr, this._animationState);
        this.setValue(Wr, Sr)
      }
      _prepareForSpeedRatioChange(rr) {
        const Sr = this._previousElapsedTime * (this._animation.framePerSecond * rr) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Sr
      }
      animate(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const jr = this._animation,
          Ir = jr.targetPropertyPath;
        if (!Ir || Ir.length < 1) return this._stopped = !0, !1;
        let fr, Er = !0;
        const pr = this._events;
        let xr;
        if (this._coreRuntimeAnimation) xr = Qr - Sr, fr = this._coreRuntimeAnimation.currentFrame, this._currentFrame = fr, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let ar;
          (Sr < this._minFrame || Sr > this._maxFrame) && (Sr = this._minFrame), (Qr < this._minFrame || Qr > this._maxFrame) && (Qr = this._maxFrame), xr = Qr - Sr;
          let Ir = rr * (jr.framePerSecond * Wr) / 1e3 + this._absoluteFrameOffset,
            mr = 0,
            Nr = !1;
          const Ur = Zr && this._animationState.TQ === vr.d.ANIMATIONLOOPMODE_YOYO;
          if (Ur) {
            const rr = (Ir - Sr) / xr,
              Qr = Math.sin(rr * Math.PI);
            Ir = Math.abs(Qr) * xr + Sr;
            const Zr = Qr >= 0 ? 1 : -1;
            this._yoyoDirection !== Zr && (Nr = !0), this._yoyoDirection = Zr
          }
          if (this._previousElapsedTime = rr, this._previousAbsoluteFrame = Ir, !Zr && Qr >= Sr && (Ir >= xr && Wr > 0 || Ir <= 0 && Wr < 0)) Er = !1, mr = jr.evaluate(Qr);
          else if (!Zr && Sr >= Qr && (Ir <= xr && Wr < 0 || Ir >= 0 && Wr > 0)) Er = !1, mr = jr.evaluate(Sr);
          else if (this._animationState.TQ !== vr.d.ANIMATIONLOOPMODE_CYCLE) {
            const rr = Qr.toString() + Sr.toString();
            if (!this._offsetsCache[rr]) {
              this._animationState.repeatCount = 0, this._animationState.TQ = vr.d.ANIMATIONLOOPMODE_CYCLE;
              const Zr = jr._interpolate(Sr, this._animationState),
                Wr = jr._interpolate(Qr, this._animationState);
              switch (this._animationState.TQ = this._getCorrectLoopMode(), jr.dataType) {
                case vr.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[rr] = Wr - Zr;
                  break;
                case vr.d.ANIMATIONTYPE_QUATERNION:
                case vr.d.ANIMATIONTYPE_VECTOR3:
                case vr.d.ANIMATIONTYPE_VECTOR2:
                case vr.d.ANIMATIONTYPE_SIZE:
                case vr.d.ANIMATIONTYPE_COLOR3:
                case vr.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[rr] = Wr.subtract(Zr)
              }
              this._highLimitsCache[rr] = Wr
            }
            mr = this._highLimitsCache[rr], ar = this._offsetsCache[rr]
          }
          if (void 0 === ar) switch (jr.dataType) {
            case vr.d.ANIMATIONTYPE_FLOAT:
              ar = 0;
              break;
            case vr.d.ANIMATIONTYPE_QUATERNION:
              ar = vr.n;
              break;
            case vr.d.ANIMATIONTYPE_VECTOR3:
              ar = vr.s;
              break;
            case vr.d.ANIMATIONTYPE_VECTOR2:
              ar = vr.q;
              break;
            case vr.d.ANIMATIONTYPE_SIZE:
              ar = vr.p;
              break;
            case vr.d.ANIMATIONTYPE_COLOR3:
              ar = vr.i;
              break;
            case vr.d.ANIMATIONTYPE_COLOR4:
              ar = vr.l
          }
          const tr = this._host ? this._host.syncRoot : null;
          let hr, zr = this._playbackFrames,
            Yr = !1;
          if (tr) {
            const rr = tr.toFrame - tr.fromFrame,
              Qr = tr.masterFrame,
              Zr = (Qr - tr.fromFrame) / rr;
            fr = Sr + xr * Zr;
            const Wr = tr.getAnimations()[0];
            if (Wr && 0 !== rr) {
              const rr = xr * Zr,
                Sr = Wr._playbackTo - Wr._playbackFrom;
              if (0 !== Sr && Wr._playbackFrom <= tr.fromFrame && Wr._playbackTo >= tr.toFrame) {
                zr = xr * Math.round((Wr._playbackFrames - (Wr._currentFrame - Wr._playbackFrom)) / Sr) + rr
              } else Yr = (Qr - this._playbackSyncMasterFrame) * (Wr._playbackFrames - this._playbackSyncMasterPlayed) < 0, zr = rr;
              Yr = Yr || Wr._playbackJumped, this._playbackSyncMasterPlayed = Wr._playbackFrames, this._playbackSyncMasterFrame = Qr
            }
          } else fr = Ir > 0 && Sr > Qr || Ir < 0 && Sr < Qr ? Er && 0 !== xr ? Qr + Ir % xr : Sr : Er && 0 !== xr ? Sr + Ir % xr : Qr;
          if (!Ur && (Wr > 0 && this.currentFrame > fr || Wr < 0 && this.currentFrame < fr) || Ur && Nr) {
            this._onLoop();
            for (let rr = 0; rr < pr.length; rr++) pr[rr].onlyOnce || (pr[rr].isDone = !1);
            this._animationState.key = Wr > 0 ? 0 : jr.getKeys().length - 1
          }
          if (this._currentFrame = fr, this._animationState.repeatCount = 0 === xr ? 0 : Ir / xr | 0, this._animationState.highLimitValue = mr, this._animationState.offsetValue = ar, this._playbackFrom = Sr, this._playbackTo = Qr, this._playbackJumped = Yr, this._playbackSyncRoot = tr, tr) hr = zr;
          else if (Er) hr = Ur ? fr === Sr && Ir === Qr ? xr : fr - Sr : Ir;
          else {
            const rr = 0 !== xr ? Math.floor(this._playbackFrames / xr) : 0;
            hr = (fr === Qr ? rr + 1 : rr) * xr
          }
          this._playbackFrames = hr, this._playbackProgress = this._animationState.TQ === vr.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? xr : hr
        }
        const mr = jr._interpolate(fr, this._animationState);
        if (this.setValue(mr, ar), pr.length)
          for (let Nr = 0; Nr < pr.length; Nr++)
            if (xr >= 0 && fr >= pr[Nr].frame && pr[Nr].frame >= Sr || xr < 0 && fr <= pr[Nr].frame && pr[Nr].frame <= Sr) {
              const rr = pr[Nr];
              rr.isDone || (rr.onlyOnce && (pr.splice(Nr, 1), Nr--), rr.isDone = !0, rr.action(fr))
            } return Er || (this._stopped = !0), Er
      }
    }
    var Lr = Qr(41787);
    class lr {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(rr) {
        this._weight = -1 !== rr ? Math.min(Math.max(rr, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(rr) {
        for (let Sr = 0; Sr < this._runtimeAnimations.length; Sr++) {
          this._runtimeAnimations[Sr]._prepareForSpeedRatioChange(rr)
        }
        this._speedRatio = rr, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          ar = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Ir = arguments.length > 6 ? arguments[6] : void 0,
          fr = arguments.length > 7 ? arguments[7] : void 0,
          Er = arguments.length > 8 ? arguments[8] : void 0,
          pr = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          xr = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Sr, this.fromFrame = Qr, this.toFrame = Zr, this.loopAnimation = ar, this.onAnimationEnd = Ir, this.onAnimationLoop = Er, this.isAdditive = pr, this.playOrder = xr, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.Lx = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Wr.d, this.onAnimationLoopObservable = new Wr.d, this._scene = rr, fr && this.appendAnimations(Sr, fr), this._speedRatio = jr, rr._activeAnimatables.push(this)
      }
      syncWith(rr) {
        if (this._syncRoot = rr, rr) {
          const rr = this._scene._activeAnimatables.indexOf(this);
          rr > -1 && (this._scene._activeAnimatables.splice(rr, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(rr, Sr) {
        for (let Qr = 0; Qr < Sr.length; Qr++) {
          const Zr = Sr[Qr],
            Wr = new Or(rr, Zr, this._scene, this);
          Wr._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Wr)
        }
      }
      getAnimationByTargetProperty(rr) {
        const Sr = this._runtimeAnimations;
        for (let Qr = 0; Qr < Sr.length; Qr++)
          if (Sr[Qr].animation.targetProperty === rr) return Sr[Qr].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(rr) {
        const Sr = this._runtimeAnimations;
        for (let Qr = 0; Qr < Sr.length; Qr++)
          if (Sr[Qr].animation.targetProperty === rr) return Sr[Qr];
        return null
      }
      reset() {
        const rr = this._runtimeAnimations;
        for (let Sr = 0; Sr < rr.length; Sr++) rr[Sr].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(rr) {
        const Sr = this._runtimeAnimations;
        for (let Qr = 0; Qr < Sr.length; Qr++) Sr[Qr].animation.enableBlending = !0, Sr[Qr].animation.blendingSpeed = rr
      }
      disableBlending() {
        const rr = this._runtimeAnimations;
        for (let Sr = 0; Sr < rr.length; Sr++) rr[Sr].animation.enableBlending = !1
      }
      goToFrame(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this._runtimeAnimations;
        if (Qr[0]) {
          const Sr = Qr[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? Qr[0].currentFrame;
          const Zr = 0 === this.speedRatio ? 0 : (rr - this._frameToSyncFromJump) / Sr * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Zr
        }
        for (let Zr = 0; Zr < Qr.length; Zr++) Qr[Zr].goToFrame(rr, Sr ? this._weight : -1);
        this._goToFrame = rr
      }
      get paused() {
        return this.Lx
      }
      pause() {
        this.Lx || (this.Lx = !0)
      }
      restart() {
        this.Lx = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (rr || Sr) {
          const Wr = this._scene._activeAnimatables.indexOf(this);
          if (Wr > -1) {
            const ar = this._runtimeAnimations;
            for (let Qr = ar.length - 1; Qr >= 0; Qr--) {
              const Zr = ar[Qr];
              rr && Zr.animation.name != rr || (Sr && !Sr(Zr.target) || (Zr.dispose(), ar.splice(Qr, 1)))
            }
            0 == ar.length && (Qr || this._scene._activeAnimatables.splice(Wr, 1), Zr || this._raiseOnAnimationEnd())
          }
        } else {
          const rr = this._scene._activeAnimatables.indexOf(this);
          if (rr > -1) {
            Qr || this._scene._activeAnimatables.splice(rr, 1);
            const Sr = this._runtimeAnimations;
            for (let rr = 0; rr < Sr.length; rr++) Sr[rr].dispose();
            this._runtimeAnimations.length = 0, Zr || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((rr => {
          this.onAnimationEndObservable.add((() => {
            rr(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(rr) {
        if (this.Lx) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = rr), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = rr, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += rr - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !lr.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Sr = !1;
        const Qr = this._runtimeAnimations;
        let Zr;
        for (Zr = 0; Zr < Qr.length; Zr++) {
          const Wr = Qr[Zr].animate(rr - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Sr = Sr || Wr
        }
        if (this.animationStarted = Sr, !Sr) {
          if (this.disposeOnEnd)
            for (Zr = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Zr, 1), Zr = 0; Zr < Qr.length; Zr++) Qr[Zr].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Sr
      }
    }

    function Xr(rr) {
      if (0 === rr.totalWeight && 0 === rr.totalAdditiveWeight) return rr.originalValue;
      let Sr = 1;
      const Qr = ar.n.kU[0],
        Zr = ar.n.kU[1],
        Wr = ar.n.Quaternion[0];
      let jr = 0;
      const Ir = rr.animations[0],
        fr = rr.originalValue;
      let Er, pr = !1;
      if (rr.totalWeight < 1) Er = 1 - rr.totalWeight, fr.decompose(Zr, Wr, Qr);
      else {
        if (jr = 1, Sr = rr.totalWeight, Er = Ir.weight / Sr, 1 == Er) {
          if (!rr.totalAdditiveWeight) return Ir.currentValue;
          pr = !0
        }
        Ir.currentValue.decompose(Zr, Wr, Qr)
      }
      if (!pr) {
        Zr.scaleInPlace(Er), Qr.scaleInPlace(Er), Wr.scaleInPlace(Er);
        for (let Ir = jr; Ir < rr.animations.length; Ir++) {
          const jr = rr.animations[Ir];
          if (0 === jr.weight) continue;
          Er = jr.weight / Sr;
          const fr = ar.n.kU[2],
            pr = ar.n.kU[3],
            xr = ar.n.Quaternion[1];
          jr.currentValue.decompose(pr, xr, fr), pr.scaleAndAddToRef(Er, Zr), xr.scaleAndAddToRef(ar.h.Dot(Wr, xr) > 0 ? Er : -Er, Wr), fr.scaleAndAddToRef(Er, Qr)
        }
        Wr.normalize()
      }
      for (let mr = 0; mr < rr.additiveAnimations.length; mr++) {
        const Sr = rr.additiveAnimations[mr];
        if (0 === Sr.weight) continue;
        const jr = ar.n.kU[2],
          Ir = ar.n.kU[3],
          fr = ar.n.Quaternion[1];
        Sr.currentValue.decompose(Ir, fr, jr), Ir.multiplyToRef(Zr, Ir), ar.u.LerpToRef(Zr, Ir, Sr.weight, Zr), Wr.multiplyToRef(fr, fr), ar.h.SlerpToRef(Wr, fr, Sr.weight, Wr), jr.scaleAndAddToRef(Sr.weight, Qr)
      }
      const xr = Ir ? Ir._animationState.workValue : ar.n.Matrix[0].clone();
      return ar.d.ComposeToRef(Zr, Wr, Qr, xr), xr
    }

    function Pr(rr, Sr) {
      if (0 === rr.totalWeight && 0 === rr.totalAdditiveWeight) return Sr;
      const Qr = rr.animations[0],
        Zr = rr.originalValue;
      let Wr = Sr;
      if (0 === rr.totalWeight && rr.totalAdditiveWeight > 0) Wr.iH(Zr);
      else if (1 === rr.animations.length) {
        if (ar.h.SlerpToRef(Zr, Qr.currentValue, Math.min(1, rr.totalWeight), Wr), 0 === rr.totalAdditiveWeight) return Wr
      } else if (rr.animations.length > 1) {
        let Qr, jr, Ir = 1;
        if (rr.totalWeight < 1) {
          const Sr = 1 - rr.totalWeight;
          Qr = [], jr = [], Qr.push(Zr), jr.push(Sr)
        } else {
          if (2 === rr.animations.length && (ar.h.SlerpToRef(rr.animations[0].currentValue, rr.animations[1].currentValue, rr.animations[1].weight / rr.totalWeight, Sr), 0 === rr.totalAdditiveWeight)) return Sr;
          Qr = [], jr = [], Ir = rr.totalWeight
        }
        for (let Sr = 0; Sr < rr.animations.length; Sr++) {
          const Zr = rr.animations[Sr];
          Qr.push(Zr.currentValue), jr.push(Zr.weight / Ir)
        }
        let fr = 0;
        for (let rr = 0; rr < Qr.length;) rr ? (fr += jr[rr], ar.h.SlerpToRef(Wr, Qr[rr], jr[rr] / fr, Wr), rr++) : (ar.h.SlerpToRef(Qr[rr], Qr[rr + 1], jr[rr + 1] / (jr[rr] + jr[rr + 1]), Sr), Wr = Sr, fr = jr[rr] + jr[rr + 1], rr += 2)
      }
      for (let jr = 0; jr < rr.additiveAnimations.length; jr++) {
        const Sr = rr.additiveAnimations[jr];
        0 !== Sr.weight && (Wr.multiplyToRef(Sr.currentValue, ar.n.Quaternion[0]), ar.h.SlerpToRef(Wr, ar.n.Quaternion[0], Sr.weight, Wr))
      }
      return Wr
    }

    function Hr(rr, Sr) {
      Sr && (Sr.prototype.copyAnimationRange = function(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new vr.d(this.name, "_matrix", rr.animations[0].framePerSecond, vr.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const ar = rr.animations[0].getRange(Sr);
        if (!ar) return !1;
        const jr = ar.from,
          Ir = ar.to,
          fr = rr.animations[0].getKeys(),
          Er = rr.length,
          pr = rr.getParent(),
          xr = this.getParent(),
          mr = Zr && pr && Er && this.length && Er !== this.length,
          Nr = mr && xr && pr ? xr.length / pr.length : 1,
          Ur = Zr && !xr && Wr && (1 !== Wr.x || 1 !== Wr.y || 1 !== Wr.z),
          tr = this.animations[0].getKeys();
        let hr, zr, Yr;
        for (let nr = 0, er = fr.length; nr < er; nr++) hr = fr[nr], hr.frame >= jr && hr.frame <= Ir && (Zr ? (Yr = hr.value.clone(), mr ? (zr = Yr.getTranslation(), Yr.setTranslation(zr.scaleInPlace(Nr))) : Ur && Wr ? (zr = Yr.getTranslation(), Yr.setTranslation(zr.multiplyInPlace(Wr))) : Yr = hr.value) : Yr = hr.value, tr.push({
          frame: hr.frame + Qr,
          value: Yr
        }));
        return this.animations[0].createRange(Sr, jr + Qr, Ir + Qr), !0
      }), rr && (rr.prototype._animate = function(rr) {
        const Sr = this._animationWrites,
          Qr = this._animationWriteCount;
        let Zr = 0;
        for (let ar = this._animationStepWriteCount; ar < Qr; ar++) {
          const rr = Sr[ar];
          rr.Xh && -1 === rr.weight || (rr.Xh = !0, Sr[ar] = Sr[Zr], Sr[Zr] = rr, Zr++)
        }
        for (let ar = Zr; ar < Qr; ar++) {
          const rr = Sr[ar];
          rr.runtimeAnimation = null, rr.target = null
        }
        if (this._animationWriteCount = Zr, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Wr = Lr.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Wr
        }
        this.deltaTime = void 0 !== rr ? rr : this.useConstantAnimationDeltaTime ? 16 : (Wr - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Wr;
        const jr = this._activeAnimatables;
        if (0 === jr.length) return;
        this._animationTime += this.deltaTime;
        const Ir = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let ar = 0; ar < jr.length; ar++) {
          const rr = jr[ar];
          !rr._animate(Ir) && rr.disposeOnEnd && ar--
        }! function(rr) {
          if (rr._registeredForLateAnimationBindings.length) {
            for (let Sr = 0; Sr < rr._registeredForLateAnimationBindings.length; Sr++) {
              const Qr = rr._registeredForLateAnimationBindings.data[Sr];
              for (const rr in Qr._lateAnimationHolders) {
                const Sr = Qr._lateAnimationHolders[rr],
                  Zr = Sr.animations[0],
                  Wr = Sr.originalValue;
                if (void 0 === Wr || null === Wr) continue;
                const jr = vr.d.AllowMatrixDecomposeForInterpolation && Wr.m;
                let Ir = Qr[rr];
                if (jr) Ir = Xr(Sr);
                else if (void 0 !== Wr.w) Ir = Pr(Sr, Ir || ar.h.Identity());
                else {
                  let rr = 0,
                    Qr = 1;
                  const ar = Zr && Zr._animationState.TQ === vr.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Sr.totalWeight < 1) Ir = ar ? Wr.clone ? Wr.clone() : Wr : Zr && Wr.scale ? Wr.scale(1 - Sr.totalWeight) : Zr ? Wr * (1 - Sr.totalWeight) : Wr.clone ? Wr.clone() : Wr;
                  else if (Zr) {
                    Qr = Sr.totalWeight;
                    const jr = Zr.weight / Qr;
                    Ir = 1 !== jr ? Zr.currentValue.scale ? Zr.currentValue.scale(jr) : Zr.currentValue * jr : (Sr.animations.length > 1 || Sr.additiveAnimations.length > 0) && Zr.currentValue.clone ? Zr.currentValue.clone() : Zr.currentValue, ar && (Ir.addToRef ? Ir.addToRef(Wr, Ir) : Ir += Wr), rr = 1
                  }
                  for (let Zr = rr; Zr < Sr.animations.length; Zr++) {
                    const rr = Sr.animations[Zr],
                      Wr = rr.weight / Qr;
                    Wr && (rr.currentValue.scaleAndAddToRef ? rr.currentValue.scaleAndAddToRef(Wr, Ir) : Ir += rr.currentValue * Wr)
                  }
                  for (let Zr = 0; Zr < Sr.additiveAnimations.length; Zr++) {
                    const rr = Sr.additiveAnimations[Zr],
                      Qr = rr.weight;
                    Qr && (rr.currentValue.scaleAndAddToRef ? rr.currentValue.scaleAndAddToRef(Qr, Ir) : Ir += rr.currentValue * Qr)
                  }
                }
                Qr[rr] = Ir
              }
              Qr._lateAnimationHolders = {}
            }
            rr._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, rr.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((rr, Sr) => rr.playOrder - Sr.playOrder))
      }, rr.prototype.beginWeightedAnimation = function(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          jr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 ? arguments[7] : void 0,
          fr = arguments.length > 8 ? arguments[8] : void 0,
          Er = arguments.length > 9 ? arguments[9] : void 0,
          pr = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const xr = this.beginAnimation(rr, Sr, Qr, Wr, ar, jr, Ir, !1, fr, Er, pr);
        return xr.weight = Zr, xr
      }, rr.prototype.beginAnimation = function(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ar = arguments.length > 5 ? arguments[5] : void 0,
          jr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fr = arguments.length > 8 ? arguments[8] : void 0,
          Er = arguments.length > 9 ? arguments[9] : void 0,
          pr = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Wr < 0) {
          const rr = Sr;
          Sr = Qr, Qr = rr, Wr = -Wr
        }
        Sr > Qr && (Wr = -Wr), Ir && this.stopAnimation(rr, void 0, fr), jr || (jr = new lr(this, rr, Sr, Qr, Zr, Wr, ar, void 0, Er, pr));
        const xr = !fr || fr(rr);
        if (rr.animations && xr && jr.appendAnimations(rr, rr.animations), rr.getAnimatables) {
          const pr = rr.getAnimatables();
          for (let rr = 0; rr < pr.length; rr++) this.beginAnimation(pr[rr], Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er)
        }
        return jr.reset(), jr
      }, rr.prototype.beginHierarchyAnimation = function(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          jr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 ? arguments[7] : void 0,
          fr = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Er = arguments.length > 9 ? arguments[9] : void 0,
          pr = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const xr = rr.getDescendants(Sr),
          mr = [];
        mr.push(this.beginAnimation(rr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, void 0, pr));
        for (const Nr of xr) mr.push(this.beginAnimation(Nr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, void 0, pr));
        return mr
      }, rr.prototype.beginDirectAnimation = function(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (ar < 0) {
          const rr = Qr;
          Qr = Zr, Zr = rr, ar = -ar
        }
        Qr > Zr && (ar = -ar);
        return new lr(this, rr, Qr, Zr, Wr, ar, arguments.length > 6 ? arguments[6] : void 0, Sr, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, rr.prototype.beginDirectHierarchyAnimation = function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        let Er = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const pr = rr.getDescendants(Sr),
          xr = [];
        xr.push(this.beginDirectAnimation(rr, Qr, Zr, Wr, ar, jr, Ir, fr, Er));
        for (const mr of pr) xr.push(this.beginDirectAnimation(mr, Qr, Zr, Wr, ar, jr, Ir, fr, Er));
        return xr
      }, rr.prototype.getAnimatableByTarget = function(rr) {
        for (let Sr = 0; Sr < this._activeAnimatables.length; Sr++)
          if (this._activeAnimatables[Sr].target === rr) return this._activeAnimatables[Sr];
        return null
      }, rr.prototype.getAllAnimatablesByTarget = function(rr) {
        const Sr = [];
        for (let Qr = 0; Qr < this._activeAnimatables.length; Qr++) this._activeAnimatables[Qr].target === rr && Sr.push(this._activeAnimatables[Qr]);
        return Sr
      }, rr.prototype.stopAnimation = function(rr, Sr, Qr) {
        const Zr = this.getAllAnimatablesByTarget(rr);
        for (const Wr of Zr) Wr.stop(Sr, Qr)
      }, rr.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let rr = 0; rr < this._activeAnimatables.length; rr++) this._activeAnimatables[rr].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const rr of this.animationGroups) rr.stop()
      })
    }
    lr.ProcessPausedAnimatables = !1;
    var qr, Rr = Qr(38576),
      gr = Qr(42060),
      Cr = Qr(41769);
    class Mr extends gr.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(rr) {
        (rr.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.iH(rr), this._markAsDirtyAndDecompose())
      }
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ir = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(rr, Sr.eC(), !1), this.name = rr, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Sr, this._localMatrix = Zr?.clone() ?? ar.d.Identity(), this._restMatrix = Wr ?? this._localMatrix.clone(), this._bindMatrix = jr ?? this._localMatrix.clone(), this._index = Ir, this._absoluteMatrix = new ar.d, this._absoluteBindMatrix = new ar.d, this._absoluteInverseBindMatrix = new ar.d, this._finalMatrix = new ar.d, Sr.bones.push(this), this.setParent(Qr, !1), this._updateAbsoluteBindMatrices()
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
      set parent(rr) {
        this.setParent(rr)
      }
      setParent(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== rr) {
          if (this.parent) {
            const rr = this.parent.children.indexOf(this); - 1 !== rr && this.parent.children.splice(rr, 1)
          }
          this._parentNode = rr, this.parent && this.parent.children.push(this), Sr && this._updateAbsoluteBindMatrices(), this.BQr()
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
      setRestMatrix(rr) {
        this._restMatrix.iH(rr)
      }
      setRestPose(rr) {
        this.setRestMatrix(rr)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(rr) {
        this.hrr(rr)
      }
      setBindPose(rr) {
        this.setBindMatrix(rr)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const rr = ar.n.kU[0],
            Sr = ar.n.Quaternion[0],
            Qr = ar.n.kU[1];
          this.getRestMatrix().decompose(rr, Sr, Qr), this._linkedTransformNode.position.iH(Qr), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? ar.h.Identity(), this._linkedTransformNode.rotationQuaternion.iH(Sr), this._linkedTransformNode.Tx.iH(rr)
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
      linkTransformNode(rr) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = rr, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.GSr
      }
      set position(rr) {
        this._decompose(), this.GSr.iH(rr), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(rr) {
        this.setRotation(rr)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(rr) {
        this.setRotationQuaternion(rr)
      }
      get Tx() {
        return this.getScale()
      }
      set Tx(rr) {
        this.setScale(rr)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = ar.u.Zero(), this._localRotation = ar.h.Zero(), this.GSr = ar.u.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.GSr))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, ar.d.ComposeToRef(this._localScaling, this._localRotation, this.GSr, this._localMatrix)) : this._needToCompose = !1)
      }
      hrr(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.iH(rr), Sr && this._updateAbsoluteBindMatrices(), Qr ? this._matrix = rr : this.BQr()
      }
      _updateAbsoluteBindMatrices(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (rr || (rr = this._bindMatrix), this.parent ? rr.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.iH(rr), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Sr)
          for (let Qr = 0; Qr < this.children.length; Qr++) this.children[Qr]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      BQr() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.BQr(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.BQr(), this._needToDecompose = !0
      }
      _updatePosition(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wr = this.getLocalMatrix();
        if (0 == Sr) Zr ? (Wr.addAtIndex(12, rr.x), Wr.addAtIndex(13, rr.y), Wr.addAtIndex(14, rr.z)) : Wr.setTranslationFromFloats(rr.x, rr.y, rr.z);
        else {
          const Sr = Mr._TmpMats[0],
            jr = Mr._TmpVecs[0];
          this.parent ? (Sr.iH(this.parent.getAbsoluteMatrix()), Qr && Sr.multiplyToRef(Qr.getWorldMatrix(), Sr)) : ar.d.IdentityToRef(Sr), Zr && Sr.setTranslationFromFloats(0, 0, 0), Sr.invert(), ar.u.TransformCoordinatesToRef(rr, Sr, jr), Zr ? (Wr.addAtIndex(12, jr.x), Wr.addAtIndex(13, jr.y), Wr.addAtIndex(14, jr.z)) : Wr.setTranslationFromFloats(jr.x, jr.y, jr.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(rr, Sr, Qr, !0)
      }
      setPosition(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(rr, Sr, Qr, !1)
      }
      setAbsolutePosition(rr, Sr) {
        this.setPosition(rr, 1, Sr)
      }
      scale(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wr = this.getLocalMatrix(),
          jr = Mr._TmpMats[0];
        ar.d.ScalingToRef(rr, Sr, Qr, jr), jr.multiplyToRef(Wr, Wr), jr.invert();
        for (const ar of this.children) {
          const Zr = ar.getLocalMatrix();
          Zr.multiplyToRef(jr, Zr), Zr.multiplyAtIndex(12, rr), Zr.multiplyAtIndex(13, Sr), Zr.multiplyAtIndex(14, Qr), ar._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Zr)
          for (const ar of this.children) ar.scale(rr, Sr, Qr, Zr)
      }
      setScale(rr) {
        this._decompose(), this._localScaling.iH(rr), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(rr) {
        this._decompose(), rr.iH(this._localScaling)
      }
      setYawPitchRoll(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Zr) {
          const jr = Mr._TmpQuat;
          return ar.h.RotationYawPitchRollToRef(rr, Sr, Qr, jr), void this.setRotationQuaternion(jr, Zr, Wr)
        }
        const jr = Mr._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(jr, Wr)) return;
        const Ir = Mr._TmpMats[1];
        ar.d.RotationYawPitchRollToRef(rr, Sr, Qr, Ir), jr.multiplyToRef(Ir, Ir), this._rotateWithMatrix(Ir, Zr, Wr)
      }
      rotate(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        const Wr = Mr._TmpMats[0];
        Wr.setTranslationFromFloats(0, 0, 0), ar.d.RotationAxisToRef(rr, Sr, Wr), this._rotateWithMatrix(Wr, Qr, Zr)
      }
      setAxisAngle(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === Qr) {
          const Wr = Mr._TmpQuat;
          return ar.h.RotationAxisToRef(rr, Sr, Wr), void this.setRotationQuaternion(Wr, Qr, Zr)
        }
        const Wr = Mr._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Wr, Zr)) return;
        const jr = Mr._TmpMats[1];
        ar.d.RotationAxisToRef(rr, Sr, jr), Wr.multiplyToRef(jr, jr), this._rotateWithMatrix(jr, Qr, Zr)
      }
      setRotation(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(rr.y, rr.x, rr.z, Sr, Qr)
      }
      setRotationQuaternion(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Sr) return this._decompose(), this._localRotation.iH(rr), void this._markAsDirtyAndCompose();
        const Zr = Mr._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Zr, Qr)) return;
        const Wr = Mr._TmpMats[1];
        ar.d.FromQuaternionToRef(rr, Wr), Zr.multiplyToRef(Wr, Wr), this._rotateWithMatrix(Wr, Sr, Qr)
      }
      setRotationMatrix(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Sr) {
          const Zr = Mr._TmpQuat;
          return ar.h.FromRotationMatrixToRef(rr, Zr), void this.setRotationQuaternion(Zr, Sr, Qr)
        }
        const Zr = Mr._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Zr, Qr)) return;
        const Wr = Mr._TmpMats[1];
        Wr.iH(rr), Zr.multiplyToRef(rr, Wr), this._rotateWithMatrix(Wr, Sr, Qr)
      }
      _rotateWithMatrix(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = this.getLocalMatrix(),
          Wr = Zr.m[12],
          ar = Zr.m[13],
          jr = Zr.m[14],
          Ir = this.getParent(),
          fr = Mr._TmpMats[3],
          Er = Mr._TmpMats[4];
        Ir && 1 == Sr ? (Qr ? (fr.iH(Qr.getWorldMatrix()), Ir.getAbsoluteMatrix().multiplyToRef(fr, fr)) : fr.iH(Ir.getAbsoluteMatrix()), Er.iH(fr), Er.invert(), Zr.multiplyToRef(fr, Zr), Zr.multiplyToRef(rr, Zr), Zr.multiplyToRef(Er, Zr)) : 1 == Sr && Qr ? (fr.iH(Qr.getWorldMatrix()), Er.iH(fr), Er.invert(), Zr.multiplyToRef(fr, Zr), Zr.multiplyToRef(rr, Zr), Zr.multiplyToRef(Er, Zr)) : Zr.multiplyToRef(rr, Zr), Zr.setTranslationFromFloats(Wr, ar, jr), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(rr, Sr) {
        const Qr = Mr._TmpMats[2];
        return rr.iH(this.getAbsoluteMatrix()), Sr ? (rr.multiplyToRef(Sr.getWorldMatrix(), rr), ar.d.ScalingToRef(Sr.Tx.x, Sr.Tx.y, Sr.Tx.z, Qr)) : ar.d.IdentityToRef(Qr), rr.invert(), !isNaN(rr.m[0]) && (Qr.multiplyAtIndex(0, this._scalingDeterminant), rr.multiplyToRef(Qr, rr), !0)
      }
      JY() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Qr = ar.u.Zero();
        return this.getPositionToRef(rr, Sr, Qr), Qr
      }
      getPositionToRef() {
        let rr = arguments.length > 1 ? arguments[1] : void 0,
          Sr = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const rr = this.getLocalMatrix();
          Sr.x = rr.m[12], Sr.y = rr.m[13], Sr.z = rr.m[14]
        } else {
          const Qr = Mr._TmpMats[0].iH(this.getAbsoluteMatrix());
          rr && Qr.multiplyToRef(rr.getWorldMatrix(), Qr), Sr.x = Qr.m[12], Sr.y = Qr.m[13], Sr.z = Qr.m[14]
        }
      }
      getAbsolutePosition() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Sr = ar.u.Zero();
        return this.getPositionToRef(1, rr, Sr), Sr
      }
      getAbsolutePositionToRef(rr, Sr) {
        this.getPositionToRef(1, rr, Sr)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.iH(this._localMatrix);
          const rr = this._skeleton.getPoseMatrix();
          rr && this._absoluteMatrix.multiplyToRef(rr, this._absoluteMatrix)
        }
        const rr = this.children,
          Sr = rr.length;
        for (let Qr = 0; Qr < Sr; Qr++) rr[Qr].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      Y1(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Qr = ar.u.Zero();
        return this.getDirectionToRef(rr, Sr, Qr), Qr
      }
      getDirectionToRef(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = Mr._TmpMats[0].iH(this.getAbsoluteMatrix());
        Sr && Zr.multiplyToRef(Sr.getWorldMatrix(), Zr), ar.u.TransformNormalToRef(rr, Zr, Qr), Qr.normalize()
      }
      getRotation() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Qr = ar.u.Zero();
        return this.getRotationToRef(rr, Sr, Qr), Qr
      }
      getRotationToRef() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = Mr._TmpQuat;
        this.getRotationQuaternionToRef(rr, Sr, Zr), Zr.toEulerAnglesToRef(Qr)
      }
      getRotationQuaternion() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Qr = ar.h.Identity();
        return this.getRotationQuaternionToRef(rr, Sr, Qr), Qr
      }
      getRotationQuaternionToRef() {
        let rr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Sr = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Sr.iH(this._localRotation);
        else {
          const Qr = Mr._TmpMats[0],
            Zr = this.getAbsoluteMatrix();
          rr ? Zr.multiplyToRef(rr.getWorldMatrix(), Qr) : Qr.iH(Zr), Qr.multiplyAtIndex(0, this._scalingDeterminant), Qr.multiplyAtIndex(1, this._scalingDeterminant), Qr.multiplyAtIndex(2, this._scalingDeterminant), Qr.decompose(void 0, Sr, void 0)
        }
      }
      getRotationMatrix() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 ? arguments[1] : void 0;
        const Qr = ar.d.Identity();
        return this.getRotationMatrixToRef(rr, Sr, Qr), Qr
      }
      getRotationMatrixToRef() {
        let rr = arguments.length > 1 ? arguments[1] : void 0,
          Sr = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Sr);
        else {
          const Qr = Mr._TmpMats[0],
            Zr = this.getAbsoluteMatrix();
          rr ? Zr.multiplyToRef(rr.getWorldMatrix(), Qr) : Qr.iH(Zr), Qr.multiplyAtIndex(0, this._scalingDeterminant), Qr.multiplyAtIndex(1, this._scalingDeterminant), Qr.multiplyAtIndex(2, this._scalingDeterminant), Qr.getRotationMatrixToRef(Sr)
        }
      }
      getAbsolutePositionFromLocal(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Qr = ar.u.Zero();
        return this.getAbsolutePositionFromLocalToRef(rr, Sr, Qr), Qr
      }
      getAbsolutePositionFromLocalToRef(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = Mr._TmpMats[0].iH(this.getAbsoluteMatrix());
        Sr && Zr.multiplyToRef(Sr.getWorldMatrix(), Zr), ar.u.TransformCoordinatesToRef(rr, Zr, Qr)
      }
      getLocalPositionFromAbsolute(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Qr = ar.u.Zero();
        return this.getLocalPositionFromAbsoluteToRef(rr, Sr, Qr), Qr
      }
      getLocalPositionFromAbsoluteToRef(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = Mr._TmpMats[0].iH(this.getAbsoluteMatrix());
        Sr && Zr.multiplyToRef(Sr.getWorldMatrix(), Zr), Zr.invert(), ar.u.TransformCoordinatesToRef(rr, Zr, Qr)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const rr = this._skeleton.bones.indexOf(this);
        if (-1 !== rr && this._skeleton.bones.splice(rr, 1), this._parentNode && this._parentNode.children) {
          const rr = this._parentNode.children,
            Sr = rr.indexOf(this); - 1 !== Sr && rr.splice(Sr, 1)
        }
        super.dispose()
      }
    }
    Mr._TmpVecs = (0, Rr.e)(2, ar.u.Zero), Mr._TmpQuat = ar.h.Identity(), Mr._TmpMats = (0, Rr.e)(5, ar.d.Identity), (qr = Mr.prototype).copyAnimationRange ?? (qr.copyAnimationRange = (0, Cr.h)("Bone", "copyAnimationRange"));
    var Gr = Qr(41941);
    let kr = !1;
    var Ar = Qr(41845),
      Vr = Qr(42165),
      ir = Qr(42174),
      wr = Qr(42167),
      cr = Qr(41980);

    function Fr(rr, Sr) {
      const Qr = (0, Nr.RandomRange)(0, 1);
      pr.f.LerpToRef(Sr.color1, Sr.color2, Qr, rr.color)
    }

    function or(rr, Sr) {
      Sr.colorDead.subtractToRef(rr.color, Sr._colorDiff), Sr._colorDiff.scaleToRef(1 / rr.lifeTime, rr.colorStep)
    }

    function br(rr, Sr) {
      rr._properties.currentColorGradient = Sr._colorGradients[0], rr._properties.currentColorGradient.getColorToRef(rr.color), rr._properties.currentColor1.iH(rr.color), Sr._colorGradients.length > 1 ? Sr._colorGradients[1].getColorToRef(rr._properties.currentColor2) : rr._properties.currentColor2.iH(rr.color)
    }

    function Jr(rr, Sr) {
      const Qr = Sr._colorGradients;
      Zr.j.GetCurrentGradient(Sr._ratio, Qr, ((Sr, Qr, Zr) => {
        Sr !== rr._properties.currentColorGradient && (rr._properties.currentColor1.iH(rr._properties.currentColor2), Qr.getColorToRef(rr._properties.currentColor2), rr._properties.currentColorGradient = Sr), pr.f.LerpToRef(rr._properties.currentColor1, rr._properties.currentColor2, Zr, rr.color), rr.color.a < 0 && (rr.color.a = 0)
      }))
    }

    function Dr(rr, Sr) {
      rr.colorStep.scaleToRef(Sr._scaledUpdateSpeed, Sr._scaledColorStep), rr.color.addInPlace(Sr._scaledColorStep), rr.color.a < 0 && (rr.color.a = 0)
    }

    function dr(rr, Sr) {
      Zr.j.GetCurrentGradient(Sr._ratio, Sr._angularSpeedGradients, ((Sr, Qr, Zr) => {
        Sr !== rr._properties.currentAngularSpeedGradient && (rr._properties.currentAngularSpeed1 = rr._properties.currentAngularSpeed2, rr._properties.currentAngularSpeed2 = Qr.getFactor(), rr._properties.currentAngularSpeedGradient = Sr), rr.angularSpeed = (0, Nr.Lerp)(rr._properties.currentAngularSpeed1, rr._properties.currentAngularSpeed2, Zr)
      }))
    }

    function sr(rr, Sr) {
      rr.angle += rr.angularSpeed * Sr._scaledUpdateSpeed
    }

    function ur(rr, Sr) {
      Sr.particleEmitterType.startDirectionFunction(Sr._emitterWorldMatrix, rr.direction, rr, Sr.isLocal, Sr._emitterInverseWorldMatrix)
    }

    function rS(rr, Sr) {
      Sr.startDirectionFunction(Sr._emitterWorldMatrix, rr.direction, rr, Sr.isLocal)
    }

    function SS(rr, Sr) {
      rr._properties.currentVelocityGradient = Sr._velocityGradients[0], rr._properties.currentVelocity1 = rr._properties.currentVelocityGradient.getFactor(), Sr._velocityGradients.length > 1 ? rr._properties.currentVelocity2 = Sr._velocityGradients[1].getFactor() : rr._properties.currentVelocity2 = rr._properties.currentVelocity1
    }

    function QS(rr, Sr) {
      rr._properties.currentLimitVelocityGradient = Sr._limitVelocityGradients[0], rr._properties.currentLimitVelocity1 = rr._properties.currentLimitVelocityGradient.getFactor(), Sr._limitVelocityGradients.length > 1 ? rr._properties.currentLimitVelocity2 = Sr._limitVelocityGradients[1].getFactor() : rr._properties.currentLimitVelocity2 = rr._properties.currentLimitVelocity1
    }

    function ZS(rr, Sr) {
      Zr.j.GetCurrentGradient(Sr._ratio, Sr._velocityGradients, ((Sr, Qr, Zr) => {
        Sr !== rr._properties.currentVelocityGradient && (rr._properties.currentVelocity1 = rr._properties.currentVelocity2, rr._properties.currentVelocity2 = Qr.getFactor(), rr._properties.currentVelocityGradient = Sr), rr._properties.directionScale *= (0, Nr.Lerp)(rr._properties.currentVelocity1, rr._properties.currentVelocity2, Zr)
      }))
    }

    function WS(rr, Sr) {
      Zr.j.GetCurrentGradient(Sr._ratio, Sr._limitVelocityGradients, ((Qr, Zr, Wr) => {
        Qr !== rr._properties.currentLimitVelocityGradient && (rr._properties.currentLimitVelocity1 = rr._properties.currentLimitVelocity2, rr._properties.currentLimitVelocity2 = Zr.getFactor(), rr._properties.currentLimitVelocityGradient = Qr);
        const ar = (0, Nr.Lerp)(rr._properties.currentLimitVelocity1, rr._properties.currentLimitVelocity2, Wr);
        rr.direction.length() > ar && rr.direction.scaleInPlace(Sr.limitVelocityDamping)
      }))
    }

    function aS(rr) {
      rr.direction.scaleToRef(rr._properties.directionScale, rr._properties.scaledDirection)
    }

    function jS(rr, Sr) {
      Sr.particleEmitterType.startPositionFunction(Sr._emitterWorldMatrix, rr.position, rr, Sr.isLocal)
    }

    function IS(rr, Sr) {
      Sr.startPositionFunction(Sr._emitterWorldMatrix, rr.position, rr, Sr.isLocal)
    }

    function fS(rr, Sr) {
      rr._properties.localPosition ? rr._properties.localPosition.iH(rr.position) : rr._properties.localPosition = rr.position.clone(), ar.u.TransformCoordinatesToRef(rr._properties.localPosition, Sr._emitterWorldMatrix, rr.position)
    }

    function ES(rr, Sr) {
      Sr.isLocal && rr._properties.localPosition ? (rr._properties.localPosition.addInPlace(rr._properties.scaledDirection), ar.u.TransformCoordinatesToRef(rr._properties.localPosition, Sr._emitterWorldMatrix, rr.position)) : rr.position.addInPlace(rr._properties.scaledDirection)
    }

    function pS(rr, Sr) {
      rr._properties.currentDragGradient = Sr._dragGradients[0], rr._properties.currentDrag1 = rr._properties.currentDragGradient.getFactor(), Sr._dragGradients.length > 1 ? rr._properties.currentDrag2 = Sr._dragGradients[1].getFactor() : rr._properties.currentDrag2 = rr._properties.currentDrag1
    }

    function xS(rr, Sr) {
      Zr.j.GetCurrentGradient(Sr._ratio, Sr._dragGradients, ((Sr, Qr, Zr) => {
        Sr !== rr._properties.currentDragGradient && (rr._properties.currentDrag1 = rr._properties.currentDrag2, rr._properties.currentDrag2 = Qr.getFactor(), rr._properties.currentDragGradient = Sr);
        const Wr = (0, Nr.Lerp)(rr._properties.currentDrag1, rr._properties.currentDrag2, Zr);
        rr._properties.scaledDirection.scaleInPlace(1 - Wr)
      }))
    }

    function mS(rr, Sr) {
      rr._properties.randomNoiseCoordinates1 && rr._properties.randomNoiseCoordinates2 ? (rr._properties.randomNoiseCoordinates1.Hrr(Math.random(), Math.random(), Math.random()), rr._properties.randomNoiseCoordinates2.Hrr(Math.random(), Math.random(), Math.random())) : (rr._properties.randomNoiseCoordinates1 = new ar.u(Math.random(), Math.random(), Math.random()), rr._properties.randomNoiseCoordinates2 = new ar.u(Math.random(), Math.random(), Math.random()))
    }

    function NS(rr, Sr) {
      const Qr = Sr._noiseTextureData,
        Zr = Sr._noiseTextureSize;
      if (Qr && Zr && rr._properties.randomNoiseCoordinates1 && rr._properties.randomNoiseCoordinates2) {
        const Wr = Sr._fetchR(rr._properties.randomNoiseCoordinates1.x, rr._properties.randomNoiseCoordinates1.y, Zr.width, Zr.height, Qr),
          jr = Sr._fetchR(rr._properties.randomNoiseCoordinates1.z, rr._properties.randomNoiseCoordinates2.x, Zr.width, Zr.height, Qr),
          Ir = Sr._fetchR(rr._properties.randomNoiseCoordinates2.y, rr._properties.randomNoiseCoordinates2.z, Zr.width, Zr.height, Qr),
          fr = ar.n.kU[0],
          Er = ar.n.kU[1];
        fr.Hrr((2 * Wr - 1) * Sr.noiseStrength.x, (2 * jr - 1) * Sr.noiseStrength.y, (2 * Ir - 1) * Sr.noiseStrength.z), fr.scaleToRef(Sr._tempScaledUpdateSpeed, Er), rr.direction.addInPlace(Er)
      }
    }

    function US(rr, Sr) {
      Sr.gravity.scaleToRef(Sr._tempScaledUpdateSpeed, Sr._scaledGravity), rr.direction.addInPlace(Sr._scaledGravity)
    }

    function tS(rr, Sr) {
      rr.size = (0, Nr.RandomRange)(Sr.minSize, Sr.maxSize), rr.scale.Hrr((0, Nr.RandomRange)(Sr.minScaleX, Sr.maxScaleX), (0, Nr.RandomRange)(Sr.minScaleY, Sr.maxScaleY))
    }

    function hS(rr, Sr) {
      rr._properties.currentSizeGradient = Sr._sizeGradients[0], rr._properties.currentSize1 = rr._properties.currentSizeGradient.getFactor(), rr.size = rr._properties.currentSize1, Sr._sizeGradients.length > 1 ? rr._properties.currentSize2 = Sr._sizeGradients[1].getFactor() : rr._properties.currentSize2 = rr._properties.currentSize1, rr.scale.Hrr((0, Nr.RandomRange)(Sr.minScaleX, Sr.maxScaleX), (0, Nr.RandomRange)(Sr.minScaleY, Sr.maxScaleY))
    }

    function zS(rr, Sr) {
      const Qr = Sr._actualFrame / Sr.targetStopDuration;
      Zr.j.GetCurrentGradient(Qr, Sr._startSizeGradients, ((Qr, Zr, Wr) => {
        Qr !== Sr._currentStartSizeGradient && (Sr._currentStartSize1 = Sr._currentStartSize2, Sr._currentStartSize2 = Zr.getFactor(), Sr._currentStartSizeGradient = Qr);
        const ar = (0, Nr.Lerp)(Sr._currentStartSize1, Sr._currentStartSize2, Wr);
        rr.scale.scaleInPlace(ar)
      }))
    }

    function YS(rr, Sr) {
      Zr.j.GetCurrentGradient(Sr._ratio, Sr._sizeGradients, ((Sr, Qr, Zr) => {
        Sr !== rr._properties.currentSizeGradient && (rr._properties.currentSize1 = rr._properties.currentSize2, rr._properties.currentSize2 = Qr.getFactor(), rr._properties.currentSizeGradient = Sr), rr.size = (0, Nr.Lerp)(rr._properties.currentSize1, rr._properties.currentSize2, Zr)
      }))
    }

    function nS(rr, Sr) {
      rr.remapData = new ar.x(0, 1, 0, 1)
    }

    function eS(rr, Sr) {
      Sr._colorRemapGradients && Sr._colorRemapGradients.length > 0 && Zr.j.GetCurrentGradient(Sr._ratio, Sr._colorRemapGradients, ((Sr, Qr, Zr) => {
        const Wr = (0, Nr.Lerp)(Sr.factor1, Qr.factor1, Zr),
          ar = (0, Nr.Lerp)(Sr.factor2, Qr.factor2, Zr);
        rr.remapData.x = Wr, rr.remapData.y = ar - Wr
      })), Sr._alphaRemapGradients && Sr._alphaRemapGradients.length > 0 && Zr.j.GetCurrentGradient(Sr._ratio, Sr._alphaRemapGradients, ((Sr, Qr, Zr) => {
        const Wr = (0, Nr.Lerp)(Sr.factor1, Qr.factor1, Zr),
          ar = (0, Nr.Lerp)(Sr.factor2, Qr.factor2, Zr);
        rr.remapData.z = Wr, rr.remapData.w = ar - Wr
      }))
    }

    function KS(rr, Sr) {
      const Qr = (0, Nr.Clamp)(Sr._actualFrame / Sr.targetStopDuration);
      Zr.j.GetCurrentGradient(Qr, Sr._lifeTimeGradients, ((Sr, Zr) => {
        const Wr = Sr,
          ar = Zr,
          jr = Wr.getFactor(),
          Ir = ar.getFactor(),
          fr = (Qr - Wr.gradient) / (ar.gradient - Wr.gradient);
        rr.lifeTime = (0, Nr.Lerp)(jr, Ir, fr)
      })), Sr._emitPower = (0, Nr.RandomRange)(Sr.minEmitPower, Sr.maxEmitPower)
    }

    function yS(rr, Sr) {
      rr.lifeTime = (0, Nr.RandomRange)(Sr.minLifeTime, Sr.maxLifeTime), Sr._emitPower = (0, Nr.RandomRange)(Sr.minEmitPower, Sr.maxEmitPower)
    }

    function BS(rr, Sr) {
      0 === Sr._emitPower ? (rr._properties.initialDirection ? rr._properties.initialDirection.iH(rr.direction) : rr._properties.initialDirection = rr.direction.clone(), rr.direction.set(0, 0, 0)) : (rr._properties.initialDirection = null, rr.direction.scaleInPlace(Sr._emitPower)), rr.direction.addInPlace(Sr._inheritedVelocityOffset)
    }

    function TS(rr, Sr) {
      rr.angularSpeed = (0, Nr.RandomRange)(Sr.minAngularSpeed, Sr.maxAngularSpeed), rr.angle = (0, Nr.RandomRange)(Sr.minInitialRotation, Sr.maxInitialRotation)
    }

    function vS(rr, Sr) {
      rr._properties.currentAngularSpeedGradient = Sr._angularSpeedGradients[0], rr.angularSpeed = rr._properties.currentAngularSpeedGradient.getFactor(), rr._properties.currentAngularSpeed1 = rr.angularSpeed, Sr._angularSpeedGradients.length > 1 ? rr._properties.currentAngularSpeed2 = Sr._angularSpeedGradients[1].getFactor() : rr._properties.currentAngularSpeed2 = rr._properties.currentAngularSpeed1, rr.angle = (0, Nr.RandomRange)(Sr.minInitialRotation, Sr.maxInitialRotation)
    }

    function OS(rr, Sr) {
      rr._properties.initialStartSpriteCellId = Sr.startSpriteCellID, rr._properties.initialEndSpriteCellId = Sr.endSpriteCellID, rr._properties.initialSpriteCellLoop = Sr.spriteCellLoop
    }

    function LS(rr, Sr) {
      rr.previousItem = Sr.previousItem, rr.nextItem = Sr, Sr.previousItem && (Sr.previousItem.nextItem = rr), Sr.previousItem = rr
    }

    function lS(rr, Sr) {
      rr.previousItem = Sr, rr.nextItem = Sr.nextItem, Sr.nextItem && (Sr.nextItem.previousItem = rr), Sr.nextItem = rr
    }

    function XS(rr) {
      rr.previousItem && (rr.previousItem.nextItem = rr.nextItem), rr.nextItem && (rr.nextItem.previousItem = rr.previousItem)
    }
    var PS = Qr(42215);
    class HS extends yr {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(rr) {
        this._startDirectionFunction !== rr && (this._startDirectionFunction = rr, this._directionCreation.process = rr ? rS : ur)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(rr) {
        this._startPositionFunction !== rr && (this._startPositionFunction = rr, this._positionCreation.process = rr ? IS : jS)
      }
      set onDispose(rr) {
        this._onDisposeObserver && this.lC.remove(this._onDisposeObserver), this._onDisposeObserver = this.lC.add(rr)
      }
      get Dv() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(rr) {
        this._useRampGradients !== rr && (this._useRampGradients = rr, this._resetEffect(), rr ? (this._rampCreation = {
          process: nS,
          previousItem: null,
          nextItem: null
        }, lS(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: eS,
          previousItem: null,
          nextItem: null
        }, lS(this._remapGradientProcessing, this._gravityProcessing))) : (XS(this._rampCreation), XS(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(rr) {
        this._isLocal !== rr && (this._isLocal = rr, rr ? (this._isLocalCreation = {
          process: fS,
          previousItem: null,
          nextItem: null
        }, lS(this._isLocalCreation, this._positionCreation)) : XS(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(rr) {
        this._animationSheetEnabled !== rr && (this._animationSheetEnabled = rr, rr ? (this._sheetCreation = {
          process: OS,
          previousItem: null,
          nextItem: null
        }, lS(this._sheetCreation, this._colorDeadCreation)) : XS(this._sheetCreation), this._reset())
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
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[rr]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[rr] ?? this._customWrappers[0]
      }
      setCustomEffect(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Sr] = new Vr.b(this._engine), this._customWrappers[Sr].effect = rr, this._customWrappers[Sr].drawContext && (this._customWrappers[Sr].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Wr.d), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(rr) {
        if (this.noiseTexture !== rr) {
          if (this._noiseTexture = rr, !rr) return XS(this._noiseCreation), void XS(this._noiseProcessing);
          this._noiseCreation = {
            process: mS,
            previousItem: null,
            nextItem: null
          }, lS(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: NS,
            previousItem: null,
            nextItem: null
          }, lS(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ir = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Er = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        kr || (kr = !0, Hr(Gr.f, Mr)), (0, Ar.d)(), super(rr), this._emitterInverseWorldMatrix = ar.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new ar.u, this.lC = new Wr.d, this.onStoppedObservable = new Wr.d, this.onStartedObservable = new Wr.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new pr.f(0, 0, 0, 0), this._colorDiff = new pr.f(0, 0, 0, 0), this._scaledGravity = ar.u.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = rr => {}, this.recycleParticle = rr => {
          const Sr = this._particles.pop();
          Sr !== rr && Sr.copyTo(rr), Sr.metadata = null, this._stockParticles.push(Sr)
        }, this._createParticle = () => {
          let rr;
          return 0 !== this._stockParticles.length ? (rr = this._stockParticles.pop(), rr._reset()) : rr = new Tr(this), this._prepareParticle(rr), rr
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Sr, this._epsilon = Ir, Qr && "Scene" !== Qr.getClassName() ? (this._engine = Qr, this.defaultProjectionMatrix = ar.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = Qr || fr.b.LastCreatedScene, this._engine = this._scene.MU(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.pT.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: yS,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: jS,
          previousItem: null,
          nextItem: null
        }, lS(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: ur,
          previousItem: null,
          nextItem: null
        }, lS(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: BS,
          previousItem: null,
          nextItem: null
        }, lS(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: tS,
          previousItem: null,
          nextItem: null
        }, lS(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: TS,
          previousItem: null,
          nextItem: null
        }, lS(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Fr,
          previousItem: null,
          nextItem: null
        }, lS(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: or,
          previousItem: null,
          nextItem: null
        }, lS(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Er || (this._colorProcessing = {
          process: Dr,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: sr,
          previousItem: null,
          nextItem: null
        }, lS(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: aS,
          previousItem: null,
          nextItem: null
        }, lS(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: ES,
          previousItem: null,
          nextItem: null
        }, lS(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: US,
          previousItem: null,
          nextItem: null
        }, lS(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = jr, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Vr.b(this._engine)
        }, this._customWrappers[0].effect = Zr, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new xr.b, this.updateFunction = rr => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((rr => {
            this._noiseTextureData = rr
          })));
          const Sr = rr === this._particles;
          for (let Qr = 0; Qr < rr.length; Qr++) {
            const Zr = rr[Qr];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Wr = Zr.age;
            if (Zr.age += this._tempScaledUpdateSpeed, Zr.age > Zr.lifeTime) {
              const rr = Zr.age - Wr,
                Sr = Zr.lifeTime - Wr;
              this._tempScaledUpdateSpeed = Sr * this._tempScaledUpdateSpeed / rr, Zr.age = Zr.lifeTime
            }
            this._ratio = Zr.age / Zr.lifeTime, Zr._properties.directionScale = this._tempScaledUpdateSpeed;
            let ar = this._updateQueueStart;
            for (; ar;) ar.process(Zr, this), ar = ar.nextItem;
            if (this._isAnimationSheetEnabled && !Er && Zr.updateCellIndex(), Zr._inheritParticleInfoToSubEmitters(), Zr.age >= Zr.lifeTime) {
              if (this._emitFromParticle(Zr), Zr._properties.attachedSubEmitters) {
                for (const rr of Zr._properties.attachedSubEmitters) rr.particleSystem.disposeOnStop = !0, rr.particleSystem.stop();
                Zr._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Zr), Sr && Qr--
            } else;
          }
        }
      }
      serialize(rr) {
        throw new Error("Method not implemented.")
      }
      clone(rr, Sr) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = KS : this._lifeTimeCreation.process = yS
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: zS,
          previousItem: null,
          nextItem: null
        }, lS(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (XS(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(rr) {
        this.targetStopDuration !== rr && (this._targetStopDuration = rr, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(rr, Sr, Qr) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, rr, Sr, Qr), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(rr) {
        return this._removeFactorGradient(this._lifeTimeGradients, rr), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(rr, Sr, Qr) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = hS, this._sizeGradientProcessing = {
          process: YS,
          previousItem: null,
          nextItem: null
        }, LS(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, rr, Sr, Qr), this
      }
      removeSizeGradient(rr) {
        return this._removeFactorGradient(this._sizeGradients, rr), 0 === this._sizeGradients?.length && (XS(this._sizeGradientProcessing), this._sizeCreation.process = tS), this
      }
      addColorRemapGradient(rr, Sr, Qr) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, rr, Sr, Qr), this
      }
      removeColorRemapGradient(rr) {
        return this._removeFactorGradient(this._colorRemapGradients, rr), this
      }
      addAlphaRemapGradient(rr, Sr, Qr) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, rr, Sr, Qr), this
      }
      removeAlphaRemapGradient(rr) {
        return this._removeFactorGradient(this._alphaRemapGradients, rr), this
      }
      addAngularSpeedGradient(rr, Sr, Qr) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = vS, this._angularSpeedGradientProcessing = {
          process: dr,
          previousItem: null,
          nextItem: null
        }, LS(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, rr, Sr, Qr), this
      }
      removeAngularSpeedGradient(rr) {
        return this._removeFactorGradient(this._angularSpeedGradients, rr), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = TS, XS(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(rr, Sr, Qr) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: SS,
          previousItem: null,
          nextItem: null
        }, lS(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: ZS,
          previousItem: null,
          nextItem: null
        }, LS(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, rr, Sr, Qr), this
      }
      removeVelocityGradient(rr) {
        return this._removeFactorGradient(this._velocityGradients, rr), 0 === this._velocityGradients?.length && (XS(this._velocityCreation), XS(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(rr, Sr, Qr) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: QS,
          previousItem: null,
          nextItem: null
        }, lS(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: WS,
          previousItem: null,
          nextItem: null
        }, lS(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, rr, Sr, Qr), this
      }
      removeLimitVelocityGradient(rr) {
        return this._removeFactorGradient(this._limitVelocityGradients, rr), 0 === this._limitVelocityGradients?.length && (XS(this._limitVelocityCreation), XS(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(rr, Sr, Qr) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: pS,
          previousItem: null,
          nextItem: null
        }, LS(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: xS,
          previousItem: null,
          nextItem: null
        }, LS(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, rr, Sr, Qr), this
      }
      removeDragGradient(rr) {
        return this._removeFactorGradient(this._dragGradients, rr), 0 === this._dragGradients?.length && (XS(this._dragCreation), XS(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(rr, Sr, Qr) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, rr, Sr, Qr), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(rr) {
        return this._removeFactorGradient(this._startSizeGradients, rr), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const rr = new Uint8Array(4 * this._rawTextureWidth),
          Sr = pr.l.Color3[0];
        for (let Qr = 0; Qr < this._rawTextureWidth; Qr++) {
          const Wr = Qr / this._rawTextureWidth;
          Zr.j.GetCurrentGradient(Wr, this._rampGradients, ((Zr, Wr, ar) => {
            pr.e.LerpToRef(Zr.color, Wr.color, ar, Sr), rr[4 * Qr] = 255 * Sr.r, rr[4 * Qr + 1] = 255 * Sr.g, rr[4 * Qr + 2] = 255 * Sr.b, rr[4 * Qr + 3] = 255
          }))
        }
        this._rampGradientsTexture = Ir.c.CreateRGBATexture(rr, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((rr, Sr) => rr.gradient < Sr.gradient ? -1 : rr.gradient > Sr.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(rr, Sr) {
        this._rampGradients || (this._rampGradients = []);
        const Qr = new Zr.f(rr, Sr);
        return this._rampGradients.push(Qr), this._syncRampGradientTexture(), this
      }
      removeRampGradient(rr) {
        return this._removeGradientAndTexture(rr, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(rr, Sr, Qr) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = br, this._colorProcessing.process = Jr);
        const Wr = new Zr.d(rr, Sr, Qr);
        return this._colorGradients.push(Wr), this._colorGradients.sort(((rr, Sr) => rr.gradient < Sr.gradient ? -1 : rr.gradient > Sr.gradient ? 1 : 0)), this
      }
      removeColorGradient(rr) {
        if (!this._colorGradients) return this;
        let Sr = 0;
        for (const Qr of this._colorGradients) {
          if (Qr.gradient === rr) {
            this._colorGradients.splice(Sr, 1);
            break
          }
          Sr++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Fr, this._colorProcessing.process = Dr), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const rr of this._drawWrappers)
            if (rr)
              for (const Sr of rr) Sr?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(rr, Sr, Qr, Zr, Wr) {
        return Wr[4 * (((rr = .5 * Math.abs(rr) + .5) * Qr % Qr | 0) + ((Sr = .5 * Math.abs(Sr) + .5) * Zr % Zr | 0) * Qr)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const rr = this._engine,
          Sr = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Sr), this._vertexBuffer = new jr.c(rr, this._vertexData, !0, Sr);
        let Qr = 0;
        const Zr = this._vertexBuffer.createVertexBuffer(jr.j.PositionKind, Qr, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[jr.j.PositionKind] = Zr, Qr += 3;
        const Wr = this._vertexBuffer.createVertexBuffer(jr.j.ColorKind, Qr, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[jr.j.ColorKind] = Wr, Qr += 4;
        const ar = this._vertexBuffer.createVertexBuffer("angle", Qr, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = ar, Qr += 1;
        const Ir = this._vertexBuffer.createVertexBuffer("size", Qr, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Ir, Qr += 2, this._isAnimationSheetEnabled) {
          const rr = this._vertexBuffer.createVertexBuffer("cellIndex", Qr, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = rr, Qr += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const rr = this._vertexBuffer.createVertexBuffer("direction", Qr, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = rr, Qr += 3
        }
        if (this._useRampGradients) {
          const rr = this._vertexBuffer.createVertexBuffer("remapData", Qr, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = rr, Qr += 4
        }
        let fr;
        if (this._useInstancing) {
          const Sr = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new jr.c(rr, Sr, !1, 2), fr = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else fr = this._vertexBuffer.createVertexBuffer("offset", Qr, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = fr, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const rr = [],
          Sr = [];
        let Qr = 0;
        for (let Zr = 0; Zr < this._capacity; Zr++) rr.push(Qr), rr.push(Qr + 1), rr.push(Qr + 2), rr.push(Qr), rr.push(Qr + 2), rr.push(Qr + 3), Sr.push(Qr, Qr + 1, Qr + 1, Qr + 2, Qr + 2, Qr + 3, Qr + 3, Qr, Qr, Qr + 3), Qr += 4;
        this._indexBuffer = this._engine.createIndexBuffer(rr), this._linesIndexBuffer = this._engine.createIndexBuffer(Sr)
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
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (rr) return this.startDelay = rr, void setTimeout((() => {
          this.start(0)
        }), rr);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const rr = this.noiseTexture;
          if (rr && rr.onGeneratedObservable) rr.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let Sr = 0; Sr < this.preWarmCycles; Sr++) this.animate(!0), rr.render()
            }))
          }));
          else
            for (let Sr = 0; Sr < this.preWarmCycles; Sr++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(rr))
      }
      _postStop(rr) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(rr, Sr, Qr, Zr) {
        let Wr = rr * this._vertexBufferSize;
        const jr = ar.n.kU[0].iH(this._scene?.floatingOriginOffset || ar.u.ZeroReadOnly);
        if (this._vertexData[Wr++] = Sr.position.x + this.worldOffset.x - jr.x, this._vertexData[Wr++] = Sr.position.y + this.worldOffset.y - jr.y, this._vertexData[Wr++] = Sr.position.z + this.worldOffset.z - jr.z, this._vertexData[Wr++] = Sr.color.r, this._vertexData[Wr++] = Sr.color.g, this._vertexData[Wr++] = Sr.color.b, this._vertexData[Wr++] = Sr.color.a, this._vertexData[Wr++] = Sr.angle, this._vertexData[Wr++] = Sr.scale.x * Sr.size, this._vertexData[Wr++] = Sr.scale.y * Sr.size, this._isAnimationSheetEnabled && (this._vertexData[Wr++] = Sr.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Wr++] = Sr.direction.x, this._vertexData[Wr++] = Sr.direction.y, this._vertexData[Wr++] = Sr.direction.z);
        else if (Sr._properties.initialDirection) {
          let rr = Sr._properties.initialDirection;
          this.isLocal && (ar.u.TransformNormalToRef(rr, this._emitterWorldMatrix, ar.n.kU[0]), rr = ar.n.kU[0]), 0 === rr.x && 0 === rr.z && (rr.x = .001), this._vertexData[Wr++] = rr.x, this._vertexData[Wr++] = rr.y, this._vertexData[Wr++] = rr.z
        } else {
          let rr = Sr.direction;
          this.isLocal && (ar.u.TransformNormalToRef(rr, this._emitterWorldMatrix, ar.n.kU[0]), rr = ar.n.kU[0]), 0 === rr.x && 0 === rr.z && (rr.x = .001), this._vertexData[Wr++] = rr.x, this._vertexData[Wr++] = rr.y, this._vertexData[Wr++] = rr.z
        }
        this._useRampGradients && Sr.remapData && (this._vertexData[Wr++] = Sr.remapData.x, this._vertexData[Wr++] = Sr.remapData.y, this._vertexData[Wr++] = Sr.remapData.z, this._vertexData[Wr++] = Sr.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === Qr ? Qr = this._epsilon : 1 === Qr && (Qr = 1 - this._epsilon), 0 === Zr ? Zr = this._epsilon : 1 === Zr && (Zr = 1 - this._epsilon)), this._vertexData[Wr++] = Qr, this._vertexData[Wr] = Zr)
      }
      _prepareParticle(rr) {}
      _createNewOnes(rr) {
        let Sr;
        for (let Qr = 0; Qr < rr && this._particles.length !== this._capacity; Qr++) {
          Sr = this._createParticle(), this._particles.push(Sr);
          let rr = this._createQueueStart;
          for (; rr;) rr.process(Sr, this), rr = rr.nextItem;
          Sr._inheritParticleInfoToSubEmitters()
        }
      }
      _update(rr) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const rr = this.emitter;
          this._emitterWorldMatrix = rr.getWorldMatrix()
        } else {
          const rr = this.emitter;
          this._emitterWorldMatrix = ar.d.Translation(rr.x, rr.y, rr.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(rr)
      }
      static _GetAttributeNamesOrOptions() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = [jr.j.PositionKind, jr.j.ColorKind, "angle", "offset", "size"];
        return rr && Zr.push("cellIndex"), Sr || Zr.push("direction"), Qr && Zr.push("remapData"), Zr
      }
      static _GetEffectCreationOptions() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, ir.c)(Zr), rr && Zr.push("particlesInfos"), Sr && Zr.push("logarithmicDepthConstant"), Qr && (Zr.push("vFogInfos"), Zr.push("vFogColor")), Zr
      }
      fillDefines(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, ir.h)(this, this._scene, rr), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && rr.push("#define FOG")), this._isAnimationSheetEnabled && rr.push("#define ANIMATESHEET"), this.useLogarithmicDepth && rr.push("#define LOGARITHMICDEPTH"), Sr === yr.BLENDMODE_MULTIPLY && rr.push("#define BLENDMULTIPLYMODE"), this.isLocal && rr.push("#define LOCAL"), this._useRampGradients && rr.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (rr.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            rr.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            rr.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && rr.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            rr.push("#define BILLBOARDMODE_ALL")
        }
        Qr && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), rr.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(rr, Sr, Qr) {
        Sr.push(...HS._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), rr.push(...HS._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), Qr.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, cr.g)(rr, this._imageProcessingConfigurationDefines), (0, cr.c)(Qr, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(rr) {
        var Sr;
        const Qr = this._getCustomDrawWrapper(rr);
        if (Qr?.effect) return Qr;
        const Zr = [];
        this.fillDefines(Zr, rr);
        const ar = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          jr = PS.b._PrepareStringDefines(ar, Zr),
          Ir = jr ? PS.b.GetConfiguration(ar) : void 0;
        let fr = this._drawWrappers[ar];
        fr || (fr = this._drawWrappers[ar] = [], 0 === ar || this._renderPassObserver || (this._renderPassObserver = ((Sr = this._engine)._onReleaseRenderPassObservable ?? (Sr._onReleaseRenderPassObservable = new Wr.d)).add((rr => {
          const Sr = this._drawWrappers[rr];
          if (Sr) {
            for (const rr of Sr) rr?.dispose();
            delete this._drawWrappers[rr]
          }
        }))));
        let Er = fr[rr];
        Er || (Er = new Vr.b(this._engine), Er.drawContext && (Er.drawContext.useInstancing = this._useInstancing), fr[rr] = Er);
        const pr = Zr.join("\n");
        if (Er.defines !== pr) {
          const rr = [],
            Sr = [],
            Qr = [];
          this.fillUniformsAttributesAndSamplerNames(Sr, rr, Qr), jr && (Sr.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Ir?.defines.PREPASS_LOCAL_POSITION_INDEX && Sr.push("inverseEmitterWM", "geometryWorldOffset")), Er.setEffect(this._engine.createEffect("particles", {
            attributes: rr,
            uniformsNames: Sr,
            samplers: Qr,
            defines: pr,
            shaderLanguage: this._shaderLanguage,
            multiTarget: jr,
            indexParameters: jr ? {
              buffersCount: Ir?._mrtCount ?? 0
            } : void 0
          }, this._engine), pr)
        }
        return Er
      }
      _bindGeometryRendering(rr) {
        const Sr = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Qr = PS.b.GetConfiguration(Sr);
        if (!Qr?._defines) return;
        rr.setFloat("objectId", 0), rr.setInt("meshBlendTag", 0);
        const Zr = this._scene?.activeCamera;
        if (rr.setFloat2("cameraInfo", Zr?.minZ ?? 0, Zr?.maxZ ?? 1), this.isLocal && void 0 !== Qr.defines.PREPASS_LOCAL_POSITION_INDEX) {
          rr.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Sr = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || ar.u.ZeroReadOnly, ar.n.kU[0]);
          rr.setVector3("geometryWorldOffset", Sr)
        }
      }
      animate() {
        let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Sr && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Sr ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) rr = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Sr = this._calculateEmitRate();
            rr = Sr * this._scaledUpdateSpeed | 0, this._newPartsExcess += Sr * this._scaledUpdateSpeed - rr
          }
          if (this._newPartsExcess > 1 && (rr += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? rr = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(rr), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Sr) {
            let rr = 0;
            for (let Sr = 0; Sr < this._particles.length; Sr++) {
              const Qr = this._particles[Sr];
              this._appendParticleVertices(rr, Qr), rr += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const rr = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Sr = this._particles.length;
                Sr < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Sr * rr, this._fixedCapacityHighWaterMark * rr), this._fixedCapacityHighWaterMark = Sr, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const rr = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * rr), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let rr = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const Sr = this._actualFrame / this.targetStopDuration;
          Zr.j.GetCurrentGradient(Sr, this._emitRateGradients, ((Sr, Qr, Zr) => {
            Sr !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = Qr.getFactor(), this._currentEmitRateGradient = Sr), rr = (0, Nr.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Zr)
          }))
        }
        return rr
      }
      _appendParticleVertices(rr, Sr) {
        this._appendParticleVertex(rr++, Sr, 0, 0), this._useInstancing || (this._appendParticleVertex(rr++, Sr, 1, 0), this._appendParticleVertex(rr++, Sr, 1, 1), this._appendParticleVertex(rr, Sr, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !HS.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Qr.e(665).then((() => Qr(64640))), Qr.e(659).then((() => Qr(64647)))])) : await Promise.all([Qr.e(648).then((() => Qr(64654))), Promise.all([Qr.e(641), Qr.e(674)]).then((() => Qr(64661)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== yr.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(yr.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(yr.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(rr) {
        const Sr = this._getWrapper(rr),
          Qr = Sr.effect,
          Zr = this._engine;
        Zr.enableEffect(Sr);
        const Wr = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        Qr.setTexture("diffuseSampler", this.particleTexture), Qr.setMatrix("view", Wr);
        const jr = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (Qr.setMatrix("projection", jr), this._isAnimationSheetEnabled && this.particleTexture) {
          const rr = this.particleTexture.getBaseSize();
          Qr.setFloat3("particlesInfos", this.spriteCellWidth / rr.width, this.spriteCellHeight / rr.height, this.spriteCellWidth / rr.width)
        }
        if (Qr.setVector2("translationPivot", this.translationPivot), Qr.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const rr = this._scene.activeCamera;
          Qr.setVector3("eyePosition", rr.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), Qr.setTexture("rampSampler", this._rampGradientsTexture));
        const Ir = Qr.defines;
        this._scene && ((0, ir.e)(Qr, this, this._scene), this.applyFog && (0, wr.d)(this._scene, void 0, Qr)), Ir.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Wr.invertToRef(ar.n.Matrix[0]), Qr.setMatrix("invView", ar.n.Matrix[0])), Qr._multiTarget && this._bindGeometryRendering(Qr), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Zr.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, Qr) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, Qr)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Zr.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, Qr) : Zr.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, Qr), this.useLogarithmicDepth && this._scene && (0, wr.q)(Ir, Qr, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(Qr), this._setEngineBasedOnBlendMode(rr), Qr._multiTarget && PS.b._BindZeroAlphaDiscard(Zr, Qr);
        let fr = !1;
        try {
          PS.b._BindAttachmentsForEffect(Zr, Qr) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(Qr), this._useInstancing ? this._scene?.forceWireframe ? Zr.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Zr.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Zr.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Zr.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), fr = !0)
        } finally {
          PS.b._RestoreAttachments(Zr)
        }
        return fr ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const rr = this._engine;
        let Sr;
        return rr.setState && (rr.setState(!1), this.forceDepthWrite && rr.setDepthWrite(!0)), Sr = this.blendMode === yr.BLENDMODE_MULTIPLYADD ? this._render(yr.BLENDMODE_MULTIPLY) + this._render(yr.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Sr
      }
      _onDispose() {}
      dispose() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), rr && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), rr && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Sr, Qr), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const rr = this._scene.pT.indexOf(this);
          rr > -1 && this._scene.pT.splice(rr, 1), this._scene._activeParticleSystems.dispose()
        }
        this.lC.notifyObservers(this), this.lC.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    HS.ForceGLSL = !1;
    var qS, RS = Qr(38609);
    ! function(rr) {
      rr[rr.ATTACHED = 0] = "ATTACHED", rr[rr.END = 1] = "END"
    }(qS || (qS = {}));
    class gS {
      constructor(rr) {
        if (this.particleSystem = rr, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !rr.emitter || !rr.emitter.dispose) {
          const Sr = (0, RS.d)("BABYLON.AbstractMesh");
          rr.emitter = new Sr("SubemitterSystemEmitter", rr.eC()), rr._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let rr = this.particleSystem.emitter;
        if (rr) {
          if (rr instanceof ar.u) rr = rr.clone();
          else if (-1 !== rr.getClassName().indexOf("Mesh")) {
            rr = new((0, RS.d)("BABYLON.Mesh"))("", rr.eC()), rr.isVisible = !1
          }
        } else rr = new ar.u;
        const Sr = new gS(this.particleSystem.clone(this.particleSystem.name, rr));
        return Sr.particleSystem.name += "Clone", Sr.type = this.type, Sr.inheritDirection = this.inheritDirection, Sr.inheritedVelocityAmount = this.inheritedVelocityAmount, Sr.particleSystem._disposeEmitterOnDispose = !0, Sr.particleSystem.disposeOnStop = !0, Sr
      }
      serialize() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = {};
        return Sr.type = this.type, Sr.inheritDirection = this.inheritDirection, Sr.inheritedVelocityAmount = this.inheritedVelocityAmount, Sr.particleSystem = this.particleSystem.serialize(rr), Sr
      }
      static _ParseParticleSystem(rr, Sr, Qr) {
        throw (0, Cr.l)("ParseParticle")
      }
      static Parse(rr, Sr, Qr) {
        const Zr = rr.particleSystem,
          Wr = new gS(gS._ParseParticleSystem(Zr, Sr, Qr, !0));
        return Wr.type = rr.type, Wr.inheritDirection = rr.inheritDirection, Wr.inheritedVelocityAmount = rr.inheritedVelocityAmount, Wr.particleSystem._isSubEmitter = !0, Wr
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var CS = Qr(41784),
      MS = Qr(41889);
    const GS = () => {};
    class kS {
      constructor() {
        this.particlePositionGenerator = GS, this.particleDestinationGenerator = GS, this.particleDirectionGenerator = GS
      }
      startDirectionFunction(rr, Sr, Qr, Zr) {
        const Wr = ar.n.kU[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== GS) this.particleDirectionGenerator(-1, Qr, Wr);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== GS) {
          this.particleDestinationGenerator(-1, Qr, Wr);
          const rr = ar.n.kU[1];
          Wr.subtractToRef(Qr.position, rr), rr.scaleToRef(1 / Qr.lifeTime, Wr)
        } else Wr.set(0, 0, 0);
        Zr ? Sr.iH(Wr) : ar.u.TransformNormalToRef(Wr, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, Zr) {
        const Wr = ar.n.kU[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== GS ? this.particlePositionGenerator(-1, Qr, Wr) : Wr.set(0, 0, 0), Zr ? Sr.iH(Wr) : ar.u.TransformCoordinatesToRef(Wr, rr, Sr)
      }
      clone() {
        const rr = new kS;
        return mr.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {}
      buildUniformLayout(rr) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.particlePositionGenerator = this.particlePositionGenerator, rr.particleDestinationGenerator = this.particleDestinationGenerator, rr
      }
      parse(rr) {
        rr.particlePositionGenerator && (this.particlePositionGenerator = rr.particlePositionGenerator), rr.particleDestinationGenerator && (this.particleDestinationGenerator = rr.particleDestinationGenerator)
      }
    }
    const AS = ar.u.Zero(),
      VS = ar.u.Zero(),
      iS = ar.u.Zero();
    class wS {
      constructor() {
        this.strength = 0, this.position = ar.u.Zero()
      }
      _processParticle(rr, Sr) {
        this.position.subtractToRef(rr.position, AS);
        const Qr = AS.lengthSquared() + 1;
        AS.normalize().scaleToRef(this.strength / Qr, VS), VS.scaleToRef(Sr._tempScaledUpdateSpeed, iS), rr.direction.addInPlace(iS)
      }
      serialize() {
        return {
          position: this.position.OWr(),
          strength: this.strength
        }
      }
    }
    const cS = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class FS extends HS {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = rr => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Sr = Math.floor(Math.random() * this._subEmitters.length);
          for (const Qr of this._subEmitters[Sr])
            if (1 === Qr.type) {
              const Sr = Qr.clone();
              rr._inheritParticleInfoToSubEmitter(Sr), Sr.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Sr.particleSystem), Sr.particleSystem.start()
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
      set flowMap(rr) {
        this._flowMap !== rr && (this._flowMap = rr, this._flowMapUpdate && (XS(this._flowMapUpdate), this._flowMapUpdate = null), rr && (this._flowMapUpdate = {
          process: rr => {
            const Sr = this.eC()?.getTransformMatrix();
            this._flowMap._processParticle(rr, this.flowMapStrength * this._tempScaledUpdateSpeed, Sr)
          },
          previousItem: null,
          nextItem: null
        }, lS(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(rr) {
        super.addAttractor(rr), 1 === this._attractors.length && (this._attractorUpdate = {
          process: rr => {
            for (const Sr of this._attractors) Sr._processParticle(rr, this)
          },
          previousItem: null,
          nextItem: null
        }, lS(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(rr) {
        super.removeAttractor(rr), 0 === this._attractors.length && this._attractorUpdate && XS(this._attractorUpdate)
      }
      start() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(rr)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const rr of this.subEmitters) rr instanceof FS ? this._subEmitters.push([new gS(rr)]) : rr instanceof gS ? this._subEmitters.push([rr]) : rr instanceof Array && this._subEmitters.push(rr)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const rr of this.activeSubSystems) rr.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const rr = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== rr && this._rootParticleSystem.activeSubSystems.splice(rr, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(rr) {
        rr && this._stopSubEmitters()
      }
      _prepareParticle(rr) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const Sr = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          rr._properties.attachedSubEmitters = [];
          for (const Qr of Sr)
            if (0 === Qr.type) {
              const Sr = Qr.clone();
              rr._properties.attachedSubEmitters.push(Sr), Sr.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), rr && this.particles)
          for (const Qr of this.particles)
            if (Qr._properties.attachedSubEmitters)
              for (let rr = Qr._properties.attachedSubEmitters.length - 1; rr >= 0; rr -= 1) Qr._properties.attachedSubEmitters[rr].dispose();
        if (Sr && this.activeSubSystems)
          for (let Qr = this.activeSubSystems.length - 1; Qr >= 0; Qr -= 1) this.activeSubSystems[Qr].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let rr = 0; rr < this._subEmitters.length; rr++)
            for (const Sr of this._subEmitters[rr]) Sr.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(rr, Sr, Qr, Zr) {
        let Wr;
        Wr = Qr instanceof CS.e ? null : Qr;
        const jr = (0, RS.d)("BABYLON.Texture");
        if (jr && Wr)
          if (rr.texture) Sr.particleTexture = jr.Parse(rr.texture, Wr, Zr);
          else if (rr.textureName) {
          const Qr = rr.textureSettings;
          if (Sr.particleTexture = new jr(Zr + rr.textureName, Wr, !1, void 0 === rr.invertY || rr.invertY, Qr ? Qr.samplingMode : void 0), Sr.particleTexture.name = rr.textureName, Qr) {
            const rr = Sr.particleTexture;
            for (const Sr of cS) void 0 !== Qr[Sr] && (rr[Sr] = Qr[Sr])
          }
        }
        if (rr.emitterId || 0 === rr.emitterId || void 0 !== rr.emitter ? (rr.emitterId || 0 === rr.emitterId) && Wr ? (Sr.emitter = Wr.getLastMeshById(rr.emitterId), Sr.emitter || (Sr.emitter = ar.u.Zero())) : Sr.emitter = ar.u.FromArray(rr.emitter) : Sr.emitter = ar.u.Zero(), Sr.isLocal = !!rr.isLocal, void 0 !== rr.renderingGroupId && (Sr.renderingGroupId = rr.renderingGroupId), void 0 !== rr.isBillboardBased && (Sr.isBillboardBased = rr.isBillboardBased), void 0 !== rr.billboardMode && (Sr.billboardMode = rr.billboardMode), void 0 !== rr.useLogarithmicDepth && (Sr.useLogarithmicDepth = rr.useLogarithmicDepth), rr.animations) {
          for (let Qr = 0; Qr < rr.animations.length; Qr++) {
            const Zr = rr.animations[Qr],
              Wr = (0, RS.d)("BABYLON.Animation");
            Wr && Sr.animations.push(Wr.Parse(Zr))
          }
          Sr.beginAnimationOnStart = rr.beginAnimationOnStart, Sr.beginAnimationFrom = rr.beginAnimationFrom, Sr.beginAnimationTo = rr.beginAnimationTo, Sr.beginAnimationLoop = rr.beginAnimationLoop
        }
        if (rr.autoAnimate && Wr && Wr.beginAnimation(Sr, rr.autoAnimateFrom, rr.autoAnimateTo, rr.autoAnimateLoop, rr.autoAnimateSpeed || 1), Sr.startDelay = 0 | rr.startDelay, Sr.minAngularSpeed = rr.minAngularSpeed, Sr.maxAngularSpeed = rr.maxAngularSpeed, Sr.minSize = rr.minSize, Sr.maxSize = rr.maxSize, rr.minScaleX && (Sr.minScaleX = rr.minScaleX, Sr.maxScaleX = rr.maxScaleX, Sr.minScaleY = rr.minScaleY, Sr.maxScaleY = rr.maxScaleY), void 0 !== rr.preWarmCycles && (Sr.preWarmCycles = rr.preWarmCycles, Sr.preWarmStepOffset = rr.preWarmStepOffset), void 0 !== rr.minInitialRotation && (Sr.minInitialRotation = rr.minInitialRotation, Sr.maxInitialRotation = rr.maxInitialRotation), Sr.minLifeTime = rr.minLifeTime, Sr.maxLifeTime = rr.maxLifeTime, Sr.minEmitPower = rr.minEmitPower, Sr.maxEmitPower = rr.maxEmitPower, Sr.emitRate = rr.emitRate, Sr.gravity = ar.u.FromArray(rr.gravity), rr.noiseStrength && (Sr.noiseStrength = ar.u.FromArray(rr.noiseStrength)), Sr.color1 = pr.f.FromArray(rr.color1), Sr.color2 = pr.f.FromArray(rr.color2), Sr.colorDead = pr.f.FromArray(rr.colorDead), Sr.updateSpeed = rr.updateSpeed, Sr.targetStopDuration = rr.targetStopDuration, Sr.blendMode = rr.blendMode, rr.colorGradients)
          for (const ar of rr.colorGradients) Sr.addColorGradient(ar.gradient, pr.f.FromArray(ar.color1), ar.color2 ? pr.f.FromArray(ar.color2) : void 0);
        if (rr.rampGradients) {
          for (const Qr of rr.rampGradients) Sr.addRampGradient(Qr.gradient, pr.e.FromArray(Qr.color));
          Sr.useRampGradients = rr.useRampGradients
        }
        if (rr.colorRemapGradients)
          for (const ar of rr.colorRemapGradients) Sr.addColorRemapGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.alphaRemapGradients)
          for (const ar of rr.alphaRemapGradients) Sr.addAlphaRemapGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.sizeGradients)
          for (const ar of rr.sizeGradients) Sr.addSizeGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.angularSpeedGradients)
          for (const ar of rr.angularSpeedGradients) Sr.addAngularSpeedGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.velocityGradients)
          for (const ar of rr.velocityGradients) Sr.addVelocityGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.dragGradients)
          for (const ar of rr.dragGradients) Sr.addDragGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.emitRateGradients)
          for (const ar of rr.emitRateGradients) Sr.addEmitRateGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.startSizeGradients)
          for (const ar of rr.startSizeGradients) Sr.addStartSizeGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.lifeTimeGradients)
          for (const ar of rr.lifeTimeGradients) Sr.addLifeTimeGradient(ar.gradient, void 0 !== ar.factor1 ? ar.factor1 : ar.factor, ar.factor2);
        if (rr.limitVelocityGradients) {
          for (const Qr of rr.limitVelocityGradients) Sr.addLimitVelocityGradient(Qr.gradient, void 0 !== Qr.factor1 ? Qr.factor1 : Qr.factor, Qr.factor2);
          Sr.limitVelocityDamping = rr.limitVelocityDamping
        }
        if (rr.noiseTexture && Wr) {
          const Qr = (0, RS.d)("BABYLON.ProceduralTexture");
          Sr.noiseTexture = Qr.Parse(rr.noiseTexture, Wr, Zr)
        }
        let Ir;
        if (rr.particleEmitterType) {
          switch (rr.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Ir = new hr;
              break;
            case "SphereDirectedParticleEmitter":
              Ir = new zr;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Ir = new nr;
              break;
            case "ConeDirectedParticleEmitter":
              Ir = new er;
              break;
            case "CylinderParticleEmitter":
              Ir = new Yr.h;
              break;
            case "CylinderDirectedParticleEmitter":
              Ir = new Yr.d;
              break;
            case "HemisphericParticleEmitter":
              Ir = new tr;
              break;
            case "PointParticleEmitter":
              Ir = new Ur;
              break;
            case "MeshParticleEmitter":
              Ir = new Kr;
              break;
            case "CustomParticleEmitter":
              Ir = new kS;
              break;
            default:
              Ir = new xr.b
          }
          Ir.parse(rr.particleEmitterType, Wr)
        } else Ir = new xr.b, Ir.parse(rr, Wr);
        Sr.particleEmitterType = Ir, Sr.startSpriteCellID = rr.startSpriteCellID, Sr.endSpriteCellID = rr.endSpriteCellID, Sr.spriteCellLoop = rr.spriteCellLoop ?? !0, Sr.spriteCellWidth = rr.spriteCellWidth, Sr.spriteCellHeight = rr.spriteCellHeight, Sr.spriteCellChangeSpeed = rr.spriteCellChangeSpeed, Sr.spriteRandomStartCell = rr.spriteRandomStartCell, Sr.disposeOnStop = rr.disposeOnStop ?? !1, Sr.manualEmitCount = rr.manualEmitCount ?? -1
      }
      static Parse(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wr = arguments.length > 4 ? arguments[4] : void 0;
        const jr = rr.name;
        let Ir, fr, Er = null,
          xr = null;
        if (Sr instanceof CS.e ? Ir = Sr : (fr = Sr, Ir = fr.MU()), rr.customShader && (0, Cr.c)(Ir.createEffectForParticles)) {
          xr = rr.customShader;
          const Sr = xr.shaderOptions.defines.length > 0 ? xr.shaderOptions.defines.join("\n") : "";
          Er = Ir.createEffectForParticles(xr.shaderPath.fragmentElement, xr.shaderOptions.uniforms, xr.shaderOptions.samplers, Sr)
        }
        const mr = new FS(jr, Wr || rr.sx, Sr, Er, rr.isAnimationSheetEnabled);
        if (mr.customShader = xr, mr._rootUrl = Qr, rr.id && (mr.id = rr.id), rr.subEmitters) {
          mr.subEmitters = [];
          for (const Zr of rr.subEmitters) {
            const rr = [];
            for (const Wr of Zr) rr.push(gS.Parse(Wr, Sr, Qr));
            mr.subEmitters.push(rr)
          }
        }
        if (rr.attractors)
          for (const pr of rr.attractors) {
            const rr = new wS;
            rr.position = ar.u.FromArray(pr.position), rr.strength = pr.strength, mr.addAttractor(rr)
          }
        return FS._Parse(rr, mr, Sr, Qr), rr.textureMask && (mr.textureMask = pr.f.FromArray(rr.textureMask)), rr.worldOffset && (mr.worldOffset = ar.u.FromArray(rr.worldOffset)), rr.preventAutoStart && (mr.preventAutoStart = rr.preventAutoStart), rr.metadata && (mr.metadata = rr.metadata), Zr || mr.preventAutoStart || mr.start(), mr
      }
      serialize() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = {};
        if (FS._Serialize(Sr, this, rr), Sr.textureMask = this.textureMask.OWr(), Sr.customShader = this.customShader, Sr.preventAutoStart = this.preventAutoStart, Sr.worldOffset = this.worldOffset.OWr(), this.metadata && (Sr.metadata = this.metadata), this.subEmitters) {
          Sr.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const Qr of this._subEmitters) {
            const Zr = [];
            for (const Sr of Qr) Sr.particleSystem.doNotSerialize || Zr.push(Sr.serialize(rr));
            Sr.subEmitters.push(Zr)
          }
        }
        if (this._attractors && this._attractors.length) {
          Sr.attractors = [];
          for (const rr of this._attractors) Sr.attractors.push(rr.serialize())
        }
        return Sr
      }
      static _Serialize(rr, Sr, Qr) {
        if (rr.name = Sr.name, rr.id = Sr.id, rr.sx = Sr.getCapacity(), rr.disposeOnStop = Sr.disposeOnStop, rr.manualEmitCount = Sr.manualEmitCount, Sr.emitter.position) {
          const Qr = Sr.emitter;
          rr.emitterId = Qr.id
        } else {
          const Qr = Sr.emitter;
          rr.emitter = Qr.OWr()
        }
        if (Sr.particleEmitterType && (rr.particleEmitterType = Sr.particleEmitterType.serialize()), Sr.particleTexture)
          if (Qr) rr.texture = Sr.particleTexture.serialize();
          else {
            const Qr = Sr.particleTexture;
            rr.textureName = Sr.particleTexture.name, rr.invertY = !!Qr._invertY;
            const Zr = {};
            for (const rr of cS) Zr[rr] = Qr[rr];
            Zr.samplingMode = Qr.samplingMode, rr.textureSettings = Zr
          } rr.isLocal = Sr.isLocal, MS.e.AppendSerializedAnimations(Sr, rr), rr.beginAnimationOnStart = Sr.beginAnimationOnStart, rr.beginAnimationFrom = Sr.beginAnimationFrom, rr.beginAnimationTo = Sr.beginAnimationTo, rr.beginAnimationLoop = Sr.beginAnimationLoop, rr.startDelay = Sr.startDelay, rr.renderingGroupId = Sr.renderingGroupId, rr.isBillboardBased = Sr.isBillboardBased, rr.billboardMode = Sr.billboardMode, rr.minAngularSpeed = Sr.minAngularSpeed, rr.maxAngularSpeed = Sr.maxAngularSpeed, rr.minSize = Sr.minSize, rr.maxSize = Sr.maxSize, rr.minScaleX = Sr.minScaleX, rr.maxScaleX = Sr.maxScaleX, rr.minScaleY = Sr.minScaleY, rr.maxScaleY = Sr.maxScaleY, rr.minEmitPower = Sr.minEmitPower, rr.maxEmitPower = Sr.maxEmitPower, rr.minLifeTime = Sr.minLifeTime, rr.maxLifeTime = Sr.maxLifeTime, rr.emitRate = Sr.emitRate, rr.gravity = Sr.gravity.OWr(), rr.noiseStrength = Sr.noiseStrength.OWr(), rr.color1 = Sr.color1.OWr(), rr.color2 = Sr.color2.OWr(), rr.colorDead = Sr.colorDead.OWr(), rr.updateSpeed = Sr.updateSpeed, rr.targetStopDuration = Sr.targetStopDuration, rr.blendMode = Sr.blendMode, rr.preWarmCycles = Sr.preWarmCycles, rr.preWarmStepOffset = Sr.preWarmStepOffset, rr.minInitialRotation = Sr.minInitialRotation, rr.maxInitialRotation = Sr.maxInitialRotation, rr.startSpriteCellID = Sr.startSpriteCellID, rr.spriteCellLoop = Sr.spriteCellLoop, rr.endSpriteCellID = Sr.endSpriteCellID, rr.spriteCellChangeSpeed = Sr.spriteCellChangeSpeed, rr.spriteCellWidth = Sr.spriteCellWidth, rr.spriteCellHeight = Sr.spriteCellHeight, rr.spriteRandomStartCell = Sr.spriteRandomStartCell, rr.isAnimationSheetEnabled = Sr.isAnimationSheetEnabled, rr.useLogarithmicDepth = Sr.useLogarithmicDepth;
        const Zr = Sr.getColorGradients();
        if (Zr) {
          rr.colorGradients = [];
          for (const Sr of Zr) {
            const Qr = {
              gradient: Sr.gradient,
              color1: Sr.color1.OWr()
            };
            Sr.color2 ? Qr.color2 = Sr.color2.OWr() : Qr.color2 = Sr.color1.OWr(), rr.colorGradients.push(Qr)
          }
        }
        const Wr = Sr.getRampGradients();
        if (Wr) {
          rr.rampGradients = [];
          for (const Sr of Wr) {
            const Qr = {
              gradient: Sr.gradient,
              color: Sr.color.OWr()
            };
            rr.rampGradients.push(Qr)
          }
          rr.useRampGradients = Sr.useRampGradients
        }
        const ar = Sr.getColorRemapGradients();
        if (ar) {
          rr.colorRemapGradients = [];
          for (const Sr of ar) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.colorRemapGradients.push(Qr)
          }
        }
        const jr = Sr.getAlphaRemapGradients();
        if (jr) {
          rr.alphaRemapGradients = [];
          for (const Sr of jr) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.alphaRemapGradients.push(Qr)
          }
        }
        const Ir = Sr.getSizeGradients();
        if (Ir) {
          rr.sizeGradients = [];
          for (const Sr of Ir) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.sizeGradients.push(Qr)
          }
        }
        const fr = Sr.getAngularSpeedGradients();
        if (fr) {
          rr.angularSpeedGradients = [];
          for (const Sr of fr) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.angularSpeedGradients.push(Qr)
          }
        }
        const Er = Sr.getVelocityGradients();
        if (Er) {
          rr.velocityGradients = [];
          for (const Sr of Er) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.velocityGradients.push(Qr)
          }
        }
        const pr = Sr.getDragGradients();
        if (pr) {
          rr.dragGradients = [];
          for (const Sr of pr) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.dragGradients.push(Qr)
          }
        }
        const xr = Sr.getEmitRateGradients();
        if (xr) {
          rr.emitRateGradients = [];
          for (const Sr of xr) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.emitRateGradients.push(Qr)
          }
        }
        const mr = Sr.getStartSizeGradients();
        if (mr) {
          rr.startSizeGradients = [];
          for (const Sr of mr) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.startSizeGradients.push(Qr)
          }
        }
        const Nr = Sr.getLifeTimeGradients();
        if (Nr) {
          rr.lifeTimeGradients = [];
          for (const Sr of Nr) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.lifeTimeGradients.push(Qr)
          }
        }
        const Ur = Sr.getLimitVelocityGradients();
        if (Ur) {
          rr.limitVelocityGradients = [];
          for (const Sr of Ur) {
            const Qr = {
              gradient: Sr.gradient,
              factor1: Sr.factor1
            };
            void 0 !== Sr.factor2 ? Qr.factor2 = Sr.factor2 : Qr.factor2 = Sr.factor1, rr.limitVelocityGradients.push(Qr)
          }
          rr.limitVelocityDamping = Sr.limitVelocityDamping
        }
        Sr.noiseTexture && (rr.noiseTexture = Sr.noiseTexture.serialize())
      }
      clone(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = {
          ...this._customWrappers
        };
        let Wr = null;
        const ar = this._engine;
        if ((0, Cr.c)(ar.createEffectForParticles) && null != this.customShader) {
          Wr = this.customShader;
          const rr = Wr.shaderOptions.defines.length > 0 ? Wr.shaderOptions.defines.join("\n") : "",
            Sr = ar.createEffectForParticles(Wr.shaderPath.fragmentElement, Wr.shaderOptions.uniforms, Wr.shaderOptions.samplers, rr);
          Zr[0] ? Zr[0].effect = Sr : this.setCustomEffect(Sr, 0)
        }
        const jr = this.serialize(Qr),
          Ir = !1 === Qr && this.particleTexture ? this.particleTexture.clone() : null;
        Ir && (jr.textureName = void 0);
        const fr = FS.Parse(jr, this._scene || this._engine, this._rootUrl);
        return fr.name = rr, fr.customShader = Wr, fr._customWrappers = Zr, Ir && (fr.particleTexture = Ir), void 0 === Sr && (Sr = this.emitter), this.noiseTexture && (fr.noiseTexture = this.noiseTexture.clone()), fr.emitter = Sr, this.preventAutoStart || fr.start(), fr
      }
    }
    FS.BILLBOARDMODE_Y = 2, FS.BILLBOARDMODE_ALL = 7, FS.BILLBOARDMODE_STRETCHED = 8, FS.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let oS = !1;
    oS || (oS = !0, gS._ParseParticleSystem = FS.Parse)
  },
  54165: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      SkyMaterial: () => nr,
      _MaxColorValueForRenderTarget: () => Yr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(41889),
      jr = Qr(38555),
      Ir = Qr(42121),
      fr = Qr(42184),
      Er = Qr(54125),
      pr = Qr(43031),
      xr = Qr(41934),
      mr = Qr(38609),
      Nr = Qr(42211),
      Ur = Qr(42192),
      tr = Qr(42174),
      hr = Qr(42167);
    class zr extends Ir.b {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Yr(rr) {
      switch (rr) {
        case Er.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Er.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let nr = (() => {
      var rr;
      let Sr, Ir, Er, mr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr = fr.b,
        Hr = [],
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [],
        kr = [],
        Ar = [],
        Vr = [],
        ir = [],
        wr = [],
        cr = [],
        Fr = [],
        or = [],
        br = [],
        Jr = [],
        Dr = [],
        dr = [],
        sr = [],
        ur = [],
        rS = [],
        SS = [],
        QS = [],
        ZS = [],
        WS = [],
        aS = [],
        jS = [],
        IS = [],
        fS = [];
      return rr = class extends Pr {
        constructor(rr, Sr) {
          super(rr, Sr, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Zr.m)(this, Hr, 1), this.turbidity = ((0, Zr.m)(this, qr), (0, Zr.m)(this, Rr, 10)), this.rayleigh = ((0, Zr.m)(this, gr), (0, Zr.m)(this, Cr, 2)), this.mieCoefficient = ((0, Zr.m)(this, Mr), (0, Zr.m)(this, Gr, .005)), this.mieDirectionalG = ((0, Zr.m)(this, kr), (0, Zr.m)(this, Ar, .8)), this.distance = ((0, Zr.m)(this, Vr), (0, Zr.m)(this, ir, 500)), this.inclination = ((0, Zr.m)(this, wr), (0, Zr.m)(this, cr, .49)), this.azimuth = ((0, Zr.m)(this, Fr), (0, Zr.m)(this, or, .25)), this.sunPosition = ((0, Zr.m)(this, br), (0, Zr.m)(this, Jr, new jr.kU(0, 100, 0))), this.useSunPosition = ((0, Zr.m)(this, Dr), (0, Zr.m)(this, dr, !1)), this.cameraOffset = ((0, Zr.m)(this, sr), (0, Zr.m)(this, ur, jr.kU.Zero())), this.up = ((0, Zr.m)(this, rS), (0, Zr.m)(this, SS, jr.kU.Up())), this.dithering = ((0, Zr.m)(this, QS), (0, Zr.m)(this, ZS, !1)), this.rawHdrOutput = ((0, Zr.m)(this, WS), (0, Zr.m)(this, aS, !1)), this.cloudiness = ((0, Zr.m)(this, jS), (0, Zr.m)(this, IS, 0)), this._cameraPosition = ((0, Zr.m)(this, fS), jr.kU.Zero()), this._skyOrientation = new jr.Quaternion
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
        isReadyForSubMesh(Sr, Qr) {
          const Zr = Qr._drawWrapper;
          if (this.isFrozen && Zr.effect && Zr._wasPreviouslyReady) return !0;
          Qr.materialDefines || (Qr.materialDefines = new zr);
          const Wr = Qr.materialDefines,
            ar = this.eC();
          if (this._isReadyForSubMesh(Qr)) return !0;
          if ((0, hr.Z)(Sr, ar, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Wr, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, hr.N)(Sr, Wr, !0, !1), Wr.IMAGEPROCESSINGPOSTPROCESS !== ar.imageProcessingConfiguration.applyByPostProcess && Wr.markAsMiscDirty(), Wr.DITHER !== this.dithering && Wr.markAsMiscDirty(), Wr.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Wr.markAsMiscDirty(), Wr.isDirty) {
            Wr.markAsProcessed(), ar.resetCachedMaterial();
            const Sr = new Ur.e;
            Wr.FOG && Sr.addFallback(1, "FOG"), Wr.IMAGEPROCESSINGPOSTPROCESS = ar.imageProcessingConfiguration.applyByPostProcess, Wr.DITHER = this.dithering, Wr.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Zr = [pr.g.PositionKind];
            Wr.VERTEXCOLOR && Zr.push(pr.g.ColorKind);
            const jr = "sky",
              Ir = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, tr.c)(Ir);
            const fr = Wr.toString();
            Qr.setEffect(ar.MU().createEffect(jr, {
              attributes: Zr,
              uniformsNames: Ir,
              uniformBuffersNames: [],
              samplers: [],
              defines: fr,
              fallbacks: Sr,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: rr._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, ar.MU()), Wr, this._materialContext)
          }
          return !(!Qr.effect || !Qr.effect.isReady()) && (Wr._renderId = ar.getRenderId(), Zr._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(rr, Sr, Qr) {
          const Zr = this.eC(),
            Wr = Qr.materialDefines;
          if (!Wr) return;
          const ar = Qr.effect;
          if (!ar) return;
          this._activeEffect = ar, this.bindOnlyWorldMatrix(rr), this._activeEffect.setMatrix("viewProjection", Zr.getTransformMatrix()), this._mustRebind(Zr, ar, Qr) && ((0, tr.e)(ar, this, Zr), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, hr.q)(Wr, ar, Zr)), Zr.fogEnabled && Sr.applyFog && Zr.fogMode !== xr.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", Zr.getViewMatrix()), (0, hr.d)(Zr, Sr, this._activeEffect, this.rawHdrOutput);
          const Ir = Zr.activeCamera;
          if (Ir) {
            const rr = Ir.getWorldMatrix();
            this._cameraPosition.x = rr.m[12], this._cameraPosition.y = rr.m[13], this._cameraPosition.z = rr.m[14], this._activeEffect.setVector3("cameraPosition", jr.TmpVectors.kU[0].iH(this._cameraPosition).iWr(Zr.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const rr = Zr.MU()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Yr(rr?.texture?.type))
          }
          if (!this.useSunPosition) {
            const rr = Math.PI * (this.inclination - .5),
              Sr = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Sr) * Math.cos(rr), this.sunPosition.y = this.distance * Math.sin(-rr), this.sunPosition.z = this.distance * Math.sin(Sr) * Math.cos(rr), jr.Quaternion.FromUnitVectorsToRef(jr.kU.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Sr, this._activeEffect, Qr)
        }
        getAnimatables() {
          return []
        }
        dispose(rr) {
          super.dispose(rr)
        }
        clone(Sr) {
          return ar.e.Clone((() => new rr(Sr, this.eC())), this)
        }
        serialize() {
          const rr = super.serialize();
          return rr.customType = "BABYLON.SkyMaterial", rr
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Sr, Qr, Zr) {
          return ar.e.Parse((() => new rr(Sr.name, Qr)), Sr, Qr, Zr)
        }
      }, (() => {
        const Qr = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pr[Symbol.metadata] ?? null) : void 0;
        Sr = [(0, Wr.G)()], Ir = [(0, Wr.G)()], Er = [(0, Wr.G)()], mr = [(0, Wr.G)()], nr = [(0, Wr.G)()], er = [(0, Wr.G)()], Kr = [(0, Wr.G)()], yr = [(0, Wr.G)()], Br = [(0, Wr.C)()], Tr = [(0, Wr.G)()], vr = [(0, Wr.C)()], Or = [(0, Wr.C)()], Lr = [(0, Wr.G)()], lr = [(0, Wr.G)()], Xr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: rr => "luminance" in rr,
            get: rr => rr.luminance,
            set: (rr, Sr) => {
              rr.luminance = Sr
            }
          },
          metadata: Qr
        }, Hr, qr), (0, Zr.k)(null, null, Ir, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: rr => "turbidity" in rr,
            get: rr => rr.turbidity,
            set: (rr, Sr) => {
              rr.turbidity = Sr
            }
          },
          metadata: Qr
        }, Rr, gr), (0, Zr.k)(null, null, Er, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: rr => "rayleigh" in rr,
            get: rr => rr.rayleigh,
            set: (rr, Sr) => {
              rr.rayleigh = Sr
            }
          },
          metadata: Qr
        }, Cr, Mr), (0, Zr.k)(null, null, mr, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: rr => "mieCoefficient" in rr,
            get: rr => rr.mieCoefficient,
            set: (rr, Sr) => {
              rr.mieCoefficient = Sr
            }
          },
          metadata: Qr
        }, Gr, kr), (0, Zr.k)(null, null, nr, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: rr => "mieDirectionalG" in rr,
            get: rr => rr.mieDirectionalG,
            set: (rr, Sr) => {
              rr.mieDirectionalG = Sr
            }
          },
          metadata: Qr
        }, Ar, Vr), (0, Zr.k)(null, null, er, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: rr => "distance" in rr,
            get: rr => rr.distance,
            set: (rr, Sr) => {
              rr.distance = Sr
            }
          },
          metadata: Qr
        }, ir, wr), (0, Zr.k)(null, null, Kr, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: rr => "inclination" in rr,
            get: rr => rr.inclination,
            set: (rr, Sr) => {
              rr.inclination = Sr
            }
          },
          metadata: Qr
        }, cr, Fr), (0, Zr.k)(null, null, yr, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: rr => "azimuth" in rr,
            get: rr => rr.azimuth,
            set: (rr, Sr) => {
              rr.azimuth = Sr
            }
          },
          metadata: Qr
        }, or, br), (0, Zr.k)(null, null, Br, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: rr => "sunPosition" in rr,
            get: rr => rr.sunPosition,
            set: (rr, Sr) => {
              rr.sunPosition = Sr
            }
          },
          metadata: Qr
        }, Jr, Dr), (0, Zr.k)(null, null, Tr, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: rr => "useSunPosition" in rr,
            get: rr => rr.useSunPosition,
            set: (rr, Sr) => {
              rr.useSunPosition = Sr
            }
          },
          metadata: Qr
        }, dr, sr), (0, Zr.k)(null, null, vr, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: rr => "cameraOffset" in rr,
            get: rr => rr.cameraOffset,
            set: (rr, Sr) => {
              rr.cameraOffset = Sr
            }
          },
          metadata: Qr
        }, ur, rS), (0, Zr.k)(null, null, Or, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: rr => "up" in rr,
            get: rr => rr.up,
            set: (rr, Sr) => {
              rr.up = Sr
            }
          },
          metadata: Qr
        }, SS, QS), (0, Zr.k)(null, null, Lr, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: rr => "dithering" in rr,
            get: rr => rr.dithering,
            set: (rr, Sr) => {
              rr.dithering = Sr
            }
          },
          metadata: Qr
        }, ZS, WS), (0, Zr.k)(null, null, lr, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: rr => "rawHdrOutput" in rr,
            get: rr => rr.rawHdrOutput,
            set: (rr, Sr) => {
              rr.rawHdrOutput = Sr
            }
          },
          metadata: Qr
        }, aS, jS), (0, Zr.k)(null, null, Xr, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: rr => "cloudiness" in rr,
            get: rr => rr.cloudiness,
            set: (rr, Sr) => {
              rr.cloudiness = Sr
            }
          },
          metadata: Qr
        }, IS, fS), Qr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qr
        })
      })(), rr._ShaderLoader = new Nr.b((() => [Qr.e(649).then((() => Qr(64664))), Qr.e(642).then((() => Qr(64667)))]), (() => [Qr.e(666).then((() => Qr(64675))), Qr.e(660).then((() => Qr(64679)))])), rr
    })();
    (0, mr.e)("BABYLON.SkyMaterial", nr)
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
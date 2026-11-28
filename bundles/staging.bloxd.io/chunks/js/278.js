export const id = 278;
export const ids = [278];
export const modules = {
  54032: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd
    });
    var Wd = md(42041),
      Fd = md(54035);
    class Rd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = md, this.HRd = [], this._maxBlockCapacity = Od || 64, this._selectionContent = new Wd.c(1024), this._creationFunc = dd
      }
      update(dd, Od, md) {
        Fd.d._CreateBlocks(dd, Od, md, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      hRd(dd) {
        for (let Od = 0; Od < this.blocks.length; Od++) {
          this.blocks[Od].addEntry(dd)
        }
      }
      WG(dd) {
        for (let Od = 0; Od < this.blocks.length; Od++) {
          this.blocks[Od].removeEntry(dd)
        }
      }
      select(dd, Od) {
        this._selectionContent.reset();
        for (let md = 0; md < this.blocks.length; md++) {
          this.blocks[md].select(dd, this._selectionContent, Od)
        }
        return Od ? this._selectionContent.concat(this.HRd) : this._selectionContent.concatWithNoDuplicate(this.HRd), this._selectionContent
      }
      intersects(dd, Od, md) {
        this._selectionContent.reset();
        for (let Wd = 0; Wd < this.blocks.length; Wd++) {
          this.blocks[Wd].intersects(dd, Od, this._selectionContent, md)
        }
        return md ? this._selectionContent.concat(this.HRd) : this._selectionContent.concatWithNoDuplicate(this.HRd), this._selectionContent
      }
      intersectsRay(dd) {
        this._selectionContent.reset();
        for (let Od = 0; Od < this.blocks.length; Od++) {
          this.blocks[Od].intersectsRay(dd, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.HRd), this._selectionContent
      }
    }
    Rd.CreationFuncForMeshes = (dd, Od) => {
      const md = dd.iG();
      !dd.isBlocked && md.boundingBox.intersectsMinMax(Od.KRd, Od.XRd) && Od.entries.push(dd)
    }, Rd.CreationFuncForSubMeshes = (dd, Od) => {
      dd.iG().boundingBox.intersectsMinMax(Od.KRd, Od.XRd) && Od.entries.push(dd)
    }
  },
  54035: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(38636),
      Fd = md(42228);
    class Rd {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.entries = [], this.yRd = new Array, this._capacity = md, this._depth = Wd, this._maxDepth = Fd, this._creationFunc = Rd, this._minPoint = dd, this._maxPoint = Od, this.yRd.push(dd.clone()), this.yRd.push(Od.clone()), this.yRd.push(dd.clone()), this.yRd[2].x = Od.x, this.yRd.push(dd.clone()), this.yRd[3].y = Od.y, this.yRd.push(dd.clone()), this.yRd[4].z = Od.z, this.yRd.push(Od.clone()), this.yRd[5].z = dd.z, this.yRd.push(Od.clone()), this.yRd[6].x = dd.x, this.yRd.push(Od.clone()), this.yRd[7].y = dd.y
      }
      get Mt() {
        return this._capacity
      }
      get KRd() {
        return this._minPoint
      }
      get XRd() {
        return this._maxPoint
      }
      addEntry(dd) {
        if (this.blocks)
          for (let Od = 0; Od < this.blocks.length; Od++) {
            this.blocks[Od].addEntry(dd)
          } else this._creationFunc(dd, this), this.entries.length > this.Mt && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(dd) {
        if (this.blocks) {
          for (let Od = 0; Od < this.blocks.length; Od++) {
            this.blocks[Od].removeEntry(dd)
          }
          return
        }
        const Od = this.entries.indexOf(dd);
        Od > -1 && this.entries.splice(Od, 1)
      }
      addEntries(dd) {
        for (let Od = 0; Od < dd.length; Od++) {
          const md = dd[Od];
          this.addEntry(md)
        }
      }
      select(dd, Od, md) {
        if (Fd.d.IsInFrustum(this.yRd, dd)) {
          if (this.blocks) {
            for (let Wd = 0; Wd < this.blocks.length; Wd++) {
              this.blocks[Wd].select(dd, Od, md)
            }
            return
          }
          md ? Od.concat(this.entries) : Od.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(dd, Od, md, Wd) {
        if (Fd.d.IntersectsSphere(this._minPoint, this._maxPoint, dd, Od)) {
          if (this.blocks) {
            for (let Fd = 0; Fd < this.blocks.length; Fd++) {
              this.blocks[Fd].intersects(dd, Od, md, Wd)
            }
            return
          }
          Wd ? md.concat(this.entries) : md.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(dd, Od) {
        if (dd.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let md = 0; md < this.blocks.length; md++) {
              this.blocks[md].intersectsRay(dd, Od)
            }
            return
          }
          Od.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Rd._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(dd, Od, md, Fd, Xd, Kd, hd, vd) {
        hd.blocks = new Array;
        const Qd = new Wd.j((Od.x - dd.x) / 2, (Od.y - dd.y) / 2, (Od.z - dd.z) / 2);
        for (let Wd = 0; Wd < 2; Wd++)
          for (let Od = 0; Od < 2; Od++)
            for (let td = 0; td < 2; td++) {
              const od = dd.add(Qd.multiplyByFloats(Wd, Od, td)),
                Nd = dd.add(Qd.multiplyByFloats(Wd + 1, Od + 1, td + 1)),
                qd = new Rd(od, Nd, Fd, Xd + 1, Kd, vd);
              qd.addEntries(md), hd.blocks.push(qd)
            }
      }
    }
  },
  54037: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd
    });
    var Wd = md(42020),
      Fd = md(38636),
      Rd = md(42367),
      Xd = md(53991),
      Kd = md(42095),
      hd = md(38651),
      vd = md(54032);
    class Qd {
      constructor(dd) {
        this.name = Kd.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Xd.A(Fd.j.Zero(), new Fd.j(1, 1, 1)), (dd = dd || hd.e.LastCreatedScene) && (this.MH = dd, this.MH.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.MH.getActiveSubMeshCandidates = dd => this.getActiveSubMeshCandidates(dd), this.MH.getCollidingSubMeshCandidates = (dd, Od) => this.getCollidingSubMeshCandidates(dd, Od), this.MH.getIntersectingSubMeshCandidates = (dd, Od) => this.getIntersectingSubMeshCandidates(dd, Od))
      }
      register() {
        this.MH.onMeshRemovedObservable.add((dd => {
          const Od = this.MH.selectionOctree;
          if (void 0 !== Od && null !== Od) {
            const md = Od.HRd.indexOf(dd); - 1 !== md && Od.HRd.splice(md, 1)
          }
        })), this.MH.onMeshImportedObservable.add((dd => {
          const Od = this.MH.selectionOctree;
          void 0 !== Od && null !== Od && Od.hRd(dd)
        }))
      }
      getActiveMeshCandidates() {
        return this.MH.wRd?.select(this.MH.frustumPlanes) || this.MH._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(dd) {
        if (dd._submeshesOctree && dd.useOctreeForRenderingSelection) {
          return dd._submeshesOctree.select(this.MH.frustumPlanes)
        }
        return this.MH._getDefaultSubMeshCandidates(dd)
      }
      getIntersectingSubMeshCandidates(dd, Od) {
        if (dd._submeshesOctree && dd.useOctreeForPicking) {
          Xd.A.TransformToRef(Od, dd.getWorldMatrix(), this._tempRay);
          return dd._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.MH._getDefaultSubMeshCandidates(dd)
      }
      getCollidingSubMeshCandidates(dd, Od) {
        if (dd._submeshesOctree && dd.useOctreeForCollisions) {
          const md = Od._velocityWorldLength + Math.max(Od._radius.x, Od._radius.y, Od._radius.z);
          return dd._submeshesOctree.intersects(Od._basePointWorld, md)
        }
        return this.MH._getDefaultSubMeshCandidates(dd)
      }
      rebuild() {}
      dispose() {}
    }
    let td = !1;
    td || (td = !0, Wd.c.prototype.createOrUpdateSelectionOctree = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        md = this._getComponent(Kd.b.NAME_OCTREE);
      md || (md = new Qd(this), this.yFd(md)), this.wRd || (this.wRd = new vd.e(vd.e.CreationFuncForMeshes, dd, Od));
      const Wd = this.getWorldExtends();
      return this.wRd.update(Wd.min, Wd.max, this.meshes), this.wRd
    }, Object.defineProperty(Wd.c.prototype, "selectionOctree", {
      get: function() {
        return this.wRd
      },
      enumerable: !0,
      configurable: !0
    }), Rd.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const md = this.zV();
      let Wd = md._getComponent(Kd.b.NAME_OCTREE);
      Wd || (Wd = new Qd(md), md.yFd(Wd)), this._submeshesOctree || (this._submeshesOctree = new vd.e(vd.e.CreationFuncForSubMeshes, dd, Od)), this.computeWorldMatrix(!0);
      const Fd = this.iG().boundingBox;
      return this._submeshesOctree.update(Fd.minimumWorld, Fd.maximumWorld, this.ZE), this._submeshesOctree
    })
  },
  53991: (dd, Od, md) => {
    md.d(Od, {
      A: () => td,
      d: () => sd,
      h: () => Hd,
      i: () => qd,
      m: () => Nd,
      p: () => Bd,
      s: () => xd,
      w: () => Ed,
      x: () => Ud,
      z: () => Jd
    });
    var Wd = md(38644),
      Fd = md(38636),
      Rd = md(38647),
      Xd = md(42221),
      Kd = md(42072),
      hd = md(38651),
      vd = md(42113);
    const Qd = {
      internalPickerForMesh: void 0
    };
    class td {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wd.b;
        this.origin = dd, this.direction = Od, this.length = md, this.epsilon = Fd
      }
      clone() {
        return new td(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Wd = td._TmpVector3[0].KOd(dd.x - md, dd.y - md, dd.z - md),
          Fd = td._TmpVector3[1].KOd(Od.x + md, Od.y + md, Od.z + md);
        let Rd, Xd, Kd, hd, vd = 0,
          Qd = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Wd.x || this.origin.x > Fd.x) return !1
        } else if (Rd = 1 / this.direction.x, Xd = (Wd.x - this.origin.x) * Rd, Kd = (Fd.x - this.origin.x) * Rd, Kd === -1 / 0 && (Kd = 1 / 0), Xd > Kd && (hd = Xd, Xd = Kd, Kd = hd), vd = Math.max(Xd, vd), Qd = Math.min(Kd, Qd), vd > Qd) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Wd.y || this.origin.y > Fd.y) return !1
        } else if (Rd = 1 / this.direction.y, Xd = (Wd.y - this.origin.y) * Rd, Kd = (Fd.y - this.origin.y) * Rd, Kd === -1 / 0 && (Kd = 1 / 0), Xd > Kd && (hd = Xd, Xd = Kd, Kd = hd), vd = Math.max(Xd, vd), Qd = Math.min(Kd, Qd), vd > Qd) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Wd.z || this.origin.z > Fd.z) return !1
        } else if (Rd = 1 / this.direction.z, Xd = (Wd.z - this.origin.z) * Rd, Kd = (Fd.z - this.origin.z) * Rd, Kd === -1 / 0 && (Kd = 1 / 0), Xd > Kd && (hd = Xd, Xd = Kd, Kd = hd), vd = Math.max(Xd, vd), Qd = Math.min(Kd, Qd), vd > Qd) return !1;
        return !0
      }
      intersectsBox(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(dd.minimum, dd.maximum, Od)
      }
      intersectsSphere(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = dd.center.x - this.origin.x,
          Wd = dd.center.y - this.origin.y,
          Fd = dd.center.z - this.origin.z,
          Rd = md * md + Wd * Wd + Fd * Fd,
          Xd = dd.radius + Od,
          Kd = Xd * Xd;
        if (Rd <= Kd) return !0;
        const hd = md * this.direction.x + Wd * this.direction.y + Fd * this.direction.z;
        if (hd < 0) return !1;
        return Rd - hd * hd <= Kd
      }
      intersectsTriangle(dd, Od, md) {
        const Wd = td._TmpVector3[0],
          Rd = td._TmpVector3[1],
          Kd = td._TmpVector3[2],
          hd = td._TmpVector3[3],
          vd = td._TmpVector3[4];
        Od.subtractToRef(dd, Wd), md.subtractToRef(dd, Rd), Fd.j.CrossToRef(this.direction, Rd, Kd);
        const Qd = Fd.j.Dot(Wd, Kd);
        if (0 === Qd) return null;
        const od = 1 / Qd;
        this.origin.subtractToRef(dd, hd);
        const Nd = Fd.j.Dot(hd, Kd) * od;
        if (Nd < -this.epsilon || Nd > 1 + this.epsilon) return null;
        Fd.j.CrossToRef(hd, Wd, vd);
        const qd = Fd.j.Dot(this.direction, vd) * od;
        if (qd < -this.epsilon || Nd + qd > 1 + this.epsilon) return null;
        const Hd = Fd.j.Dot(Rd, vd) * od;
        return Hd > this.length || Hd < 0 ? null : new Xd.d(1 - Nd - qd, Nd, Hd)
      }
      intersectsPlane(dd) {
        let Od;
        const md = Fd.j.Dot(dd.normal, this.direction);
        if (Math.abs(md) < 9.99999997475243e-7) return null;
        {
          const Wd = Fd.j.Dot(dd.normal, this.origin);
          return Od = (-dd.d - Wd) / md, Od < 0 ? Od < -9.99999997475243e-7 ? null : 0 : Od
        }
      }
      intersectsAxis(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (dd) {
          case "y": {
            const dd = (this.origin.y - Od) / this.direction.y;
            return dd > 0 ? null : new Fd.j(this.origin.x + this.direction.x * -dd, Od, this.origin.z + this.direction.z * -dd)
          }
          case "x": {
            const dd = (this.origin.x - Od) / this.direction.x;
            return dd > 0 ? null : new Fd.j(Od, this.origin.y + this.direction.y * -dd, this.origin.z + this.direction.z * -dd)
          }
          case "z": {
            const dd = (this.origin.z - Od) / this.direction.z;
            return dd > 0 ? null : new Fd.j(this.origin.x + this.direction.x * -dd, this.origin.y + this.direction.y * -dd, Od)
          }
          default:
            return null
        }
      }
      PRd(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Rd = arguments.length > 4 ? arguments[4] : void 0,
          Xd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Kd = Fd.h.Matrix[0];
        return dd.getWorldMatrix().invertToRef(Kd), this._tmpRay ? td.TransformToRef(this, Kd, this._tmpRay) : this._tmpRay = td.Transform(this, Kd), dd.intersects(this._tmpRay, Od, md, Wd, Rd, Xd)
      }
      intersectsMeshes(dd, Od, md) {
        md ? md.length = 0 : md = [];
        for (let Wd = 0; Wd < dd.length; Wd++) {
          const Fd = this.PRd(dd[Wd], Od);
          Fd.hit && md.push(Fd)
        }
        return md.sort(this._comparePickingInfo), md
      }
      _comparePickingInfo(dd, Od) {
        return dd.distance < Od.distance ? -1 : dd.distance > Od.distance ? 1 : 0
      }
      intersectionSegment(dd, Od, md) {
        const Wd = this.origin,
          Rd = Fd.h.Cq[0],
          Xd = Fd.h.Cq[1],
          Kd = Fd.h.Cq[2],
          hd = Fd.h.Cq[3];
        Od.subtractToRef(dd, Rd), this.direction.scaleToRef(td._Rayl, Kd), Wd.addToRef(Kd, Xd), dd.subtractToRef(Wd, hd);
        const vd = Fd.j.Dot(Rd, Rd),
          Qd = Fd.j.Dot(Rd, Kd),
          od = Fd.j.Dot(Kd, Kd),
          Nd = Fd.j.Dot(Rd, hd),
          qd = Fd.j.Dot(Kd, hd),
          Hd = vd * od - Qd * Qd;
        let yd, bd, Td = Hd,
          pd = Hd;
        Hd < td._Smallnum ? (yd = 0, Td = 1, bd = qd, pd = od) : (yd = Qd * qd - od * Nd, bd = vd * qd - Qd * Nd, yd < 0 ? (yd = 0, bd = qd, pd = od) : yd > Td && (yd = Td, bd = qd + Qd, pd = od)), bd < 0 ? (bd = 0, -Nd < 0 ? yd = 0 : -Nd > vd ? yd = Td : (yd = -Nd, Td = vd)) : bd > pd && (bd = pd, -Nd + Qd < 0 ? yd = 0 : -Nd + Qd > vd ? yd = Td : (yd = -Nd + Qd, Td = vd));
        const Yd = Math.abs(yd) < td._Smallnum ? 0 : yd / Td,
          gd = Math.abs(bd) < td._Smallnum ? 0 : bd / pd,
          wd = Fd.h.Cq[4];
        Kd.scaleToRef(gd, wd);
        const Ed = Fd.h.Cq[5];
        Rd.scaleToRef(Yd, Ed), Ed.addInPlace(hd);
        const Jd = Fd.h.Cq[6];
        Ed.subtractToRef(wd, Jd);
        return gd > 0 && gd <= this.length && Jd.lengthSquared() < md * md ? Ed.length() : -1
      }
      update(dd, Od, md, Wd, Rd, Xd, Kd) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          td._RayDistant || (td._RayDistant = td.Zero()), td._RayDistant.unprojectRayToRef(dd, Od, md, Wd, Fd.d.IdentityReadOnly, Xd, Kd);
          const hd = Fd.h.Matrix[0];
          Rd.invertToRef(hd), td.TransformToRef(td._RayDistant, hd, this)
        } else this.unprojectRayToRef(dd, Od, md, Wd, Rd, Xd, Kd);
        return this
      }
      static Zero() {
        return new td(Fd.j.Zero(), Fd.j.Zero())
      }
      static CreateNew(dd, Od, md, Wd, Fd, Rd, Xd) {
        return td.Zero().update(dd, Od, md, Wd, Fd, Rd, Xd)
      }
      static CreateNewFromTo(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fd.d.IdentityReadOnly;
        const Wd = new td(new Fd.j(0, 0, 0), new Fd.j(0, 0, 0));
        return td.CreateFromToToRef(dd, Od, Wd, md)
      }
      static CreateFromToToRef(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fd.d.IdentityReadOnly;
        md.origin.Bx(dd);
        const Rd = Od.subtractToRef(dd, md.direction),
          Xd = Math.sqrt(Rd.x * Rd.x + Rd.y * Rd.y + Rd.z * Rd.z);
        return md.length = Xd, md.direction.normalize(), td.TransformToRef(md, Wd, md)
      }
      static Transform(dd, Od) {
        const md = new td(new Fd.j(0, 0, 0), new Fd.j(0, 0, 0));
        return td.TransformToRef(dd, Od, md), md
      }
      static TransformToRef(dd, Od, md) {
        Fd.j.TransformCoordinatesToRef(dd.origin, Od, md.origin), Fd.j.TransformNormalToRef(dd.direction, Od, md.direction), md.length = dd.length, md.epsilon = dd.epsilon;
        const Wd = md.direction,
          Rd = Wd.length();
        if (0 !== Rd && 1 !== Rd) {
          const dd = 1 / Rd;
          Wd.x *= dd, Wd.y *= dd, Wd.z *= dd, md.length *= Rd
        }
        return md
      }
      unprojectRayToRef(dd, Od, md, Wd, Rd, Xd, Kd) {
        const vd = Fd.h.Matrix[0];
        Rd.multiplyToRef(Xd, vd), vd.multiplyToRef(Kd, vd), vd.invert();
        const Qd = hd.e.LastCreatedEngine,
          td = Fd.h.Cq[0];
        td.x = dd / md * 2 - 1, td.y = -(Od / Wd * 2 - 1), td.z = Qd?.JFd ? 1 : Qd?.isNDCHalfZRange ? 0 : -1;
        const od = Fd.h.Cq[1].KOd(td.x, td.y, 1 - 1e-8),
          Nd = Fd.h.Cq[2],
          qd = Fd.h.Cq[3];
        Fd.j.TransformCoordinatesToRef(td, vd, Nd), Fd.j.TransformCoordinatesToRef(od, vd, qd), this.origin.Bx(Nd), qd.subtractToRef(Nd, this.direction), this.direction.normalize()
      }
    }

    function od(dd, Od, md, Wd, Fd) {
      let Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Xd = td.Zero();
      return Nd(dd, Od, md, Wd, Xd, Fd, Rd), Xd
    }

    function Nd(dd, Od, md, Wd, Rd, Xd) {
      let Kd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        hd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const vd = dd.Iq();
      if (!Xd && !(Xd = dd.activeCamera) && !(Xd = dd.cameraToUseForPointers)) return dd;
      const Qd = Xd.viewport,
        td = vd.getRenderHeight(),
        {
          x: od,
          y: Nd,
          width: qd,
          height: Hd
        } = Qd.toGlobal(vd.getRenderWidth(), td),
        yd = 1 / vd.getHardwareScalingLevel();
      return Od = Od * yd - od, md = md * yd - (td - Nd - Hd), Rd.update(Od, md, qd, Hd, Wd || Fd.d.IdentityReadOnly, Kd ? Fd.d.IdentityReadOnly : Xd.getViewMatrix(), Xd.getProjectionMatrix(), hd), dd
    }

    function qd(dd, Od, md, Wd) {
      const Fd = td.Zero();
      return Hd(dd, Od, md, Fd, Wd), Fd
    }

    function Hd(dd, Od, md, Wd, Rd) {
      if (!Kd.b) return dd;
      const Xd = dd.Iq();
      if (!Rd && !(Rd = dd.activeCamera) && !(Rd = dd.cameraToUseForPointers)) throw new Error("Active camera not set");
      const hd = Rd.viewport,
        vd = Xd.getRenderHeight(),
        {
          x: Qd,
          y: td,
          width: od,
          height: Nd
        } = hd.toGlobal(Xd.getRenderWidth(), vd),
        qd = Fd.d.Identity(),
        Hd = 1 / Xd.getHardwareScalingLevel();
      return Od = Od * Hd - Qd, md = md * Hd - (vd - td - Nd), Wd.update(Od, md, od, Nd, qd, qd, Rd.getProjectionMatrix()), dd
    }

    function yd(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
      return bd(dd, md, Wd, Od(Wd, md.enableDistantPicking), Fd, Rd, Xd, Kd)
    }

    function bd(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
      const hd = Od.intersects(Wd, Fd, Xd, Rd, md, Kd);
      return hd && hd.hit ? !Fd && null != dd && hd.distance >= dd.distance ? null : hd : null
    }

    function Td(dd, Od) {
      return "InstancedLinesMesh" === dd || "LinesMesh" === dd ? Od.intersectionThreshold : 0
    }

    function pd(dd) {
      const Od = dd.getClassName();
      if ("GreasedLineMesh" === Od) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const md = dd.rawBoundingInfo;
      return {
        rawBoundingInfo: md,
        intersectionThreshold: md ? Td(Od, dd) : 0
      }
    }

    function Yd(dd, Od, md, Wd, Fd) {
      const Rd = dd(md, Od.enableDistantPicking);
      return Rd.intersectsSphere(Wd.ERd, Fd) && Rd.intersectsBox(Wd.boundingBox, Fd) ? Rd : null
    }

    function gd(dd, Od, md, Wd, Rd, Xd) {
      let hd = null;
      const vd = !!(dd.activeCameras && dd.activeCameras.length > 1 && dd.cameraToUseForPointers !== dd.activeCamera),
        td = dd.cameraToUseForPointers || dd.activeCamera,
        od = Qd.internalPickerForMesh || yd,
        Nd = od === yd;
      for (let Kd = 0; Kd < dd.meshes.length; Kd++) {
        const Qd = dd.meshes[Kd];
        if (md) {
          if (!md(Qd, -1)) continue
        } else if (!Qd.isEnabled() || !Qd.isVisible || !Qd.my) continue;
        const qd = vd && Qd.isWorldMatrixCameraDependent(),
          Hd = Qd.computeWorldMatrix(qd, td);
        if (Qd.hasThinInstances && Qd.kmd) {
          const dd = od(hd, Od, Qd, Hd, !0, !0, Xd);
          if (dd) {
            if (Rd) return dd;
            const {
              rawBoundingInfo: Kd,
              intersectionThreshold: vd
            } = pd(Qd), td = Qd._thinInstanceDataStorage.matrixData;
            if (td) {
              const dd = Fd.h.Matrix[0],
                qd = Fd.h.Matrix[1],
                yd = Math.min(Qd.ndd, td.length >> 4);
              for (let Td = 0; Td < yd; Td++) {
                if (md && !md(Qd, Td)) continue;
                Fd.d.FromArrayToRef(td, Td << 4, dd), dd.multiplyToRef(Hd, qd);
                const yd = Nd && Kd ? Yd(Od, Qd, qd, Kd, vd) : null;
                if (Nd && Kd && !yd) continue;
                const pd = Nd && yd ? bd(hd, Qd, qd, yd, Wd, Rd, Xd, !0) : od(hd, Od, Qd, qd, Wd, Rd, Xd, !0);
                if (pd && (hd = pd, hd.thinInstanceIndex = Td, Wd)) return hd
              }
            }
          }
        } else {
          const dd = od(hd, Od, Qd, Hd, Wd, Rd, Xd);
          if (dd && (hd = dd, Wd)) return hd
        }
      }
      return hd || new Kd.b
    }

    function wd(dd, Od, md, Wd) {
      if (!Kd.b) return null;
      const Rd = [],
        Xd = !!(dd.activeCameras && dd.activeCameras.length > 1 && dd.cameraToUseForPointers !== dd.activeCamera),
        hd = dd.cameraToUseForPointers || dd.activeCamera,
        vd = Qd.internalPickerForMesh || yd,
        td = vd === yd;
      for (let Kd = 0; Kd < dd.meshes.length; Kd++) {
        const Qd = dd.meshes[Kd];
        if (md) {
          if (!md(Qd, -1)) continue
        } else if (!Qd.isEnabled() || !Qd.isVisible || !Qd.my) continue;
        const od = Xd && Qd.isWorldMatrixCameraDependent(),
          Nd = Qd.computeWorldMatrix(od, hd);
        if (Qd.hasThinInstances && Qd.kmd) {
          if (vd(null, Od, Qd, Nd, !0, !0, Wd)) {
            const {
              rawBoundingInfo: dd,
              intersectionThreshold: Xd
            } = pd(Qd), Kd = Qd._thinInstanceDataStorage.matrixData;
            if (Kd) {
              const hd = Fd.h.Matrix[0],
                od = Fd.h.Matrix[1],
                qd = Math.min(Qd.ndd, Kd.length >> 4);
              for (let Hd = 0; Hd < qd; Hd++) {
                if (md && !md(Qd, Hd)) continue;
                Fd.d.FromArrayToRef(Kd, Hd << 4, hd), hd.multiplyToRef(Nd, od);
                const qd = td && dd ? Yd(Od, Qd, od, dd, Xd) : null;
                if (td && dd && !qd) continue;
                const yd = td && qd ? bd(null, Qd, od, qd, !1, !1, Wd, !0) : vd(null, Od, Qd, od, !1, !1, Wd, !0);
                yd && (yd.thinInstanceIndex = Hd, Rd.push(yd))
              }
            }
          }
        } else {
          const dd = vd(null, Od, Qd, Nd, !1, !1, Wd);
          dd && Rd.push(dd)
        }
      }
      return Rd
    }

    function Ed(dd, Od, md, Wd, Rd, Xd) {
      if (!Kd.b) return null;
      const hd = gd(dd, (Wd => (dd._tempPickingRay || (dd._tempPickingRay = td.Zero()), Nd(dd, Od, md, Wd, dd._tempPickingRay, Xd || null), dd._tempPickingRay)), Wd, Rd, !0);
      return hd && (hd.ray = od(dd, Od, md, Fd.d.Identity(), Xd || null)), hd
    }

    function Jd(dd, Od, md, Wd, Rd, Xd, Kd) {
      const hd = gd(dd, ((Wd, Fd) => (dd._tempPickingRay || (dd._tempPickingRay = td.Zero()), Nd(dd, Od, md, Wd, dd._tempPickingRay, Xd || null, !1, Fd), dd._tempPickingRay)), Wd, Rd, !1, Kd);
      return hd && (hd.ray = od(dd, Od, md, Fd.d.Identity(), Xd || null)), hd
    }

    function Ud(dd, Od, md, Wd, Rd) {
      const Xd = gd(dd, (md => (dd._pickWithRayInverseMatrix || (dd._pickWithRayInverseMatrix = Fd.d.Identity()), md.invertToRef(dd._pickWithRayInverseMatrix), dd._cachedRayForTransform || (dd._cachedRayForTransform = td.Zero()), td.TransformToRef(Od, dd._pickWithRayInverseMatrix, dd._cachedRayForTransform), dd._cachedRayForTransform)), md, Wd, !1, Rd);
      return Xd && (Xd.ray = Od), Xd
    }

    function xd(dd, Od, md, Wd, Fd, Rd) {
      return wd(dd, (Wd => od(dd, Od, md, Wd, Fd || null)), Wd, Rd)
    }

    function Bd(dd, Od, md, Wd) {
      return wd(dd, (md => (dd._pickWithRayInverseMatrix || (dd._pickWithRayInverseMatrix = Fd.d.Identity()), md.invertToRef(dd._pickWithRayInverseMatrix), dd._cachedRayForTransform || (dd._cachedRayForTransform = td.Zero()), td.TransformToRef(Od, dd._pickWithRayInverseMatrix, dd._cachedRayForTransform), dd._cachedRayForTransform)), md, Wd)
    }

    function Sd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Wd = arguments.length > 3 ? arguments[3] : void 0,
        Rd = arguments.length > 4 ? arguments[4] : void 0;
      Wd || (Wd = dd.getWorldMatrix()), Od.length = md, Rd ? Od.origin.Bx(Rd) : Od.origin.Bx(dd.position);
      const Xd = Fd.h.Cq[2];
      Xd.set(0, 0, dd._scene.useRightHandedSystem ? -1 : 1);
      const Kd = Fd.h.Cq[3];
      return Fd.j.TransformNormalToRef(Xd, Wd, Kd), Fd.j.NormalizeToRef(Kd, Od.direction), Od
    }

    function sd(dd, Od) {
      Od && (Od.prototype.getForwardRay = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        return Sd(this, new td(Fd.j.Zero(), Fd.j.Zero(), dd), dd, Od, md)
      }, Od.prototype.getForwardRayToRef = function(dd) {
        return Sd(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), dd && (vd.c._IsPickingAvailable = !0, dd.prototype.createPickingRay = function(dd, Od, md, Wd) {
        return od(this, dd, Od, md, Wd, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    td._TmpVector3 = (0, Rd.e)(6, Fd.j.Zero), td._RayDistant = td.Zero(), td._Smallnum = 1e-8, td._Rayl = 1e9
  },
  53984: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd.A
    });
    var Wd = md(42020),
      Fd = md(42126),
      Rd = md(53991);
    let Xd = !1;
    Xd || (Xd = !0, (0, Rd.d)(Wd.c, Fd.e), Wd.c.prototype.createPickingRayToRef = function(dd, Od, md, Wd, Fd) {
      let Xd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Kd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Rd.m)(this, dd, Od, md, Wd, Fd, Xd, Kd)
    }, Wd.c.prototype.createPickingRayInCameraSpace = function(dd, Od, md) {
      return (0, Rd.i)(this, dd, Od, md)
    }, Wd.c.prototype.createPickingRayInCameraSpaceToRef = function(dd, Od, md, Wd) {
      return (0, Rd.h)(this, dd, Od, md, Wd)
    }, Wd.c.prototype.pickWithBoundingInfo = function(dd, Od, md, Wd, Fd) {
      return (0, Rd.w)(this, dd, Od, md, Wd, Fd)
    }, Wd.c.prototype.xN = function(dd, Od, md, Wd, Fd, Xd) {
      let Kd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Rd.z)(this, dd, Od, md, Wd, Fd, Xd, Kd)
    }, Wd.c.prototype.pickWithRay = function(dd, Od, md, Wd) {
      return (0, Rd.x)(this, dd, Od, md, Wd)
    }, Wd.c.prototype.multiPick = function(dd, Od, md, Wd, Fd) {
      return (0, Rd.s)(this, dd, Od, md, Wd, Fd)
    }, Wd.c.prototype.multiPickWithRay = function(dd, Od, md) {
      return (0, Rd.p)(this, dd, Od, md)
    })
  },
  53993: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38636),
      Xd = md(42172),
      Kd = md(53995),
      hd = md(42132),
      vd = md(38669);
    let Qd = (() => {
        var dd;
        let Od, md, hd, vd, Qd, td, od, Nd, qd = Kd.b,
          Hd = [],
          yd = [],
          bd = [],
          Td = [],
          pd = [],
          Yd = [],
          gd = [],
          wd = [],
          Ed = [],
          Jd = [],
          Ud = [],
          xd = [],
          Bd = [];
        return dd = class extends qd {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(dd) {
            this._shadowFrustumSize = dd, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(dd) {
            this._shadowOrthoScale = dd, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(dd) {
            this._orthoLeft = dd
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(dd) {
            this._orthoRight = dd
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(dd) {
            this._orthoTop = dd
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(dd) {
            this._orthoBottom = dd
          }
          constructor(dd, Od, md, Fd) {
            super(dd, md, Fd), this._shadowFrustumSize = ((0, Wd.k)(this, Hd), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Wd.k)(this, yd, !0), this.autoCalcShadowZBounds = ((0, Wd.k)(this, bd), (0, Wd.k)(this, Td, !1)), this._orthoLeft = ((0, Wd.k)(this, pd), (0, Wd.k)(this, Yd, Number.MAX_VALUE)), this._orthoRight = ((0, Wd.k)(this, gd), (0, Wd.k)(this, wd, Number.MIN_VALUE)), this._orthoTop = ((0, Wd.k)(this, Ed), (0, Wd.k)(this, Jd, Number.MIN_VALUE)), this._orthoBottom = ((0, Wd.k)(this, Ud), (0, Wd.k)(this, xd, Number.MAX_VALUE)), (0, Wd.k)(this, Bd), this.position = Od.scale(-1), this.direction = Od
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Xd.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(dd, Od, md) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(dd) : this._setDefaultAutoExtendShadowProjectionMatrix(dd, Od, md)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(dd) {
            const Od = this.zV().activeCamera;
            Rd.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Od ? Od.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Od ? Od.maxZ : 1e4, dd, this.zV().Iq().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(dd, Od, md) {
            const Wd = this.zV().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const dd = Rd.j.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Wd = Number.MAX_VALUE,
                Fd = -Number.MAX_VALUE;
              for (let Xd = 0; Xd < md.length; Xd++) {
                const Kd = md[Xd];
                if (!Kd) continue;
                const hd = Kd.iG().boundingBox;
                for (let md = 0; md < hd.vectorsWorld.length; md++) Rd.j.TransformCoordinatesToRef(hd.vectorsWorld[md], Od, dd), dd.x < this._orthoLeft && (this._orthoLeft = dd.x), dd.y < this._orthoBottom && (this._orthoBottom = dd.y), dd.x > this._orthoRight && (this._orthoRight = dd.x), dd.y > this._orthoTop && (this._orthoTop = dd.y), this.autoCalcShadowZBounds && (dd.z < Wd && (Wd = dd.z), dd.z > Fd && (Fd = dd.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Wd, this._shadowMaxZ = Fd)
            }
            const Fd = this._orthoRight - this._orthoLeft,
              Xd = this._orthoTop - this._orthoBottom,
              Kd = void 0 !== this.shadowMinZ ? this.shadowMinZ : Wd?.minZ || 0,
              hd = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Wd?.maxZ || 1e4,
              vd = this.zV().Iq().JFd;
            Rd.d.OrthoOffCenterLHToRef(this._orthoLeft - Fd * this.shadowOrthoScale, this._orthoRight + Fd * this.shadowOrthoScale, this._orthoBottom - Xd * this.shadowOrthoScale, this._orthoTop + Xd * this.shadowOrthoScale, vd ? hd : Kd, vd ? Kd : hd, dd, this.zV().Iq().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(dd, Od) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Od), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Od), this)
          }
          transferToNodeMaterialEffect(dd, Od) {
            return this.computeTransformedInformation() ? (dd.setFloat3(Od, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (dd.setFloat3(Od, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(dd) {
            const Od = this._scene.Iq();
            return !Od.JFd && Od.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(dd) {
            const Od = this._scene.Iq();
            return Od.JFd && Od.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(dd, Od) {
            dd["DIRLIGHT" + Od] = !0
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(qd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.E)()], md = [(0, Fd.E)()], hd = [(0, Fd.E)()], vd = [(0, Fd.E)()], Qd = [(0, Fd.E)("orthoLeft")], td = [(0, Fd.E)("orthoRight")], od = [(0, Fd.E)("orthoTop")], Nd = [(0, Fd.E)("orthoBottom")], (0, Wd.h)(dd, null, Od, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: dd => "shadowFrustumSize" in dd,
              get: dd => dd.shadowFrustumSize
            },
            metadata: Rd
          }, null, Hd), (0, Wd.h)(dd, null, md, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "shadowOrthoScale" in dd,
              get: dd => dd.shadowOrthoScale
            },
            metadata: Rd
          }, null, Hd), (0, Wd.h)(null, null, hd, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: dd => "autoUpdateExtends" in dd,
              get: dd => dd.autoUpdateExtends,
              set: (dd, Od) => {
                dd.autoUpdateExtends = Od
              }
            },
            metadata: Rd
          }, yd, bd), (0, Wd.h)(null, null, vd, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: dd => "autoCalcShadowZBounds" in dd,
              get: dd => dd.autoCalcShadowZBounds,
              set: (dd, Od) => {
                dd.autoCalcShadowZBounds = Od
              }
            },
            metadata: Rd
          }, Td, pd), (0, Wd.h)(null, null, Qd, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: dd => "_orthoLeft" in dd,
              get: dd => dd._orthoLeft,
              set: (dd, Od) => {
                dd._orthoLeft = Od
              }
            },
            metadata: Rd
          }, Yd, gd), (0, Wd.h)(null, null, td, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: dd => "_orthoRight" in dd,
              get: dd => dd._orthoRight,
              set: (dd, Od) => {
                dd._orthoRight = Od
              }
            },
            metadata: Rd
          }, wd, Ed), (0, Wd.h)(null, null, od, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: dd => "_orthoTop" in dd,
              get: dd => dd._orthoTop,
              set: (dd, Od) => {
                dd._orthoTop = Od
              }
            },
            metadata: Rd
          }, Jd, Ud), (0, Wd.h)(null, null, Nd, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: dd => "_orthoBottom" in dd,
              get: dd => dd._orthoBottom,
              set: (dd, Od) => {
                dd._orthoBottom = Od
              }
            },
            metadata: Rd
          }, xd, Bd), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd
      })(),
      td = !1;
    td || (td = !0, hd.b.AddNodeConstructor("Light_Type_1", ((dd, Od) => () => new Qd(dd, Rd.j.Zero(), Od))), (0, vd.e)("BABYLON.DirectionalLight", Qd))
  },
  40298: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      h: () => Rd,
      k: () => Xd,
      m: () => Kd
    });
    var Wd = md(38741);
    class Fd {
      constructor(dd, Od, md) {
        this.gradient = dd, this.color1 = Od, this.color2 = md
      }
      getColorToRef(dd) {
        this.color2 ? Wd.f.LerpToRef(this.color1, this.color2, Math.random(), dd) : dd.Bx(this.color1)
      }
    }
    class Rd {
      constructor(dd, Od) {
        this.gradient = dd, this.color = Od
      }
    }
    class Xd {
      constructor(dd, Od, md) {
        this.gradient = dd, this.factor1 = Od, this.factor2 = md
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Kd {
      static GetCurrentGradient(dd, Od, md) {
        if (Od[0].gradient > dd) return void md(Od[0], Od[0], 1);
        for (let Fd = 0; Fd < Od.length - 1; Fd++) {
          const Wd = Od[Fd],
            Rd = Od[Fd + 1];
          if (dd >= Wd.gradient && dd <= Rd.gradient) {
            return void md(Wd, Rd, (dd - Wd.gradient) / (Rd.gradient - Wd.gradient))
          }
        }
        const Wd = Od.length - 1;
        md(Od[Wd], Od[Wd], 1)
      }
    }
  },
  40301: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(38636),
      Fd = md(38663),
      Rd = md(40260);
    class Xd {
      constructor() {
        this.direction1 = new Wd.j(0, 1, 0), this.direction2 = new Wd.j(0, 1, 0), this.minEmitBox = new Wd.j(-.5, -.5, -.5), this.maxEmitBox = new Wd.j(.5, .5, .5)
      }
      startDirectionFunction(dd, Od, md, Rd) {
        const Xd = (0, Fd.RandomRange)(this.direction1.x, this.direction2.x),
          Kd = (0, Fd.RandomRange)(this.direction1.y, this.direction2.y),
          hd = (0, Fd.RandomRange)(this.direction1.z, this.direction2.z);
        if (Rd) return Od.x = Xd, Od.y = Kd, void(Od.z = hd);
        Wd.j.TransformNormalFromFloatsToRef(Xd, Kd, hd, dd, Od)
      }
      startPositionFunction(dd, Od, md, Rd) {
        const Xd = (0, Fd.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Kd = (0, Fd.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          hd = (0, Fd.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Rd) return Od.x = Xd, Od.y = Kd, void(Od.z = hd);
        Wd.j.TransformCoordinatesFromFloatsToRef(Xd, Kd, hd, dd, Od)
      }
      clone() {
        const dd = new Xd;
        return Rd.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2), dd.setVector3("minEmitBox", this.minEmitBox), dd.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(dd) {
        dd.addUniform("direction1", 3), dd.addUniform("direction2", 3), dd.addUniform("minEmitBox", 3), dd.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.direction1 = this.direction1.RRd(), dd.direction2 = this.direction2.RRd(), dd.minEmitBox = this.minEmitBox.RRd(), dd.maxEmitBox = this.maxEmitBox.RRd(), dd
      }
      parse(dd) {
        Wd.j.FromArrayToRef(dd.direction1, 0, this.direction1), Wd.j.FromArrayToRef(dd.direction2, 0, this.direction2), Wd.j.FromArrayToRef(dd.minEmitBox, 0, this.minEmitBox), Wd.j.FromArrayToRef(dd.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  40258: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => Xd
    });
    var Wd = md(38636),
      Fd = md(38663),
      Rd = md(40260);
    class Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = dd, this.height = Od, this.radiusRange = md, this.directionRandomizer = Fd, this._tempVector = Wd.j.Zero()
      }
      startDirectionFunction(dd, Od, md, Rd, Xd) {
        md.position.subtractToRef(dd.getTranslation(), this._tempVector), this._tempVector.normalize(), Wd.j.TransformNormalToRef(this._tempVector, Xd, this._tempVector);
        const Kd = (0, Fd.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let hd = Math.atan2(this._tempVector.x, this._tempVector.z);
        hd += (0, Fd.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Kd, this._tempVector.x = Math.sin(hd), this._tempVector.z = Math.cos(hd), this._tempVector.normalize(), Rd ? Od.Bx(this._tempVector) : Wd.j.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, dd, Od)
      }
      startPositionFunction(dd, Od, md, Rd) {
        const Xd = (0, Fd.RandomRange)(-this.height / 2, this.height / 2),
          Kd = (0, Fd.RandomRange)(0, 2 * Math.PI),
          hd = (0, Fd.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          vd = Math.sqrt(hd) * this.radius,
          Qd = vd * Math.cos(Kd),
          td = vd * Math.sin(Kd);
        Rd ? Od.KOd(Qd, Xd, td) : Wd.j.TransformCoordinatesFromFloatsToRef(Qd, Xd, td, dd, Od)
      }
      clone() {
        const dd = new Xd(this.radius, this.directionRandomizer);
        return Rd.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("height", this.height), dd.setFloat("radiusRange", this.radiusRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("height", 1), dd.addUniform("radiusRange", 1), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this.radius, dd.height = this.height, dd.radiusRange = this.radiusRange, dd.directionRandomizer = this.directionRandomizer, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.height = dd.height, this.radiusRange = dd.radiusRange, this.directionRandomizer = dd.directionRandomizer
      }
    }
    class Kd extends Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wd.j(0, 1, 0),
          Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Wd.j(0, 1, 0);
        super(dd, Od, md), this.direction1 = Fd, this.direction2 = Rd
      }
      startDirectionFunction(dd, Od, md, Rd) {
        const Xd = (0, Fd.RandomRange)(this.direction1.x, this.direction2.x),
          Kd = (0, Fd.RandomRange)(this.direction1.y, this.direction2.y),
          hd = (0, Fd.RandomRange)(this.direction1.z, this.direction2.z);
        Rd ? Od.KOd(Xd, Kd, hd) : Wd.j.TransformNormalFromFloatsToRef(Xd, Kd, hd, dd, Od)
      }
      clone() {
        const dd = new Kd(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Rd.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("height", this.height), dd.setFloat("radiusRange", this.radiusRange), dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("height", 1), dd.addUniform("radiusRange", 1), dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const dd = super.serialize();
        return dd.direction1 = this.direction1.RRd(), dd.direction2 = this.direction2.RRd(), dd
      }
      parse(dd) {
        super.parse(dd), Wd.j.FromArrayToRef(dd.direction1, 0, this.direction1), Wd.j.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
  },
  54009: (dd, Od, md) => {
    md.d(Od, {
      d: () => lO
    });
    var Wd = md(40298),
      Fd = md(38660),
      Rd = md(38636),
      Xd = md(42075),
      Kd = md(54016),
      hd = md(38651),
      vd = md(42197),
      Qd = md(38741),
      td = md(40301),
      od = md(40260),
      Nd = md(38663);
    class qd {
      constructor() {
        this.direction1 = new Rd.j(0, 1, 0), this.direction2 = new Rd.j(0, 1, 0)
      }
      startDirectionFunction(dd, Od, md, Wd) {
        const Fd = (0, Nd.RandomRange)(this.direction1.x, this.direction2.x),
          Xd = (0, Nd.RandomRange)(this.direction1.y, this.direction2.y),
          Kd = (0, Nd.RandomRange)(this.direction1.z, this.direction2.z);
        Wd ? Od.KOd(Fd, Xd, Kd) : Rd.j.TransformNormalFromFloatsToRef(Fd, Xd, Kd, dd, Od)
      }
      startPositionFunction(dd, Od, md, Wd) {
        Wd ? Od.KOd(0, 0, 0) : Rd.j.TransformCoordinatesFromFloatsToRef(0, 0, 0, dd, Od)
      }
      clone() {
        const dd = new qd;
        return od.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.direction1 = this.direction1.RRd(), dd.direction2 = this.direction2.RRd(), dd
      }
      parse(dd) {
        Rd.j.FromArrayToRef(dd.direction1, 0, this.direction1), Rd.j.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
    class Hd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = dd, this.radiusRange = Od, this.directionRandomizer = md
      }
      startDirectionFunction(dd, Od, md, Wd) {
        const Fd = md.position.subtract(dd.getTranslation()).normalize(),
          Xd = (0, Nd.RandomRange)(0, this.directionRandomizer),
          Kd = (0, Nd.RandomRange)(0, this.directionRandomizer),
          hd = (0, Nd.RandomRange)(0, this.directionRandomizer);
        Fd.x += Xd, Fd.y += Kd, Fd.z += hd, Fd.normalize(), Wd ? Od.Bx(Fd) : Rd.j.TransformNormalFromFloatsToRef(Fd.x, Fd.y, Fd.z, dd, Od)
      }
      startPositionFunction(dd, Od, md, Wd) {
        const Fd = this.radius - (0, Nd.RandomRange)(0, this.radius * this.radiusRange),
          Xd = (0, Nd.RandomRange)(0, 1),
          Kd = (0, Nd.RandomRange)(0, 2 * Math.PI),
          hd = Math.acos(2 * Xd - 1),
          vd = Fd * Math.cos(Kd) * Math.sin(hd),
          Qd = Fd * Math.cos(hd),
          td = Fd * Math.sin(Kd) * Math.sin(hd);
        Wd ? Od.KOd(vd, Math.abs(Qd), td) : Rd.j.TransformCoordinatesFromFloatsToRef(vd, Math.abs(Qd), td, dd, Od)
      }
      clone() {
        const dd = new Hd(this.radius, this.directionRandomizer);
        return od.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("radiusRange", this.radiusRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("radiusRange", 1), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this.radius, dd.radiusRange = this.radiusRange, dd.directionRandomizer = this.directionRandomizer, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.radiusRange = dd.radiusRange, this.directionRandomizer = dd.directionRandomizer
      }
    }
    class yd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = dd, this.radiusRange = Od, this.directionRandomizer = md
      }
      startDirectionFunction(dd, Od, md, Wd) {
        const Fd = md.position.subtract(dd.getTranslation()).normalize(),
          Xd = (0, Nd.RandomRange)(0, this.directionRandomizer),
          Kd = (0, Nd.RandomRange)(0, this.directionRandomizer),
          hd = (0, Nd.RandomRange)(0, this.directionRandomizer);
        Fd.x += Xd, Fd.y += Kd, Fd.z += hd, Fd.normalize(), Wd ? Od.Bx(Fd) : Rd.j.TransformNormalFromFloatsToRef(Fd.x, Fd.y, Fd.z, dd, Od)
      }
      startPositionFunction(dd, Od, md, Wd) {
        const Fd = this.radius - (0, Nd.RandomRange)(0, this.radius * this.radiusRange),
          Xd = (0, Nd.RandomRange)(0, 1),
          Kd = (0, Nd.RandomRange)(0, 2 * Math.PI),
          hd = Math.acos(2 * Xd - 1),
          vd = Fd * Math.cos(Kd) * Math.sin(hd),
          Qd = Fd * Math.cos(hd),
          td = Fd * Math.sin(Kd) * Math.sin(hd);
        Wd ? Od.KOd(vd, Qd, td) : Rd.j.TransformCoordinatesFromFloatsToRef(vd, Qd, td, dd, Od)
      }
      clone() {
        const dd = new yd(this.radius, this.directionRandomizer);
        return od.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("radiusRange", this.radiusRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("radiusRange", 1), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this.radius, dd.radiusRange = this.radiusRange, dd.directionRandomizer = this.directionRandomizer, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.radiusRange = dd.radiusRange, this.directionRandomizer = dd.directionRandomizer
      }
    }
    class bd extends yd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Rd.j(0, 1, 0),
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Rd.j(0, 1, 0);
        super(dd), this.direction1 = Od, this.direction2 = md
      }
      startDirectionFunction(dd, Od, md, Wd) {
        const Fd = (0, Nd.RandomRange)(this.direction1.x, this.direction2.x),
          Xd = (0, Nd.RandomRange)(this.direction1.y, this.direction2.y),
          Kd = (0, Nd.RandomRange)(this.direction1.z, this.direction2.z);
        Wd ? Od.KOd(Fd, Xd, Kd) : Rd.j.TransformNormalFromFloatsToRef(Fd, Xd, Kd, dd, Od)
      }
      clone() {
        const dd = new bd(this.radius, this.direction1, this.direction2);
        return od.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("radiusRange", this.radiusRange), dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("radiusRange", 1), dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const dd = super.serialize();
        return dd.direction1 = this.direction1.RRd(), dd.direction2 = this.direction2.RRd(), dd
      }
      parse(dd) {
        super.parse(dd), Rd.j.FromArrayToRef(dd.direction1, 0, this.direction1), Rd.j.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
    var Td = md(40258);
    class pd {
      get radius() {
        return this._radius
      }
      set radius(dd) {
        this._radius = dd, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(dd) {
        this._angle = dd, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = md, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Od, this.radius = dd
      }
      startDirectionFunction(dd, Od, md, Wd) {
        const Fd = md.position.subtract(dd.getTranslation()).normalize(),
          Xd = (0, Nd.RandomRange)(0, this.directionRandomizer),
          Kd = (0, Nd.RandomRange)(0, this.directionRandomizer),
          hd = (0, Nd.RandomRange)(0, this.directionRandomizer);
        Fd.x += Xd, Fd.y += Kd, Fd.z += hd, Fd.normalize(), Wd ? Od.Bx(Fd) : Rd.j.TransformNormalFromFloatsToRef(Fd.x, Fd.y, Fd.z, dd, Od)
      }
      startPositionFunction(dd, Od, md, Wd) {
        const Fd = (0, Nd.RandomRange)(0, 2 * Math.PI);
        let Xd;
        this.emitFromSpawnPointOnly ? Xd = 1e-4 : (Xd = (0, Nd.RandomRange)(0, this.heightRange), Xd = 1 - Xd * Xd);
        let Kd = this._radius - (0, Nd.RandomRange)(0, this._radius * this.radiusRange);
        Kd *= Xd;
        const hd = Kd * Math.sin(Fd),
          vd = Kd * Math.cos(Fd),
          Qd = Xd * this._height;
        if (Wd) return Od.x = hd, Od.y = Qd, void(Od.z = vd);
        Rd.j.TransformCoordinatesFromFloatsToRef(hd, Qd, vd, dd, Od)
      }
      clone() {
        const dd = new pd(this._radius, this._angle, this.directionRandomizer);
        return od.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat2("radius", this._radius, this.radiusRange), dd.setFloat("coneAngle", this._angle), dd.setFloat2("height", this._height, this.heightRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 2), dd.addUniform("coneAngle", 1), dd.addUniform("height", 2), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let dd = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (dd += "\n#define CONEEMITTERSPAWNPOINT"), dd
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this._radius, dd.angle = this._angle, dd.directionRandomizer = this.directionRandomizer, dd.radiusRange = this.radiusRange, dd.heightRange = this.heightRange, dd.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.angle = dd.angle, this.directionRandomizer = dd.directionRandomizer, this.radiusRange = void 0 !== dd.radiusRange ? dd.radiusRange : 1, this.heightRange = void 0 !== dd.heightRange ? dd.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== dd.emitFromSpawnPointOnly && dd.emitFromSpawnPointOnly
      }
    }
    class Yd extends pd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Rd.j(0, 1, 0),
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Rd.j(0, 1, 0);
        super(dd, Od), this.direction1 = md, this.direction2 = Wd
      }
      startDirectionFunction(dd, Od, md, Wd) {
        const Fd = (0, Nd.RandomRange)(this.direction1.x, this.direction2.x),
          Xd = (0, Nd.RandomRange)(this.direction1.y, this.direction2.y),
          Kd = (0, Nd.RandomRange)(this.direction1.z, this.direction2.z);
        Wd ? Od.KOd(Fd, Xd, Kd) : Rd.j.TransformNormalFromFloatsToRef(Fd, Xd, Kd, dd, Od)
      }
      clone() {
        const dd = new Yd(this.radius, this.angle, this.direction1, this.direction2);
        return od.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        super.applyToShader(dd), dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        super.buildUniformLayout(dd), dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const dd = super.serialize();
        return dd.direction1 = this.direction1.RRd(), dd.direction2 = this.direction2.RRd(), dd
      }
      parse(dd) {
        super.parse(dd), Rd.j.FromArrayToRef(dd.direction1, 0, this.direction1), Rd.j.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
    class gd {
      get mesh() {
        return this._mesh
      }
      set mesh(dd) {
        this._mesh !== dd && (this._mesh = dd, dd ? (this._indices = dd.jRd(), this._positions = dd.getVerticesData(Xd.j.PositionKind), this._normals = dd.getVerticesData(Xd.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Rd.j.Zero(), this._mesh = null, this.direction1 = new Rd.j(0, 1, 0), this.direction2 = new Rd.j(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = dd
      }
      startDirectionFunction(dd, Od, md, Wd) {
        if (this.useMeshNormalsForDirection && this._normals) return void Rd.j.TransformNormalToRef(this._storedNormal, dd, Od);
        const Fd = (0, Nd.RandomRange)(this.direction1.x, this.direction2.x),
          Xd = (0, Nd.RandomRange)(this.direction1.y, this.direction2.y),
          Kd = (0, Nd.RandomRange)(this.direction1.z, this.direction2.z);
        Wd ? Od.KOd(Fd, Xd, Kd) : Rd.j.TransformNormalFromFloatsToRef(Fd, Xd, Kd, dd, Od)
      }
      startPositionFunction(dd, Od, md, Wd) {
        if (!this._indices || !this._positions) return;
        const Fd = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Xd = Math.random(),
          Kd = Math.random() * (1 - Xd),
          hd = 1 - Xd - Kd,
          vd = this._indices[Fd],
          Qd = this._indices[Fd + 1],
          td = this._indices[Fd + 2],
          od = Rd.h.Cq[0],
          Nd = Rd.h.Cq[1],
          qd = Rd.h.Cq[2],
          Hd = Rd.h.Cq[3];
        Rd.j.FromArrayToRef(this._positions, 3 * vd, od), Rd.j.FromArrayToRef(this._positions, 3 * Qd, Nd), Rd.j.FromArrayToRef(this._positions, 3 * td, qd), Hd.x = Xd * od.x + Kd * Nd.x + hd * qd.x, Hd.y = Xd * od.y + Kd * Nd.y + hd * qd.y, Hd.z = Xd * od.z + Kd * Nd.z + hd * qd.z, Wd ? Od.KOd(Hd.x, Hd.y, Hd.z) : Rd.j.TransformCoordinatesFromFloatsToRef(Hd.x, Hd.y, Hd.z, dd, Od), this.useMeshNormalsForDirection && this._normals && (Rd.j.FromArrayToRef(this._normals, 3 * vd, od), Rd.j.FromArrayToRef(this._normals, 3 * Qd, Nd), Rd.j.FromArrayToRef(this._normals, 3 * td, qd), this._storedNormal.x = Xd * od.x + Kd * Nd.x + hd * qd.x, this._storedNormal.y = Xd * od.y + Kd * Nd.y + hd * qd.y, this._storedNormal.z = Xd * od.z + Kd * Nd.z + hd * qd.z)
      }
      clone() {
        const dd = new gd(this.mesh);
        return od.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.direction1 = this.direction1.RRd(), dd.direction2 = this.direction2.RRd(), dd.meshId = this.mesh?.id, dd.useMeshNormalsForDirection = this.useMeshNormalsForDirection, dd
      }
      parse(dd, Od) {
        Rd.j.FromArrayToRef(dd.direction1, 0, this.direction1), Rd.j.FromArrayToRef(dd.direction2, 0, this.direction2), dd.meshId && Od && (this.mesh = Od.getLastMeshById(dd.meshId)), this.useMeshNormalsForDirection = dd.useMeshNormalsForDirection
      }
    }
    class wd {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(dd) {
        this._targetStopDuration !== dd && (this._targetStopDuration = dd)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(dd) {
        this._noiseTexture !== dd && (this._noiseTexture = dd, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(dd) {
        this._attractors.push(dd)
      }
      removeAttractor(dd) {
        const Od = this._attractors.indexOf(dd); - 1 !== Od && this._attractors.splice(Od, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(dd) {
        this._animationSheetEnabled !== dd && (this._animationSheetEnabled = dd)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(dd) {
        this._isAnimationSheetEnabled != dd && (this._isAnimationSheetEnabled = dd, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(dd) {
        this._useLogarithmicDepth = dd && this.zV().Iq().getCaps().fragmentDepthSupported
      }
      zV() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(dd) {
        switch (dd) {
          case wd.BLENDMODE_MULTIPLYADD:
            return;
          case wd.BLENDMODE_ADD:
            dd = 1;
            break;
          case wd.BLENDMODE_ONEONE:
            dd = 6;
            break;
          case wd.BLENDMODE_STANDARD:
            dd = 2;
            break;
          case wd.BLENDMODE_MULTIPLY:
            dd = 4;
            break;
          case wd.BLENDMODE_SUBTRACT:
            dd = 3
        }
        this._engine.setAlphaMode(dd)
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
      addEmitRateGradient(dd, Od, md) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, dd, Od, md), this
      }
      removeEmitRateGradient(dd) {
        return this._removeFactorGradient(this._emitRateGradients, dd), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Rd.j.Zero()
      }
      set direction1(dd) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = dd)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Rd.j.Zero()
      }
      set direction2(dd) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = dd)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Rd.j.Zero()
      }
      set minEmitBox(dd) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = dd)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Rd.j.Zero()
      }
      set maxEmitBox(dd) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = dd)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(dd) {
        this._billboardMode !== dd && (this._billboardMode = dd, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(dd) {
        this._isBillboardBased !== dd && (this._isBillboardBased = dd, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(dd) {
        this._attachImageProcessingConfiguration(dd)
      }
      _attachImageProcessingConfiguration(dd) {
        dd !== this._imageProcessingConfiguration && (!dd && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = dd)
      }
      _reset() {}
      _addFactorGradient(dd, Od, md, Fd) {
        const Rd = new Wd.k(Od, md, Fd);
        dd.push(Rd), dd.sort(((dd, Od) => dd.gradient < Od.gradient ? -1 : dd.gradient > Od.gradient ? 1 : 0))
      }
      _removeFactorGradient(dd, Od) {
        if (!dd) return;
        let md = 0;
        for (const Wd of dd) {
          if (Wd.gradient === Od) {
            dd.splice(md, 1);
            break
          }
          md++
        }
      }
      _removeGradientAndTexture(dd, Od, md) {
        if (!Od) return this;
        let Wd = 0;
        for (const Fd of Od) {
          if (Fd.gradient === dd) {
            Od.splice(Wd, 1);
            break
          }
          Wd++
        }
        return md && md.dispose(), this
      }
      constructor(dd) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Rd.j.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Rd.j(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = wd.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Rd.i(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Rd.j(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Rd.j.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Qd.f(1, 1, 1, 1), this.color2 = new Qd.f(1, 1, 1, 1), this.colorDead = new Qd.f(0, 0, 0, 1), this.textureMask = new Qd.f(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new vd.c, this.id = dd, this.name = dd
      }
      createPointEmitter(dd, Od) {
        const md = function(dd, Od) {
          const md = new qd;
          return md.direction1 = dd, md.direction2 = Od, md
        }(dd, Od);
        return this.particleEmitterType = md, md
      }
      createHemisphericEmitter() {
        const dd = function() {
          return new Hd(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = dd, dd
      }
      createSphereEmitter() {
        const dd = function() {
          return new yd(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = dd, dd
      }
      createDirectedSphereEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Rd.j(0, 1, 0),
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Rd.j(0, 1, 0);
          return new bd(dd, Od, md)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Rd.j(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Rd.j(0, 1, 0));
        return this.particleEmitterType = dd, dd
      }
      createCylinderEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Td.e(dd, Od, md, Wd)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = dd, dd
      }
      createDirectedCylinderEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Rd.j(0, 1, 0),
            Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Rd.j(0, 1, 0);
          return new Td.b(dd, Od, md, Wd, Fd)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Rd.j(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Rd.j(0, 1, 0));
        return this.particleEmitterType = dd, dd
      }
      createConeEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new pd(dd, Od)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = dd, dd
      }
      createDirectedConeEmitter() {
        const dd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Rd.j(0, 1, 0),
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Rd.j(0, 1, 0);
          return new Yd(dd, Od, md, Wd)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Rd.j(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Rd.j(0, 1, 0));
        return this.particleEmitterType = dd, dd
      }
      createBoxEmitter(dd, Od, md, Wd) {
        const Fd = new td.c;
        return this.particleEmitterType = Fd, this.direction1 = dd, this.direction2 = Od, this.minEmitBox = md, this.maxEmitBox = Wd, Fd
      }
      createMeshEmitter() {
        const dd = function() {
          return new gd(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = dd, dd
      }
    }
    wd.BLENDMODE_ONEONE = 0, wd.BLENDMODE_STANDARD = 1, wd.BLENDMODE_ADD = 2, wd.BLENDMODE_MULTIPLY = 3, wd.BLENDMODE_MULTIPLYADD = 4, wd.BLENDMODE_SUBTRACT = -1;
    class Ed {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Qd.f(0, 0, 0, 0), this.currentColor2 = new Qd.f(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Rd.j.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class Jd {
      constructor(dd) {
        this.particleSystem = dd, this.position = Rd.j.Zero(), this.direction = Rd.j.Zero(), this.color = new Qd.f(0, 0, 0, 0), this.colorStep = new Qd.f(0, 0, 0, 0), this.initialColor = new Qd.f(0, 0, 0, 0), this.colorDead = new Qd.f(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Rd.i(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Ed, this.id = Jd._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let dd = this.age,
          Od = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Od ? (Od = 1, dd = this._properties.randomCellOffset) : dd += this._properties.randomCellOffset);
        const md = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Wd;
        Wd = this._properties.initialSpriteCellLoop ? (0, Nd.Clamp)(dd * Od % this.lifeTime / this.lifeTime) : (0, Nd.Clamp)(dd * Od / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Wd * md | 0
      }
      _inheritParticleInfoToSubEmitter(dd) {
        if (dd.particleSystem.emitter.position) {
          const Od = dd.particleSystem.emitter;
          if (Od.position.Bx(this.position), dd.inheritDirection) {
            const dd = Rd.h.Cq[0];
            this.direction.normalizeToRef(dd), Od.setDirection(dd, 0, Math.PI / 2)
          }
        } else {
          dd.particleSystem.emitter.Bx(this.position)
        }
        this.direction.scaleToRef(dd.inheritedVelocityAmount / 2, Rd.h.Cq[0]), dd.particleSystem._inheritedVelocityOffset.Bx(Rd.h.Cq[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const dd of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(dd)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = Jd._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(dd) {
        dd.position.Bx(this.position), this._properties.initialDirection ? dd._properties.initialDirection ? dd._properties.initialDirection.Bx(this._properties.initialDirection) : dd._properties.initialDirection = this._properties.initialDirection.clone() : dd._properties.initialDirection = null, dd.direction.Bx(this.direction), this._properties.localPosition && (dd._properties.localPosition ? dd._properties.localPosition.Bx(this._properties.localPosition) : dd._properties.localPosition = this._properties.localPosition.clone()), dd.color.Bx(this.color), dd.colorStep.Bx(this.colorStep), dd.initialColor.Bx(this.initialColor), dd.colorDead.Bx(this.colorDead), dd.lifeTime = this.lifeTime, dd.age = this.age, dd._properties.randomCellOffset = this._properties.randomCellOffset, dd.size = this.size, dd.scale.Bx(this.scale), dd.angle = this.angle, dd.angularSpeed = this.angularSpeed, dd.particleSystem = this.particleSystem, dd.cellIndex = this.cellIndex, dd.id = this.id, dd._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (dd._properties.currentColorGradient = this._properties.currentColorGradient, dd._properties.currentColor1.Bx(this._properties.currentColor1), dd._properties.currentColor2.Bx(this._properties.currentColor2)), this._properties.currentSizeGradient && (dd._properties.currentSizeGradient = this._properties.currentSizeGradient, dd._properties.currentSize1 = this._properties.currentSize1, dd._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (dd._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, dd._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, dd._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (dd._properties.currentVelocityGradient = this._properties.currentVelocityGradient, dd._properties.currentVelocity1 = this._properties.currentVelocity1, dd._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (dd._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, dd._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, dd._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (dd._properties.currentDragGradient = this._properties.currentDragGradient, dd._properties.currentDrag1 = this._properties.currentDrag1, dd._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (dd._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, dd._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, dd._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (dd.remapData && this.remapData ? dd.remapData.Bx(this.remapData) : dd.remapData = new Rd.k(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (dd._properties.randomNoiseCoordinates1 && dd._properties.randomNoiseCoordinates2 ? (dd._properties.randomNoiseCoordinates1.Bx(this._properties.randomNoiseCoordinates1), dd._properties.randomNoiseCoordinates2.Bx(this._properties.randomNoiseCoordinates2)) : (dd._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), dd._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), dd.metadata = this.metadata
      }
    }
    Jd._Count = 0;
    var Ud = md(43051);
    class xd {
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
      constructor(dd, Od, md, Wd) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Od, this.Jt = dd, this._scene = md, this._host = Wd, this._activeTargets = [], Od._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            wm: this._getCorrectLoopMode()
          }, this._animation.dataType === Ud.e.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Rd.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const dd = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, dd)
        }
        if (this.Jt instanceof Array) {
          let dd = 0;
          for (const Od of this.Jt) this._preparePath(Od, dd), this._getOriginalValues(dd), dd++;
          this._targetIsArray = !0
        } else this._preparePath(this.Jt), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Fd = Od.getEvents();
        if (Fd && Fd.length > 0)
          for (const Rd of Fd) this._events.push(Rd._clone());
        this._enableBlending = dd && dd.animationPropertiesOverride ? dd.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = this._animation.targetPropertyPath;
        if (md.length > 1) {
          let Wd = dd;
          for (let dd = 0; dd < md.length - 1; dd++) {
            const Od = md[dd];
            if (Wd = Wd[Od], void 0 === Wd) throw new Error(`Invalid property (${Od}) in property path (${md.join(".")})`)
          }
          this._targetPath = md[md.length - 1], this._activeTargets[Od] = Wd
        } else this._targetPath = md[0], this._activeTargets[Od] = dd;
        if (void 0 === this._activeTargets[Od][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${md.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.Jt instanceof Array) {
            let dd = 0;
            for (const Od of this.Jt) void 0 !== this._originalValue[dd] && this._setValue(Od, this._activeTargets[dd], this._originalValue[dd], -1, dd), dd++
          } else void 0 !== this._originalValue[0] && this._setValue(this.Jt, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let dd = 0; dd < this._events.length; dd++) this._events[dd].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const dd = this._animation.runtimeAnimations.indexOf(this);
        dd > -1 && this._animation.runtimeAnimations.splice(dd, 1)
      }
      setValue(dd, Od) {
        if (this._targetIsArray)
          for (let md = 0; md < this.Jt.length; md++) {
            const Wd = this.Jt[md];
            this._setValue(Wd, this._activeTargets[md], dd, Od, md)
          } else this._setValue(this.Jt, this._directTarget, dd, Od, 0)
      }
      _getOriginalValues() {
        let dd, Od = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const md = this._activeTargets[Od];
        if (Ud.e.InheritOriginalValueFromActiveAnimations) {
          const dd = this._scene._activeAnimatables;
          for (let Wd = 0; Wd < dd.length; Wd++) {
            const Fd = dd[Wd]._runtimeAnimations;
            for (let dd = 0; dd < Fd.length; dd++) {
              const Wd = Fd[dd];
              if (Wd !== this && Wd._targetPath === this._targetPath)
                for (let dd = 0; dd < Wd._activeTargets.length; dd++)
                  if (Wd._activeTargets[dd] === md && void 0 !== Wd._originalValue[dd]) return void(Wd._originalValue[dd] && Wd._originalValue[dd].clone ? this._originalValue[Od] = Wd._originalValue[dd].clone() : this._originalValue[Od] = Wd._originalValue[dd])
            }
          }
        }
        dd = md.getLocalMatrix && "_matrix" === this._targetPath ? md.getLocalMatrix() : md[this._targetPath], dd && dd.clone ? this._originalValue[Od] = dd.clone() : this._originalValue[Od] = dd
      }
      _registerTargetForLateAnimationBinding(dd, Od) {
        const md = dd.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(md), md._lateAnimationHolders || (md._lateAnimationHolders = {}), md._lateAnimationHolders[dd.targetPath] || (md._lateAnimationHolders[dd.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Od
        }), dd.isAdditive ? (md._lateAnimationHolders[dd.targetPath].additiveAnimations.push(dd), md._lateAnimationHolders[dd.targetPath].totalAdditiveWeight += dd.weight) : (md._lateAnimationHolders[dd.targetPath].animations.push(dd), md._lateAnimationHolders[dd.targetPath].totalWeight += dd.weight)
      }
      _setValue(dd, Od, md, Wd, Fd) {
        const Xd = this._scene._animationWrites,
          Kd = this._scene._animationWriteCount++;
        let hd = Xd[Kd];
        if (hd || (hd = Xd[Kd] = {
            runtimeAnimation: this,
            target: dd,
            weight: Wd,
            additive: !1,
            blendingFactor: 1,
            Ly: !1
          }), hd.runtimeAnimation = this, hd.target = dd, hd.weight = Wd, hd.additive = this.isAdditive, hd.Ly = !1, this._currentActiveTarget = Od, this._weight = Wd, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const dd = Od[this._targetPath];
            dd.clone ? this._originalBlendValue = dd.clone() : this._originalBlendValue = dd
          }
          this._originalBlendValue.m ? Ud.e.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Rd.d.DecomposeLerpToRef(this._originalBlendValue, md, this._blendingFactor, this._currentValue) : this._currentValue = Rd.d.DecomposeLerp(this._originalBlendValue, md, this._blendingFactor) : this._currentValue ? Rd.d.LerpToRef(this._originalBlendValue, md, this._blendingFactor, this._currentValue) : this._currentValue = Rd.d.Lerp(this._originalBlendValue, md, this._blendingFactor) : this._currentValue = Ud.e._UniversalLerp(this._originalBlendValue, md, this._blendingFactor);
          const Wd = dd && dd.animationPropertiesOverride ? dd.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          hd.blendingFactor = this._blendingFactor, this._blendingFactor += Wd
        } else hd.blendingFactor = 1, this._currentValue ? this._currentValue.Bx ? this._currentValue.Bx(md) : this._currentValue = md : this._currentValue = md?.clone ? md.clone() : md; - 1 !== Wd ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Fd]) : this._animationState.wm === Ud.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Fd], Od[this._targetPath]) : Od[this._targetPath] = this._originalValue[Fd] + this._currentValue : Od[this._targetPath] = this._currentValue, dd.KWd && dd.KWd(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.Jt && this.Jt.animationPropertiesOverride) {
          return "MorphTarget" === this.Jt.getClassName?.() && null == this.Jt._animationPropertiesOverride ? this._animation.wm : this.Jt.animationPropertiesOverride.wm
        }
        return this._animation.wm
      }
      goToFrame(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const md = this._animation.getKeys();
        dd < md[0].frame ? dd = md[0].frame : dd > md[md.length - 1].frame && (dd = md[md.length - 1].frame);
        const Wd = this._events;
        if (Wd.length)
          for (let Rd = 0; Rd < Wd.length; Rd++) Wd[Rd].onlyOnce || (Wd[Rd].isDone = Wd[Rd].frame < dd);
        this._currentFrame = dd;
        const Fd = this._animation._interpolate(dd, this._animationState);
        this.setValue(Fd, Od)
      }
      _prepareForSpeedRatioChange(dd) {
        const Od = this._previousElapsedTime * (this._animation.framePerSecond * dd) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Od
      }
      animate(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Xd = this._animation,
          Kd = Xd.targetPropertyPath;
        if (!Kd || Kd.length < 1) return this._stopped = !0, !1;
        let hd, vd = !0;
        const Qd = this._events;
        let td;
        if (this._coreRuntimeAnimation) td = md - Od, hd = this._coreRuntimeAnimation.currentFrame, this._currentFrame = hd, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Rd;
          (Od < this._minFrame || Od > this._maxFrame) && (Od = this._minFrame), (md < this._minFrame || md > this._maxFrame) && (md = this._maxFrame), td = md - Od;
          let Kd = dd * (Xd.framePerSecond * Fd) / 1e3 + this._absoluteFrameOffset,
            od = 0,
            Nd = !1;
          const qd = Wd && this._animationState.wm === Ud.e.ANIMATIONLOOPMODE_YOYO;
          if (qd) {
            const dd = (Kd - Od) / td,
              md = Math.sin(dd * Math.PI);
            Kd = Math.abs(md) * td + Od;
            const Wd = md >= 0 ? 1 : -1;
            this._yoyoDirection !== Wd && (Nd = !0), this._yoyoDirection = Wd
          }
          if (this._previousElapsedTime = dd, this._previousAbsoluteFrame = Kd, !Wd && md >= Od && (Kd >= td && Fd > 0 || Kd <= 0 && Fd < 0)) vd = !1, od = Xd.evaluate(md);
          else if (!Wd && Od >= md && (Kd <= td && Fd < 0 || Kd >= 0 && Fd > 0)) vd = !1, od = Xd.evaluate(Od);
          else if (this._animationState.wm !== Ud.e.ANIMATIONLOOPMODE_CYCLE) {
            const dd = md.toString() + Od.toString();
            if (!this._offsetsCache[dd]) {
              this._animationState.repeatCount = 0, this._animationState.wm = Ud.e.ANIMATIONLOOPMODE_CYCLE;
              const Wd = Xd._interpolate(Od, this._animationState),
                Fd = Xd._interpolate(md, this._animationState);
              switch (this._animationState.wm = this._getCorrectLoopMode(), Xd.dataType) {
                case Ud.e.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[dd] = Fd - Wd;
                  break;
                case Ud.e.ANIMATIONTYPE_QUATERNION:
                case Ud.e.ANIMATIONTYPE_VECTOR3:
                case Ud.e.ANIMATIONTYPE_VECTOR2:
                case Ud.e.ANIMATIONTYPE_SIZE:
                case Ud.e.ANIMATIONTYPE_COLOR3:
                case Ud.e.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[dd] = Fd.subtract(Wd)
              }
              this._highLimitsCache[dd] = Fd
            }
            od = this._highLimitsCache[dd], Rd = this._offsetsCache[dd]
          }
          if (void 0 === Rd) switch (Xd.dataType) {
            case Ud.e.ANIMATIONTYPE_FLOAT:
              Rd = 0;
              break;
            case Ud.e.ANIMATIONTYPE_QUATERNION:
              Rd = Ud.n;
              break;
            case Ud.e.ANIMATIONTYPE_VECTOR3:
              Rd = Ud.w;
              break;
            case Ud.e.ANIMATIONTYPE_VECTOR2:
              Rd = Ud.s;
              break;
            case Ud.e.ANIMATIONTYPE_SIZE:
              Rd = Ud.q;
              break;
            case Ud.e.ANIMATIONTYPE_COLOR3:
              Rd = Ud.l;
              break;
            case Ud.e.ANIMATIONTYPE_COLOR4:
              Rd = Ud.m
          }
          const Hd = this._host ? this._host.syncRoot : null;
          let yd, bd = this._playbackFrames,
            Td = !1;
          if (Hd) {
            const dd = Hd.toFrame - Hd.fromFrame,
              md = Hd.masterFrame,
              Wd = (md - Hd.fromFrame) / dd;
            hd = Od + td * Wd;
            const Fd = Hd.getAnimations()[0];
            if (Fd && 0 !== dd) {
              const dd = td * Wd,
                Od = Fd._playbackTo - Fd._playbackFrom;
              if (0 !== Od && Fd._playbackFrom <= Hd.fromFrame && Fd._playbackTo >= Hd.toFrame) {
                bd = td * Math.round((Fd._playbackFrames - (Fd._currentFrame - Fd._playbackFrom)) / Od) + dd
              } else Td = (md - this._playbackSyncMasterFrame) * (Fd._playbackFrames - this._playbackSyncMasterPlayed) < 0, bd = dd;
              Td = Td || Fd._playbackJumped, this._playbackSyncMasterPlayed = Fd._playbackFrames, this._playbackSyncMasterFrame = md
            }
          } else hd = Kd > 0 && Od > md || Kd < 0 && Od < md ? vd && 0 !== td ? md + Kd % td : Od : vd && 0 !== td ? Od + Kd % td : md;
          if (!qd && (Fd > 0 && this.currentFrame > hd || Fd < 0 && this.currentFrame < hd) || qd && Nd) {
            this._onLoop();
            for (let dd = 0; dd < Qd.length; dd++) Qd[dd].onlyOnce || (Qd[dd].isDone = !1);
            this._animationState.key = Fd > 0 ? 0 : Xd.getKeys().length - 1
          }
          if (this._currentFrame = hd, this._animationState.repeatCount = 0 === td ? 0 : Kd / td | 0, this._animationState.highLimitValue = od, this._animationState.offsetValue = Rd, this._playbackFrom = Od, this._playbackTo = md, this._playbackJumped = Td, this._playbackSyncRoot = Hd, Hd) yd = bd;
          else if (vd) yd = qd ? hd === Od && Kd === md ? td : hd - Od : Kd;
          else {
            const dd = 0 !== td ? Math.floor(this._playbackFrames / td) : 0;
            yd = (hd === md ? dd + 1 : dd) * td
          }
          this._playbackFrames = yd, this._playbackProgress = this._animationState.wm === Ud.e.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? td : yd
        }
        const od = Xd._interpolate(hd, this._animationState);
        if (this.setValue(od, Rd), Qd.length)
          for (let Nd = 0; Nd < Qd.length; Nd++)
            if (td >= 0 && hd >= Qd[Nd].frame && Qd[Nd].frame >= Od || td < 0 && hd <= Qd[Nd].frame && Qd[Nd].frame <= Od) {
              const dd = Qd[Nd];
              dd.isDone || (dd.onlyOnce && (Qd.splice(Nd, 1), Nd--), dd.isDone = !0, dd.action(hd))
            } return vd || (this._stopped = !0), vd
      }
    }
    var Bd = md(41841);
    class Sd {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(dd) {
        this._weight = -1 !== dd ? Math.min(Math.max(dd, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(dd) {
        for (let Od = 0; Od < this._runtimeAnimations.length; Od++) {
          this._runtimeAnimations[Od]._prepareForSpeedRatioChange(dd)
        }
        this._speedRatio = dd, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Rd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Kd = arguments.length > 6 ? arguments[6] : void 0,
          hd = arguments.length > 7 ? arguments[7] : void 0,
          vd = arguments.length > 8 ? arguments[8] : void 0,
          Qd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          td = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Od, this.fromFrame = md, this.toFrame = Wd, this.loopAnimation = Rd, this.onAnimationEnd = Kd, this.onAnimationLoop = vd, this.isAdditive = Qd, this.playOrder = td, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.wt = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Fd.c, this.onAnimationLoopObservable = new Fd.c, this._scene = dd, hd && this.appendAnimations(Od, hd), this._speedRatio = Xd, dd._activeAnimatables.push(this)
      }
      syncWith(dd) {
        if (this._syncRoot = dd, dd) {
          const dd = this._scene._activeAnimatables.indexOf(this);
          dd > -1 && (this._scene._activeAnimatables.splice(dd, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(dd, Od) {
        for (let md = 0; md < Od.length; md++) {
          const Wd = Od[md],
            Fd = new xd(dd, Wd, this._scene, this);
          Fd._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Fd)
        }
      }
      getAnimationByTargetProperty(dd) {
        const Od = this._runtimeAnimations;
        for (let md = 0; md < Od.length; md++)
          if (Od[md].animation.targetProperty === dd) return Od[md].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(dd) {
        const Od = this._runtimeAnimations;
        for (let md = 0; md < Od.length; md++)
          if (Od[md].animation.targetProperty === dd) return Od[md];
        return null
      }
      reset() {
        const dd = this._runtimeAnimations;
        for (let Od = 0; Od < dd.length; Od++) dd[Od].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(dd) {
        const Od = this._runtimeAnimations;
        for (let md = 0; md < Od.length; md++) Od[md].animation.enableBlending = !0, Od[md].animation.blendingSpeed = dd
      }
      disableBlending() {
        const dd = this._runtimeAnimations;
        for (let Od = 0; Od < dd.length; Od++) dd[Od].animation.enableBlending = !1
      }
      goToFrame(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this._runtimeAnimations;
        if (md[0]) {
          const Od = md[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? md[0].currentFrame;
          const Wd = 0 === this.speedRatio ? 0 : (dd - this._frameToSyncFromJump) / Od * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Wd
        }
        for (let Wd = 0; Wd < md.length; Wd++) md[Wd].goToFrame(dd, Od ? this._weight : -1);
        this._goToFrame = dd
      }
      get paused() {
        return this.wt
      }
      pause() {
        this.wt || (this.wt = !0)
      }
      restart() {
        this.wt = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (dd || Od) {
          const Fd = this._scene._activeAnimatables.indexOf(this);
          if (Fd > -1) {
            const Rd = this._runtimeAnimations;
            for (let md = Rd.length - 1; md >= 0; md--) {
              const Wd = Rd[md];
              dd && Wd.animation.name != dd || (Od && !Od(Wd.target) || (Wd.dispose(), Rd.splice(md, 1)))
            }
            0 == Rd.length && (md || this._scene._activeAnimatables.splice(Fd, 1), Wd || this._raiseOnAnimationEnd())
          }
        } else {
          const dd = this._scene._activeAnimatables.indexOf(this);
          if (dd > -1) {
            md || this._scene._activeAnimatables.splice(dd, 1);
            const Od = this._runtimeAnimations;
            for (let dd = 0; dd < Od.length; dd++) Od[dd].dispose();
            this._runtimeAnimations.length = 0, Wd || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((dd => {
          this.onAnimationEndObservable.add((() => {
            dd(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(dd) {
        if (this.wt) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = dd), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = dd, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += dd - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Sd.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Od = !1;
        const md = this._runtimeAnimations;
        let Wd;
        for (Wd = 0; Wd < md.length; Wd++) {
          const Fd = md[Wd].animate(dd - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Od = Od || Fd
        }
        if (this.animationStarted = Od, !Od) {
          if (this.disposeOnEnd)
            for (Wd = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Wd, 1), Wd = 0; Wd < md.length; Wd++) md[Wd].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Od
      }
    }

    function sd(dd) {
      if (0 === dd.totalWeight && 0 === dd.totalAdditiveWeight) return dd.originalValue;
      let Od = 1;
      const md = Rd.h.Cq[0],
        Wd = Rd.h.Cq[1],
        Fd = Rd.h.Quaternion[0];
      let Xd = 0;
      const Kd = dd.animations[0],
        hd = dd.originalValue;
      let vd, Qd = !1;
      if (dd.totalWeight < 1) vd = 1 - dd.totalWeight, hd.decompose(Wd, Fd, md);
      else {
        if (Xd = 1, Od = dd.totalWeight, vd = Kd.weight / Od, 1 == vd) {
          if (!dd.totalAdditiveWeight) return Kd.currentValue;
          Qd = !0
        }
        Kd.currentValue.decompose(Wd, Fd, md)
      }
      if (!Qd) {
        Wd.scaleInPlace(vd), md.scaleInPlace(vd), Fd.scaleInPlace(vd);
        for (let Kd = Xd; Kd < dd.animations.length; Kd++) {
          const Xd = dd.animations[Kd];
          if (0 === Xd.weight) continue;
          vd = Xd.weight / Od;
          const hd = Rd.h.Cq[2],
            Qd = Rd.h.Cq[3],
            td = Rd.h.Quaternion[1];
          Xd.currentValue.decompose(Qd, td, hd), Qd.scaleAndAddToRef(vd, Wd), td.scaleAndAddToRef(Rd.e.Dot(Fd, td) > 0 ? vd : -vd, Fd), hd.scaleAndAddToRef(vd, md)
        }
        Fd.normalize()
      }
      for (let od = 0; od < dd.additiveAnimations.length; od++) {
        const Od = dd.additiveAnimations[od];
        if (0 === Od.weight) continue;
        const Xd = Rd.h.Cq[2],
          Kd = Rd.h.Cq[3],
          hd = Rd.h.Quaternion[1];
        Od.currentValue.decompose(Kd, hd, Xd), Kd.multiplyToRef(Wd, Kd), Rd.j.LerpToRef(Wd, Kd, Od.weight, Wd), Fd.multiplyToRef(hd, hd), Rd.e.SlerpToRef(Fd, hd, Od.weight, Fd), Xd.scaleAndAddToRef(Od.weight, md)
      }
      const td = Kd ? Kd._animationState.workValue : Rd.h.Matrix[0].clone();
      return Rd.d.ComposeToRef(Wd, Fd, md, td), td
    }

    function ud(dd, Od) {
      if (0 === dd.totalWeight && 0 === dd.totalAdditiveWeight) return Od;
      const md = dd.animations[0],
        Wd = dd.originalValue;
      let Fd = Od;
      if (0 === dd.totalWeight && dd.totalAdditiveWeight > 0) Fd.Bx(Wd);
      else if (1 === dd.animations.length) {
        if (Rd.e.SlerpToRef(Wd, md.currentValue, Math.min(1, dd.totalWeight), Fd), 0 === dd.totalAdditiveWeight) return Fd
      } else if (dd.animations.length > 1) {
        let md, Xd, Kd = 1;
        if (dd.totalWeight < 1) {
          const Od = 1 - dd.totalWeight;
          md = [], Xd = [], md.push(Wd), Xd.push(Od)
        } else {
          if (2 === dd.animations.length && (Rd.e.SlerpToRef(dd.animations[0].currentValue, dd.animations[1].currentValue, dd.animations[1].weight / dd.totalWeight, Od), 0 === dd.totalAdditiveWeight)) return Od;
          md = [], Xd = [], Kd = dd.totalWeight
        }
        for (let Od = 0; Od < dd.animations.length; Od++) {
          const Wd = dd.animations[Od];
          md.push(Wd.currentValue), Xd.push(Wd.weight / Kd)
        }
        let hd = 0;
        for (let dd = 0; dd < md.length;) dd ? (hd += Xd[dd], Rd.e.SlerpToRef(Fd, md[dd], Xd[dd] / hd, Fd), dd++) : (Rd.e.SlerpToRef(md[dd], md[dd + 1], Xd[dd + 1] / (Xd[dd] + Xd[dd + 1]), Od), Fd = Od, hd = Xd[dd] + Xd[dd + 1], dd += 2)
      }
      for (let Xd = 0; Xd < dd.additiveAnimations.length; Xd++) {
        const Od = dd.additiveAnimations[Xd];
        0 !== Od.weight && (Fd.multiplyToRef(Od.currentValue, Rd.h.Quaternion[0]), Rd.e.SlerpToRef(Fd, Rd.h.Quaternion[0], Od.weight, Fd))
      }
      return Fd
    }

    function Vd(dd, Od) {
      Od && (Od.prototype.copyAnimationRange = function(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Ud.e(this.name, "_matrix", dd.animations[0].framePerSecond, Ud.e.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Rd = dd.animations[0].getRange(Od);
        if (!Rd) return !1;
        const Xd = Rd.from,
          Kd = Rd.to,
          hd = dd.animations[0].getKeys(),
          vd = dd.length,
          Qd = dd.getParent(),
          td = this.getParent(),
          od = Wd && Qd && vd && this.length && vd !== this.length,
          Nd = od && td && Qd ? td.length / Qd.length : 1,
          qd = Wd && !td && Fd && (1 !== Fd.x || 1 !== Fd.y || 1 !== Fd.z),
          Hd = this.animations[0].getKeys();
        let yd, bd, Td;
        for (let pd = 0, Yd = hd.length; pd < Yd; pd++) yd = hd[pd], yd.frame >= Xd && yd.frame <= Kd && (Wd ? (Td = yd.value.clone(), od ? (bd = Td.getTranslation(), Td.setTranslation(bd.scaleInPlace(Nd))) : qd && Fd ? (bd = Td.getTranslation(), Td.setTranslation(bd.multiplyInPlace(Fd))) : Td = yd.value) : Td = yd.value, Hd.push({
          frame: yd.frame + md,
          value: Td
        }));
        return this.animations[0].createRange(Od, Xd + md, Kd + md), !0
      }), dd && (dd.prototype._animate = function(dd) {
        const Od = this._animationWrites,
          md = this._animationWriteCount;
        let Wd = 0;
        for (let Rd = this._animationStepWriteCount; Rd < md; Rd++) {
          const dd = Od[Rd];
          dd.Ly && -1 === dd.weight || (dd.Ly = !0, Od[Rd] = Od[Wd], Od[Wd] = dd, Wd++)
        }
        for (let Rd = Wd; Rd < md; Rd++) {
          const dd = Od[Rd];
          dd.runtimeAnimation = null, dd.target = null
        }
        if (this._animationWriteCount = Wd, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Fd = Bd.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Fd
        }
        this.deltaTime = void 0 !== dd ? dd : this.useConstantAnimationDeltaTime ? 16 : (Fd - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Fd;
        const Xd = this._activeAnimatables;
        if (0 === Xd.length) return;
        this._animationTime += this.deltaTime;
        const Kd = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Rd = 0; Rd < Xd.length; Rd++) {
          const dd = Xd[Rd];
          !dd._animate(Kd) && dd.disposeOnEnd && Rd--
        }! function(dd) {
          if (dd._registeredForLateAnimationBindings.length) {
            for (let Od = 0; Od < dd._registeredForLateAnimationBindings.length; Od++) {
              const md = dd._registeredForLateAnimationBindings.data[Od];
              for (const dd in md._lateAnimationHolders) {
                const Od = md._lateAnimationHolders[dd],
                  Wd = Od.animations[0],
                  Fd = Od.originalValue;
                if (void 0 === Fd || null === Fd) continue;
                const Xd = Ud.e.AllowMatrixDecomposeForInterpolation && Fd.m;
                let Kd = md[dd];
                if (Xd) Kd = sd(Od);
                else if (void 0 !== Fd.w) Kd = ud(Od, Kd || Rd.e.Identity());
                else {
                  let dd = 0,
                    md = 1;
                  const Rd = Wd && Wd._animationState.wm === Ud.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Od.totalWeight < 1) Kd = Rd ? Fd.clone ? Fd.clone() : Fd : Wd && Fd.scale ? Fd.scale(1 - Od.totalWeight) : Wd ? Fd * (1 - Od.totalWeight) : Fd.clone ? Fd.clone() : Fd;
                  else if (Wd) {
                    md = Od.totalWeight;
                    const Xd = Wd.weight / md;
                    Kd = 1 !== Xd ? Wd.currentValue.scale ? Wd.currentValue.scale(Xd) : Wd.currentValue * Xd : (Od.animations.length > 1 || Od.additiveAnimations.length > 0) && Wd.currentValue.clone ? Wd.currentValue.clone() : Wd.currentValue, Rd && (Kd.addToRef ? Kd.addToRef(Fd, Kd) : Kd += Fd), dd = 1
                  }
                  for (let Wd = dd; Wd < Od.animations.length; Wd++) {
                    const dd = Od.animations[Wd],
                      Fd = dd.weight / md;
                    Fd && (dd.currentValue.scaleAndAddToRef ? dd.currentValue.scaleAndAddToRef(Fd, Kd) : Kd += dd.currentValue * Fd)
                  }
                  for (let Wd = 0; Wd < Od.additiveAnimations.length; Wd++) {
                    const dd = Od.additiveAnimations[Wd],
                      md = dd.weight;
                    md && (dd.currentValue.scaleAndAddToRef ? dd.currentValue.scaleAndAddToRef(md, Kd) : Kd += dd.currentValue * md)
                  }
                }
                md[dd] = Kd
              }
              md._lateAnimationHolders = {}
            }
            dd._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, dd.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((dd, Od) => dd.playOrder - Od.playOrder))
      }, dd.prototype.beginWeightedAnimation = function(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Xd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = arguments.length > 7 ? arguments[7] : void 0,
          hd = arguments.length > 8 ? arguments[8] : void 0,
          vd = arguments.length > 9 ? arguments[9] : void 0,
          Qd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const td = this.beginAnimation(dd, Od, md, Fd, Rd, Xd, Kd, !1, hd, vd, Qd);
        return td.weight = Wd, td
      }, dd.prototype.beginAnimation = function(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Rd = arguments.length > 5 ? arguments[5] : void 0,
          Xd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          hd = arguments.length > 8 ? arguments[8] : void 0,
          vd = arguments.length > 9 ? arguments[9] : void 0,
          Qd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Fd < 0) {
          const dd = Od;
          Od = md, md = dd, Fd = -Fd
        }
        Od > md && (Fd = -Fd), Kd && this.stopAnimation(dd, void 0, hd), Xd || (Xd = new Sd(this, dd, Od, md, Wd, Fd, Rd, void 0, vd, Qd));
        const td = !hd || hd(dd);
        if (dd.animations && td && Xd.appendAnimations(dd, dd.animations), dd.getAnimatables) {
          const Qd = dd.getAnimatables();
          for (let dd = 0; dd < Qd.length; dd++) this.beginAnimation(Qd[dd], Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd)
        }
        return Xd.reset(), Xd
      }, dd.prototype.beginHierarchyAnimation = function(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Xd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = arguments.length > 7 ? arguments[7] : void 0,
          hd = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          vd = arguments.length > 9 ? arguments[9] : void 0,
          Qd = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const td = dd.getDescendants(Od),
          od = [];
        od.push(this.beginAnimation(dd, md, Wd, Fd, Rd, Xd, Kd, hd, vd, void 0, Qd));
        for (const Nd of td) od.push(this.beginAnimation(Nd, md, Wd, Fd, Rd, Xd, Kd, hd, vd, void 0, Qd));
        return od
      }, dd.prototype.beginDirectAnimation = function(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Rd < 0) {
          const dd = md;
          md = Wd, Wd = dd, Rd = -Rd
        }
        md > Wd && (Rd = -Rd);
        return new Sd(this, dd, md, Wd, Fd, Rd, arguments.length > 6 ? arguments[6] : void 0, Od, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, dd.prototype.beginDirectHierarchyAnimation = function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        let vd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Qd = dd.getDescendants(Od),
          td = [];
        td.push(this.beginDirectAnimation(dd, md, Wd, Fd, Rd, Xd, Kd, hd, vd));
        for (const od of Qd) td.push(this.beginDirectAnimation(od, md, Wd, Fd, Rd, Xd, Kd, hd, vd));
        return td
      }, dd.prototype.getAnimatableByTarget = function(dd) {
        for (let Od = 0; Od < this._activeAnimatables.length; Od++)
          if (this._activeAnimatables[Od].target === dd) return this._activeAnimatables[Od];
        return null
      }, dd.prototype.getAllAnimatablesByTarget = function(dd) {
        const Od = [];
        for (let md = 0; md < this._activeAnimatables.length; md++) this._activeAnimatables[md].target === dd && Od.push(this._activeAnimatables[md]);
        return Od
      }, dd.prototype.stopAnimation = function(dd, Od, md) {
        const Wd = this.getAllAnimatablesByTarget(dd);
        for (const Fd of Wd) Fd.stop(Od, md)
      }, dd.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let dd = 0; dd < this._activeAnimatables.length; dd++) this._activeAnimatables[dd].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const dd of this.animationGroups) dd.stop()
      })
    }
    Sd.ProcessPausedAnimatables = !1;
    var Ad, rd = md(38647),
      Gd = md(42132),
      nd = md(41817);
    class Ld extends Gd.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(dd) {
        (dd.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Bx(dd), this._markAsDirtyAndDecompose())
      }
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(dd, Od.zV(), !1), this.name = dd, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Od, this._localMatrix = Wd?.clone() ?? Rd.d.Identity(), this._restMatrix = Fd ?? this._localMatrix.clone(), this._bindMatrix = Xd ?? this._localMatrix.clone(), this._index = Kd, this._absoluteMatrix = new Rd.d, this._absoluteBindMatrix = new Rd.d, this._absoluteInverseBindMatrix = new Rd.d, this._finalMatrix = new Rd.d, Od.bones.push(this), this.setParent(md, !1), this._updateAbsoluteBindMatrices()
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
      set parent(dd) {
        this.setParent(dd)
      }
      setParent(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== dd) {
          if (this.parent) {
            const dd = this.parent.children.indexOf(this); - 1 !== dd && this.parent.children.splice(dd, 1)
          }
          this._parentNode = dd, this.parent && this.parent.children.push(this), Od && this._updateAbsoluteBindMatrices(), this.KWd()
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
      setRestMatrix(dd) {
        this._restMatrix.Bx(dd)
      }
      setRestPose(dd) {
        this.setRestMatrix(dd)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(dd) {
        this.Idd(dd)
      }
      setBindPose(dd) {
        this.setBindMatrix(dd)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const dd = Rd.h.Cq[0],
            Od = Rd.h.Quaternion[0],
            md = Rd.h.Cq[1];
          this.getRestMatrix().decompose(dd, Od, md), this._linkedTransformNode.position.Bx(md), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Rd.e.Identity(), this._linkedTransformNode.rotationQuaternion.Bx(Od), this._linkedTransformNode.Tt.Bx(dd)
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
      linkTransformNode(dd) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = dd, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.Nmd
      }
      set position(dd) {
        this._decompose(), this.Nmd.Bx(dd), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(dd) {
        this.setRotation(dd)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(dd) {
        this.setRotationQuaternion(dd)
      }
      get Tt() {
        return this.getScale()
      }
      set Tt(dd) {
        this.setScale(dd)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Rd.j.Zero(), this._localRotation = Rd.e.Zero(), this.Nmd = Rd.j.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Nmd))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Rd.d.ComposeToRef(this._localScaling, this._localRotation, this.Nmd, this._localMatrix)) : this._needToCompose = !1)
      }
      Idd(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Bx(dd), Od && this._updateAbsoluteBindMatrices(), md ? this._matrix = dd : this.KWd()
      }
      _updateAbsoluteBindMatrices(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (dd || (dd = this._bindMatrix), this.parent ? dd.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Bx(dd), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Od)
          for (let md = 0; md < this.children.length; md++) this.children[md]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      KWd() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.KWd(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.KWd(), this._needToDecompose = !0
      }
      _updatePosition(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Fd = this.getLocalMatrix();
        if (0 == Od) Wd ? (Fd.addAtIndex(12, dd.x), Fd.addAtIndex(13, dd.y), Fd.addAtIndex(14, dd.z)) : Fd.setTranslationFromFloats(dd.x, dd.y, dd.z);
        else {
          const Od = Ld._TmpMats[0],
            Xd = Ld._TmpVecs[0];
          this.parent ? (Od.Bx(this.parent.getAbsoluteMatrix()), md && Od.multiplyToRef(md.getWorldMatrix(), Od)) : Rd.d.IdentityToRef(Od), Wd && Od.setTranslationFromFloats(0, 0, 0), Od.invert(), Rd.j.TransformCoordinatesToRef(dd, Od, Xd), Wd ? (Fd.addAtIndex(12, Xd.x), Fd.addAtIndex(13, Xd.y), Fd.addAtIndex(14, Xd.z)) : Fd.setTranslationFromFloats(Xd.x, Xd.y, Xd.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(dd, Od, md, !0)
      }
      setPosition(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(dd, Od, md, !1)
      }
      setAbsolutePosition(dd, Od) {
        this.setPosition(dd, 1, Od)
      }
      scale(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Fd = this.getLocalMatrix(),
          Xd = Ld._TmpMats[0];
        Rd.d.ScalingToRef(dd, Od, md, Xd), Xd.multiplyToRef(Fd, Fd), Xd.invert();
        for (const Rd of this.children) {
          const Wd = Rd.getLocalMatrix();
          Wd.multiplyToRef(Xd, Wd), Wd.multiplyAtIndex(12, dd), Wd.multiplyAtIndex(13, Od), Wd.multiplyAtIndex(14, md), Rd._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Wd)
          for (const Rd of this.children) Rd.scale(dd, Od, md, Wd)
      }
      setScale(dd) {
        this._decompose(), this._localScaling.Bx(dd), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(dd) {
        this._decompose(), dd.Bx(this._localScaling)
      }
      setYawPitchRoll(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Wd) {
          const Xd = Ld._TmpQuat;
          return Rd.e.RotationYawPitchRollToRef(dd, Od, md, Xd), void this.setRotationQuaternion(Xd, Wd, Fd)
        }
        const Xd = Ld._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Xd, Fd)) return;
        const Kd = Ld._TmpMats[1];
        Rd.d.RotationYawPitchRollToRef(dd, Od, md, Kd), Xd.multiplyToRef(Kd, Kd), this._rotateWithMatrix(Kd, Wd, Fd)
      }
      rotate(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        const Fd = Ld._TmpMats[0];
        Fd.setTranslationFromFloats(0, 0, 0), Rd.d.RotationAxisToRef(dd, Od, Fd), this._rotateWithMatrix(Fd, md, Wd)
      }
      setAxisAngle(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === md) {
          const Fd = Ld._TmpQuat;
          return Rd.e.RotationAxisToRef(dd, Od, Fd), void this.setRotationQuaternion(Fd, md, Wd)
        }
        const Fd = Ld._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Fd, Wd)) return;
        const Xd = Ld._TmpMats[1];
        Rd.d.RotationAxisToRef(dd, Od, Xd), Fd.multiplyToRef(Xd, Xd), this._rotateWithMatrix(Xd, md, Wd)
      }
      setRotation(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(dd.y, dd.x, dd.z, Od, md)
      }
      setRotationQuaternion(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Od) return this._decompose(), this._localRotation.Bx(dd), void this._markAsDirtyAndCompose();
        const Wd = Ld._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Wd, md)) return;
        const Fd = Ld._TmpMats[1];
        Rd.d.FromQuaternionToRef(dd, Fd), Wd.multiplyToRef(Fd, Fd), this._rotateWithMatrix(Fd, Od, md)
      }
      setRotationMatrix(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Od) {
          const Wd = Ld._TmpQuat;
          return Rd.e.FromRotationMatrixToRef(dd, Wd), void this.setRotationQuaternion(Wd, Od, md)
        }
        const Wd = Ld._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Wd, md)) return;
        const Fd = Ld._TmpMats[1];
        Fd.Bx(dd), Wd.multiplyToRef(dd, Fd), this._rotateWithMatrix(Fd, Od, md)
      }
      _rotateWithMatrix(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = this.getLocalMatrix(),
          Fd = Wd.m[12],
          Rd = Wd.m[13],
          Xd = Wd.m[14],
          Kd = this.getParent(),
          hd = Ld._TmpMats[3],
          vd = Ld._TmpMats[4];
        Kd && 1 == Od ? (md ? (hd.Bx(md.getWorldMatrix()), Kd.getAbsoluteMatrix().multiplyToRef(hd, hd)) : hd.Bx(Kd.getAbsoluteMatrix()), vd.Bx(hd), vd.invert(), Wd.multiplyToRef(hd, Wd), Wd.multiplyToRef(dd, Wd), Wd.multiplyToRef(vd, Wd)) : 1 == Od && md ? (hd.Bx(md.getWorldMatrix()), vd.Bx(hd), vd.invert(), Wd.multiplyToRef(hd, Wd), Wd.multiplyToRef(dd, Wd), Wd.multiplyToRef(vd, Wd)) : Wd.multiplyToRef(dd, Wd), Wd.setTranslationFromFloats(Fd, Rd, Xd), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(dd, Od) {
        const md = Ld._TmpMats[2];
        return dd.Bx(this.getAbsoluteMatrix()), Od ? (dd.multiplyToRef(Od.getWorldMatrix(), dd), Rd.d.ScalingToRef(Od.Tt.x, Od.Tt.y, Od.Tt.z, md)) : Rd.d.IdentityToRef(md), dd.invert(), !isNaN(dd.m[0]) && (md.multiplyAtIndex(0, this._scalingDeterminant), dd.multiplyToRef(md, dd), !0)
      }
      hY() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const md = Rd.j.Zero();
        return this.getPositionToRef(dd, Od, md), md
      }
      getPositionToRef() {
        let dd = arguments.length > 1 ? arguments[1] : void 0,
          Od = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const dd = this.getLocalMatrix();
          Od.x = dd.m[12], Od.y = dd.m[13], Od.z = dd.m[14]
        } else {
          const md = Ld._TmpMats[0].Bx(this.getAbsoluteMatrix());
          dd && md.multiplyToRef(dd.getWorldMatrix(), md), Od.x = md.m[12], Od.y = md.m[13], Od.z = md.m[14]
        }
      }
      getAbsolutePosition() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Od = Rd.j.Zero();
        return this.getPositionToRef(1, dd, Od), Od
      }
      getAbsolutePositionToRef(dd, Od) {
        this.getPositionToRef(1, dd, Od)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Bx(this._localMatrix);
          const dd = this._skeleton.getPoseMatrix();
          dd && this._absoluteMatrix.multiplyToRef(dd, this._absoluteMatrix)
        }
        const dd = this.children,
          Od = dd.length;
        for (let md = 0; md < Od; md++) dd[md].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      B_(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const md = Rd.j.Zero();
        return this.getDirectionToRef(dd, Od, md), md
      }
      getDirectionToRef(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = Ld._TmpMats[0].Bx(this.getAbsoluteMatrix());
        Od && Wd.multiplyToRef(Od.getWorldMatrix(), Wd), Rd.j.TransformNormalToRef(dd, Wd, md), md.normalize()
      }
      getRotation() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const md = Rd.j.Zero();
        return this.getRotationToRef(dd, Od, md), md
      }
      getRotationToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = Ld._TmpQuat;
        this.getRotationQuaternionToRef(dd, Od, Wd), Wd.toEulerAnglesToRef(md)
      }
      getRotationQuaternion() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const md = Rd.e.Identity();
        return this.getRotationQuaternionToRef(dd, Od, md), md
      }
      getRotationQuaternionToRef() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Od = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Od.Bx(this._localRotation);
        else {
          const md = Ld._TmpMats[0],
            Wd = this.getAbsoluteMatrix();
          dd ? Wd.multiplyToRef(dd.getWorldMatrix(), md) : md.Bx(Wd), md.multiplyAtIndex(0, this._scalingDeterminant), md.multiplyAtIndex(1, this._scalingDeterminant), md.multiplyAtIndex(2, this._scalingDeterminant), md.decompose(void 0, Od, void 0)
        }
      }
      getRotationMatrix() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 ? arguments[1] : void 0;
        const md = Rd.d.Identity();
        return this.getRotationMatrixToRef(dd, Od, md), md
      }
      getRotationMatrixToRef() {
        let dd = arguments.length > 1 ? arguments[1] : void 0,
          Od = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Od);
        else {
          const md = Ld._TmpMats[0],
            Wd = this.getAbsoluteMatrix();
          dd ? Wd.multiplyToRef(dd.getWorldMatrix(), md) : md.Bx(Wd), md.multiplyAtIndex(0, this._scalingDeterminant), md.multiplyAtIndex(1, this._scalingDeterminant), md.multiplyAtIndex(2, this._scalingDeterminant), md.getRotationMatrixToRef(Od)
        }
      }
      getAbsolutePositionFromLocal(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const md = Rd.j.Zero();
        return this.getAbsolutePositionFromLocalToRef(dd, Od, md), md
      }
      getAbsolutePositionFromLocalToRef(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = Ld._TmpMats[0].Bx(this.getAbsoluteMatrix());
        Od && Wd.multiplyToRef(Od.getWorldMatrix(), Wd), Rd.j.TransformCoordinatesToRef(dd, Wd, md)
      }
      getLocalPositionFromAbsolute(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const md = Rd.j.Zero();
        return this.getLocalPositionFromAbsoluteToRef(dd, Od, md), md
      }
      getLocalPositionFromAbsoluteToRef(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = Ld._TmpMats[0].Bx(this.getAbsoluteMatrix());
        Od && Wd.multiplyToRef(Od.getWorldMatrix(), Wd), Wd.invert(), Rd.j.TransformCoordinatesToRef(dd, Wd, md)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const dd = this._skeleton.bones.indexOf(this);
        if (-1 !== dd && this._skeleton.bones.splice(dd, 1), this._parentNode && this._parentNode.children) {
          const dd = this._parentNode.children,
            Od = dd.indexOf(this); - 1 !== Od && dd.splice(Od, 1)
        }
        super.dispose()
      }
    }
    Ld._TmpVecs = (0, rd.e)(2, Rd.j.Zero), Ld._TmpQuat = Rd.e.Identity(), Ld._TmpMats = (0, rd.e)(5, Rd.d.Identity), (Ad = Ld.prototype).copyAnimationRange ?? (Ad.copyAnimationRange = (0, nd.i)("Bone", "copyAnimationRange"));
    var Pd = md(42020);
    let zd = !1;
    var cd = md(41894),
      jd = md(42240),
      Dd = md(42248),
      ed = md(42242),
      Id = md(42060);

    function ld(dd, Od) {
      const md = (0, Nd.RandomRange)(0, 1);
      Qd.f.LerpToRef(Od.color1, Od.color2, md, dd.color)
    }

    function Cd(dd, Od) {
      Od.colorDead.subtractToRef(dd.color, Od._colorDiff), Od._colorDiff.scaleToRef(1 / dd.lifeTime, dd.colorStep)
    }

    function Zd(dd, Od) {
      dd._properties.currentColorGradient = Od._colorGradients[0], dd._properties.currentColorGradient.getColorToRef(dd.color), dd._properties.currentColor1.Bx(dd.color), Od._colorGradients.length > 1 ? Od._colorGradients[1].getColorToRef(dd._properties.currentColor2) : dd._properties.currentColor2.Bx(dd.color)
    }

    function kd(dd, Od) {
      const md = Od._colorGradients;
      Wd.m.GetCurrentGradient(Od._ratio, md, ((Od, md, Wd) => {
        Od !== dd._properties.currentColorGradient && (dd._properties.currentColor1.Bx(dd._properties.currentColor2), md.getColorToRef(dd._properties.currentColor2), dd._properties.currentColorGradient = Od), Qd.f.LerpToRef(dd._properties.currentColor1, dd._properties.currentColor2, Wd, dd.color), dd.color.a < 0 && (dd.color.a = 0)
      }))
    }

    function fd(dd, Od) {
      dd.colorStep.scaleToRef(Od._scaledUpdateSpeed, Od._scaledColorStep), dd.color.addInPlace(Od._scaledColorStep), dd.color.a < 0 && (dd.color.a = 0)
    }

    function Md(dd, Od) {
      Wd.m.GetCurrentGradient(Od._ratio, Od._angularSpeedGradients, ((Od, md, Wd) => {
        Od !== dd._properties.currentAngularSpeedGradient && (dd._properties.currentAngularSpeed1 = dd._properties.currentAngularSpeed2, dd._properties.currentAngularSpeed2 = md.getFactor(), dd._properties.currentAngularSpeedGradient = Od), dd.angularSpeed = (0, Nd.Lerp)(dd._properties.currentAngularSpeed1, dd._properties.currentAngularSpeed2, Wd)
      }))
    }

    function dO(dd, Od) {
      dd.angle += dd.angularSpeed * Od._scaledUpdateSpeed
    }

    function OO(dd, Od) {
      Od.particleEmitterType.startDirectionFunction(Od._emitterWorldMatrix, dd.direction, dd, Od.isLocal, Od._emitterInverseWorldMatrix)
    }

    function mO(dd, Od) {
      Od.startDirectionFunction(Od._emitterWorldMatrix, dd.direction, dd, Od.isLocal)
    }

    function WO(dd, Od) {
      dd._properties.currentVelocityGradient = Od._velocityGradients[0], dd._properties.currentVelocity1 = dd._properties.currentVelocityGradient.getFactor(), Od._velocityGradients.length > 1 ? dd._properties.currentVelocity2 = Od._velocityGradients[1].getFactor() : dd._properties.currentVelocity2 = dd._properties.currentVelocity1
    }

    function FO(dd, Od) {
      dd._properties.currentLimitVelocityGradient = Od._limitVelocityGradients[0], dd._properties.currentLimitVelocity1 = dd._properties.currentLimitVelocityGradient.getFactor(), Od._limitVelocityGradients.length > 1 ? dd._properties.currentLimitVelocity2 = Od._limitVelocityGradients[1].getFactor() : dd._properties.currentLimitVelocity2 = dd._properties.currentLimitVelocity1
    }

    function RO(dd, Od) {
      Wd.m.GetCurrentGradient(Od._ratio, Od._velocityGradients, ((Od, md, Wd) => {
        Od !== dd._properties.currentVelocityGradient && (dd._properties.currentVelocity1 = dd._properties.currentVelocity2, dd._properties.currentVelocity2 = md.getFactor(), dd._properties.currentVelocityGradient = Od), dd._properties.directionScale *= (0, Nd.Lerp)(dd._properties.currentVelocity1, dd._properties.currentVelocity2, Wd)
      }))
    }

    function XO(dd, Od) {
      Wd.m.GetCurrentGradient(Od._ratio, Od._limitVelocityGradients, ((md, Wd, Fd) => {
        md !== dd._properties.currentLimitVelocityGradient && (dd._properties.currentLimitVelocity1 = dd._properties.currentLimitVelocity2, dd._properties.currentLimitVelocity2 = Wd.getFactor(), dd._properties.currentLimitVelocityGradient = md);
        const Rd = (0, Nd.Lerp)(dd._properties.currentLimitVelocity1, dd._properties.currentLimitVelocity2, Fd);
        dd.direction.length() > Rd && dd.direction.scaleInPlace(Od.limitVelocityDamping)
      }))
    }

    function KO(dd) {
      dd.direction.scaleToRef(dd._properties.directionScale, dd._properties.scaledDirection)
    }

    function hO(dd, Od) {
      Od.particleEmitterType.startPositionFunction(Od._emitterWorldMatrix, dd.position, dd, Od.isLocal)
    }

    function vO(dd, Od) {
      Od.startPositionFunction(Od._emitterWorldMatrix, dd.position, dd, Od.isLocal)
    }

    function QO(dd, Od) {
      dd._properties.localPosition ? dd._properties.localPosition.Bx(dd.position) : dd._properties.localPosition = dd.position.clone(), Rd.j.TransformCoordinatesToRef(dd._properties.localPosition, Od._emitterWorldMatrix, dd.position)
    }

    function tO(dd, Od) {
      Od.isLocal && dd._properties.localPosition ? (dd._properties.localPosition.addInPlace(dd._properties.scaledDirection), Rd.j.TransformCoordinatesToRef(dd._properties.localPosition, Od._emitterWorldMatrix, dd.position)) : dd.position.addInPlace(dd._properties.scaledDirection)
    }

    function oO(dd, Od) {
      dd._properties.currentDragGradient = Od._dragGradients[0], dd._properties.currentDrag1 = dd._properties.currentDragGradient.getFactor(), Od._dragGradients.length > 1 ? dd._properties.currentDrag2 = Od._dragGradients[1].getFactor() : dd._properties.currentDrag2 = dd._properties.currentDrag1
    }

    function NO(dd, Od) {
      Wd.m.GetCurrentGradient(Od._ratio, Od._dragGradients, ((Od, md, Wd) => {
        Od !== dd._properties.currentDragGradient && (dd._properties.currentDrag1 = dd._properties.currentDrag2, dd._properties.currentDrag2 = md.getFactor(), dd._properties.currentDragGradient = Od);
        const Fd = (0, Nd.Lerp)(dd._properties.currentDrag1, dd._properties.currentDrag2, Wd);
        dd._properties.scaledDirection.scaleInPlace(1 - Fd)
      }))
    }

    function qO(dd, Od) {
      dd._properties.randomNoiseCoordinates1 && dd._properties.randomNoiseCoordinates2 ? (dd._properties.randomNoiseCoordinates1.KOd(Math.random(), Math.random(), Math.random()), dd._properties.randomNoiseCoordinates2.KOd(Math.random(), Math.random(), Math.random())) : (dd._properties.randomNoiseCoordinates1 = new Rd.j(Math.random(), Math.random(), Math.random()), dd._properties.randomNoiseCoordinates2 = new Rd.j(Math.random(), Math.random(), Math.random()))
    }

    function HO(dd, Od) {
      const md = Od._noiseTextureData,
        Wd = Od._noiseTextureSize;
      if (md && Wd && dd._properties.randomNoiseCoordinates1 && dd._properties.randomNoiseCoordinates2) {
        const Fd = Od._fetchR(dd._properties.randomNoiseCoordinates1.x, dd._properties.randomNoiseCoordinates1.y, Wd.width, Wd.height, md),
          Xd = Od._fetchR(dd._properties.randomNoiseCoordinates1.z, dd._properties.randomNoiseCoordinates2.x, Wd.width, Wd.height, md),
          Kd = Od._fetchR(dd._properties.randomNoiseCoordinates2.y, dd._properties.randomNoiseCoordinates2.z, Wd.width, Wd.height, md),
          hd = Rd.h.Cq[0],
          vd = Rd.h.Cq[1];
        hd.KOd((2 * Fd - 1) * Od.noiseStrength.x, (2 * Xd - 1) * Od.noiseStrength.y, (2 * Kd - 1) * Od.noiseStrength.z), hd.scaleToRef(Od._tempScaledUpdateSpeed, vd), dd.direction.addInPlace(vd)
      }
    }

    function yO(dd, Od) {
      Od.gravity.scaleToRef(Od._tempScaledUpdateSpeed, Od._scaledGravity), dd.direction.addInPlace(Od._scaledGravity)
    }

    function bO(dd, Od) {
      dd.size = (0, Nd.RandomRange)(Od.minSize, Od.maxSize), dd.scale.KOd((0, Nd.RandomRange)(Od.minScaleX, Od.maxScaleX), (0, Nd.RandomRange)(Od.minScaleY, Od.maxScaleY))
    }

    function TO(dd, Od) {
      dd._properties.currentSizeGradient = Od._sizeGradients[0], dd._properties.currentSize1 = dd._properties.currentSizeGradient.getFactor(), dd.size = dd._properties.currentSize1, Od._sizeGradients.length > 1 ? dd._properties.currentSize2 = Od._sizeGradients[1].getFactor() : dd._properties.currentSize2 = dd._properties.currentSize1, dd.scale.KOd((0, Nd.RandomRange)(Od.minScaleX, Od.maxScaleX), (0, Nd.RandomRange)(Od.minScaleY, Od.maxScaleY))
    }

    function pO(dd, Od) {
      const md = Od._actualFrame / Od.targetStopDuration;
      Wd.m.GetCurrentGradient(md, Od._startSizeGradients, ((md, Wd, Fd) => {
        md !== Od._currentStartSizeGradient && (Od._currentStartSize1 = Od._currentStartSize2, Od._currentStartSize2 = Wd.getFactor(), Od._currentStartSizeGradient = md);
        const Rd = (0, Nd.Lerp)(Od._currentStartSize1, Od._currentStartSize2, Fd);
        dd.scale.scaleInPlace(Rd)
      }))
    }

    function YO(dd, Od) {
      Wd.m.GetCurrentGradient(Od._ratio, Od._sizeGradients, ((Od, md, Wd) => {
        Od !== dd._properties.currentSizeGradient && (dd._properties.currentSize1 = dd._properties.currentSize2, dd._properties.currentSize2 = md.getFactor(), dd._properties.currentSizeGradient = Od), dd.size = (0, Nd.Lerp)(dd._properties.currentSize1, dd._properties.currentSize2, Wd)
      }))
    }

    function gO(dd, Od) {
      dd.remapData = new Rd.k(0, 1, 0, 1)
    }

    function wO(dd, Od) {
      Od._colorRemapGradients && Od._colorRemapGradients.length > 0 && Wd.m.GetCurrentGradient(Od._ratio, Od._colorRemapGradients, ((Od, md, Wd) => {
        const Fd = (0, Nd.Lerp)(Od.factor1, md.factor1, Wd),
          Rd = (0, Nd.Lerp)(Od.factor2, md.factor2, Wd);
        dd.remapData.x = Fd, dd.remapData.y = Rd - Fd
      })), Od._alphaRemapGradients && Od._alphaRemapGradients.length > 0 && Wd.m.GetCurrentGradient(Od._ratio, Od._alphaRemapGradients, ((Od, md, Wd) => {
        const Fd = (0, Nd.Lerp)(Od.factor1, md.factor1, Wd),
          Rd = (0, Nd.Lerp)(Od.factor2, md.factor2, Wd);
        dd.remapData.z = Fd, dd.remapData.w = Rd - Fd
      }))
    }

    function aO(dd, Od) {
      const md = (0, Nd.Clamp)(Od._actualFrame / Od.targetStopDuration);
      Wd.m.GetCurrentGradient(md, Od._lifeTimeGradients, ((Od, Wd) => {
        const Fd = Od,
          Rd = Wd,
          Xd = Fd.getFactor(),
          Kd = Rd.getFactor(),
          hd = (md - Fd.gradient) / (Rd.gradient - Fd.gradient);
        dd.lifeTime = (0, Nd.Lerp)(Xd, Kd, hd)
      })), Od._emitPower = (0, Nd.RandomRange)(Od.minEmitPower, Od.maxEmitPower)
    }

    function EO(dd, Od) {
      dd.lifeTime = (0, Nd.RandomRange)(Od.minLifeTime, Od.maxLifeTime), Od._emitPower = (0, Nd.RandomRange)(Od.minEmitPower, Od.maxEmitPower)
    }

    function JO(dd, Od) {
      0 === Od._emitPower ? (dd._properties.initialDirection ? dd._properties.initialDirection.Bx(dd.direction) : dd._properties.initialDirection = dd.direction.clone(), dd.direction.set(0, 0, 0)) : (dd._properties.initialDirection = null, dd.direction.scaleInPlace(Od._emitPower)), dd.direction.addInPlace(Od._inheritedVelocityOffset)
    }

    function UO(dd, Od) {
      dd.angularSpeed = (0, Nd.RandomRange)(Od.minAngularSpeed, Od.maxAngularSpeed), dd.angle = (0, Nd.RandomRange)(Od.minInitialRotation, Od.maxInitialRotation)
    }

    function xO(dd, Od) {
      dd._properties.currentAngularSpeedGradient = Od._angularSpeedGradients[0], dd.angularSpeed = dd._properties.currentAngularSpeedGradient.getFactor(), dd._properties.currentAngularSpeed1 = dd.angularSpeed, Od._angularSpeedGradients.length > 1 ? dd._properties.currentAngularSpeed2 = Od._angularSpeedGradients[1].getFactor() : dd._properties.currentAngularSpeed2 = dd._properties.currentAngularSpeed1, dd.angle = (0, Nd.RandomRange)(Od.minInitialRotation, Od.maxInitialRotation)
    }

    function BO(dd, Od) {
      dd._properties.initialStartSpriteCellId = Od.startSpriteCellID, dd._properties.initialEndSpriteCellId = Od.endSpriteCellID, dd._properties.initialSpriteCellLoop = Od.spriteCellLoop
    }

    function SO(dd, Od) {
      dd.previousItem = Od.previousItem, dd.nextItem = Od, Od.previousItem && (Od.previousItem.nextItem = dd), Od.previousItem = dd
    }

    function sO(dd, Od) {
      dd.previousItem = Od, dd.nextItem = Od.nextItem, Od.nextItem && (Od.nextItem.previousItem = dd), Od.nextItem = dd
    }

    function uO(dd) {
      dd.previousItem && (dd.previousItem.nextItem = dd.nextItem), dd.nextItem && (dd.nextItem.previousItem = dd.previousItem)
    }
    var VO = md(42298);
    class iO extends wd {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(dd) {
        this._startDirectionFunction !== dd && (this._startDirectionFunction = dd, this._directionCreation.process = dd ? mO : OO)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(dd) {
        this._startPositionFunction !== dd && (this._startPositionFunction = dd, this._positionCreation.process = dd ? vO : hO)
      }
      set onDispose(dd) {
        this._onDisposeObserver && this.cV.remove(this._onDisposeObserver), this._onDisposeObserver = this.cV.add(dd)
      }
      get yJ() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(dd) {
        this._useRampGradients !== dd && (this._useRampGradients = dd, this._resetEffect(), dd ? (this._rampCreation = {
          process: gO,
          previousItem: null,
          nextItem: null
        }, sO(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: wO,
          previousItem: null,
          nextItem: null
        }, sO(this._remapGradientProcessing, this._gravityProcessing))) : (uO(this._rampCreation), uO(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(dd) {
        this._isLocal !== dd && (this._isLocal = dd, dd ? (this._isLocalCreation = {
          process: QO,
          previousItem: null,
          nextItem: null
        }, sO(this._isLocalCreation, this._positionCreation)) : uO(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(dd) {
        this._animationSheetEnabled !== dd && (this._animationSheetEnabled = dd, dd ? (this._sheetCreation = {
          process: BO,
          previousItem: null,
          nextItem: null
        }, sO(this._sheetCreation, this._colorDeadCreation)) : uO(this._sheetCreation), this._reset())
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[dd]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[dd] ?? this._customWrappers[0]
      }
      setCustomEffect(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Od] = new jd.b(this._engine), this._customWrappers[Od].effect = dd, this._customWrappers[Od].drawContext && (this._customWrappers[Od].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Fd.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(dd) {
        if (this.noiseTexture !== dd) {
          if (this._noiseTexture = dd, !dd) return uO(this._noiseCreation), void uO(this._noiseProcessing);
          this._noiseCreation = {
            process: qO,
            previousItem: null,
            nextItem: null
          }, sO(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: HO,
            previousItem: null,
            nextItem: null
          }, sO(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Xd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Kd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          vd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        zd || (zd = !0, Vd(Pd.c, Ld)), (0, cd.c)(), super(dd), this._emitterInverseWorldMatrix = Rd.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Rd.j, this.cV = new Fd.c, this.onStoppedObservable = new Fd.c, this.onStartedObservable = new Fd.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Qd.f(0, 0, 0, 0), this._colorDiff = new Qd.f(0, 0, 0, 0), this._scaledGravity = Rd.j.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = dd => {}, this.recycleParticle = dd => {
          const Od = this._particles.pop();
          Od !== dd && Od.copyTo(dd), Od.metadata = null, this._stockParticles.push(Od)
        }, this._createParticle = () => {
          let dd;
          return 0 !== this._stockParticles.length ? (dd = this._stockParticles.pop(), dd._reset()) : dd = new Jd(this), this._prepareParticle(dd), dd
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Od, this._epsilon = Kd, md && "Scene" !== md.getClassName() ? (this._engine = md, this.defaultProjectionMatrix = Rd.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = md || hd.e.LastCreatedScene, this._engine = this._scene.Iq(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.kE.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: EO,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: hO,
          previousItem: null,
          nextItem: null
        }, sO(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: OO,
          previousItem: null,
          nextItem: null
        }, sO(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: JO,
          previousItem: null,
          nextItem: null
        }, sO(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: bO,
          previousItem: null,
          nextItem: null
        }, sO(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: UO,
          previousItem: null,
          nextItem: null
        }, sO(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: ld,
          previousItem: null,
          nextItem: null
        }, sO(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Cd,
          previousItem: null,
          nextItem: null
        }, sO(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, vd || (this._colorProcessing = {
          process: fd,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: dO,
          previousItem: null,
          nextItem: null
        }, sO(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: KO,
          previousItem: null,
          nextItem: null
        }, sO(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: tO,
          previousItem: null,
          nextItem: null
        }, sO(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: yO,
          previousItem: null,
          nextItem: null
        }, sO(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Xd, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new jd.b(this._engine)
        }, this._customWrappers[0].effect = Wd, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new td.c, this.updateFunction = dd => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((dd => {
            this._noiseTextureData = dd
          })));
          const Od = dd === this._particles;
          for (let md = 0; md < dd.length; md++) {
            const Wd = dd[md];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Fd = Wd.age;
            if (Wd.age += this._tempScaledUpdateSpeed, Wd.age > Wd.lifeTime) {
              const dd = Wd.age - Fd,
                Od = Wd.lifeTime - Fd;
              this._tempScaledUpdateSpeed = Od * this._tempScaledUpdateSpeed / dd, Wd.age = Wd.lifeTime
            }
            this._ratio = Wd.age / Wd.lifeTime, Wd._properties.directionScale = this._tempScaledUpdateSpeed;
            let Rd = this._updateQueueStart;
            for (; Rd;) Rd.process(Wd, this), Rd = Rd.nextItem;
            if (this._isAnimationSheetEnabled && !vd && Wd.updateCellIndex(), Wd._inheritParticleInfoToSubEmitters(), Wd.age >= Wd.lifeTime) {
              if (this._emitFromParticle(Wd), Wd._properties.attachedSubEmitters) {
                for (const dd of Wd._properties.attachedSubEmitters) dd.particleSystem.disposeOnStop = !0, dd.particleSystem.stop();
                Wd._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Wd), Od && md--
            } else;
          }
        }
      }
      serialize(dd) {
        throw new Error("Method not implemented.")
      }
      clone(dd, Od) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = aO : this._lifeTimeCreation.process = EO
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: pO,
          previousItem: null,
          nextItem: null
        }, sO(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (uO(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(dd) {
        this.targetStopDuration !== dd && (this._targetStopDuration = dd, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(dd, Od, md) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, dd, Od, md), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(dd) {
        return this._removeFactorGradient(this._lifeTimeGradients, dd), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(dd, Od, md) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = TO, this._sizeGradientProcessing = {
          process: YO,
          previousItem: null,
          nextItem: null
        }, SO(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, dd, Od, md), this
      }
      removeSizeGradient(dd) {
        return this._removeFactorGradient(this._sizeGradients, dd), 0 === this._sizeGradients?.length && (uO(this._sizeGradientProcessing), this._sizeCreation.process = bO), this
      }
      addColorRemapGradient(dd, Od, md) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, dd, Od, md), this
      }
      removeColorRemapGradient(dd) {
        return this._removeFactorGradient(this._colorRemapGradients, dd), this
      }
      addAlphaRemapGradient(dd, Od, md) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, dd, Od, md), this
      }
      removeAlphaRemapGradient(dd) {
        return this._removeFactorGradient(this._alphaRemapGradients, dd), this
      }
      addAngularSpeedGradient(dd, Od, md) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = xO, this._angularSpeedGradientProcessing = {
          process: Md,
          previousItem: null,
          nextItem: null
        }, SO(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, dd, Od, md), this
      }
      removeAngularSpeedGradient(dd) {
        return this._removeFactorGradient(this._angularSpeedGradients, dd), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = UO, uO(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(dd, Od, md) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: WO,
          previousItem: null,
          nextItem: null
        }, sO(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: RO,
          previousItem: null,
          nextItem: null
        }, SO(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, dd, Od, md), this
      }
      removeVelocityGradient(dd) {
        return this._removeFactorGradient(this._velocityGradients, dd), 0 === this._velocityGradients?.length && (uO(this._velocityCreation), uO(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(dd, Od, md) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: FO,
          previousItem: null,
          nextItem: null
        }, sO(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: XO,
          previousItem: null,
          nextItem: null
        }, sO(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, dd, Od, md), this
      }
      removeLimitVelocityGradient(dd) {
        return this._removeFactorGradient(this._limitVelocityGradients, dd), 0 === this._limitVelocityGradients?.length && (uO(this._limitVelocityCreation), uO(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(dd, Od, md) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: oO,
          previousItem: null,
          nextItem: null
        }, SO(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: NO,
          previousItem: null,
          nextItem: null
        }, SO(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, dd, Od, md), this
      }
      removeDragGradient(dd) {
        return this._removeFactorGradient(this._dragGradients, dd), 0 === this._dragGradients?.length && (uO(this._dragCreation), uO(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(dd, Od, md) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, dd, Od, md), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(dd) {
        return this._removeFactorGradient(this._startSizeGradients, dd), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const dd = new Uint8Array(4 * this._rawTextureWidth),
          Od = Qd.j.Color3[0];
        for (let md = 0; md < this._rawTextureWidth; md++) {
          const Fd = md / this._rawTextureWidth;
          Wd.m.GetCurrentGradient(Fd, this._rampGradients, ((Wd, Fd, Rd) => {
            Qd.d.LerpToRef(Wd.color, Fd.color, Rd, Od), dd[4 * md] = 255 * Od.r, dd[4 * md + 1] = 255 * Od.g, dd[4 * md + 2] = 255 * Od.b, dd[4 * md + 3] = 255
          }))
        }
        this._rampGradientsTexture = Kd.e.CreateRGBATexture(dd, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((dd, Od) => dd.gradient < Od.gradient ? -1 : dd.gradient > Od.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(dd, Od) {
        this._rampGradients || (this._rampGradients = []);
        const md = new Wd.h(dd, Od);
        return this._rampGradients.push(md), this._syncRampGradientTexture(), this
      }
      removeRampGradient(dd) {
        return this._removeGradientAndTexture(dd, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(dd, Od, md) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Zd, this._colorProcessing.process = kd);
        const Fd = new Wd.d(dd, Od, md);
        return this._colorGradients.push(Fd), this._colorGradients.sort(((dd, Od) => dd.gradient < Od.gradient ? -1 : dd.gradient > Od.gradient ? 1 : 0)), this
      }
      removeColorGradient(dd) {
        if (!this._colorGradients) return this;
        let Od = 0;
        for (const md of this._colorGradients) {
          if (md.gradient === dd) {
            this._colorGradients.splice(Od, 1);
            break
          }
          Od++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = ld, this._colorProcessing.process = fd), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const dd of this._drawWrappers)
            if (dd)
              for (const Od of dd) Od?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(dd, Od, md, Wd, Fd) {
        return Fd[4 * (((dd = .5 * Math.abs(dd) + .5) * md % md | 0) + ((Od = .5 * Math.abs(Od) + .5) * Wd % Wd | 0) * md)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const dd = this._engine,
          Od = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Od), this._vertexBuffer = new Xd.b(dd, this._vertexData, !0, Od);
        let md = 0;
        const Wd = this._vertexBuffer.createVertexBuffer(Xd.j.PositionKind, md, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Xd.j.PositionKind] = Wd, md += 3;
        const Fd = this._vertexBuffer.createVertexBuffer(Xd.j.ColorKind, md, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Xd.j.ColorKind] = Fd, md += 4;
        const Rd = this._vertexBuffer.createVertexBuffer("angle", md, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Rd, md += 1;
        const Kd = this._vertexBuffer.createVertexBuffer("size", md, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Kd, md += 2, this._isAnimationSheetEnabled) {
          const dd = this._vertexBuffer.createVertexBuffer("cellIndex", md, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = dd, md += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const dd = this._vertexBuffer.createVertexBuffer("direction", md, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = dd, md += 3
        }
        if (this._useRampGradients) {
          const dd = this._vertexBuffer.createVertexBuffer("remapData", md, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = dd, md += 4
        }
        let hd;
        if (this._useInstancing) {
          const Od = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Xd.b(dd, Od, !1, 2), hd = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else hd = this._vertexBuffer.createVertexBuffer("offset", md, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = hd, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const dd = [],
          Od = [];
        let md = 0;
        for (let Wd = 0; Wd < this._capacity; Wd++) dd.push(md), dd.push(md + 1), dd.push(md + 2), dd.push(md), dd.push(md + 2), dd.push(md + 3), Od.push(md, md + 1, md + 1, md + 2, md + 2, md + 3, md + 3, md, md, md + 3), md += 4;
        this._indexBuffer = this._engine.createIndexBuffer(dd), this._linesIndexBuffer = this._engine.createIndexBuffer(Od)
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (dd) return this.startDelay = dd, void setTimeout((() => {
          this.start(0)
        }), dd);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const dd = this.noiseTexture;
          if (dd && dd.onGeneratedObservable) dd.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let Od = 0; Od < this.preWarmCycles; Od++) this.animate(!0), dd.render()
            }))
          }));
          else
            for (let Od = 0; Od < this.preWarmCycles; Od++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(dd))
      }
      _postStop(dd) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(dd, Od, md, Wd) {
        let Fd = dd * this._vertexBufferSize;
        const Xd = Rd.h.Cq[0].Bx(this._scene?.floatingOriginOffset || Rd.j.ZeroReadOnly);
        if (this._vertexData[Fd++] = Od.position.x + this.worldOffset.x - Xd.x, this._vertexData[Fd++] = Od.position.y + this.worldOffset.y - Xd.y, this._vertexData[Fd++] = Od.position.z + this.worldOffset.z - Xd.z, this._vertexData[Fd++] = Od.color.r, this._vertexData[Fd++] = Od.color.g, this._vertexData[Fd++] = Od.color.b, this._vertexData[Fd++] = Od.color.a, this._vertexData[Fd++] = Od.angle, this._vertexData[Fd++] = Od.scale.x * Od.size, this._vertexData[Fd++] = Od.scale.y * Od.size, this._isAnimationSheetEnabled && (this._vertexData[Fd++] = Od.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Fd++] = Od.direction.x, this._vertexData[Fd++] = Od.direction.y, this._vertexData[Fd++] = Od.direction.z);
        else if (Od._properties.initialDirection) {
          let dd = Od._properties.initialDirection;
          this.isLocal && (Rd.j.TransformNormalToRef(dd, this._emitterWorldMatrix, Rd.h.Cq[0]), dd = Rd.h.Cq[0]), 0 === dd.x && 0 === dd.z && (dd.x = .001), this._vertexData[Fd++] = dd.x, this._vertexData[Fd++] = dd.y, this._vertexData[Fd++] = dd.z
        } else {
          let dd = Od.direction;
          this.isLocal && (Rd.j.TransformNormalToRef(dd, this._emitterWorldMatrix, Rd.h.Cq[0]), dd = Rd.h.Cq[0]), 0 === dd.x && 0 === dd.z && (dd.x = .001), this._vertexData[Fd++] = dd.x, this._vertexData[Fd++] = dd.y, this._vertexData[Fd++] = dd.z
        }
        this._useRampGradients && Od.remapData && (this._vertexData[Fd++] = Od.remapData.x, this._vertexData[Fd++] = Od.remapData.y, this._vertexData[Fd++] = Od.remapData.z, this._vertexData[Fd++] = Od.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === md ? md = this._epsilon : 1 === md && (md = 1 - this._epsilon), 0 === Wd ? Wd = this._epsilon : 1 === Wd && (Wd = 1 - this._epsilon)), this._vertexData[Fd++] = md, this._vertexData[Fd] = Wd)
      }
      _prepareParticle(dd) {}
      _createNewOnes(dd) {
        let Od;
        for (let md = 0; md < dd && this._particles.length !== this._capacity; md++) {
          Od = this._createParticle(), this._particles.push(Od);
          let dd = this._createQueueStart;
          for (; dd;) dd.process(Od, this), dd = dd.nextItem;
          Od._inheritParticleInfoToSubEmitters()
        }
      }
      _update(dd) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const dd = this.emitter;
          this._emitterWorldMatrix = dd.getWorldMatrix()
        } else {
          const dd = this.emitter;
          this._emitterWorldMatrix = Rd.d.Translation(dd.x, dd.y, dd.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(dd)
      }
      static _GetAttributeNamesOrOptions() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = [Xd.j.PositionKind, Xd.j.ColorKind, "angle", "offset", "size"];
        return dd && Wd.push("cellIndex"), Od || Wd.push("direction"), md && Wd.push("remapData"), Wd
      }
      static _GetEffectCreationOptions() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Dd.b)(Wd), dd && Wd.push("particlesInfos"), Od && Wd.push("logarithmicDepthConstant"), md && (Wd.push("vFogInfos"), Wd.push("vFogColor")), Wd
      }
      fillDefines(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Dd.k)(this, this._scene, dd), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && dd.push("#define FOG")), this._isAnimationSheetEnabled && dd.push("#define ANIMATESHEET"), this.useLogarithmicDepth && dd.push("#define LOGARITHMICDEPTH"), Od === wd.BLENDMODE_MULTIPLY && dd.push("#define BLENDMULTIPLYMODE"), this.isLocal && dd.push("#define LOCAL"), this._useRampGradients && dd.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (dd.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            dd.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            dd.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && dd.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            dd.push("#define BILLBOARDMODE_ALL")
        }
        md && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), dd.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(dd, Od, md) {
        Od.push(...iO._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), dd.push(...iO._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), md.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Id.g)(dd, this._imageProcessingConfigurationDefines), (0, Id.c)(md, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(dd) {
        var Od;
        const md = this._getCustomDrawWrapper(dd);
        if (md?.effect) return md;
        const Wd = [];
        this.fillDefines(Wd, dd);
        const Rd = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Xd = VO.c._PrepareStringDefines(Rd, Wd),
          Kd = Xd ? VO.c.GetConfiguration(Rd) : void 0;
        let hd = this._drawWrappers[Rd];
        hd || (hd = this._drawWrappers[Rd] = [], 0 === Rd || this._renderPassObserver || (this._renderPassObserver = ((Od = this._engine)._onReleaseRenderPassObservable ?? (Od._onReleaseRenderPassObservable = new Fd.c)).add((dd => {
          const Od = this._drawWrappers[dd];
          if (Od) {
            for (const dd of Od) dd?.dispose();
            delete this._drawWrappers[dd]
          }
        }))));
        let vd = hd[dd];
        vd || (vd = new jd.b(this._engine), vd.drawContext && (vd.drawContext.useInstancing = this._useInstancing), hd[dd] = vd);
        const Qd = Wd.join("\n");
        if (vd.defines !== Qd) {
          const dd = [],
            Od = [],
            md = [];
          this.fillUniformsAttributesAndSamplerNames(Od, dd, md), Xd && (Od.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Kd?.defines.PREPASS_LOCAL_POSITION_INDEX && Od.push("inverseEmitterWM", "geometryWorldOffset")), vd.setEffect(this._engine.createEffect("particles", {
            attributes: dd,
            uniformsNames: Od,
            samplers: md,
            defines: Qd,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Xd,
            indexParameters: Xd ? {
              buffersCount: Kd?._mrtCount ?? 0
            } : void 0
          }, this._engine), Qd)
        }
        return vd
      }
      _bindGeometryRendering(dd) {
        const Od = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          md = VO.c.GetConfiguration(Od);
        if (!md?._defines) return;
        dd.setFloat("objectId", 0), dd.setInt("meshBlendTag", 0);
        const Wd = this._scene?.activeCamera;
        if (dd.setFloat2("cameraInfo", Wd?.minZ ?? 0, Wd?.maxZ ?? 1), this.isLocal && void 0 !== md.defines.PREPASS_LOCAL_POSITION_INDEX) {
          dd.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Od = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Rd.j.ZeroReadOnly, Rd.h.Cq[0]);
          dd.setVector3("geometryWorldOffset", Od)
        }
      }
      animate() {
        let dd, Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Od && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Od ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) dd = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Od = this._calculateEmitRate();
            dd = Od * this._scaledUpdateSpeed | 0, this._newPartsExcess += Od * this._scaledUpdateSpeed - dd
          }
          if (this._newPartsExcess > 1 && (dd += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? dd = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(dd), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Od) {
            let dd = 0;
            for (let Od = 0; Od < this._particles.length; Od++) {
              const md = this._particles[Od];
              this._appendParticleVertices(dd, md), dd += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const dd = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Od = this._particles.length;
                Od < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Od * dd, this._fixedCapacityHighWaterMark * dd), this._fixedCapacityHighWaterMark = Od, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const dd = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * dd), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let dd = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const Od = this._actualFrame / this.targetStopDuration;
          Wd.m.GetCurrentGradient(Od, this._emitRateGradients, ((Od, md, Wd) => {
            Od !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = md.getFactor(), this._currentEmitRateGradient = Od), dd = (0, Nd.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Wd)
          }))
        }
        return dd
      }
      _appendParticleVertices(dd, Od) {
        this._appendParticleVertex(dd++, Od, 0, 0), this._useInstancing || (this._appendParticleVertex(dd++, Od, 1, 0), this._appendParticleVertex(dd++, Od, 1, 1), this._appendParticleVertex(dd, Od, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !iO.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([md.e(665).then((() => md(64806))), md.e(659).then((() => md(64813)))])) : await Promise.all([md.e(648).then((() => md(64817))), Promise.all([md.e(641), md.e(674)]).then((() => md(64826)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== wd.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(wd.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(wd.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(dd) {
        const Od = this._getWrapper(dd),
          md = Od.effect,
          Wd = this._engine;
        Wd.enableEffect(Od);
        const Fd = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        md.setTexture("diffuseSampler", this.particleTexture), md.setMatrix("view", Fd);
        const Xd = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (md.setMatrix("projection", Xd), this._isAnimationSheetEnabled && this.particleTexture) {
          const dd = this.particleTexture.getBaseSize();
          md.setFloat3("particlesInfos", this.spriteCellWidth / dd.width, this.spriteCellHeight / dd.height, this.spriteCellWidth / dd.width)
        }
        if (md.setVector2("translationPivot", this.translationPivot), md.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const dd = this._scene.activeCamera;
          md.setVector3("eyePosition", dd.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), md.setTexture("rampSampler", this._rampGradientsTexture));
        const Kd = md.defines;
        this._scene && ((0, Dd.e)(md, this, this._scene), this.applyFog && (0, ed.f)(this._scene, void 0, md)), Kd.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Fd.invertToRef(Rd.h.Matrix[0]), md.setMatrix("invView", Rd.h.Matrix[0])), md._multiTarget && this._bindGeometryRendering(md), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Wd.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, md) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, md)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Wd.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, md) : Wd.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, md), this.useLogarithmicDepth && this._scene && (0, ed.m)(Kd, md, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(md), this._setEngineBasedOnBlendMode(dd), md._multiTarget && VO.c._BindZeroAlphaDiscard(Wd, md);
        let hd = !1;
        try {
          VO.c._BindAttachmentsForEffect(Wd, md) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(md), this._useInstancing ? this._scene?.forceWireframe ? Wd.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Wd.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Wd.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Wd.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), hd = !0)
        } finally {
          VO.c._RestoreAttachments(Wd)
        }
        return hd ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const dd = this._engine;
        let Od;
        return dd.setState && (dd.setState(!1), this.forceDepthWrite && dd.setDepthWrite(!0)), Od = this.blendMode === wd.BLENDMODE_MULTIPLYADD ? this._render(wd.BLENDMODE_MULTIPLY) + this._render(wd.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Od
      }
      _onDispose() {}
      dispose() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), dd && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), dd && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Od, md), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const dd = this._scene.kE.indexOf(this);
          dd > -1 && this._scene.kE.splice(dd, 1), this._scene._activeParticleSystems.dispose()
        }
        this.cV.notifyObservers(this), this.cV.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    iO.ForceGLSL = !1;
    var AO, rO = md(38669);
    ! function(dd) {
      dd[dd.ATTACHED = 0] = "ATTACHED", dd[dd.END = 1] = "END"
    }(AO || (AO = {}));
    class GO {
      constructor(dd) {
        if (this.particleSystem = dd, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !dd.emitter || !dd.emitter.dispose) {
          const Od = (0, rO.c)("BABYLON.AbstractMesh");
          dd.emitter = new Od("SubemitterSystemEmitter", dd.zV()), dd._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let dd = this.particleSystem.emitter;
        if (dd) {
          if (dd instanceof Rd.j) dd = dd.clone();
          else if (-1 !== dd.getClassName().indexOf("Mesh")) {
            dd = new((0, rO.c)("BABYLON.Mesh"))("", dd.zV()), dd.isVisible = !1
          }
        } else dd = new Rd.j;
        const Od = new GO(this.particleSystem.clone(this.particleSystem.name, dd));
        return Od.particleSystem.name += "Clone", Od.type = this.type, Od.inheritDirection = this.inheritDirection, Od.inheritedVelocityAmount = this.inheritedVelocityAmount, Od.particleSystem._disposeEmitterOnDispose = !0, Od.particleSystem.disposeOnStop = !0, Od
      }
      serialize() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = {};
        return Od.type = this.type, Od.inheritDirection = this.inheritDirection, Od.inheritedVelocityAmount = this.inheritedVelocityAmount, Od.particleSystem = this.particleSystem.serialize(dd), Od
      }
      static _ParseParticleSystem(dd, Od, md) {
        throw (0, nd.m)("ParseParticle")
      }
      static Parse(dd, Od, md) {
        const Wd = dd.particleSystem,
          Fd = new GO(GO._ParseParticleSystem(Wd, Od, md, !0));
        return Fd.type = dd.type, Fd.inheritDirection = dd.inheritDirection, Fd.inheritedVelocityAmount = dd.inheritedVelocityAmount, Fd.particleSystem._isSubEmitter = !0, Fd
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var nO = md(41838),
      LO = md(41948);
    const PO = () => {};
    class zO {
      constructor() {
        this.particlePositionGenerator = PO, this.particleDestinationGenerator = PO, this.particleDirectionGenerator = PO
      }
      startDirectionFunction(dd, Od, md, Wd) {
        const Fd = Rd.h.Cq[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== PO) this.particleDirectionGenerator(-1, md, Fd);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== PO) {
          this.particleDestinationGenerator(-1, md, Fd);
          const dd = Rd.h.Cq[1];
          Fd.subtractToRef(md.position, dd), dd.scaleToRef(1 / md.lifeTime, Fd)
        } else Fd.set(0, 0, 0);
        Wd ? Od.Bx(Fd) : Rd.j.TransformNormalToRef(Fd, dd, Od)
      }
      startPositionFunction(dd, Od, md, Wd) {
        const Fd = Rd.h.Cq[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== PO ? this.particlePositionGenerator(-1, md, Fd) : Fd.set(0, 0, 0), Wd ? Od.Bx(Fd) : Rd.j.TransformCoordinatesToRef(Fd, dd, Od)
      }
      clone() {
        const dd = new zO;
        return od.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {}
      buildUniformLayout(dd) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.particlePositionGenerator = this.particlePositionGenerator, dd.particleDestinationGenerator = this.particleDestinationGenerator, dd
      }
      parse(dd) {
        dd.particlePositionGenerator && (this.particlePositionGenerator = dd.particlePositionGenerator), dd.particleDestinationGenerator && (this.particleDestinationGenerator = dd.particleDestinationGenerator)
      }
    }
    const cO = Rd.j.Zero(),
      jO = Rd.j.Zero(),
      DO = Rd.j.Zero();
    class eO {
      constructor() {
        this.strength = 0, this.position = Rd.j.Zero()
      }
      _processParticle(dd, Od) {
        this.position.subtractToRef(dd.position, cO);
        const md = cO.lengthSquared() + 1;
        cO.normalize().scaleToRef(this.strength / md, jO), jO.scaleToRef(Od._tempScaledUpdateSpeed, DO), dd.direction.addInPlace(DO)
      }
      serialize() {
        return {
          position: this.position.RRd(),
          strength: this.strength
        }
      }
    }
    const IO = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class lO extends iO {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = dd => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Od = Math.floor(Math.random() * this._subEmitters.length);
          for (const md of this._subEmitters[Od])
            if (1 === md.type) {
              const Od = md.clone();
              dd._inheritParticleInfoToSubEmitter(Od), Od.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Od.particleSystem), Od.particleSystem.start()
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
      set flowMap(dd) {
        this._flowMap !== dd && (this._flowMap = dd, this._flowMapUpdate && (uO(this._flowMapUpdate), this._flowMapUpdate = null), dd && (this._flowMapUpdate = {
          process: dd => {
            const Od = this.zV()?.getTransformMatrix();
            this._flowMap._processParticle(dd, this.flowMapStrength * this._tempScaledUpdateSpeed, Od)
          },
          previousItem: null,
          nextItem: null
        }, sO(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(dd) {
        super.addAttractor(dd), 1 === this._attractors.length && (this._attractorUpdate = {
          process: dd => {
            for (const Od of this._attractors) Od._processParticle(dd, this)
          },
          previousItem: null,
          nextItem: null
        }, sO(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(dd) {
        super.removeAttractor(dd), 0 === this._attractors.length && this._attractorUpdate && uO(this._attractorUpdate)
      }
      start() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(dd)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const dd of this.subEmitters) dd instanceof lO ? this._subEmitters.push([new GO(dd)]) : dd instanceof GO ? this._subEmitters.push([dd]) : dd instanceof Array && this._subEmitters.push(dd)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const dd of this.activeSubSystems) dd.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const dd = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== dd && this._rootParticleSystem.activeSubSystems.splice(dd, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(dd) {
        dd && this._stopSubEmitters()
      }
      _prepareParticle(dd) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const Od = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          dd._properties.attachedSubEmitters = [];
          for (const md of Od)
            if (0 === md.type) {
              const Od = md.clone();
              dd._properties.attachedSubEmitters.push(Od), Od.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), dd && this.particles)
          for (const md of this.particles)
            if (md._properties.attachedSubEmitters)
              for (let dd = md._properties.attachedSubEmitters.length - 1; dd >= 0; dd -= 1) md._properties.attachedSubEmitters[dd].dispose();
        if (Od && this.activeSubSystems)
          for (let md = this.activeSubSystems.length - 1; md >= 0; md -= 1) this.activeSubSystems[md].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let dd = 0; dd < this._subEmitters.length; dd++)
            for (const Od of this._subEmitters[dd]) Od.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(dd, Od, md, Wd) {
        let Fd;
        Fd = md instanceof nO.b ? null : md;
        const Xd = (0, rO.c)("BABYLON.Texture");
        if (Xd && Fd)
          if (dd.texture) Od.particleTexture = Xd.Parse(dd.texture, Fd, Wd);
          else if (dd.textureName) {
          const md = dd.textureSettings;
          if (Od.particleTexture = new Xd(Wd + dd.textureName, Fd, !1, void 0 === dd.invertY || dd.invertY, md ? md.samplingMode : void 0), Od.particleTexture.name = dd.textureName, md) {
            const dd = Od.particleTexture;
            for (const Od of IO) void 0 !== md[Od] && (dd[Od] = md[Od])
          }
        }
        if (dd.emitterId || 0 === dd.emitterId || void 0 !== dd.emitter ? (dd.emitterId || 0 === dd.emitterId) && Fd ? (Od.emitter = Fd.getLastMeshById(dd.emitterId), Od.emitter || (Od.emitter = Rd.j.Zero())) : Od.emitter = Rd.j.FromArray(dd.emitter) : Od.emitter = Rd.j.Zero(), Od.isLocal = !!dd.isLocal, void 0 !== dd.renderingGroupId && (Od.renderingGroupId = dd.renderingGroupId), void 0 !== dd.isBillboardBased && (Od.isBillboardBased = dd.isBillboardBased), void 0 !== dd.billboardMode && (Od.billboardMode = dd.billboardMode), void 0 !== dd.useLogarithmicDepth && (Od.useLogarithmicDepth = dd.useLogarithmicDepth), dd.animations) {
          for (let md = 0; md < dd.animations.length; md++) {
            const Wd = dd.animations[md],
              Fd = (0, rO.c)("BABYLON.Animation");
            Fd && Od.animations.push(Fd.Parse(Wd))
          }
          Od.beginAnimationOnStart = dd.beginAnimationOnStart, Od.beginAnimationFrom = dd.beginAnimationFrom, Od.beginAnimationTo = dd.beginAnimationTo, Od.beginAnimationLoop = dd.beginAnimationLoop
        }
        if (dd.autoAnimate && Fd && Fd.beginAnimation(Od, dd.autoAnimateFrom, dd.autoAnimateTo, dd.autoAnimateLoop, dd.autoAnimateSpeed || 1), Od.startDelay = 0 | dd.startDelay, Od.minAngularSpeed = dd.minAngularSpeed, Od.maxAngularSpeed = dd.maxAngularSpeed, Od.minSize = dd.minSize, Od.maxSize = dd.maxSize, dd.minScaleX && (Od.minScaleX = dd.minScaleX, Od.maxScaleX = dd.maxScaleX, Od.minScaleY = dd.minScaleY, Od.maxScaleY = dd.maxScaleY), void 0 !== dd.preWarmCycles && (Od.preWarmCycles = dd.preWarmCycles, Od.preWarmStepOffset = dd.preWarmStepOffset), void 0 !== dd.minInitialRotation && (Od.minInitialRotation = dd.minInitialRotation, Od.maxInitialRotation = dd.maxInitialRotation), Od.minLifeTime = dd.minLifeTime, Od.maxLifeTime = dd.maxLifeTime, Od.minEmitPower = dd.minEmitPower, Od.maxEmitPower = dd.maxEmitPower, Od.emitRate = dd.emitRate, Od.gravity = Rd.j.FromArray(dd.gravity), dd.noiseStrength && (Od.noiseStrength = Rd.j.FromArray(dd.noiseStrength)), Od.color1 = Qd.f.FromArray(dd.color1), Od.color2 = Qd.f.FromArray(dd.color2), Od.colorDead = Qd.f.FromArray(dd.colorDead), Od.updateSpeed = dd.updateSpeed, Od.targetStopDuration = dd.targetStopDuration, Od.blendMode = dd.blendMode, dd.colorGradients)
          for (const Rd of dd.colorGradients) Od.addColorGradient(Rd.gradient, Qd.f.FromArray(Rd.color1), Rd.color2 ? Qd.f.FromArray(Rd.color2) : void 0);
        if (dd.rampGradients) {
          for (const md of dd.rampGradients) Od.addRampGradient(md.gradient, Qd.d.FromArray(md.color));
          Od.useRampGradients = dd.useRampGradients
        }
        if (dd.colorRemapGradients)
          for (const Rd of dd.colorRemapGradients) Od.addColorRemapGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.alphaRemapGradients)
          for (const Rd of dd.alphaRemapGradients) Od.addAlphaRemapGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.sizeGradients)
          for (const Rd of dd.sizeGradients) Od.addSizeGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.angularSpeedGradients)
          for (const Rd of dd.angularSpeedGradients) Od.addAngularSpeedGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.velocityGradients)
          for (const Rd of dd.velocityGradients) Od.addVelocityGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.dragGradients)
          for (const Rd of dd.dragGradients) Od.addDragGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.emitRateGradients)
          for (const Rd of dd.emitRateGradients) Od.addEmitRateGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.startSizeGradients)
          for (const Rd of dd.startSizeGradients) Od.addStartSizeGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.lifeTimeGradients)
          for (const Rd of dd.lifeTimeGradients) Od.addLifeTimeGradient(Rd.gradient, void 0 !== Rd.factor1 ? Rd.factor1 : Rd.factor, Rd.factor2);
        if (dd.limitVelocityGradients) {
          for (const md of dd.limitVelocityGradients) Od.addLimitVelocityGradient(md.gradient, void 0 !== md.factor1 ? md.factor1 : md.factor, md.factor2);
          Od.limitVelocityDamping = dd.limitVelocityDamping
        }
        if (dd.noiseTexture && Fd) {
          const md = (0, rO.c)("BABYLON.ProceduralTexture");
          Od.noiseTexture = md.Parse(dd.noiseTexture, Fd, Wd)
        }
        let Kd;
        if (dd.particleEmitterType) {
          switch (dd.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Kd = new yd;
              break;
            case "SphereDirectedParticleEmitter":
              Kd = new bd;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Kd = new pd;
              break;
            case "ConeDirectedParticleEmitter":
              Kd = new Yd;
              break;
            case "CylinderParticleEmitter":
              Kd = new Td.e;
              break;
            case "CylinderDirectedParticleEmitter":
              Kd = new Td.b;
              break;
            case "HemisphericParticleEmitter":
              Kd = new Hd;
              break;
            case "PointParticleEmitter":
              Kd = new qd;
              break;
            case "MeshParticleEmitter":
              Kd = new gd;
              break;
            case "CustomParticleEmitter":
              Kd = new zO;
              break;
            default:
              Kd = new td.c
          }
          Kd.parse(dd.particleEmitterType, Fd)
        } else Kd = new td.c, Kd.parse(dd, Fd);
        Od.particleEmitterType = Kd, Od.startSpriteCellID = dd.startSpriteCellID, Od.endSpriteCellID = dd.endSpriteCellID, Od.spriteCellLoop = dd.spriteCellLoop ?? !0, Od.spriteCellWidth = dd.spriteCellWidth, Od.spriteCellHeight = dd.spriteCellHeight, Od.spriteCellChangeSpeed = dd.spriteCellChangeSpeed, Od.spriteRandomStartCell = dd.spriteRandomStartCell, Od.disposeOnStop = dd.disposeOnStop ?? !1, Od.manualEmitCount = dd.manualEmitCount ?? -1
      }
      static Parse(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Fd = arguments.length > 4 ? arguments[4] : void 0;
        const Xd = dd.name;
        let Kd, hd, vd = null,
          td = null;
        if (Od instanceof nO.b ? Kd = Od : (hd = Od, Kd = hd.Iq()), dd.customShader && (0, nd.e)(Kd.createEffectForParticles)) {
          td = dd.customShader;
          const Od = td.shaderOptions.defines.length > 0 ? td.shaderOptions.defines.join("\n") : "";
          vd = Kd.createEffectForParticles(td.shaderPath.fragmentElement, td.shaderOptions.uniforms, td.shaderOptions.samplers, Od)
        }
        const od = new lO(Xd, Fd || dd.Mt, Od, vd, dd.isAnimationSheetEnabled);
        if (od.customShader = td, od._rootUrl = md, dd.id && (od.id = dd.id), dd.subEmitters) {
          od.subEmitters = [];
          for (const Wd of dd.subEmitters) {
            const dd = [];
            for (const Fd of Wd) dd.push(GO.Parse(Fd, Od, md));
            od.subEmitters.push(dd)
          }
        }
        if (dd.attractors)
          for (const Qd of dd.attractors) {
            const dd = new eO;
            dd.position = Rd.j.FromArray(Qd.position), dd.strength = Qd.strength, od.addAttractor(dd)
          }
        return lO._Parse(dd, od, Od, md), dd.textureMask && (od.textureMask = Qd.f.FromArray(dd.textureMask)), dd.worldOffset && (od.worldOffset = Rd.j.FromArray(dd.worldOffset)), dd.preventAutoStart && (od.preventAutoStart = dd.preventAutoStart), dd.metadata && (od.metadata = dd.metadata), Wd || od.preventAutoStart || od.start(), od
      }
      serialize() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = {};
        if (lO._Serialize(Od, this, dd), Od.textureMask = this.textureMask.RRd(), Od.customShader = this.customShader, Od.preventAutoStart = this.preventAutoStart, Od.worldOffset = this.worldOffset.RRd(), this.metadata && (Od.metadata = this.metadata), this.subEmitters) {
          Od.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const md of this._subEmitters) {
            const Wd = [];
            for (const Od of md) Od.particleSystem.doNotSerialize || Wd.push(Od.serialize(dd));
            Od.subEmitters.push(Wd)
          }
        }
        if (this._attractors && this._attractors.length) {
          Od.attractors = [];
          for (const dd of this._attractors) Od.attractors.push(dd.serialize())
        }
        return Od
      }
      static _Serialize(dd, Od, md) {
        if (dd.name = Od.name, dd.id = Od.id, dd.Mt = Od.getCapacity(), dd.disposeOnStop = Od.disposeOnStop, dd.manualEmitCount = Od.manualEmitCount, Od.emitter.position) {
          const md = Od.emitter;
          dd.emitterId = md.id
        } else {
          const md = Od.emitter;
          dd.emitter = md.RRd()
        }
        if (Od.particleEmitterType && (dd.particleEmitterType = Od.particleEmitterType.serialize()), Od.particleTexture)
          if (md) dd.texture = Od.particleTexture.serialize();
          else {
            const md = Od.particleTexture;
            dd.textureName = Od.particleTexture.name, dd.invertY = !!md._invertY;
            const Wd = {};
            for (const dd of IO) Wd[dd] = md[dd];
            Wd.samplingMode = md.samplingMode, dd.textureSettings = Wd
          } dd.isLocal = Od.isLocal, LO.b.AppendSerializedAnimations(Od, dd), dd.beginAnimationOnStart = Od.beginAnimationOnStart, dd.beginAnimationFrom = Od.beginAnimationFrom, dd.beginAnimationTo = Od.beginAnimationTo, dd.beginAnimationLoop = Od.beginAnimationLoop, dd.startDelay = Od.startDelay, dd.renderingGroupId = Od.renderingGroupId, dd.isBillboardBased = Od.isBillboardBased, dd.billboardMode = Od.billboardMode, dd.minAngularSpeed = Od.minAngularSpeed, dd.maxAngularSpeed = Od.maxAngularSpeed, dd.minSize = Od.minSize, dd.maxSize = Od.maxSize, dd.minScaleX = Od.minScaleX, dd.maxScaleX = Od.maxScaleX, dd.minScaleY = Od.minScaleY, dd.maxScaleY = Od.maxScaleY, dd.minEmitPower = Od.minEmitPower, dd.maxEmitPower = Od.maxEmitPower, dd.minLifeTime = Od.minLifeTime, dd.maxLifeTime = Od.maxLifeTime, dd.emitRate = Od.emitRate, dd.gravity = Od.gravity.RRd(), dd.noiseStrength = Od.noiseStrength.RRd(), dd.color1 = Od.color1.RRd(), dd.color2 = Od.color2.RRd(), dd.colorDead = Od.colorDead.RRd(), dd.updateSpeed = Od.updateSpeed, dd.targetStopDuration = Od.targetStopDuration, dd.blendMode = Od.blendMode, dd.preWarmCycles = Od.preWarmCycles, dd.preWarmStepOffset = Od.preWarmStepOffset, dd.minInitialRotation = Od.minInitialRotation, dd.maxInitialRotation = Od.maxInitialRotation, dd.startSpriteCellID = Od.startSpriteCellID, dd.spriteCellLoop = Od.spriteCellLoop, dd.endSpriteCellID = Od.endSpriteCellID, dd.spriteCellChangeSpeed = Od.spriteCellChangeSpeed, dd.spriteCellWidth = Od.spriteCellWidth, dd.spriteCellHeight = Od.spriteCellHeight, dd.spriteRandomStartCell = Od.spriteRandomStartCell, dd.isAnimationSheetEnabled = Od.isAnimationSheetEnabled, dd.useLogarithmicDepth = Od.useLogarithmicDepth;
        const Wd = Od.getColorGradients();
        if (Wd) {
          dd.colorGradients = [];
          for (const Od of Wd) {
            const md = {
              gradient: Od.gradient,
              color1: Od.color1.RRd()
            };
            Od.color2 ? md.color2 = Od.color2.RRd() : md.color2 = Od.color1.RRd(), dd.colorGradients.push(md)
          }
        }
        const Fd = Od.getRampGradients();
        if (Fd) {
          dd.rampGradients = [];
          for (const Od of Fd) {
            const md = {
              gradient: Od.gradient,
              color: Od.color.RRd()
            };
            dd.rampGradients.push(md)
          }
          dd.useRampGradients = Od.useRampGradients
        }
        const Rd = Od.getColorRemapGradients();
        if (Rd) {
          dd.colorRemapGradients = [];
          for (const Od of Rd) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.colorRemapGradients.push(md)
          }
        }
        const Xd = Od.getAlphaRemapGradients();
        if (Xd) {
          dd.alphaRemapGradients = [];
          for (const Od of Xd) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.alphaRemapGradients.push(md)
          }
        }
        const Kd = Od.getSizeGradients();
        if (Kd) {
          dd.sizeGradients = [];
          for (const Od of Kd) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.sizeGradients.push(md)
          }
        }
        const hd = Od.getAngularSpeedGradients();
        if (hd) {
          dd.angularSpeedGradients = [];
          for (const Od of hd) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.angularSpeedGradients.push(md)
          }
        }
        const vd = Od.getVelocityGradients();
        if (vd) {
          dd.velocityGradients = [];
          for (const Od of vd) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.velocityGradients.push(md)
          }
        }
        const Qd = Od.getDragGradients();
        if (Qd) {
          dd.dragGradients = [];
          for (const Od of Qd) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.dragGradients.push(md)
          }
        }
        const td = Od.getEmitRateGradients();
        if (td) {
          dd.emitRateGradients = [];
          for (const Od of td) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.emitRateGradients.push(md)
          }
        }
        const od = Od.getStartSizeGradients();
        if (od) {
          dd.startSizeGradients = [];
          for (const Od of od) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.startSizeGradients.push(md)
          }
        }
        const Nd = Od.getLifeTimeGradients();
        if (Nd) {
          dd.lifeTimeGradients = [];
          for (const Od of Nd) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.lifeTimeGradients.push(md)
          }
        }
        const qd = Od.getLimitVelocityGradients();
        if (qd) {
          dd.limitVelocityGradients = [];
          for (const Od of qd) {
            const md = {
              gradient: Od.gradient,
              factor1: Od.factor1
            };
            void 0 !== Od.factor2 ? md.factor2 = Od.factor2 : md.factor2 = Od.factor1, dd.limitVelocityGradients.push(md)
          }
          dd.limitVelocityDamping = Od.limitVelocityDamping
        }
        Od.noiseTexture && (dd.noiseTexture = Od.noiseTexture.serialize())
      }
      clone(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = {
          ...this._customWrappers
        };
        let Fd = null;
        const Rd = this._engine;
        if ((0, nd.e)(Rd.createEffectForParticles) && null != this.customShader) {
          Fd = this.customShader;
          const dd = Fd.shaderOptions.defines.length > 0 ? Fd.shaderOptions.defines.join("\n") : "",
            Od = Rd.createEffectForParticles(Fd.shaderPath.fragmentElement, Fd.shaderOptions.uniforms, Fd.shaderOptions.samplers, dd);
          Wd[0] ? Wd[0].effect = Od : this.setCustomEffect(Od, 0)
        }
        const Xd = this.serialize(md),
          Kd = !1 === md && this.particleTexture ? this.particleTexture.clone() : null;
        Kd && (Xd.textureName = void 0);
        const hd = lO.Parse(Xd, this._scene || this._engine, this._rootUrl);
        return hd.name = dd, hd.customShader = Fd, hd._customWrappers = Wd, Kd && (hd.particleTexture = Kd), void 0 === Od && (Od = this.emitter), this.noiseTexture && (hd.noiseTexture = this.noiseTexture.clone()), hd.emitter = Od, this.preventAutoStart || hd.start(), hd
      }
    }
    lO.BILLBOARDMODE_Y = 2, lO.BILLBOARDMODE_ALL = 7, lO.BILLBOARDMODE_STRETCHED = 8, lO.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let CO = !1;
    CO || (CO = !0, GO._ParseParticleSystem = lO.Parse)
  },
  54055: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      SkyMaterial: () => pd,
      _MaxColorValueForRenderTarget: () => Td
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(41948),
      Xd = md(38627),
      Kd = md(42199),
      hd = md(42262),
      vd = md(54019),
      Qd = md(43122),
      td = md(42016),
      od = md(38669),
      Nd = md(42291),
      qd = md(42271),
      Hd = md(42248),
      yd = md(42242);
    class bd extends Kd.b {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Td(dd) {
      switch (dd) {
        case vd.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case vd.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let pd = (() => {
      var dd;
      let Od, Kd, vd, od, pd, Yd, gd, wd, Ed, Jd, Ud, xd, Bd, Sd, sd, ud = hd.d,
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [],
        zd = [],
        cd = [],
        jd = [],
        Dd = [],
        ed = [],
        Id = [],
        ld = [],
        Cd = [],
        Zd = [],
        kd = [],
        fd = [],
        Md = [],
        dO = [],
        OO = [],
        mO = [],
        WO = [],
        FO = [],
        RO = [],
        XO = [],
        KO = [],
        hO = [],
        vO = [],
        QO = [];
      return dd = class extends ud {
        constructor(dd, Od) {
          super(dd, Od, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Wd.k)(this, Vd, 1), this.turbidity = ((0, Wd.k)(this, Ad), (0, Wd.k)(this, rd, 10)), this.rayleigh = ((0, Wd.k)(this, Gd), (0, Wd.k)(this, nd, 2)), this.mieCoefficient = ((0, Wd.k)(this, Ld), (0, Wd.k)(this, Pd, .005)), this.mieDirectionalG = ((0, Wd.k)(this, zd), (0, Wd.k)(this, cd, .8)), this.distance = ((0, Wd.k)(this, jd), (0, Wd.k)(this, Dd, 500)), this.inclination = ((0, Wd.k)(this, ed), (0, Wd.k)(this, Id, .49)), this.azimuth = ((0, Wd.k)(this, ld), (0, Wd.k)(this, Cd, .25)), this.sunPosition = ((0, Wd.k)(this, Zd), (0, Wd.k)(this, kd, new Xd.Cq(0, 100, 0))), this.useSunPosition = ((0, Wd.k)(this, fd), (0, Wd.k)(this, Md, !1)), this.cameraOffset = ((0, Wd.k)(this, dO), (0, Wd.k)(this, OO, Xd.Cq.Zero())), this.up = ((0, Wd.k)(this, mO), (0, Wd.k)(this, WO, Xd.Cq.Up())), this.dithering = ((0, Wd.k)(this, FO), (0, Wd.k)(this, RO, !1)), this.rawHdrOutput = ((0, Wd.k)(this, XO), (0, Wd.k)(this, KO, !1)), this.cloudiness = ((0, Wd.k)(this, hO), (0, Wd.k)(this, vO, 0)), this._cameraPosition = ((0, Wd.k)(this, QO), Xd.Cq.Zero()), this._skyOrientation = new Xd.Quaternion
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
        isReadyForSubMesh(Od, md) {
          const Wd = md._drawWrapper;
          if (this.isFrozen && Wd.effect && Wd._wasPreviouslyReady) return !0;
          md.materialDefines || (md.materialDefines = new bd);
          const Fd = md.materialDefines,
            Rd = this.zV();
          if (this._isReadyForSubMesh(md)) return !0;
          if ((0, yd.N)(Od, Rd, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Fd, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, yd.E)(Od, Fd, !0, !1), Fd.IMAGEPROCESSINGPOSTPROCESS !== Rd.imageProcessingConfiguration.applyByPostProcess && Fd.markAsMiscDirty(), Fd.DITHER !== this.dithering && Fd.markAsMiscDirty(), Fd.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Fd.markAsMiscDirty(), Fd.isDirty) {
            Fd.markAsProcessed(), Rd.resetCachedMaterial();
            const Od = new qd.e;
            Fd.FOG && Od.addFallback(1, "FOG"), Fd.IMAGEPROCESSINGPOSTPROCESS = Rd.imageProcessingConfiguration.applyByPostProcess, Fd.DITHER = this.dithering, Fd.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Wd = [Qd.g.PositionKind];
            Fd.VERTEXCOLOR && Wd.push(Qd.g.ColorKind);
            const Xd = "sky",
              Kd = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Hd.b)(Kd);
            const hd = Fd.toString();
            md.setEffect(Rd.Iq().createEffect(Xd, {
              attributes: Wd,
              uniformsNames: Kd,
              uniformBuffersNames: [],
              samplers: [],
              defines: hd,
              fallbacks: Od,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: dd._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Rd.Iq()), Fd, this._materialContext)
          }
          return !(!md.effect || !md.effect.isReady()) && (Fd._renderId = Rd.getRenderId(), Wd._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(dd, Od, md) {
          const Wd = this.zV(),
            Fd = md.materialDefines;
          if (!Fd) return;
          const Rd = md.effect;
          if (!Rd) return;
          this._activeEffect = Rd, this.bindOnlyWorldMatrix(dd), this._activeEffect.setMatrix("viewProjection", Wd.getTransformMatrix()), this._mustRebind(Wd, Rd, md) && ((0, Hd.e)(Rd, this, Wd), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, yd.m)(Fd, Rd, Wd)), Wd.fogEnabled && Od.applyFog && Wd.fogMode !== td.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", Wd.getViewMatrix()), (0, yd.f)(Wd, Od, this._activeEffect, this.rawHdrOutput);
          const Kd = Wd.activeCamera;
          if (Kd) {
            const dd = Kd.getWorldMatrix();
            this._cameraPosition.x = dd.m[12], this._cameraPosition.y = dd.m[13], this._cameraPosition.z = dd.m[14], this._activeEffect.setVector3("cameraPosition", Xd.TmpVectors.Cq[0].Bx(this._cameraPosition).YRd(Wd.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const dd = Wd.Iq()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Td(dd?.texture?.type))
          }
          if (!this.useSunPosition) {
            const dd = Math.PI * (this.inclination - .5),
              Od = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Od) * Math.cos(dd), this.sunPosition.y = this.distance * Math.sin(-dd), this.sunPosition.z = this.distance * Math.sin(Od) * Math.cos(dd), Xd.Quaternion.FromUnitVectorsToRef(Xd.Cq.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Od, this._activeEffect, md)
        }
        getAnimatables() {
          return []
        }
        dispose(dd) {
          super.dispose(dd)
        }
        clone(Od) {
          return Rd.b.Clone((() => new dd(Od, this.zV())), this)
        }
        serialize() {
          const dd = super.serialize();
          return dd.customType = "BABYLON.SkyMaterial", dd
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Od, md, Wd) {
          return Rd.b.Parse((() => new dd(Od.name, md)), Od, md, Wd)
        }
      }, (() => {
        const md = "function" === typeof Symbol && Symbol.metadata ? Object.create(ud[Symbol.metadata] ?? null) : void 0;
        Od = [(0, Fd.E)()], Kd = [(0, Fd.E)()], vd = [(0, Fd.E)()], od = [(0, Fd.E)()], pd = [(0, Fd.E)()], Yd = [(0, Fd.E)()], gd = [(0, Fd.E)()], wd = [(0, Fd.E)()], Ed = [(0, Fd.B)()], Jd = [(0, Fd.E)()], Ud = [(0, Fd.B)()], xd = [(0, Fd.B)()], Bd = [(0, Fd.E)()], Sd = [(0, Fd.E)()], sd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: dd => "luminance" in dd,
            get: dd => dd.luminance,
            set: (dd, Od) => {
              dd.luminance = Od
            }
          },
          metadata: md
        }, Vd, Ad), (0, Wd.h)(null, null, Kd, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: dd => "turbidity" in dd,
            get: dd => dd.turbidity,
            set: (dd, Od) => {
              dd.turbidity = Od
            }
          },
          metadata: md
        }, rd, Gd), (0, Wd.h)(null, null, vd, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: dd => "rayleigh" in dd,
            get: dd => dd.rayleigh,
            set: (dd, Od) => {
              dd.rayleigh = Od
            }
          },
          metadata: md
        }, nd, Ld), (0, Wd.h)(null, null, od, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: dd => "mieCoefficient" in dd,
            get: dd => dd.mieCoefficient,
            set: (dd, Od) => {
              dd.mieCoefficient = Od
            }
          },
          metadata: md
        }, Pd, zd), (0, Wd.h)(null, null, pd, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: dd => "mieDirectionalG" in dd,
            get: dd => dd.mieDirectionalG,
            set: (dd, Od) => {
              dd.mieDirectionalG = Od
            }
          },
          metadata: md
        }, cd, jd), (0, Wd.h)(null, null, Yd, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: dd => "distance" in dd,
            get: dd => dd.distance,
            set: (dd, Od) => {
              dd.distance = Od
            }
          },
          metadata: md
        }, Dd, ed), (0, Wd.h)(null, null, gd, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: dd => "inclination" in dd,
            get: dd => dd.inclination,
            set: (dd, Od) => {
              dd.inclination = Od
            }
          },
          metadata: md
        }, Id, ld), (0, Wd.h)(null, null, wd, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: dd => "azimuth" in dd,
            get: dd => dd.azimuth,
            set: (dd, Od) => {
              dd.azimuth = Od
            }
          },
          metadata: md
        }, Cd, Zd), (0, Wd.h)(null, null, Ed, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: dd => "sunPosition" in dd,
            get: dd => dd.sunPosition,
            set: (dd, Od) => {
              dd.sunPosition = Od
            }
          },
          metadata: md
        }, kd, fd), (0, Wd.h)(null, null, Jd, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSunPosition" in dd,
            get: dd => dd.useSunPosition,
            set: (dd, Od) => {
              dd.useSunPosition = Od
            }
          },
          metadata: md
        }, Md, dO), (0, Wd.h)(null, null, Ud, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: dd => "cameraOffset" in dd,
            get: dd => dd.cameraOffset,
            set: (dd, Od) => {
              dd.cameraOffset = Od
            }
          },
          metadata: md
        }, OO, mO), (0, Wd.h)(null, null, xd, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: dd => "up" in dd,
            get: dd => dd.up,
            set: (dd, Od) => {
              dd.up = Od
            }
          },
          metadata: md
        }, WO, FO), (0, Wd.h)(null, null, Bd, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: dd => "dithering" in dd,
            get: dd => dd.dithering,
            set: (dd, Od) => {
              dd.dithering = Od
            }
          },
          metadata: md
        }, RO, XO), (0, Wd.h)(null, null, Sd, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: dd => "rawHdrOutput" in dd,
            get: dd => dd.rawHdrOutput,
            set: (dd, Od) => {
              dd.rawHdrOutput = Od
            }
          },
          metadata: md
        }, KO, hO), (0, Wd.h)(null, null, sd, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: dd => "cloudiness" in dd,
            get: dd => dd.cloudiness,
            set: (dd, Od) => {
              dd.cloudiness = Od
            }
          },
          metadata: md
        }, vO, QO), md && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: md
        })
      })(), dd._ShaderLoader = new Nd.b((() => [md.e(649).then((() => md(64832))), md.e(642).then((() => md(64841)))]), (() => [md.e(666).then((() => md(64845))), md.e(660).then((() => md(64847)))])), dd
    })();
    (0, od.e)("BABYLON.SkyMaterial", pd)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
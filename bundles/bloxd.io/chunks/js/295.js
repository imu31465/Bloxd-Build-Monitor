export const id = 295;
export const ids = [295];
export const modules = {
  40924: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(39413),
      Sv = Pv(40929);
    class ev {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = Pv, this.FPv = [], this._maxBlockCapacity = zv || 64, this._selectionContent = new hv.e(1024), this._creationFunc = vv
      }
      update(vv, zv, Pv) {
        Sv.c._CreateBlocks(vv, zv, Pv, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      NPv(vv) {
        for (let zv = 0; zv < this.blocks.length; zv++) {
          this.blocks[zv].addEntry(vv)
        }
      }
      sK(vv) {
        for (let zv = 0; zv < this.blocks.length; zv++) {
          this.blocks[zv].removeEntry(vv)
        }
      }
      select(vv, zv) {
        this._selectionContent.reset();
        for (let Pv = 0; Pv < this.blocks.length; Pv++) {
          this.blocks[Pv].select(vv, this._selectionContent, zv)
        }
        return zv ? this._selectionContent.concat(this.FPv) : this._selectionContent.concatWithNoDuplicate(this.FPv), this._selectionContent
      }
      intersects(vv, zv, Pv) {
        this._selectionContent.reset();
        for (let hv = 0; hv < this.blocks.length; hv++) {
          this.blocks[hv].intersects(vv, zv, this._selectionContent, Pv)
        }
        return Pv ? this._selectionContent.concat(this.FPv) : this._selectionContent.concatWithNoDuplicate(this.FPv), this._selectionContent
      }
      intersectsRay(vv) {
        this._selectionContent.reset();
        for (let zv = 0; zv < this.blocks.length; zv++) {
          this.blocks[zv].intersectsRay(vv, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.FPv), this._selectionContent
      }
    }
    ev.CreationFuncForMeshes = (vv, zv) => {
      const Pv = vv.cV();
      !vv.isBlocked && Pv.boundingBox.intersectsMinMax(zv.aPv, zv.wPv) && zv.entries.push(vv)
    }, ev.CreationFuncForSubMeshes = (vv, zv) => {
      vv.cV().boundingBox.intersectsMinMax(zv.aPv, zv.wPv) && zv.entries.push(vv)
    }
  },
  40929: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = Pv(36594),
      Sv = Pv(39611);
    class ev {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.entries = [], this.YPv = new Array, this._capacity = Pv, this._depth = hv, this._maxDepth = Sv, this._creationFunc = ev, this._minPoint = vv, this._maxPoint = zv, this.YPv.push(vv.clone()), this.YPv.push(zv.clone()), this.YPv.push(vv.clone()), this.YPv[2].x = zv.x, this.YPv.push(vv.clone()), this.YPv[3].y = zv.y, this.YPv.push(vv.clone()), this.YPv[4].z = zv.z, this.YPv.push(zv.clone()), this.YPv[5].z = vv.z, this.YPv.push(zv.clone()), this.YPv[6].x = vv.x, this.YPv.push(zv.clone()), this.YPv[7].y = vv.y
      }
      get GT() {
        return this._capacity
      }
      get aPv() {
        return this._minPoint
      }
      get wPv() {
        return this._maxPoint
      }
      addEntry(vv) {
        if (this.blocks)
          for (let zv = 0; zv < this.blocks.length; zv++) {
            this.blocks[zv].addEntry(vv)
          } else this._creationFunc(vv, this), this.entries.length > this.GT && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(vv) {
        if (this.blocks) {
          for (let zv = 0; zv < this.blocks.length; zv++) {
            this.blocks[zv].removeEntry(vv)
          }
          return
        }
        const zv = this.entries.indexOf(vv);
        zv > -1 && this.entries.splice(zv, 1)
      }
      addEntries(vv) {
        for (let zv = 0; zv < vv.length; zv++) {
          const Pv = vv[zv];
          this.addEntry(Pv)
        }
      }
      select(vv, zv, Pv) {
        if (Sv.c.IsInFrustum(this.YPv, vv)) {
          if (this.blocks) {
            for (let hv = 0; hv < this.blocks.length; hv++) {
              this.blocks[hv].select(vv, zv, Pv)
            }
            return
          }
          Pv ? zv.concat(this.entries) : zv.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(vv, zv, Pv, hv) {
        if (Sv.c.IntersectsSphere(this._minPoint, this._maxPoint, vv, zv)) {
          if (this.blocks) {
            for (let Sv = 0; Sv < this.blocks.length; Sv++) {
              this.blocks[Sv].intersects(vv, zv, Pv, hv)
            }
            return
          }
          hv ? Pv.concat(this.entries) : Pv.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(vv, zv) {
        if (vv.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let Pv = 0; Pv < this.blocks.length; Pv++) {
              this.blocks[Pv].intersectsRay(vv, zv)
            }
            return
          }
          zv.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        ev._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(vv, zv, Pv, Sv, gv, pv, dv, Nv) {
        dv.blocks = new Array;
        const lv = new hv.l((zv.x - vv.x) / 2, (zv.y - vv.y) / 2, (zv.z - vv.z) / 2);
        for (let hv = 0; hv < 2; hv++)
          for (let zv = 0; zv < 2; zv++)
            for (let Tv = 0; Tv < 2; Tv++) {
              const Wv = vv.add(lv.multiplyByFloats(hv, zv, Tv)),
                wv = vv.add(lv.multiplyByFloats(hv + 1, zv + 1, Tv + 1)),
                av = new ev(Wv, wv, Sv, gv + 1, pv, Nv);
              av.addEntries(Pv), dv.blocks.push(av)
            }
      }
    }
  },
  40931: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => lv
    });
    var hv = Pv(39395),
      Sv = Pv(36594),
      ev = Pv(39754),
      gv = Pv(40867),
      pv = Pv(39477),
      dv = Pv(36615),
      Nv = Pv(40924);
    class lv {
      constructor(vv) {
        this.name = pv.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new gv.y(Sv.l.Zero(), new Sv.l(1, 1, 1)), (vv = vv || dv.e.LastCreatedScene) && (this.Is = vv, this.Is.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Is.getActiveSubMeshCandidates = vv => this.getActiveSubMeshCandidates(vv), this.Is.getCollidingSubMeshCandidates = (vv, zv) => this.getCollidingSubMeshCandidates(vv, zv), this.Is.getIntersectingSubMeshCandidates = (vv, zv) => this.getIntersectingSubMeshCandidates(vv, zv))
      }
      register() {
        this.Is.onMeshRemovedObservable.add((vv => {
          const zv = this.Is.selectionOctree;
          if (void 0 !== zv && null !== zv) {
            const Pv = zv.FPv.indexOf(vv); - 1 !== Pv && zv.FPv.splice(Pv, 1)
          }
        })), this.Is.onMeshImportedObservable.add((vv => {
          const zv = this.Is.selectionOctree;
          void 0 !== zv && null !== zv && zv.NPv(vv)
        }))
      }
      getActiveMeshCandidates() {
        return this.Is.RPv?.select(this.Is.frustumPlanes) || this.Is._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(vv) {
        if (vv._submeshesOctree && vv.useOctreeForRenderingSelection) {
          return vv._submeshesOctree.select(this.Is.frustumPlanes)
        }
        return this.Is._getDefaultSubMeshCandidates(vv)
      }
      getIntersectingSubMeshCandidates(vv, zv) {
        if (vv._submeshesOctree && vv.useOctreeForPicking) {
          gv.y.TransformToRef(zv, vv.getWorldMatrix(), this._tempRay);
          return vv._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Is._getDefaultSubMeshCandidates(vv)
      }
      getCollidingSubMeshCandidates(vv, zv) {
        if (vv._submeshesOctree && vv.useOctreeForCollisions) {
          const Pv = zv._velocityWorldLength + Math.max(zv._radius.x, zv._radius.y, zv._radius.z);
          return vv._submeshesOctree.intersects(zv._basePointWorld, Pv)
        }
        return this.Is._getDefaultSubMeshCandidates(vv)
      }
      rebuild() {}
      dispose() {}
    }
    let Tv = !1;
    Tv || (Tv = !0, hv.g.prototype.createOrUpdateSelectionOctree = function() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        Pv = this._getComponent(pv.d.NAME_OCTREE);
      Pv || (Pv = new lv(this), this.Ezv(Pv)), this.RPv || (this.RPv = new Nv.b(Nv.b.CreationFuncForMeshes, vv, zv));
      const hv = this.getWorldExtends();
      return this.RPv.update(hv.min, hv.max, this.meshes), this.RPv
    }, Object.defineProperty(hv.g.prototype, "selectionOctree", {
      get: function() {
        return this.RPv
      },
      enumerable: !0,
      configurable: !0
    }), ev.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Pv = this.rD();
      let hv = Pv._getComponent(pv.d.NAME_OCTREE);
      hv || (hv = new lv(Pv), Pv.Ezv(hv)), this._submeshesOctree || (this._submeshesOctree = new Nv.b(Nv.b.CreationFuncForSubMeshes, vv, zv)), this.computeWorldMatrix(!0);
      const Sv = this.cV().boundingBox;
      return this._submeshesOctree.update(Sv.minimumWorld, Sv.maximumWorld, this.sF), this._submeshesOctree
    })
  },
  40867: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Vv,
      f: () => sv,
      g: () => av,
      i: () => wv,
      m: () => Dv,
      o: () => Ov,
      r: () => Fv,
      s: () => nv,
      v: () => Yv,
      y: () => Tv
    });
    var hv = Pv(36599),
      Sv = Pv(36594),
      ev = Pv(36602),
      gv = Pv(39602),
      pv = Pv(39438),
      dv = Pv(36615),
      Nv = Pv(39493);
    const lv = {
      internalPickerForMesh: void 0
    };
    class Tv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hv.e;
        this.origin = vv, this.direction = zv, this.length = Pv, this.epsilon = Sv
      }
      clone() {
        return new Tv(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const hv = Tv._TmpVector3[0].f_(vv.x - Pv, vv.y - Pv, vv.z - Pv),
          Sv = Tv._TmpVector3[1].f_(zv.x + Pv, zv.y + Pv, zv.z + Pv);
        let ev, gv, pv, dv, Nv = 0,
          lv = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < hv.x || this.origin.x > Sv.x) return !1
        } else if (ev = 1 / this.direction.x, gv = (hv.x - this.origin.x) * ev, pv = (Sv.x - this.origin.x) * ev, pv === -1 / 0 && (pv = 1 / 0), gv > pv && (dv = gv, gv = pv, pv = dv), Nv = Math.max(gv, Nv), lv = Math.min(pv, lv), Nv > lv) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < hv.y || this.origin.y > Sv.y) return !1
        } else if (ev = 1 / this.direction.y, gv = (hv.y - this.origin.y) * ev, pv = (Sv.y - this.origin.y) * ev, pv === -1 / 0 && (pv = 1 / 0), gv > pv && (dv = gv, gv = pv, pv = dv), Nv = Math.max(gv, Nv), lv = Math.min(pv, lv), Nv > lv) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < hv.z || this.origin.z > Sv.z) return !1
        } else if (ev = 1 / this.direction.z, gv = (hv.z - this.origin.z) * ev, pv = (Sv.z - this.origin.z) * ev, pv === -1 / 0 && (pv = 1 / 0), gv > pv && (dv = gv, gv = pv, pv = dv), Nv = Math.max(gv, Nv), lv = Math.min(pv, lv), Nv > lv) return !1;
        return !0
      }
      intersectsBox(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(vv.minimum, vv.maximum, zv)
      }
      intersectsSphere(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = vv.center.x - this.origin.x,
          hv = vv.center.y - this.origin.y,
          Sv = vv.center.z - this.origin.z,
          ev = Pv * Pv + hv * hv + Sv * Sv,
          gv = vv.radius + zv,
          pv = gv * gv;
        if (ev <= pv) return !0;
        const dv = Pv * this.direction.x + hv * this.direction.y + Sv * this.direction.z;
        if (dv < 0) return !1;
        return ev - dv * dv <= pv
      }
      intersectsTriangle(vv, zv, Pv) {
        const hv = Tv._TmpVector3[0],
          ev = Tv._TmpVector3[1],
          pv = Tv._TmpVector3[2],
          dv = Tv._TmpVector3[3],
          Nv = Tv._TmpVector3[4];
        zv.subtractToRef(vv, hv), Pv.subtractToRef(vv, ev), Sv.l.CrossToRef(this.direction, ev, pv);
        const lv = Sv.l.Dot(hv, pv);
        if (0 === lv) return null;
        const Wv = 1 / lv;
        this.origin.subtractToRef(vv, dv);
        const wv = Sv.l.Dot(dv, pv) * Wv;
        if (wv < -this.epsilon || wv > 1 + this.epsilon) return null;
        Sv.l.CrossToRef(dv, hv, Nv);
        const av = Sv.l.Dot(this.direction, Nv) * Wv;
        if (av < -this.epsilon || wv + av > 1 + this.epsilon) return null;
        const sv = Sv.l.Dot(ev, Nv) * Wv;
        return sv > this.length || sv < 0 ? null : new gv.d(1 - wv - av, wv, sv)
      }
      intersectsPlane(vv) {
        let zv;
        const Pv = Sv.l.Dot(vv.normal, this.direction);
        if (Math.abs(Pv) < 9.99999997475243e-7) return null;
        {
          const hv = Sv.l.Dot(vv.normal, this.origin);
          return zv = (-vv.d - hv) / Pv, zv < 0 ? zv < -9.99999997475243e-7 ? null : 0 : zv
        }
      }
      intersectsAxis(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (vv) {
          case "y": {
            const vv = (this.origin.y - zv) / this.direction.y;
            return vv > 0 ? null : new Sv.l(this.origin.x + this.direction.x * -vv, zv, this.origin.z + this.direction.z * -vv)
          }
          case "x": {
            const vv = (this.origin.x - zv) / this.direction.x;
            return vv > 0 ? null : new Sv.l(zv, this.origin.y + this.direction.y * -vv, this.origin.z + this.direction.z * -vv)
          }
          case "z": {
            const vv = (this.origin.z - zv) / this.direction.z;
            return vv > 0 ? null : new Sv.l(this.origin.x + this.direction.x * -vv, this.origin.y + this.direction.y * -vv, zv)
          }
          default:
            return null
        }
      }
      bPv(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ev = arguments.length > 4 ? arguments[4] : void 0,
          gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const pv = Sv.i.Matrix[0];
        return vv.getWorldMatrix().invertToRef(pv), this._tmpRay ? Tv.TransformToRef(this, pv, this._tmpRay) : this._tmpRay = Tv.Transform(this, pv), vv.intersects(this._tmpRay, zv, Pv, hv, ev, gv)
      }
      intersectsMeshes(vv, zv, Pv) {
        Pv ? Pv.length = 0 : Pv = [];
        for (let hv = 0; hv < vv.length; hv++) {
          const Sv = this.bPv(vv[hv], zv);
          Sv.hit && Pv.push(Sv)
        }
        return Pv.sort(this._comparePickingInfo), Pv
      }
      _comparePickingInfo(vv, zv) {
        return vv.distance < zv.distance ? -1 : vv.distance > zv.distance ? 1 : 0
      }
      intersectionSegment(vv, zv, Pv) {
        const hv = this.origin,
          ev = Sv.i.fa[0],
          gv = Sv.i.fa[1],
          pv = Sv.i.fa[2],
          dv = Sv.i.fa[3];
        zv.subtractToRef(vv, ev), this.direction.scaleToRef(Tv._Rayl, pv), hv.addToRef(pv, gv), vv.subtractToRef(hv, dv);
        const Nv = Sv.l.Dot(ev, ev),
          lv = Sv.l.Dot(ev, pv),
          Wv = Sv.l.Dot(pv, pv),
          wv = Sv.l.Dot(ev, dv),
          av = Sv.l.Dot(pv, dv),
          sv = Nv * Wv - lv * lv;
        let Cv, iv, cv = sv,
          Gv = sv;
        sv < Tv._Smallnum ? (Cv = 0, cv = 1, iv = av, Gv = Wv) : (Cv = lv * av - Wv * wv, iv = Nv * av - lv * wv, Cv < 0 ? (Cv = 0, iv = av, Gv = Wv) : Cv > cv && (Cv = cv, iv = av + lv, Gv = Wv)), iv < 0 ? (iv = 0, -wv < 0 ? Cv = 0 : -wv > Nv ? Cv = cv : (Cv = -wv, cv = Nv)) : iv > Gv && (iv = Gv, -wv + lv < 0 ? Cv = 0 : -wv + lv > Nv ? Cv = cv : (Cv = -wv + lv, cv = Nv));
        const mv = Math.abs(Cv) < Tv._Smallnum ? 0 : Cv / cv,
          jv = Math.abs(iv) < Tv._Smallnum ? 0 : iv / Gv,
          fv = Sv.i.fa[4];
        pv.scaleToRef(jv, fv);
        const Fv = Sv.i.fa[5];
        ev.scaleToRef(mv, Fv), Fv.addInPlace(dv);
        const Yv = Sv.i.fa[6];
        Fv.subtractToRef(fv, Yv);
        return jv > 0 && jv <= this.length && Yv.lengthSquared() < Pv * Pv ? Fv.length() : -1
      }
      update(vv, zv, Pv, hv, ev, gv, pv) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Tv._RayDistant || (Tv._RayDistant = Tv.Zero()), Tv._RayDistant.unprojectRayToRef(vv, zv, Pv, hv, Sv.c.IdentityReadOnly, gv, pv);
          const dv = Sv.i.Matrix[0];
          ev.invertToRef(dv), Tv.TransformToRef(Tv._RayDistant, dv, this)
        } else this.unprojectRayToRef(vv, zv, Pv, hv, ev, gv, pv);
        return this
      }
      static Zero() {
        return new Tv(Sv.l.Zero(), Sv.l.Zero())
      }
      static CreateNew(vv, zv, Pv, hv, Sv, ev, gv) {
        return Tv.Zero().update(vv, zv, Pv, hv, Sv, ev, gv)
      }
      static CreateNewFromTo(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.c.IdentityReadOnly;
        const hv = new Tv(new Sv.l(0, 0, 0), new Sv.l(0, 0, 0));
        return Tv.CreateFromToToRef(vv, zv, hv, Pv)
      }
      static CreateFromToToRef(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sv.c.IdentityReadOnly;
        Pv.origin.Vzv(vv);
        const ev = zv.subtractToRef(vv, Pv.direction),
          gv = Math.sqrt(ev.x * ev.x + ev.y * ev.y + ev.z * ev.z);
        return Pv.length = gv, Pv.direction.normalize(), Tv.TransformToRef(Pv, hv, Pv)
      }
      static Transform(vv, zv) {
        const Pv = new Tv(new Sv.l(0, 0, 0), new Sv.l(0, 0, 0));
        return Tv.TransformToRef(vv, zv, Pv), Pv
      }
      static TransformToRef(vv, zv, Pv) {
        Sv.l.TransformCoordinatesToRef(vv.origin, zv, Pv.origin), Sv.l.TransformNormalToRef(vv.direction, zv, Pv.direction), Pv.length = vv.length, Pv.epsilon = vv.epsilon;
        const hv = Pv.direction,
          ev = hv.length();
        if (0 !== ev && 1 !== ev) {
          const vv = 1 / ev;
          hv.x *= vv, hv.y *= vv, hv.z *= vv, Pv.length *= ev
        }
        return Pv
      }
      unprojectRayToRef(vv, zv, Pv, hv, ev, gv, pv) {
        const Nv = Sv.i.Matrix[0];
        ev.multiplyToRef(gv, Nv), Nv.multiplyToRef(pv, Nv), Nv.invert();
        const lv = dv.e.LastCreatedEngine,
          Tv = Sv.i.fa[0];
        Tv.x = vv / Pv * 2 - 1, Tv.y = -(zv / hv * 2 - 1), Tv.z = lv?.SPv ? 1 : lv?.isNDCHalfZRange ? 0 : -1;
        const Wv = Sv.i.fa[1].f_(Tv.x, Tv.y, 1 - 1e-8),
          wv = Sv.i.fa[2],
          av = Sv.i.fa[3];
        Sv.l.TransformCoordinatesToRef(Tv, Nv, wv), Sv.l.TransformCoordinatesToRef(Wv, Nv, av), this.origin.Vzv(wv), av.subtractToRef(wv, this.direction), this.direction.normalize()
      }
    }

    function Wv(vv, zv, Pv, hv, Sv) {
      let ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const gv = Tv.Zero();
      return wv(vv, zv, Pv, hv, gv, Sv, ev), gv
    }

    function wv(vv, zv, Pv, hv, ev, gv) {
      let pv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        dv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Nv = vv.ma();
      if (!gv && !(gv = vv.activeCamera) && !(gv = vv.cameraToUseForPointers)) return vv;
      const lv = gv.viewport,
        Tv = Nv.getRenderHeight(),
        {
          x: Wv,
          y: wv,
          width: av,
          height: sv
        } = lv.toGlobal(Nv.getRenderWidth(), Tv),
        Cv = 1 / Nv.getHardwareScalingLevel();
      return zv = zv * Cv - Wv, Pv = Pv * Cv - (Tv - wv - sv), ev.update(zv, Pv, av, sv, hv || Sv.c.IdentityReadOnly, pv ? Sv.c.IdentityReadOnly : gv.getViewMatrix(), gv.getProjectionMatrix(), dv), vv
    }

    function av(vv, zv, Pv, hv) {
      const Sv = Tv.Zero();
      return sv(vv, zv, Pv, Sv, hv), Sv
    }

    function sv(vv, zv, Pv, hv, ev) {
      if (!pv.c) return vv;
      const gv = vv.ma();
      if (!ev && !(ev = vv.activeCamera) && !(ev = vv.cameraToUseForPointers)) throw new Error("Active camera not set");
      const dv = ev.viewport,
        Nv = gv.getRenderHeight(),
        {
          x: lv,
          y: Tv,
          width: Wv,
          height: wv
        } = dv.toGlobal(gv.getRenderWidth(), Nv),
        av = Sv.c.Identity(),
        sv = 1 / gv.getHardwareScalingLevel();
      return zv = zv * sv - lv, Pv = Pv * sv - (Nv - Tv - wv), hv.update(zv, Pv, Wv, wv, av, av, ev.getProjectionMatrix()), vv
    }

    function Cv(vv, zv, Pv, hv, Sv, ev, gv, pv) {
      return iv(vv, Pv, hv, zv(hv, Pv.enableDistantPicking), Sv, ev, gv, pv)
    }

    function iv(vv, zv, Pv, hv, Sv, ev, gv, pv) {
      const dv = zv.intersects(hv, Sv, gv, ev, Pv, pv);
      return dv && dv.hit ? !Sv && null != vv && dv.distance >= vv.distance ? null : dv : null
    }

    function cv(vv, zv) {
      return "InstancedLinesMesh" === vv || "LinesMesh" === vv ? zv.intersectionThreshold : 0
    }

    function Gv(vv) {
      const zv = vv.getClassName();
      if ("GreasedLineMesh" === zv) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const Pv = vv.rawBoundingInfo;
      return {
        rawBoundingInfo: Pv,
        intersectionThreshold: Pv ? cv(zv, vv) : 0
      }
    }

    function mv(vv, zv, Pv, hv, Sv) {
      const ev = vv(Pv, zv.enableDistantPicking);
      return ev.intersectsSphere(hv.tPv, Sv) && ev.intersectsBox(hv.boundingBox, Sv) ? ev : null
    }

    function jv(vv, zv, Pv, hv, ev, gv) {
      let dv = null;
      const Nv = !!(vv.activeCameras && vv.activeCameras.length > 1 && vv.cameraToUseForPointers !== vv.activeCamera),
        Tv = vv.cameraToUseForPointers || vv.activeCamera,
        Wv = lv.internalPickerForMesh || Cv,
        wv = Wv === Cv;
      for (let pv = 0; pv < vv.meshes.length; pv++) {
        const lv = vv.meshes[pv];
        if (Pv) {
          if (!Pv(lv, -1)) continue
        } else if (!lv.isEnabled() || !lv.isVisible || !lv.Zs) continue;
        const av = Nv && lv.isWorldMatrixCameraDependent(),
          sv = lv.computeWorldMatrix(av, Tv);
        if (lv.hasThinInstances && lv.Fvv) {
          const vv = Wv(dv, zv, lv, sv, !0, !0, gv);
          if (vv) {
            if (ev) return vv;
            const {
              rawBoundingInfo: pv,
              intersectionThreshold: Nv
            } = Gv(lv), Tv = lv._thinInstanceDataStorage.matrixData;
            if (Tv) {
              const vv = Sv.i.Matrix[0],
                av = Sv.i.Matrix[1],
                Cv = Math.min(lv.yX, Tv.length >> 4);
              for (let cv = 0; cv < Cv; cv++) {
                if (Pv && !Pv(lv, cv)) continue;
                Sv.c.FromArrayToRef(Tv, cv << 4, vv), vv.multiplyToRef(sv, av);
                const Cv = wv && pv ? mv(zv, lv, av, pv, Nv) : null;
                if (wv && pv && !Cv) continue;
                const Gv = wv && Cv ? iv(dv, lv, av, Cv, hv, ev, gv, !0) : Wv(dv, zv, lv, av, hv, ev, gv, !0);
                if (Gv && (dv = Gv, dv.thinInstanceIndex = cv, hv)) return dv
              }
            }
          }
        } else {
          const vv = Wv(dv, zv, lv, sv, hv, ev, gv);
          if (vv && (dv = vv, hv)) return dv
        }
      }
      return dv || new pv.c
    }

    function fv(vv, zv, Pv, hv) {
      if (!pv.c) return null;
      const ev = [],
        gv = !!(vv.activeCameras && vv.activeCameras.length > 1 && vv.cameraToUseForPointers !== vv.activeCamera),
        dv = vv.cameraToUseForPointers || vv.activeCamera,
        Nv = lv.internalPickerForMesh || Cv,
        Tv = Nv === Cv;
      for (let pv = 0; pv < vv.meshes.length; pv++) {
        const lv = vv.meshes[pv];
        if (Pv) {
          if (!Pv(lv, -1)) continue
        } else if (!lv.isEnabled() || !lv.isVisible || !lv.Zs) continue;
        const Wv = gv && lv.isWorldMatrixCameraDependent(),
          wv = lv.computeWorldMatrix(Wv, dv);
        if (lv.hasThinInstances && lv.Fvv) {
          if (Nv(null, zv, lv, wv, !0, !0, hv)) {
            const {
              rawBoundingInfo: vv,
              intersectionThreshold: gv
            } = Gv(lv), pv = lv._thinInstanceDataStorage.matrixData;
            if (pv) {
              const dv = Sv.i.Matrix[0],
                Wv = Sv.i.Matrix[1],
                av = Math.min(lv.yX, pv.length >> 4);
              for (let sv = 0; sv < av; sv++) {
                if (Pv && !Pv(lv, sv)) continue;
                Sv.c.FromArrayToRef(pv, sv << 4, dv), dv.multiplyToRef(wv, Wv);
                const av = Tv && vv ? mv(zv, lv, Wv, vv, gv) : null;
                if (Tv && vv && !av) continue;
                const Cv = Tv && av ? iv(null, lv, Wv, av, !1, !1, hv, !0) : Nv(null, zv, lv, Wv, !1, !1, hv, !0);
                Cv && (Cv.thinInstanceIndex = sv, ev.push(Cv))
              }
            }
          }
        } else {
          const vv = Nv(null, zv, lv, wv, !1, !1, hv);
          vv && ev.push(vv)
        }
      }
      return ev
    }

    function Fv(vv, zv, Pv, hv, ev, gv) {
      if (!pv.c) return null;
      const dv = jv(vv, (hv => (vv._tempPickingRay || (vv._tempPickingRay = Tv.Zero()), wv(vv, zv, Pv, hv, vv._tempPickingRay, gv || null), vv._tempPickingRay)), hv, ev, !0);
      return dv && (dv.ray = Wv(vv, zv, Pv, Sv.c.Identity(), gv || null)), dv
    }

    function Yv(vv, zv, Pv, hv, ev, gv, pv) {
      const dv = jv(vv, ((hv, Sv) => (vv._tempPickingRay || (vv._tempPickingRay = Tv.Zero()), wv(vv, zv, Pv, hv, vv._tempPickingRay, gv || null, !1, Sv), vv._tempPickingRay)), hv, ev, !1, pv);
      return dv && (dv.ray = Wv(vv, zv, Pv, Sv.c.Identity(), gv || null)), dv
    }

    function nv(vv, zv, Pv, hv, ev) {
      const gv = jv(vv, (Pv => (vv._pickWithRayInverseMatrix || (vv._pickWithRayInverseMatrix = Sv.c.Identity()), Pv.invertToRef(vv._pickWithRayInverseMatrix), vv._cachedRayForTransform || (vv._cachedRayForTransform = Tv.Zero()), Tv.TransformToRef(zv, vv._pickWithRayInverseMatrix, vv._cachedRayForTransform), vv._cachedRayForTransform)), Pv, hv, !1, ev);
      return gv && (gv.ray = zv), gv
    }

    function Ov(vv, zv, Pv, hv, Sv, ev) {
      return fv(vv, (hv => Wv(vv, zv, Pv, hv, Sv || null)), hv, ev)
    }

    function Dv(vv, zv, Pv, hv) {
      return fv(vv, (Pv => (vv._pickWithRayInverseMatrix || (vv._pickWithRayInverseMatrix = Sv.c.Identity()), Pv.invertToRef(vv._pickWithRayInverseMatrix), vv._cachedRayForTransform || (vv._cachedRayForTransform = Tv.Zero()), Tv.TransformToRef(zv, vv._pickWithRayInverseMatrix, vv._cachedRayForTransform), vv._cachedRayForTransform)), Pv, hv)
    }

    function Kv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        hv = arguments.length > 3 ? arguments[3] : void 0,
        ev = arguments.length > 4 ? arguments[4] : void 0;
      hv || (hv = vv.getWorldMatrix()), zv.length = Pv, ev ? zv.origin.Vzv(ev) : zv.origin.Vzv(vv.position);
      const gv = Sv.i.fa[2];
      gv.set(0, 0, vv._scene.useRightHandedSystem ? -1 : 1);
      const pv = Sv.i.fa[3];
      return Sv.l.TransformNormalToRef(gv, hv, pv), Sv.l.NormalizeToRef(pv, zv.direction), zv
    }

    function Vv(vv, zv) {
      zv && (zv.prototype.getForwardRay = function() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        return Kv(this, new Tv(Sv.l.Zero(), Sv.l.Zero(), vv), vv, zv, Pv)
      }, zv.prototype.getForwardRayToRef = function(vv) {
        return Kv(this, vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), vv && (Nv.d._IsPickingAvailable = !0, vv.prototype.createPickingRay = function(vv, zv, Pv, hv) {
        return Wv(this, vv, zv, Pv, hv, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Tv._TmpVector3 = (0, ev.e)(6, Sv.l.Zero), Tv._RayDistant = Tv.Zero(), Tv._Smallnum = 1e-8, Tv._Rayl = 1e9
  },
  40861: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev.y
    });
    var hv = Pv(39395),
      Sv = Pv(39515),
      ev = Pv(40867);
    let gv = !1;
    gv || (gv = !0, (0, ev.c)(hv.g, Sv.c), hv.g.prototype.createPickingRayToRef = function(vv, zv, Pv, hv, Sv) {
      let gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        pv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ev.i)(this, vv, zv, Pv, hv, Sv, gv, pv)
    }, hv.g.prototype.createPickingRayInCameraSpace = function(vv, zv, Pv) {
      return (0, ev.g)(this, vv, zv, Pv)
    }, hv.g.prototype.createPickingRayInCameraSpaceToRef = function(vv, zv, Pv, hv) {
      return (0, ev.f)(this, vv, zv, Pv, hv)
    }, hv.g.prototype.pickWithBoundingInfo = function(vv, zv, Pv, hv, Sv) {
      return (0, ev.r)(this, vv, zv, Pv, hv, Sv)
    }, hv.g.prototype.HW = function(vv, zv, Pv, hv, Sv, gv) {
      let pv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, ev.v)(this, vv, zv, Pv, hv, Sv, gv, pv)
    }, hv.g.prototype.pickWithRay = function(vv, zv, Pv, hv) {
      return (0, ev.s)(this, vv, zv, Pv, hv)
    }, hv.g.prototype.multiPick = function(vv, zv, Pv, hv, Sv) {
      return (0, ev.o)(this, vv, zv, Pv, hv, Sv)
    }, hv.g.prototype.multiPickWithRay = function(vv, zv, Pv) {
      return (0, ev.m)(this, vv, zv, Pv)
    })
  },
  40871: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => lv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36594),
      gv = Pv(39553),
      pv = Pv(40875),
      dv = Pv(39518),
      Nv = Pv(36631);
    let lv = (() => {
        var vv;
        let zv, Pv, dv, Nv, lv, Tv, Wv, wv, av = pv.d,
          sv = [],
          Cv = [],
          iv = [],
          cv = [],
          Gv = [],
          mv = [],
          jv = [],
          fv = [],
          Fv = [],
          Yv = [],
          nv = [],
          Ov = [],
          Dv = [];
        return vv = class extends av {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(vv) {
            this._shadowFrustumSize = vv, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(vv) {
            this._shadowOrthoScale = vv, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(vv) {
            this._orthoLeft = vv
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(vv) {
            this._orthoRight = vv
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(vv) {
            this._orthoTop = vv
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(vv) {
            this._orthoBottom = vv
          }
          constructor(vv, zv, Pv, Sv) {
            super(vv, Pv, Sv), this._shadowFrustumSize = ((0, hv.f)(this, sv), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, hv.f)(this, Cv, !0), this.autoCalcShadowZBounds = ((0, hv.f)(this, iv), (0, hv.f)(this, cv, !1)), this._orthoLeft = ((0, hv.f)(this, Gv), (0, hv.f)(this, mv, Number.MAX_VALUE)), this._orthoRight = ((0, hv.f)(this, jv), (0, hv.f)(this, fv, Number.MIN_VALUE)), this._orthoTop = ((0, hv.f)(this, Fv), (0, hv.f)(this, Yv, Number.MIN_VALUE)), this._orthoBottom = ((0, hv.f)(this, nv), (0, hv.f)(this, Ov, Number.MAX_VALUE)), (0, hv.f)(this, Dv), this.position = zv.scale(-1), this.direction = zv
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return gv.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(vv, zv, Pv) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(vv) : this._setDefaultAutoExtendShadowProjectionMatrix(vv, zv, Pv)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(vv) {
            const zv = this.rD().activeCamera;
            ev.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : zv ? zv.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : zv ? zv.maxZ : 1e4, vv, this.rD().ma().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(vv, zv, Pv) {
            const hv = this.rD().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const vv = ev.l.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let hv = Number.MAX_VALUE,
                Sv = -Number.MAX_VALUE;
              for (let gv = 0; gv < Pv.length; gv++) {
                const pv = Pv[gv];
                if (!pv) continue;
                const dv = pv.cV().boundingBox;
                for (let Pv = 0; Pv < dv.vectorsWorld.length; Pv++) ev.l.TransformCoordinatesToRef(dv.vectorsWorld[Pv], zv, vv), vv.x < this._orthoLeft && (this._orthoLeft = vv.x), vv.y < this._orthoBottom && (this._orthoBottom = vv.y), vv.x > this._orthoRight && (this._orthoRight = vv.x), vv.y > this._orthoTop && (this._orthoTop = vv.y), this.autoCalcShadowZBounds && (vv.z < hv && (hv = vv.z), vv.z > Sv && (Sv = vv.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = hv, this._shadowMaxZ = Sv)
            }
            const Sv = this._orthoRight - this._orthoLeft,
              gv = this._orthoTop - this._orthoBottom,
              pv = void 0 !== this.shadowMinZ ? this.shadowMinZ : hv?.minZ || 0,
              dv = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : hv?.maxZ || 1e4,
              Nv = this.rD().ma().SPv;
            ev.c.OrthoOffCenterLHToRef(this._orthoLeft - Sv * this.shadowOrthoScale, this._orthoRight + Sv * this.shadowOrthoScale, this._orthoBottom - gv * this.shadowOrthoScale, this._orthoTop + gv * this.shadowOrthoScale, Nv ? dv : pv, Nv ? pv : dv, vv, this.rD().ma().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(vv, zv) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, zv), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, zv), this)
          }
          transferToNodeMaterialEffect(vv, zv) {
            return this.computeTransformedInformation() ? (vv.setFloat3(zv, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (vv.setFloat3(zv, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(vv) {
            const zv = this._scene.ma();
            return !zv.SPv && zv.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(vv) {
            const zv = this._scene.ma();
            return zv.SPv && zv.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(vv, zv) {
            vv["DIRLIGHT" + zv] = !0
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(av[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], dv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], lv = [(0, Sv.L)("orthoLeft")], Tv = [(0, Sv.L)("orthoRight")], Wv = [(0, Sv.L)("orthoTop")], wv = [(0, Sv.L)("orthoBottom")], (0, hv.e)(vv, null, zv, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: vv => "shadowFrustumSize" in vv,
              get: vv => vv.shadowFrustumSize
            },
            metadata: ev
          }, null, sv), (0, hv.e)(vv, null, Pv, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: vv => "shadowOrthoScale" in vv,
              get: vv => vv.shadowOrthoScale
            },
            metadata: ev
          }, null, sv), (0, hv.e)(null, null, dv, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: vv => "autoUpdateExtends" in vv,
              get: vv => vv.autoUpdateExtends,
              set: (vv, zv) => {
                vv.autoUpdateExtends = zv
              }
            },
            metadata: ev
          }, Cv, iv), (0, hv.e)(null, null, Nv, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: vv => "autoCalcShadowZBounds" in vv,
              get: vv => vv.autoCalcShadowZBounds,
              set: (vv, zv) => {
                vv.autoCalcShadowZBounds = zv
              }
            },
            metadata: ev
          }, cv, Gv), (0, hv.e)(null, null, lv, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: vv => "_orthoLeft" in vv,
              get: vv => vv._orthoLeft,
              set: (vv, zv) => {
                vv._orthoLeft = zv
              }
            },
            metadata: ev
          }, mv, jv), (0, hv.e)(null, null, Tv, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: vv => "_orthoRight" in vv,
              get: vv => vv._orthoRight,
              set: (vv, zv) => {
                vv._orthoRight = zv
              }
            },
            metadata: ev
          }, fv, Fv), (0, hv.e)(null, null, Wv, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: vv => "_orthoTop" in vv,
              get: vv => vv._orthoTop,
              set: (vv, zv) => {
                vv._orthoTop = zv
              }
            },
            metadata: ev
          }, Yv, nv), (0, hv.e)(null, null, wv, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: vv => "_orthoBottom" in vv,
              get: vv => vv._orthoBottom,
              set: (vv, zv) => {
                vv._orthoBottom = zv
              }
            },
            metadata: ev
          }, Ov, Dv), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv
      })(),
      Tv = !1;
    Tv || (Tv = !0, dv.c.AddNodeConstructor("Light_Type_1", ((vv, zv) => () => new lv(vv, ev.l.Zero(), zv))), (0, Nv.c)("BABYLON.DirectionalLight", lv))
  },
  40892: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Jz
    });
    var hv = Pv(38245),
      Sv = Pv(36618),
      ev = Pv(36594),
      gv = Pv(39441),
      pv = Pv(40898),
      dv = Pv(36615),
      Nv = Pv(39580),
      lv = Pv(36751),
      Tv = Pv(38249),
      Wv = Pv(38207),
      wv = Pv(36620);
    class av {
      constructor() {
        this.direction1 = new ev.l(0, 1, 0), this.direction2 = new ev.l(0, 1, 0)
      }
      startDirectionFunction(vv, zv, Pv, hv) {
        const Sv = (0, wv.RandomRange)(this.direction1.x, this.direction2.x),
          gv = (0, wv.RandomRange)(this.direction1.y, this.direction2.y),
          pv = (0, wv.RandomRange)(this.direction1.z, this.direction2.z);
        hv ? zv.f_(Sv, gv, pv) : ev.l.TransformNormalFromFloatsToRef(Sv, gv, pv, vv, zv)
      }
      startPositionFunction(vv, zv, Pv, hv) {
        hv ? zv.f_(0, 0, 0) : ev.l.TransformCoordinatesFromFloatsToRef(0, 0, 0, vv, zv)
      }
      clone() {
        const vv = new av;
        return Wv.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setVector3("direction1", this.direction1), vv.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(vv) {
        vv.addUniform("direction1", 3), vv.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const vv = {};
        return vv.type = this.getClassName(), vv.direction1 = this.direction1.pPv(), vv.direction2 = this.direction2.pPv(), vv
      }
      parse(vv) {
        ev.l.FromArrayToRef(vv.direction1, 0, this.direction1), ev.l.FromArrayToRef(vv.direction2, 0, this.direction2)
      }
    }
    class sv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = vv, this.radiusRange = zv, this.directionRandomizer = Pv
      }
      startDirectionFunction(vv, zv, Pv, hv) {
        const Sv = Pv.position.subtract(vv.getTranslation()).normalize(),
          gv = (0, wv.RandomRange)(0, this.directionRandomizer),
          pv = (0, wv.RandomRange)(0, this.directionRandomizer),
          dv = (0, wv.RandomRange)(0, this.directionRandomizer);
        Sv.x += gv, Sv.y += pv, Sv.z += dv, Sv.normalize(), hv ? zv.Vzv(Sv) : ev.l.TransformNormalFromFloatsToRef(Sv.x, Sv.y, Sv.z, vv, zv)
      }
      startPositionFunction(vv, zv, Pv, hv) {
        const Sv = this.radius - (0, wv.RandomRange)(0, this.radius * this.radiusRange),
          gv = (0, wv.RandomRange)(0, 1),
          pv = (0, wv.RandomRange)(0, 2 * Math.PI),
          dv = Math.acos(2 * gv - 1),
          Nv = Sv * Math.cos(pv) * Math.sin(dv),
          lv = Sv * Math.cos(dv),
          Tv = Sv * Math.sin(pv) * Math.sin(dv);
        hv ? zv.f_(Nv, Math.abs(lv), Tv) : ev.l.TransformCoordinatesFromFloatsToRef(Nv, Math.abs(lv), Tv, vv, zv)
      }
      clone() {
        const vv = new sv(this.radius, this.directionRandomizer);
        return Wv.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setFloat("radius", this.radius), vv.setFloat("radiusRange", this.radiusRange), vv.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(vv) {
        vv.addUniform("radius", 1), vv.addUniform("radiusRange", 1), vv.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const vv = {};
        return vv.type = this.getClassName(), vv.radius = this.radius, vv.radiusRange = this.radiusRange, vv.directionRandomizer = this.directionRandomizer, vv
      }
      parse(vv) {
        this.radius = vv.radius, this.radiusRange = vv.radiusRange, this.directionRandomizer = vv.directionRandomizer
      }
    }
    class Cv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = vv, this.radiusRange = zv, this.directionRandomizer = Pv
      }
      startDirectionFunction(vv, zv, Pv, hv) {
        const Sv = Pv.position.subtract(vv.getTranslation()).normalize(),
          gv = (0, wv.RandomRange)(0, this.directionRandomizer),
          pv = (0, wv.RandomRange)(0, this.directionRandomizer),
          dv = (0, wv.RandomRange)(0, this.directionRandomizer);
        Sv.x += gv, Sv.y += pv, Sv.z += dv, Sv.normalize(), hv ? zv.Vzv(Sv) : ev.l.TransformNormalFromFloatsToRef(Sv.x, Sv.y, Sv.z, vv, zv)
      }
      startPositionFunction(vv, zv, Pv, hv) {
        const Sv = this.radius - (0, wv.RandomRange)(0, this.radius * this.radiusRange),
          gv = (0, wv.RandomRange)(0, 1),
          pv = (0, wv.RandomRange)(0, 2 * Math.PI),
          dv = Math.acos(2 * gv - 1),
          Nv = Sv * Math.cos(pv) * Math.sin(dv),
          lv = Sv * Math.cos(dv),
          Tv = Sv * Math.sin(pv) * Math.sin(dv);
        hv ? zv.f_(Nv, lv, Tv) : ev.l.TransformCoordinatesFromFloatsToRef(Nv, lv, Tv, vv, zv)
      }
      clone() {
        const vv = new Cv(this.radius, this.directionRandomizer);
        return Wv.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setFloat("radius", this.radius), vv.setFloat("radiusRange", this.radiusRange), vv.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(vv) {
        vv.addUniform("radius", 1), vv.addUniform("radiusRange", 1), vv.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const vv = {};
        return vv.type = this.getClassName(), vv.radius = this.radius, vv.radiusRange = this.radiusRange, vv.directionRandomizer = this.directionRandomizer, vv
      }
      parse(vv) {
        this.radius = vv.radius, this.radiusRange = vv.radiusRange, this.directionRandomizer = vv.directionRandomizer
      }
    }
    class iv extends Cv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ev.l(0, 1, 0),
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ev.l(0, 1, 0);
        super(vv), this.direction1 = zv, this.direction2 = Pv
      }
      startDirectionFunction(vv, zv, Pv, hv) {
        const Sv = (0, wv.RandomRange)(this.direction1.x, this.direction2.x),
          gv = (0, wv.RandomRange)(this.direction1.y, this.direction2.y),
          pv = (0, wv.RandomRange)(this.direction1.z, this.direction2.z);
        hv ? zv.f_(Sv, gv, pv) : ev.l.TransformNormalFromFloatsToRef(Sv, gv, pv, vv, zv)
      }
      clone() {
        const vv = new iv(this.radius, this.direction1, this.direction2);
        return Wv.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setFloat("radius", this.radius), vv.setFloat("radiusRange", this.radiusRange), vv.setVector3("direction1", this.direction1), vv.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(vv) {
        vv.addUniform("radius", 1), vv.addUniform("radiusRange", 1), vv.addUniform("direction1", 3), vv.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const vv = super.serialize();
        return vv.direction1 = this.direction1.pPv(), vv.direction2 = this.direction2.pPv(), vv
      }
      parse(vv) {
        super.parse(vv), ev.l.FromArrayToRef(vv.direction1, 0, this.direction1), ev.l.FromArrayToRef(vv.direction2, 0, this.direction2)
      }
    }
    var cv = Pv(38201);
    class Gv {
      get radius() {
        return this._radius
      }
      set radius(vv) {
        this._radius = vv, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(vv) {
        this._angle = vv, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = Pv, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = zv, this.radius = vv
      }
      startDirectionFunction(vv, zv, Pv, hv) {
        const Sv = Pv.position.subtract(vv.getTranslation()).normalize(),
          gv = (0, wv.RandomRange)(0, this.directionRandomizer),
          pv = (0, wv.RandomRange)(0, this.directionRandomizer),
          dv = (0, wv.RandomRange)(0, this.directionRandomizer);
        Sv.x += gv, Sv.y += pv, Sv.z += dv, Sv.normalize(), hv ? zv.Vzv(Sv) : ev.l.TransformNormalFromFloatsToRef(Sv.x, Sv.y, Sv.z, vv, zv)
      }
      startPositionFunction(vv, zv, Pv, hv) {
        const Sv = (0, wv.RandomRange)(0, 2 * Math.PI);
        let gv;
        this.emitFromSpawnPointOnly ? gv = 1e-4 : (gv = (0, wv.RandomRange)(0, this.heightRange), gv = 1 - gv * gv);
        let pv = this._radius - (0, wv.RandomRange)(0, this._radius * this.radiusRange);
        pv *= gv;
        const dv = pv * Math.sin(Sv),
          Nv = pv * Math.cos(Sv),
          lv = gv * this._height;
        if (hv) return zv.x = dv, zv.y = lv, void(zv.z = Nv);
        ev.l.TransformCoordinatesFromFloatsToRef(dv, lv, Nv, vv, zv)
      }
      clone() {
        const vv = new Gv(this._radius, this._angle, this.directionRandomizer);
        return Wv.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setFloat2("radius", this._radius, this.radiusRange), vv.setFloat("coneAngle", this._angle), vv.setFloat2("height", this._height, this.heightRange), vv.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(vv) {
        vv.addUniform("radius", 2), vv.addUniform("coneAngle", 1), vv.addUniform("height", 2), vv.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let vv = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (vv += "\n#define CONEEMITTERSPAWNPOINT"), vv
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const vv = {};
        return vv.type = this.getClassName(), vv.radius = this._radius, vv.angle = this._angle, vv.directionRandomizer = this.directionRandomizer, vv.radiusRange = this.radiusRange, vv.heightRange = this.heightRange, vv.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, vv
      }
      parse(vv) {
        this.radius = vv.radius, this.angle = vv.angle, this.directionRandomizer = vv.directionRandomizer, this.radiusRange = void 0 !== vv.radiusRange ? vv.radiusRange : 1, this.heightRange = void 0 !== vv.heightRange ? vv.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== vv.emitFromSpawnPointOnly && vv.emitFromSpawnPointOnly
      }
    }
    class mv extends Gv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ev.l(0, 1, 0),
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ev.l(0, 1, 0);
        super(vv, zv), this.direction1 = Pv, this.direction2 = hv
      }
      startDirectionFunction(vv, zv, Pv, hv) {
        const Sv = (0, wv.RandomRange)(this.direction1.x, this.direction2.x),
          gv = (0, wv.RandomRange)(this.direction1.y, this.direction2.y),
          pv = (0, wv.RandomRange)(this.direction1.z, this.direction2.z);
        hv ? zv.f_(Sv, gv, pv) : ev.l.TransformNormalFromFloatsToRef(Sv, gv, pv, vv, zv)
      }
      clone() {
        const vv = new mv(this.radius, this.angle, this.direction1, this.direction2);
        return Wv.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        super.applyToShader(vv), vv.setVector3("direction1", this.direction1), vv.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(vv) {
        super.buildUniformLayout(vv), vv.addUniform("direction1", 3), vv.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const vv = super.serialize();
        return vv.direction1 = this.direction1.pPv(), vv.direction2 = this.direction2.pPv(), vv
      }
      parse(vv) {
        super.parse(vv), ev.l.FromArrayToRef(vv.direction1, 0, this.direction1), ev.l.FromArrayToRef(vv.direction2, 0, this.direction2)
      }
    }
    class jv {
      get mesh() {
        return this._mesh
      }
      set mesh(vv) {
        this._mesh !== vv && (this._mesh = vv, vv ? (this._indices = vv.dPv(), this._positions = vv.getVerticesData(gv.k.PositionKind), this._normals = vv.getVerticesData(gv.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = ev.l.Zero(), this._mesh = null, this.direction1 = new ev.l(0, 1, 0), this.direction2 = new ev.l(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = vv
      }
      startDirectionFunction(vv, zv, Pv, hv) {
        if (this.useMeshNormalsForDirection && this._normals) return void ev.l.TransformNormalToRef(this._storedNormal, vv, zv);
        const Sv = (0, wv.RandomRange)(this.direction1.x, this.direction2.x),
          gv = (0, wv.RandomRange)(this.direction1.y, this.direction2.y),
          pv = (0, wv.RandomRange)(this.direction1.z, this.direction2.z);
        hv ? zv.f_(Sv, gv, pv) : ev.l.TransformNormalFromFloatsToRef(Sv, gv, pv, vv, zv)
      }
      startPositionFunction(vv, zv, Pv, hv) {
        if (!this._indices || !this._positions) return;
        const Sv = 3 * (Math.random() * (this._indices.length / 3) | 0),
          gv = Math.random(),
          pv = Math.random() * (1 - gv),
          dv = 1 - gv - pv,
          Nv = this._indices[Sv],
          lv = this._indices[Sv + 1],
          Tv = this._indices[Sv + 2],
          Wv = ev.i.fa[0],
          wv = ev.i.fa[1],
          av = ev.i.fa[2],
          sv = ev.i.fa[3];
        ev.l.FromArrayToRef(this._positions, 3 * Nv, Wv), ev.l.FromArrayToRef(this._positions, 3 * lv, wv), ev.l.FromArrayToRef(this._positions, 3 * Tv, av), sv.x = gv * Wv.x + pv * wv.x + dv * av.x, sv.y = gv * Wv.y + pv * wv.y + dv * av.y, sv.z = gv * Wv.z + pv * wv.z + dv * av.z, hv ? zv.f_(sv.x, sv.y, sv.z) : ev.l.TransformCoordinatesFromFloatsToRef(sv.x, sv.y, sv.z, vv, zv), this.useMeshNormalsForDirection && this._normals && (ev.l.FromArrayToRef(this._normals, 3 * Nv, Wv), ev.l.FromArrayToRef(this._normals, 3 * lv, wv), ev.l.FromArrayToRef(this._normals, 3 * Tv, av), this._storedNormal.x = gv * Wv.x + pv * wv.x + dv * av.x, this._storedNormal.y = gv * Wv.y + pv * wv.y + dv * av.y, this._storedNormal.z = gv * Wv.z + pv * wv.z + dv * av.z)
      }
      clone() {
        const vv = new jv(this.mesh);
        return Wv.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setVector3("direction1", this.direction1), vv.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(vv) {
        vv.addUniform("direction1", 3), vv.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const vv = {};
        return vv.type = this.getClassName(), vv.direction1 = this.direction1.pPv(), vv.direction2 = this.direction2.pPv(), vv.meshId = this.mesh?.id, vv.useMeshNormalsForDirection = this.useMeshNormalsForDirection, vv
      }
      parse(vv, zv) {
        ev.l.FromArrayToRef(vv.direction1, 0, this.direction1), ev.l.FromArrayToRef(vv.direction2, 0, this.direction2), vv.meshId && zv && (this.mesh = zv.getLastMeshById(vv.meshId)), this.useMeshNormalsForDirection = vv.useMeshNormalsForDirection
      }
    }
    class fv {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(vv) {
        this._targetStopDuration !== vv && (this._targetStopDuration = vv)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(vv) {
        this._noiseTexture !== vv && (this._noiseTexture = vv, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(vv) {
        this._attractors.push(vv)
      }
      removeAttractor(vv) {
        const zv = this._attractors.indexOf(vv); - 1 !== zv && this._attractors.splice(zv, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(vv) {
        this._animationSheetEnabled !== vv && (this._animationSheetEnabled = vv)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(vv) {
        this._isAnimationSheetEnabled != vv && (this._isAnimationSheetEnabled = vv, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(vv) {
        this._useLogarithmicDepth = vv && this.rD().ma().getCaps().fragmentDepthSupported
      }
      rD() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(vv) {
        switch (vv) {
          case fv.BLENDMODE_MULTIPLYADD:
            return;
          case fv.BLENDMODE_ADD:
            vv = 1;
            break;
          case fv.BLENDMODE_ONEONE:
            vv = 6;
            break;
          case fv.BLENDMODE_STANDARD:
            vv = 2;
            break;
          case fv.BLENDMODE_MULTIPLY:
            vv = 4;
            break;
          case fv.BLENDMODE_SUBTRACT:
            vv = 3
        }
        this._engine.setAlphaMode(vv)
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
      addEmitRateGradient(vv, zv, Pv) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, vv, zv, Pv), this
      }
      removeEmitRateGradient(vv) {
        return this._removeFactorGradient(this._emitRateGradients, vv), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : ev.l.Zero()
      }
      set direction1(vv) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = vv)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : ev.l.Zero()
      }
      set direction2(vv) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = vv)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : ev.l.Zero()
      }
      set minEmitBox(vv) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = vv)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : ev.l.Zero()
      }
      set maxEmitBox(vv) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = vv)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(vv) {
        this._billboardMode !== vv && (this._billboardMode = vv, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(vv) {
        this._isBillboardBased !== vv && (this._isBillboardBased = vv, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(vv) {
        this._attachImageProcessingConfiguration(vv)
      }
      _attachImageProcessingConfiguration(vv) {
        vv !== this._imageProcessingConfiguration && (!vv && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = vv)
      }
      _reset() {}
      _addFactorGradient(vv, zv, Pv, Sv) {
        const ev = new hv.h(zv, Pv, Sv);
        vv.push(ev), vv.sort(((vv, zv) => vv.gradient < zv.gradient ? -1 : vv.gradient > zv.gradient ? 1 : 0))
      }
      _removeFactorGradient(vv, zv) {
        if (!vv) return;
        let Pv = 0;
        for (const hv of vv) {
          if (hv.gradient === zv) {
            vv.splice(Pv, 1);
            break
          }
          Pv++
        }
      }
      _removeGradientAndTexture(vv, zv, Pv) {
        if (!zv) return this;
        let hv = 0;
        for (const Sv of zv) {
          if (Sv.gradient === vv) {
            zv.splice(hv, 1);
            break
          }
          hv++
        }
        return Pv && Pv.dispose(), this
      }
      constructor(vv) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = ev.l.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new ev.l(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = fv.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new ev.j(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new ev.l(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = ev.l.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new lv.e(1, 1, 1, 1), this.color2 = new lv.e(1, 1, 1, 1), this.colorDead = new lv.e(0, 0, 0, 1), this.textureMask = new lv.e(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Nv.d, this.id = vv, this.name = vv
      }
      createPointEmitter(vv, zv) {
        const Pv = function(vv, zv) {
          const Pv = new av;
          return Pv.direction1 = vv, Pv.direction2 = zv, Pv
        }(vv, zv);
        return this.particleEmitterType = Pv, Pv
      }
      createHemisphericEmitter() {
        const vv = function() {
          return new sv(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = vv, vv
      }
      createSphereEmitter() {
        const vv = function() {
          return new Cv(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = vv, vv
      }
      createDirectedSphereEmitter() {
        const vv = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ev.l(0, 1, 0),
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ev.l(0, 1, 0);
          return new iv(vv, zv, Pv)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ev.l(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ev.l(0, 1, 0));
        return this.particleEmitterType = vv, vv
      }
      createCylinderEmitter() {
        const vv = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new cv.g(vv, zv, Pv, hv)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = vv, vv
      }
      createDirectedCylinderEmitter() {
        const vv = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ev.l(0, 1, 0),
            Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ev.l(0, 1, 0);
          return new cv.d(vv, zv, Pv, hv, Sv)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ev.l(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ev.l(0, 1, 0));
        return this.particleEmitterType = vv, vv
      }
      createConeEmitter() {
        const vv = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Gv(vv, zv)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = vv, vv
      }
      createDirectedConeEmitter() {
        const vv = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ev.l(0, 1, 0),
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ev.l(0, 1, 0);
          return new mv(vv, zv, Pv, hv)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ev.l(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ev.l(0, 1, 0));
        return this.particleEmitterType = vv, vv
      }
      createBoxEmitter(vv, zv, Pv, hv) {
        const Sv = new Tv.c;
        return this.particleEmitterType = Sv, this.direction1 = vv, this.direction2 = zv, this.minEmitBox = Pv, this.maxEmitBox = hv, Sv
      }
      createMeshEmitter() {
        const vv = function() {
          return new jv(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = vv, vv
      }
    }
    fv.BLENDMODE_ONEONE = 0, fv.BLENDMODE_STANDARD = 1, fv.BLENDMODE_ADD = 2, fv.BLENDMODE_MULTIPLY = 3, fv.BLENDMODE_MULTIPLYADD = 4, fv.BLENDMODE_SUBTRACT = -1;
    class Fv {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new lv.e(0, 0, 0, 0), this.currentColor2 = new lv.e(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = ev.l.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class Yv {
      constructor(vv) {
        this.particleSystem = vv, this.position = ev.l.Zero(), this.direction = ev.l.Zero(), this.color = new lv.e(0, 0, 0, 0), this.colorStep = new lv.e(0, 0, 0, 0), this.initialColor = new lv.e(0, 0, 0, 0), this.colorDead = new lv.e(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new ev.j(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new Fv, this.id = Yv._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let vv = this.age,
          zv = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === zv ? (zv = 1, vv = this._properties.randomCellOffset) : vv += this._properties.randomCellOffset);
        const Pv = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let hv;
        hv = this._properties.initialSpriteCellLoop ? (0, wv.Clamp)(vv * zv % this.lifeTime / this.lifeTime) : (0, wv.Clamp)(vv * zv / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + hv * Pv | 0
      }
      _inheritParticleInfoToSubEmitter(vv) {
        if (vv.particleSystem.emitter.position) {
          const zv = vv.particleSystem.emitter;
          if (zv.position.Vzv(this.position), vv.inheritDirection) {
            const vv = ev.i.fa[0];
            this.direction.normalizeToRef(vv), zv.setDirection(vv, 0, Math.PI / 2)
          }
        } else {
          vv.particleSystem.emitter.Vzv(this.position)
        }
        this.direction.scaleToRef(vv.inheritedVelocityAmount / 2, ev.i.fa[0]), vv.particleSystem._inheritedVelocityOffset.Vzv(ev.i.fa[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const vv of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(vv)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = Yv._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(vv) {
        vv.position.Vzv(this.position), this._properties.initialDirection ? vv._properties.initialDirection ? vv._properties.initialDirection.Vzv(this._properties.initialDirection) : vv._properties.initialDirection = this._properties.initialDirection.clone() : vv._properties.initialDirection = null, vv.direction.Vzv(this.direction), this._properties.localPosition && (vv._properties.localPosition ? vv._properties.localPosition.Vzv(this._properties.localPosition) : vv._properties.localPosition = this._properties.localPosition.clone()), vv.color.Vzv(this.color), vv.colorStep.Vzv(this.colorStep), vv.initialColor.Vzv(this.initialColor), vv.colorDead.Vzv(this.colorDead), vv.lifeTime = this.lifeTime, vv.age = this.age, vv._properties.randomCellOffset = this._properties.randomCellOffset, vv.size = this.size, vv.scale.Vzv(this.scale), vv.angle = this.angle, vv.angularSpeed = this.angularSpeed, vv.particleSystem = this.particleSystem, vv.cellIndex = this.cellIndex, vv.id = this.id, vv._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (vv._properties.currentColorGradient = this._properties.currentColorGradient, vv._properties.currentColor1.Vzv(this._properties.currentColor1), vv._properties.currentColor2.Vzv(this._properties.currentColor2)), this._properties.currentSizeGradient && (vv._properties.currentSizeGradient = this._properties.currentSizeGradient, vv._properties.currentSize1 = this._properties.currentSize1, vv._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (vv._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, vv._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, vv._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (vv._properties.currentVelocityGradient = this._properties.currentVelocityGradient, vv._properties.currentVelocity1 = this._properties.currentVelocity1, vv._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (vv._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, vv._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, vv._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (vv._properties.currentDragGradient = this._properties.currentDragGradient, vv._properties.currentDrag1 = this._properties.currentDrag1, vv._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (vv._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, vv._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, vv._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (vv.remapData && this.remapData ? vv.remapData.Vzv(this.remapData) : vv.remapData = new ev.m(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (vv._properties.randomNoiseCoordinates1 && vv._properties.randomNoiseCoordinates2 ? (vv._properties.randomNoiseCoordinates1.Vzv(this._properties.randomNoiseCoordinates1), vv._properties.randomNoiseCoordinates2.Vzv(this._properties.randomNoiseCoordinates2)) : (vv._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), vv._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), vv.metadata = this.metadata
      }
    }
    Yv._Count = 0;
    var nv = Pv(40396);
    class Ov {
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
      constructor(vv, zv, Pv, hv) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = zv, this.Fy = vv, this._scene = Pv, this._host = hv, this._activeTargets = [], zv._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            GS: this._getCorrectLoopMode()
          }, this._animation.dataType === nv.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = ev.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const vv = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, vv)
        }
        if (this.Fy instanceof Array) {
          let vv = 0;
          for (const zv of this.Fy) this._preparePath(zv, vv), this._getOriginalValues(vv), vv++;
          this._targetIsArray = !0
        } else this._preparePath(this.Fy), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Sv = zv.getEvents();
        if (Sv && Sv.length > 0)
          for (const ev of Sv) this._events.push(ev._clone());
        this._enableBlending = vv && vv.animationPropertiesOverride ? vv.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = this._animation.targetPropertyPath;
        if (Pv.length > 1) {
          let hv = vv;
          for (let vv = 0; vv < Pv.length - 1; vv++) {
            const zv = Pv[vv];
            if (hv = hv[zv], void 0 === hv) throw new Error(`Invalid property (${zv}) in property path (${Pv.join(".")})`)
          }
          this._targetPath = Pv[Pv.length - 1], this._activeTargets[zv] = hv
        } else this._targetPath = Pv[0], this._activeTargets[zv] = vv;
        if (void 0 === this._activeTargets[zv][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${Pv.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.Fy instanceof Array) {
            let vv = 0;
            for (const zv of this.Fy) void 0 !== this._originalValue[vv] && this._setValue(zv, this._activeTargets[vv], this._originalValue[vv], -1, vv), vv++
          } else void 0 !== this._originalValue[0] && this._setValue(this.Fy, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let vv = 0; vv < this._events.length; vv++) this._events[vv].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const vv = this._animation.runtimeAnimations.indexOf(this);
        vv > -1 && this._animation.runtimeAnimations.splice(vv, 1)
      }
      setValue(vv, zv) {
        if (this._targetIsArray)
          for (let Pv = 0; Pv < this.Fy.length; Pv++) {
            const hv = this.Fy[Pv];
            this._setValue(hv, this._activeTargets[Pv], vv, zv, Pv)
          } else this._setValue(this.Fy, this._directTarget, vv, zv, 0)
      }
      _getOriginalValues() {
        let vv, zv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Pv = this._activeTargets[zv];
        if (nv.b.InheritOriginalValueFromActiveAnimations) {
          const vv = this._scene._activeAnimatables;
          for (let hv = 0; hv < vv.length; hv++) {
            const Sv = vv[hv]._runtimeAnimations;
            for (let vv = 0; vv < Sv.length; vv++) {
              const hv = Sv[vv];
              if (hv !== this && hv._targetPath === this._targetPath)
                for (let vv = 0; vv < hv._activeTargets.length; vv++)
                  if (hv._activeTargets[vv] === Pv && void 0 !== hv._originalValue[vv]) return void(hv._originalValue[vv] && hv._originalValue[vv].clone ? this._originalValue[zv] = hv._originalValue[vv].clone() : this._originalValue[zv] = hv._originalValue[vv])
            }
          }
        }
        vv = Pv.getLocalMatrix && "_matrix" === this._targetPath ? Pv.getLocalMatrix() : Pv[this._targetPath], vv && vv.clone ? this._originalValue[zv] = vv.clone() : this._originalValue[zv] = vv
      }
      _registerTargetForLateAnimationBinding(vv, zv) {
        const Pv = vv.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(Pv), Pv._lateAnimationHolders || (Pv._lateAnimationHolders = {}), Pv._lateAnimationHolders[vv.targetPath] || (Pv._lateAnimationHolders[vv.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: zv
        }), vv.isAdditive ? (Pv._lateAnimationHolders[vv.targetPath].additiveAnimations.push(vv), Pv._lateAnimationHolders[vv.targetPath].totalAdditiveWeight += vv.weight) : (Pv._lateAnimationHolders[vv.targetPath].animations.push(vv), Pv._lateAnimationHolders[vv.targetPath].totalWeight += vv.weight)
      }
      _setValue(vv, zv, Pv, hv, Sv) {
        const gv = this._scene._animationWrites,
          pv = this._scene._animationWriteCount++;
        let dv = gv[pv];
        if (dv || (dv = gv[pv] = {
            runtimeAnimation: this,
            target: vv,
            weight: hv,
            additive: !1,
            blendingFactor: 1,
            dC: !1
          }), dv.runtimeAnimation = this, dv.target = vv, dv.weight = hv, dv.additive = this.isAdditive, dv.dC = !1, this._currentActiveTarget = zv, this._weight = hv, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const vv = zv[this._targetPath];
            vv.clone ? this._originalBlendValue = vv.clone() : this._originalBlendValue = vv
          }
          this._originalBlendValue.m ? nv.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? ev.c.DecomposeLerpToRef(this._originalBlendValue, Pv, this._blendingFactor, this._currentValue) : this._currentValue = ev.c.DecomposeLerp(this._originalBlendValue, Pv, this._blendingFactor) : this._currentValue ? ev.c.LerpToRef(this._originalBlendValue, Pv, this._blendingFactor, this._currentValue) : this._currentValue = ev.c.Lerp(this._originalBlendValue, Pv, this._blendingFactor) : this._currentValue = nv.b._UniversalLerp(this._originalBlendValue, Pv, this._blendingFactor);
          const hv = vv && vv.animationPropertiesOverride ? vv.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          dv.blendingFactor = this._blendingFactor, this._blendingFactor += hv
        } else dv.blendingFactor = 1, this._currentValue ? this._currentValue.Vzv ? this._currentValue.Vzv(Pv) : this._currentValue = Pv : this._currentValue = Pv?.clone ? Pv.clone() : Pv; - 1 !== hv ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Sv]) : this._animationState.GS === nv.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Sv], zv[this._targetPath]) : zv[this._targetPath] = this._originalValue[Sv] + this._currentValue : zv[this._targetPath] = this._currentValue, vv.xvv && vv.xvv(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.Fy && this.Fy.animationPropertiesOverride) {
          return "MorphTarget" === this.Fy.getClassName?.() && null == this.Fy._animationPropertiesOverride ? this._animation.GS : this.Fy.animationPropertiesOverride.GS
        }
        return this._animation.GS
      }
      goToFrame(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const Pv = this._animation.getKeys();
        vv < Pv[0].frame ? vv = Pv[0].frame : vv > Pv[Pv.length - 1].frame && (vv = Pv[Pv.length - 1].frame);
        const hv = this._events;
        if (hv.length)
          for (let ev = 0; ev < hv.length; ev++) hv[ev].onlyOnce || (hv[ev].isDone = hv[ev].frame < vv);
        this._currentFrame = vv;
        const Sv = this._animation._interpolate(vv, this._animationState);
        this.setValue(Sv, zv)
      }
      _prepareForSpeedRatioChange(vv) {
        const zv = this._previousElapsedTime * (this._animation.framePerSecond * vv) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - zv
      }
      animate(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const gv = this._animation,
          pv = gv.targetPropertyPath;
        if (!pv || pv.length < 1) return this._stopped = !0, !1;
        let dv, Nv = !0;
        const lv = this._events;
        let Tv;
        if (this._coreRuntimeAnimation) Tv = Pv - zv, dv = this._coreRuntimeAnimation.currentFrame, this._currentFrame = dv, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let ev;
          (zv < this._minFrame || zv > this._maxFrame) && (zv = this._minFrame), (Pv < this._minFrame || Pv > this._maxFrame) && (Pv = this._maxFrame), Tv = Pv - zv;
          let pv = vv * (gv.framePerSecond * Sv) / 1e3 + this._absoluteFrameOffset,
            Wv = 0,
            wv = !1;
          const av = hv && this._animationState.GS === nv.b.ANIMATIONLOOPMODE_YOYO;
          if (av) {
            const vv = (pv - zv) / Tv,
              Pv = Math.sin(vv * Math.PI);
            pv = Math.abs(Pv) * Tv + zv;
            const hv = Pv >= 0 ? 1 : -1;
            this._yoyoDirection !== hv && (wv = !0), this._yoyoDirection = hv
          }
          if (this._previousElapsedTime = vv, this._previousAbsoluteFrame = pv, !hv && Pv >= zv && (pv >= Tv && Sv > 0 || pv <= 0 && Sv < 0)) Nv = !1, Wv = gv.evaluate(Pv);
          else if (!hv && zv >= Pv && (pv <= Tv && Sv < 0 || pv >= 0 && Sv > 0)) Nv = !1, Wv = gv.evaluate(zv);
          else if (this._animationState.GS !== nv.b.ANIMATIONLOOPMODE_CYCLE) {
            const vv = Pv.toString() + zv.toString();
            if (!this._offsetsCache[vv]) {
              this._animationState.repeatCount = 0, this._animationState.GS = nv.b.ANIMATIONLOOPMODE_CYCLE;
              const hv = gv._interpolate(zv, this._animationState),
                Sv = gv._interpolate(Pv, this._animationState);
              switch (this._animationState.GS = this._getCorrectLoopMode(), gv.dataType) {
                case nv.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[vv] = Sv - hv;
                  break;
                case nv.b.ANIMATIONTYPE_QUATERNION:
                case nv.b.ANIMATIONTYPE_VECTOR3:
                case nv.b.ANIMATIONTYPE_VECTOR2:
                case nv.b.ANIMATIONTYPE_SIZE:
                case nv.b.ANIMATIONTYPE_COLOR3:
                case nv.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[vv] = Sv.subtract(hv)
              }
              this._highLimitsCache[vv] = Sv
            }
            Wv = this._highLimitsCache[vv], ev = this._offsetsCache[vv]
          }
          if (void 0 === ev) switch (gv.dataType) {
            case nv.b.ANIMATIONTYPE_FLOAT:
              ev = 0;
              break;
            case nv.b.ANIMATIONTYPE_QUATERNION:
              ev = nv.l;
              break;
            case nv.b.ANIMATIONTYPE_VECTOR3:
              ev = nv.r;
              break;
            case nv.b.ANIMATIONTYPE_VECTOR2:
              ev = nv.q;
              break;
            case nv.b.ANIMATIONTYPE_SIZE:
              ev = nv.p;
              break;
            case nv.b.ANIMATIONTYPE_COLOR3:
              ev = nv.h;
              break;
            case nv.b.ANIMATIONTYPE_COLOR4:
              ev = nv.i
          }
          const sv = this._host ? this._host.syncRoot : null;
          let Cv, iv = this._playbackFrames,
            cv = !1;
          if (sv) {
            const vv = sv.toFrame - sv.fromFrame,
              Pv = sv.masterFrame,
              hv = (Pv - sv.fromFrame) / vv;
            dv = zv + Tv * hv;
            const Sv = sv.getAnimations()[0];
            if (Sv && 0 !== vv) {
              const vv = Tv * hv,
                zv = Sv._playbackTo - Sv._playbackFrom;
              if (0 !== zv && Sv._playbackFrom <= sv.fromFrame && Sv._playbackTo >= sv.toFrame) {
                iv = Tv * Math.round((Sv._playbackFrames - (Sv._currentFrame - Sv._playbackFrom)) / zv) + vv
              } else cv = (Pv - this._playbackSyncMasterFrame) * (Sv._playbackFrames - this._playbackSyncMasterPlayed) < 0, iv = vv;
              cv = cv || Sv._playbackJumped, this._playbackSyncMasterPlayed = Sv._playbackFrames, this._playbackSyncMasterFrame = Pv
            }
          } else dv = pv > 0 && zv > Pv || pv < 0 && zv < Pv ? Nv && 0 !== Tv ? Pv + pv % Tv : zv : Nv && 0 !== Tv ? zv + pv % Tv : Pv;
          if (!av && (Sv > 0 && this.currentFrame > dv || Sv < 0 && this.currentFrame < dv) || av && wv) {
            this._onLoop();
            for (let vv = 0; vv < lv.length; vv++) lv[vv].onlyOnce || (lv[vv].isDone = !1);
            this._animationState.key = Sv > 0 ? 0 : gv.getKeys().length - 1
          }
          if (this._currentFrame = dv, this._animationState.repeatCount = 0 === Tv ? 0 : pv / Tv | 0, this._animationState.highLimitValue = Wv, this._animationState.offsetValue = ev, this._playbackFrom = zv, this._playbackTo = Pv, this._playbackJumped = cv, this._playbackSyncRoot = sv, sv) Cv = iv;
          else if (Nv) Cv = av ? dv === zv && pv === Pv ? Tv : dv - zv : pv;
          else {
            const vv = 0 !== Tv ? Math.floor(this._playbackFrames / Tv) : 0;
            Cv = (dv === Pv ? vv + 1 : vv) * Tv
          }
          this._playbackFrames = Cv, this._playbackProgress = this._animationState.GS === nv.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Tv : Cv
        }
        const Wv = gv._interpolate(dv, this._animationState);
        if (this.setValue(Wv, ev), lv.length)
          for (let wv = 0; wv < lv.length; wv++)
            if (Tv >= 0 && dv >= lv[wv].frame && lv[wv].frame >= zv || Tv < 0 && dv <= lv[wv].frame && lv[wv].frame <= zv) {
              const vv = lv[wv];
              vv.isDone || (vv.onlyOnce && (lv.splice(wv, 1), wv--), vv.isDone = !0, vv.action(dv))
            } return Nv || (this._stopped = !0), Nv
      }
    }
    var Dv = Pv(39220);
    class Kv {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(vv) {
        this._weight = -1 !== vv ? Math.min(Math.max(vv, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(vv) {
        for (let zv = 0; zv < this._runtimeAnimations.length; zv++) {
          this._runtimeAnimations[zv]._prepareForSpeedRatioChange(vv)
        }
        this._speedRatio = vv, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          pv = arguments.length > 6 ? arguments[6] : void 0,
          dv = arguments.length > 7 ? arguments[7] : void 0,
          Nv = arguments.length > 8 ? arguments[8] : void 0,
          lv = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Tv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = zv, this.fromFrame = Pv, this.toFrame = hv, this.loopAnimation = ev, this.onAnimationEnd = pv, this.onAnimationLoop = Nv, this.isAdditive = lv, this.playOrder = Tv, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.Am = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Sv.c, this.onAnimationLoopObservable = new Sv.c, this._scene = vv, dv && this.appendAnimations(zv, dv), this._speedRatio = gv, vv._activeAnimatables.push(this)
      }
      syncWith(vv) {
        if (this._syncRoot = vv, vv) {
          const vv = this._scene._activeAnimatables.indexOf(this);
          vv > -1 && (this._scene._activeAnimatables.splice(vv, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(vv, zv) {
        for (let Pv = 0; Pv < zv.length; Pv++) {
          const hv = zv[Pv],
            Sv = new Ov(vv, hv, this._scene, this);
          Sv._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Sv)
        }
      }
      getAnimationByTargetProperty(vv) {
        const zv = this._runtimeAnimations;
        for (let Pv = 0; Pv < zv.length; Pv++)
          if (zv[Pv].animation.targetProperty === vv) return zv[Pv].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(vv) {
        const zv = this._runtimeAnimations;
        for (let Pv = 0; Pv < zv.length; Pv++)
          if (zv[Pv].animation.targetProperty === vv) return zv[Pv];
        return null
      }
      reset() {
        const vv = this._runtimeAnimations;
        for (let zv = 0; zv < vv.length; zv++) vv[zv].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(vv) {
        const zv = this._runtimeAnimations;
        for (let Pv = 0; Pv < zv.length; Pv++) zv[Pv].animation.enableBlending = !0, zv[Pv].animation.blendingSpeed = vv
      }
      disableBlending() {
        const vv = this._runtimeAnimations;
        for (let zv = 0; zv < vv.length; zv++) vv[zv].animation.enableBlending = !1
      }
      goToFrame(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this._runtimeAnimations;
        if (Pv[0]) {
          const zv = Pv[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? Pv[0].currentFrame;
          const hv = 0 === this.speedRatio ? 0 : (vv - this._frameToSyncFromJump) / zv * 1e3 / this.speedRatio;
          this._manualJumpDelay = -hv
        }
        for (let hv = 0; hv < Pv.length; hv++) Pv[hv].goToFrame(vv, zv ? this._weight : -1);
        this._goToFrame = vv
      }
      get paused() {
        return this.Am
      }
      pause() {
        this.Am || (this.Am = !0)
      }
      restart() {
        this.Am = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (vv || zv) {
          const Sv = this._scene._activeAnimatables.indexOf(this);
          if (Sv > -1) {
            const ev = this._runtimeAnimations;
            for (let Pv = ev.length - 1; Pv >= 0; Pv--) {
              const hv = ev[Pv];
              vv && hv.animation.name != vv || (zv && !zv(hv.target) || (hv.dispose(), ev.splice(Pv, 1)))
            }
            0 == ev.length && (Pv || this._scene._activeAnimatables.splice(Sv, 1), hv || this._raiseOnAnimationEnd())
          }
        } else {
          const vv = this._scene._activeAnimatables.indexOf(this);
          if (vv > -1) {
            Pv || this._scene._activeAnimatables.splice(vv, 1);
            const zv = this._runtimeAnimations;
            for (let vv = 0; vv < zv.length; vv++) zv[vv].dispose();
            this._runtimeAnimations.length = 0, hv || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((vv => {
          this.onAnimationEndObservable.add((() => {
            vv(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(vv) {
        if (this.Am) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = vv), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = vv, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += vv - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Kv.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let zv = !1;
        const Pv = this._runtimeAnimations;
        let hv;
        for (hv = 0; hv < Pv.length; hv++) {
          const Sv = Pv[hv].animate(vv - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          zv = zv || Sv
        }
        if (this.animationStarted = zv, !zv) {
          if (this.disposeOnEnd)
            for (hv = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(hv, 1), hv = 0; hv < Pv.length; hv++) Pv[hv].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return zv
      }
    }

    function Vv(vv) {
      if (0 === vv.totalWeight && 0 === vv.totalAdditiveWeight) return vv.originalValue;
      let zv = 1;
      const Pv = ev.i.fa[0],
        hv = ev.i.fa[1],
        Sv = ev.i.Quaternion[0];
      let gv = 0;
      const pv = vv.animations[0],
        dv = vv.originalValue;
      let Nv, lv = !1;
      if (vv.totalWeight < 1) Nv = 1 - vv.totalWeight, dv.decompose(hv, Sv, Pv);
      else {
        if (gv = 1, zv = vv.totalWeight, Nv = pv.weight / zv, 1 == Nv) {
          if (!vv.totalAdditiveWeight) return pv.currentValue;
          lv = !0
        }
        pv.currentValue.decompose(hv, Sv, Pv)
      }
      if (!lv) {
        hv.scaleInPlace(Nv), Pv.scaleInPlace(Nv), Sv.scaleInPlace(Nv);
        for (let pv = gv; pv < vv.animations.length; pv++) {
          const gv = vv.animations[pv];
          if (0 === gv.weight) continue;
          Nv = gv.weight / zv;
          const dv = ev.i.fa[2],
            lv = ev.i.fa[3],
            Tv = ev.i.Quaternion[1];
          gv.currentValue.decompose(lv, Tv, dv), lv.scaleAndAddToRef(Nv, hv), Tv.scaleAndAddToRef(ev.d.Dot(Sv, Tv) > 0 ? Nv : -Nv, Sv), dv.scaleAndAddToRef(Nv, Pv)
        }
        Sv.normalize()
      }
      for (let Wv = 0; Wv < vv.additiveAnimations.length; Wv++) {
        const zv = vv.additiveAnimations[Wv];
        if (0 === zv.weight) continue;
        const gv = ev.i.fa[2],
          pv = ev.i.fa[3],
          dv = ev.i.Quaternion[1];
        zv.currentValue.decompose(pv, dv, gv), pv.multiplyToRef(hv, pv), ev.l.LerpToRef(hv, pv, zv.weight, hv), Sv.multiplyToRef(dv, dv), ev.d.SlerpToRef(Sv, dv, zv.weight, Sv), gv.scaleAndAddToRef(zv.weight, Pv)
      }
      const Tv = pv ? pv._animationState.workValue : ev.i.Matrix[0].clone();
      return ev.c.ComposeToRef(hv, Sv, Pv, Tv), Tv
    }

    function Uv(vv, zv) {
      if (0 === vv.totalWeight && 0 === vv.totalAdditiveWeight) return zv;
      const Pv = vv.animations[0],
        hv = vv.originalValue;
      let Sv = zv;
      if (0 === vv.totalWeight && vv.totalAdditiveWeight > 0) Sv.Vzv(hv);
      else if (1 === vv.animations.length) {
        if (ev.d.SlerpToRef(hv, Pv.currentValue, Math.min(1, vv.totalWeight), Sv), 0 === vv.totalAdditiveWeight) return Sv
      } else if (vv.animations.length > 1) {
        let Pv, gv, pv = 1;
        if (vv.totalWeight < 1) {
          const zv = 1 - vv.totalWeight;
          Pv = [], gv = [], Pv.push(hv), gv.push(zv)
        } else {
          if (2 === vv.animations.length && (ev.d.SlerpToRef(vv.animations[0].currentValue, vv.animations[1].currentValue, vv.animations[1].weight / vv.totalWeight, zv), 0 === vv.totalAdditiveWeight)) return zv;
          Pv = [], gv = [], pv = vv.totalWeight
        }
        for (let zv = 0; zv < vv.animations.length; zv++) {
          const hv = vv.animations[zv];
          Pv.push(hv.currentValue), gv.push(hv.weight / pv)
        }
        let dv = 0;
        for (let vv = 0; vv < Pv.length;) vv ? (dv += gv[vv], ev.d.SlerpToRef(Sv, Pv[vv], gv[vv] / dv, Sv), vv++) : (ev.d.SlerpToRef(Pv[vv], Pv[vv + 1], gv[vv + 1] / (gv[vv] + gv[vv + 1]), zv), Sv = zv, dv = gv[vv] + gv[vv + 1], vv += 2)
      }
      for (let gv = 0; gv < vv.additiveAnimations.length; gv++) {
        const zv = vv.additiveAnimations[gv];
        0 !== zv.weight && (Sv.multiplyToRef(zv.currentValue, ev.i.Quaternion[0]), ev.d.SlerpToRef(Sv, ev.i.Quaternion[0], zv.weight, Sv))
      }
      return Sv
    }

    function Rv(vv, zv) {
      zv && (zv.prototype.copyAnimationRange = function(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new nv.b(this.name, "_matrix", vv.animations[0].framePerSecond, nv.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const ev = vv.animations[0].getRange(zv);
        if (!ev) return !1;
        const gv = ev.from,
          pv = ev.to,
          dv = vv.animations[0].getKeys(),
          Nv = vv.length,
          lv = vv.getParent(),
          Tv = this.getParent(),
          Wv = hv && lv && Nv && this.length && Nv !== this.length,
          wv = Wv && Tv && lv ? Tv.length / lv.length : 1,
          av = hv && !Tv && Sv && (1 !== Sv.x || 1 !== Sv.y || 1 !== Sv.z),
          sv = this.animations[0].getKeys();
        let Cv, iv, cv;
        for (let Gv = 0, mv = dv.length; Gv < mv; Gv++) Cv = dv[Gv], Cv.frame >= gv && Cv.frame <= pv && (hv ? (cv = Cv.value.clone(), Wv ? (iv = cv.getTranslation(), cv.setTranslation(iv.scaleInPlace(wv))) : av && Sv ? (iv = cv.getTranslation(), cv.setTranslation(iv.multiplyInPlace(Sv))) : cv = Cv.value) : cv = Cv.value, sv.push({
          frame: Cv.frame + Pv,
          value: cv
        }));
        return this.animations[0].createRange(zv, gv + Pv, pv + Pv), !0
      }), vv && (vv.prototype._animate = function(vv) {
        const zv = this._animationWrites,
          Pv = this._animationWriteCount;
        let hv = 0;
        for (let ev = this._animationStepWriteCount; ev < Pv; ev++) {
          const vv = zv[ev];
          vv.dC && -1 === vv.weight || (vv.dC = !0, zv[ev] = zv[hv], zv[hv] = vv, hv++)
        }
        for (let ev = hv; ev < Pv; ev++) {
          const vv = zv[ev];
          vv.runtimeAnimation = null, vv.target = null
        }
        if (this._animationWriteCount = hv, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Sv = Dv.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Sv
        }
        this.deltaTime = void 0 !== vv ? vv : this.useConstantAnimationDeltaTime ? 16 : (Sv - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Sv;
        const gv = this._activeAnimatables;
        if (0 === gv.length) return;
        this._animationTime += this.deltaTime;
        const pv = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let ev = 0; ev < gv.length; ev++) {
          const vv = gv[ev];
          !vv._animate(pv) && vv.disposeOnEnd && ev--
        }! function(vv) {
          if (vv._registeredForLateAnimationBindings.length) {
            for (let zv = 0; zv < vv._registeredForLateAnimationBindings.length; zv++) {
              const Pv = vv._registeredForLateAnimationBindings.data[zv];
              for (const vv in Pv._lateAnimationHolders) {
                const zv = Pv._lateAnimationHolders[vv],
                  hv = zv.animations[0],
                  Sv = zv.originalValue;
                if (void 0 === Sv || null === Sv) continue;
                const gv = nv.b.AllowMatrixDecomposeForInterpolation && Sv.m;
                let pv = Pv[vv];
                if (gv) pv = Vv(zv);
                else if (void 0 !== Sv.w) pv = Uv(zv, pv || ev.d.Identity());
                else {
                  let vv = 0,
                    Pv = 1;
                  const ev = hv && hv._animationState.GS === nv.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (zv.totalWeight < 1) pv = ev ? Sv.clone ? Sv.clone() : Sv : hv && Sv.scale ? Sv.scale(1 - zv.totalWeight) : hv ? Sv * (1 - zv.totalWeight) : Sv.clone ? Sv.clone() : Sv;
                  else if (hv) {
                    Pv = zv.totalWeight;
                    const gv = hv.weight / Pv;
                    pv = 1 !== gv ? hv.currentValue.scale ? hv.currentValue.scale(gv) : hv.currentValue * gv : (zv.animations.length > 1 || zv.additiveAnimations.length > 0) && hv.currentValue.clone ? hv.currentValue.clone() : hv.currentValue, ev && (pv.addToRef ? pv.addToRef(Sv, pv) : pv += Sv), vv = 1
                  }
                  for (let hv = vv; hv < zv.animations.length; hv++) {
                    const vv = zv.animations[hv],
                      Sv = vv.weight / Pv;
                    Sv && (vv.currentValue.scaleAndAddToRef ? vv.currentValue.scaleAndAddToRef(Sv, pv) : pv += vv.currentValue * Sv)
                  }
                  for (let hv = 0; hv < zv.additiveAnimations.length; hv++) {
                    const vv = zv.additiveAnimations[hv],
                      Pv = vv.weight;
                    Pv && (vv.currentValue.scaleAndAddToRef ? vv.currentValue.scaleAndAddToRef(Pv, pv) : pv += vv.currentValue * Pv)
                  }
                }
                Pv[vv] = pv
              }
              Pv._lateAnimationHolders = {}
            }
            vv._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, vv.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((vv, zv) => vv.playOrder - zv.playOrder))
      }, vv.prototype.beginWeightedAnimation = function(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          gv = arguments.length > 6 ? arguments[6] : void 0,
          pv = arguments.length > 7 ? arguments[7] : void 0,
          dv = arguments.length > 8 ? arguments[8] : void 0,
          Nv = arguments.length > 9 ? arguments[9] : void 0,
          lv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Tv = this.beginAnimation(vv, zv, Pv, Sv, ev, gv, pv, !1, dv, Nv, lv);
        return Tv.weight = hv, Tv
      }, vv.prototype.beginAnimation = function(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ev = arguments.length > 5 ? arguments[5] : void 0,
          gv = arguments.length > 6 ? arguments[6] : void 0,
          pv = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          dv = arguments.length > 8 ? arguments[8] : void 0,
          Nv = arguments.length > 9 ? arguments[9] : void 0,
          lv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Sv < 0) {
          const vv = zv;
          zv = Pv, Pv = vv, Sv = -Sv
        }
        zv > Pv && (Sv = -Sv), pv && this.stopAnimation(vv, void 0, dv), gv || (gv = new Kv(this, vv, zv, Pv, hv, Sv, ev, void 0, Nv, lv));
        const Tv = !dv || dv(vv);
        if (vv.animations && Tv && gv.appendAnimations(vv, vv.animations), vv.getAnimatables) {
          const lv = vv.getAnimatables();
          for (let vv = 0; vv < lv.length; vv++) this.beginAnimation(lv[vv], zv, Pv, hv, Sv, ev, gv, pv, dv, Nv)
        }
        return gv.reset(), gv
      }, vv.prototype.beginHierarchyAnimation = function(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          gv = arguments.length > 6 ? arguments[6] : void 0,
          pv = arguments.length > 7 ? arguments[7] : void 0,
          dv = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Nv = arguments.length > 9 ? arguments[9] : void 0,
          lv = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Tv = vv.getDescendants(zv),
          Wv = [];
        Wv.push(this.beginAnimation(vv, Pv, hv, Sv, ev, gv, pv, dv, Nv, void 0, lv));
        for (const wv of Tv) Wv.push(this.beginAnimation(wv, Pv, hv, Sv, ev, gv, pv, dv, Nv, void 0, lv));
        return Wv
      }, vv.prototype.beginDirectAnimation = function(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (ev < 0) {
          const vv = Pv;
          Pv = hv, hv = vv, ev = -ev
        }
        Pv > hv && (ev = -ev);
        return new Kv(this, vv, Pv, hv, Sv, ev, arguments.length > 6 ? arguments[6] : void 0, zv, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, vv.prototype.beginDirectHierarchyAnimation = function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        let Nv = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const lv = vv.getDescendants(zv),
          Tv = [];
        Tv.push(this.beginDirectAnimation(vv, Pv, hv, Sv, ev, gv, pv, dv, Nv));
        for (const Wv of lv) Tv.push(this.beginDirectAnimation(Wv, Pv, hv, Sv, ev, gv, pv, dv, Nv));
        return Tv
      }, vv.prototype.getAnimatableByTarget = function(vv) {
        for (let zv = 0; zv < this._activeAnimatables.length; zv++)
          if (this._activeAnimatables[zv].target === vv) return this._activeAnimatables[zv];
        return null
      }, vv.prototype.getAllAnimatablesByTarget = function(vv) {
        const zv = [];
        for (let Pv = 0; Pv < this._activeAnimatables.length; Pv++) this._activeAnimatables[Pv].target === vv && zv.push(this._activeAnimatables[Pv]);
        return zv
      }, vv.prototype.stopAnimation = function(vv, zv, Pv) {
        const hv = this.getAllAnimatablesByTarget(vv);
        for (const Sv of hv) Sv.stop(zv, Pv)
      }, vv.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let vv = 0; vv < this._activeAnimatables.length; vv++) this._activeAnimatables[vv].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const vv of this.animationGroups) vv.stop()
      })
    }
    Kv.ProcessPausedAnimatables = !1;
    var xv, tv = Pv(36602),
      qv = Pv(39518),
      Iv = Pv(39190);
    class Qv extends qv.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(vv) {
        (vv.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Vzv(vv), this._markAsDirtyAndDecompose())
      }
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(vv, zv.rD(), !1), this.name = vv, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = zv, this._localMatrix = hv?.clone() ?? ev.c.Identity(), this._restMatrix = Sv ?? this._localMatrix.clone(), this._bindMatrix = gv ?? this._localMatrix.clone(), this._index = pv, this._absoluteMatrix = new ev.c, this._absoluteBindMatrix = new ev.c, this._absoluteInverseBindMatrix = new ev.c, this._finalMatrix = new ev.c, zv.bones.push(this), this.setParent(Pv, !1), this._updateAbsoluteBindMatrices()
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
      set parent(vv) {
        this.setParent(vv)
      }
      setParent(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== vv) {
          if (this.parent) {
            const vv = this.parent.children.indexOf(this); - 1 !== vv && this.parent.children.splice(vv, 1)
          }
          this._parentNode = vv, this.parent && this.parent.children.push(this), zv && this._updateAbsoluteBindMatrices(), this.xvv()
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
      setRestMatrix(vv) {
        this._restMatrix.Vzv(vv)
      }
      setRestPose(vv) {
        this.setRestMatrix(vv)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(vv) {
        this.Xu(vv)
      }
      setBindPose(vv) {
        this.setBindMatrix(vv)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const vv = ev.i.fa[0],
            zv = ev.i.Quaternion[0],
            Pv = ev.i.fa[1];
          this.getRestMatrix().decompose(vv, zv, Pv), this._linkedTransformNode.position.Vzv(Pv), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? ev.d.Identity(), this._linkedTransformNode.rotationQuaternion.Vzv(zv), this._linkedTransformNode.pp.Vzv(vv)
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
      linkTransformNode(vv) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = vv, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.K3
      }
      set position(vv) {
        this._decompose(), this.K3.Vzv(vv), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(vv) {
        this.setRotation(vv)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(vv) {
        this.setRotationQuaternion(vv)
      }
      get pp() {
        return this.getScale()
      }
      set pp(vv) {
        this.setScale(vv)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = ev.l.Zero(), this._localRotation = ev.d.Zero(), this.K3 = ev.l.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.K3))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, ev.c.ComposeToRef(this._localScaling, this._localRotation, this.K3, this._localMatrix)) : this._needToCompose = !1)
      }
      Xu(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Vzv(vv), zv && this._updateAbsoluteBindMatrices(), Pv ? this._matrix = vv : this.xvv()
      }
      _updateAbsoluteBindMatrices(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (vv || (vv = this._bindMatrix), this.parent ? vv.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Vzv(vv), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), zv)
          for (let Pv = 0; Pv < this.children.length; Pv++) this.children[Pv]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      xvv() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.xvv(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.xvv(), this._needToDecompose = !0
      }
      _updatePosition(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Sv = this.getLocalMatrix();
        if (0 == zv) hv ? (Sv.addAtIndex(12, vv.x), Sv.addAtIndex(13, vv.y), Sv.addAtIndex(14, vv.z)) : Sv.setTranslationFromFloats(vv.x, vv.y, vv.z);
        else {
          const zv = Qv._TmpMats[0],
            gv = Qv._TmpVecs[0];
          this.parent ? (zv.Vzv(this.parent.getAbsoluteMatrix()), Pv && zv.multiplyToRef(Pv.getWorldMatrix(), zv)) : ev.c.IdentityToRef(zv), hv && zv.setTranslationFromFloats(0, 0, 0), zv.invert(), ev.l.TransformCoordinatesToRef(vv, zv, gv), hv ? (Sv.addAtIndex(12, gv.x), Sv.addAtIndex(13, gv.y), Sv.addAtIndex(14, gv.z)) : Sv.setTranslationFromFloats(gv.x, gv.y, gv.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(vv, zv, Pv, !0)
      }
      setPosition(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(vv, zv, Pv, !1)
      }
      setAbsolutePosition(vv, zv) {
        this.setPosition(vv, 1, zv)
      }
      scale(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Sv = this.getLocalMatrix(),
          gv = Qv._TmpMats[0];
        ev.c.ScalingToRef(vv, zv, Pv, gv), gv.multiplyToRef(Sv, Sv), gv.invert();
        for (const ev of this.children) {
          const hv = ev.getLocalMatrix();
          hv.multiplyToRef(gv, hv), hv.multiplyAtIndex(12, vv), hv.multiplyAtIndex(13, zv), hv.multiplyAtIndex(14, Pv), ev._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), hv)
          for (const ev of this.children) ev.scale(vv, zv, Pv, hv)
      }
      setScale(vv) {
        this._decompose(), this._localScaling.Vzv(vv), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(vv) {
        this._decompose(), vv.Vzv(this._localScaling)
      }
      setYawPitchRoll(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === hv) {
          const gv = Qv._TmpQuat;
          return ev.d.RotationYawPitchRollToRef(vv, zv, Pv, gv), void this.setRotationQuaternion(gv, hv, Sv)
        }
        const gv = Qv._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(gv, Sv)) return;
        const pv = Qv._TmpMats[1];
        ev.c.RotationYawPitchRollToRef(vv, zv, Pv, pv), gv.multiplyToRef(pv, pv), this._rotateWithMatrix(pv, hv, Sv)
      }
      rotate(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        const Sv = Qv._TmpMats[0];
        Sv.setTranslationFromFloats(0, 0, 0), ev.c.RotationAxisToRef(vv, zv, Sv), this._rotateWithMatrix(Sv, Pv, hv)
      }
      setAxisAngle(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === Pv) {
          const Sv = Qv._TmpQuat;
          return ev.d.RotationAxisToRef(vv, zv, Sv), void this.setRotationQuaternion(Sv, Pv, hv)
        }
        const Sv = Qv._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Sv, hv)) return;
        const gv = Qv._TmpMats[1];
        ev.c.RotationAxisToRef(vv, zv, gv), Sv.multiplyToRef(gv, gv), this._rotateWithMatrix(gv, Pv, hv)
      }
      setRotation(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(vv.y, vv.x, vv.z, zv, Pv)
      }
      setRotationQuaternion(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === zv) return this._decompose(), this._localRotation.Vzv(vv), void this._markAsDirtyAndCompose();
        const hv = Qv._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(hv, Pv)) return;
        const Sv = Qv._TmpMats[1];
        ev.c.FromQuaternionToRef(vv, Sv), hv.multiplyToRef(Sv, Sv), this._rotateWithMatrix(Sv, zv, Pv)
      }
      setRotationMatrix(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === zv) {
          const hv = Qv._TmpQuat;
          return ev.d.FromRotationMatrixToRef(vv, hv), void this.setRotationQuaternion(hv, zv, Pv)
        }
        const hv = Qv._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(hv, Pv)) return;
        const Sv = Qv._TmpMats[1];
        Sv.Vzv(vv), hv.multiplyToRef(vv, Sv), this._rotateWithMatrix(Sv, zv, Pv)
      }
      _rotateWithMatrix(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = this.getLocalMatrix(),
          Sv = hv.m[12],
          ev = hv.m[13],
          gv = hv.m[14],
          pv = this.getParent(),
          dv = Qv._TmpMats[3],
          Nv = Qv._TmpMats[4];
        pv && 1 == zv ? (Pv ? (dv.Vzv(Pv.getWorldMatrix()), pv.getAbsoluteMatrix().multiplyToRef(dv, dv)) : dv.Vzv(pv.getAbsoluteMatrix()), Nv.Vzv(dv), Nv.invert(), hv.multiplyToRef(dv, hv), hv.multiplyToRef(vv, hv), hv.multiplyToRef(Nv, hv)) : 1 == zv && Pv ? (dv.Vzv(Pv.getWorldMatrix()), Nv.Vzv(dv), Nv.invert(), hv.multiplyToRef(dv, hv), hv.multiplyToRef(vv, hv), hv.multiplyToRef(Nv, hv)) : hv.multiplyToRef(vv, hv), hv.setTranslationFromFloats(Sv, ev, gv), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(vv, zv) {
        const Pv = Qv._TmpMats[2];
        return vv.Vzv(this.getAbsoluteMatrix()), zv ? (vv.multiplyToRef(zv.getWorldMatrix(), vv), ev.c.ScalingToRef(zv.pp.x, zv.pp.y, zv.pp.z, Pv)) : ev.c.IdentityToRef(Pv), vv.invert(), !isNaN(vv.m[0]) && (Pv.multiplyAtIndex(0, this._scalingDeterminant), vv.multiplyToRef(Pv, vv), !0)
      }
      yG() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Pv = ev.l.Zero();
        return this.getPositionToRef(vv, zv, Pv), Pv
      }
      getPositionToRef() {
        let vv = arguments.length > 1 ? arguments[1] : void 0,
          zv = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const vv = this.getLocalMatrix();
          zv.x = vv.m[12], zv.y = vv.m[13], zv.z = vv.m[14]
        } else {
          const Pv = Qv._TmpMats[0].Vzv(this.getAbsoluteMatrix());
          vv && Pv.multiplyToRef(vv.getWorldMatrix(), Pv), zv.x = Pv.m[12], zv.y = Pv.m[13], zv.z = Pv.m[14]
        }
      }
      getAbsolutePosition() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const zv = ev.l.Zero();
        return this.getPositionToRef(1, vv, zv), zv
      }
      getAbsolutePositionToRef(vv, zv) {
        this.getPositionToRef(1, vv, zv)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Vzv(this._localMatrix);
          const vv = this._skeleton.getPoseMatrix();
          vv && this._absoluteMatrix.multiplyToRef(vv, this._absoluteMatrix)
        }
        const vv = this.children,
          zv = vv.length;
        for (let Pv = 0; Pv < zv; Pv++) vv[Pv].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      ZH(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Pv = ev.l.Zero();
        return this.getDirectionToRef(vv, zv, Pv), Pv
      }
      getDirectionToRef(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = Qv._TmpMats[0].Vzv(this.getAbsoluteMatrix());
        zv && hv.multiplyToRef(zv.getWorldMatrix(), hv), ev.l.TransformNormalToRef(vv, hv, Pv), Pv.normalize()
      }
      getRotation() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Pv = ev.l.Zero();
        return this.getRotationToRef(vv, zv, Pv), Pv
      }
      getRotationToRef() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = Qv._TmpQuat;
        this.getRotationQuaternionToRef(vv, zv, hv), hv.toEulerAnglesToRef(Pv)
      }
      getRotationQuaternion() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Pv = ev.d.Identity();
        return this.getRotationQuaternionToRef(vv, zv, Pv), Pv
      }
      getRotationQuaternionToRef() {
        let vv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zv = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), zv.Vzv(this._localRotation);
        else {
          const Pv = Qv._TmpMats[0],
            hv = this.getAbsoluteMatrix();
          vv ? hv.multiplyToRef(vv.getWorldMatrix(), Pv) : Pv.Vzv(hv), Pv.multiplyAtIndex(0, this._scalingDeterminant), Pv.multiplyAtIndex(1, this._scalingDeterminant), Pv.multiplyAtIndex(2, this._scalingDeterminant), Pv.decompose(void 0, zv, void 0)
        }
      }
      getRotationMatrix() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 ? arguments[1] : void 0;
        const Pv = ev.c.Identity();
        return this.getRotationMatrixToRef(vv, zv, Pv), Pv
      }
      getRotationMatrixToRef() {
        let vv = arguments.length > 1 ? arguments[1] : void 0,
          zv = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(zv);
        else {
          const Pv = Qv._TmpMats[0],
            hv = this.getAbsoluteMatrix();
          vv ? hv.multiplyToRef(vv.getWorldMatrix(), Pv) : Pv.Vzv(hv), Pv.multiplyAtIndex(0, this._scalingDeterminant), Pv.multiplyAtIndex(1, this._scalingDeterminant), Pv.multiplyAtIndex(2, this._scalingDeterminant), Pv.getRotationMatrixToRef(zv)
        }
      }
      getAbsolutePositionFromLocal(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Pv = ev.l.Zero();
        return this.getAbsolutePositionFromLocalToRef(vv, zv, Pv), Pv
      }
      getAbsolutePositionFromLocalToRef(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = Qv._TmpMats[0].Vzv(this.getAbsoluteMatrix());
        zv && hv.multiplyToRef(zv.getWorldMatrix(), hv), ev.l.TransformCoordinatesToRef(vv, hv, Pv)
      }
      getLocalPositionFromAbsolute(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Pv = ev.l.Zero();
        return this.getLocalPositionFromAbsoluteToRef(vv, zv, Pv), Pv
      }
      getLocalPositionFromAbsoluteToRef(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = Qv._TmpMats[0].Vzv(this.getAbsoluteMatrix());
        zv && hv.multiplyToRef(zv.getWorldMatrix(), hv), hv.invert(), ev.l.TransformCoordinatesToRef(vv, hv, Pv)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const vv = this._skeleton.bones.indexOf(this);
        if (-1 !== vv && this._skeleton.bones.splice(vv, 1), this._parentNode && this._parentNode.children) {
          const vv = this._parentNode.children,
            zv = vv.indexOf(this); - 1 !== zv && vv.splice(zv, 1)
        }
        super.dispose()
      }
    }
    Qv._TmpVecs = (0, tv.e)(2, ev.l.Zero), Qv._TmpQuat = ev.d.Identity(), Qv._TmpMats = (0, tv.e)(5, ev.c.Identity), (xv = Qv.prototype).copyAnimationRange ?? (xv.copyAnimationRange = (0, Iv.j)("Bone", "copyAnimationRange"));
    var Zv = Pv(39395);
    let Av = !1;
    var Lv = Pv(39270),
      Hv = Pv(39621),
      Mv = Pv(39636),
      yv = Pv(39629),
      Bv = Pv(39430);

    function Jv(vv, zv) {
      const Pv = (0, wv.RandomRange)(0, 1);
      lv.e.LerpToRef(zv.color1, zv.color2, Pv, vv.color)
    }

    function Ev(vv, zv) {
      zv.colorDead.subtractToRef(vv.color, zv._colorDiff), zv._colorDiff.scaleToRef(1 / vv.lifeTime, vv.colorStep)
    }

    function ov(vv, zv) {
      vv._properties.currentColorGradient = zv._colorGradients[0], vv._properties.currentColorGradient.getColorToRef(vv.color), vv._properties.currentColor1.Vzv(vv.color), zv._colorGradients.length > 1 ? zv._colorGradients[1].getColorToRef(vv._properties.currentColor2) : vv._properties.currentColor2.Vzv(vv.color)
    }

    function bv(vv, zv) {
      const Pv = zv._colorGradients;
      hv.i.GetCurrentGradient(zv._ratio, Pv, ((zv, Pv, hv) => {
        zv !== vv._properties.currentColorGradient && (vv._properties.currentColor1.Vzv(vv._properties.currentColor2), Pv.getColorToRef(vv._properties.currentColor2), vv._properties.currentColorGradient = zv), lv.e.LerpToRef(vv._properties.currentColor1, vv._properties.currentColor2, hv, vv.color), vv.color.a < 0 && (vv.color.a = 0)
      }))
    }

    function rv(vv, zv) {
      vv.colorStep.scaleToRef(zv._scaledUpdateSpeed, zv._scaledColorStep), vv.color.addInPlace(zv._scaledColorStep), vv.color.a < 0 && (vv.color.a = 0)
    }

    function kv(vv, zv) {
      hv.i.GetCurrentGradient(zv._ratio, zv._angularSpeedGradients, ((zv, Pv, hv) => {
        zv !== vv._properties.currentAngularSpeedGradient && (vv._properties.currentAngularSpeed1 = vv._properties.currentAngularSpeed2, vv._properties.currentAngularSpeed2 = Pv.getFactor(), vv._properties.currentAngularSpeedGradient = zv), vv.angularSpeed = (0, wv.Lerp)(vv._properties.currentAngularSpeed1, vv._properties.currentAngularSpeed2, hv)
      }))
    }

    function Xv(vv, zv) {
      vv.angle += vv.angularSpeed * zv._scaledUpdateSpeed
    }

    function uv(vv, zv) {
      zv.particleEmitterType.startDirectionFunction(zv._emitterWorldMatrix, vv.direction, vv, zv.isLocal, zv._emitterInverseWorldMatrix)
    }

    function vz(vv, zv) {
      zv.startDirectionFunction(zv._emitterWorldMatrix, vv.direction, vv, zv.isLocal)
    }

    function zz(vv, zv) {
      vv._properties.currentVelocityGradient = zv._velocityGradients[0], vv._properties.currentVelocity1 = vv._properties.currentVelocityGradient.getFactor(), zv._velocityGradients.length > 1 ? vv._properties.currentVelocity2 = zv._velocityGradients[1].getFactor() : vv._properties.currentVelocity2 = vv._properties.currentVelocity1
    }

    function Pz(vv, zv) {
      vv._properties.currentLimitVelocityGradient = zv._limitVelocityGradients[0], vv._properties.currentLimitVelocity1 = vv._properties.currentLimitVelocityGradient.getFactor(), zv._limitVelocityGradients.length > 1 ? vv._properties.currentLimitVelocity2 = zv._limitVelocityGradients[1].getFactor() : vv._properties.currentLimitVelocity2 = vv._properties.currentLimitVelocity1
    }

    function hz(vv, zv) {
      hv.i.GetCurrentGradient(zv._ratio, zv._velocityGradients, ((zv, Pv, hv) => {
        zv !== vv._properties.currentVelocityGradient && (vv._properties.currentVelocity1 = vv._properties.currentVelocity2, vv._properties.currentVelocity2 = Pv.getFactor(), vv._properties.currentVelocityGradient = zv), vv._properties.directionScale *= (0, wv.Lerp)(vv._properties.currentVelocity1, vv._properties.currentVelocity2, hv)
      }))
    }

    function Sz(vv, zv) {
      hv.i.GetCurrentGradient(zv._ratio, zv._limitVelocityGradients, ((Pv, hv, Sv) => {
        Pv !== vv._properties.currentLimitVelocityGradient && (vv._properties.currentLimitVelocity1 = vv._properties.currentLimitVelocity2, vv._properties.currentLimitVelocity2 = hv.getFactor(), vv._properties.currentLimitVelocityGradient = Pv);
        const ev = (0, wv.Lerp)(vv._properties.currentLimitVelocity1, vv._properties.currentLimitVelocity2, Sv);
        vv.direction.length() > ev && vv.direction.scaleInPlace(zv.limitVelocityDamping)
      }))
    }

    function ez(vv) {
      vv.direction.scaleToRef(vv._properties.directionScale, vv._properties.scaledDirection)
    }

    function gz(vv, zv) {
      zv.particleEmitterType.startPositionFunction(zv._emitterWorldMatrix, vv.position, vv, zv.isLocal)
    }

    function pz(vv, zv) {
      zv.startPositionFunction(zv._emitterWorldMatrix, vv.position, vv, zv.isLocal)
    }

    function dz(vv, zv) {
      vv._properties.localPosition ? vv._properties.localPosition.Vzv(vv.position) : vv._properties.localPosition = vv.position.clone(), ev.l.TransformCoordinatesToRef(vv._properties.localPosition, zv._emitterWorldMatrix, vv.position)
    }

    function Nz(vv, zv) {
      zv.isLocal && vv._properties.localPosition ? (vv._properties.localPosition.addInPlace(vv._properties.scaledDirection), ev.l.TransformCoordinatesToRef(vv._properties.localPosition, zv._emitterWorldMatrix, vv.position)) : vv.position.addInPlace(vv._properties.scaledDirection)
    }

    function lz(vv, zv) {
      vv._properties.currentDragGradient = zv._dragGradients[0], vv._properties.currentDrag1 = vv._properties.currentDragGradient.getFactor(), zv._dragGradients.length > 1 ? vv._properties.currentDrag2 = zv._dragGradients[1].getFactor() : vv._properties.currentDrag2 = vv._properties.currentDrag1
    }

    function Tz(vv, zv) {
      hv.i.GetCurrentGradient(zv._ratio, zv._dragGradients, ((zv, Pv, hv) => {
        zv !== vv._properties.currentDragGradient && (vv._properties.currentDrag1 = vv._properties.currentDrag2, vv._properties.currentDrag2 = Pv.getFactor(), vv._properties.currentDragGradient = zv);
        const Sv = (0, wv.Lerp)(vv._properties.currentDrag1, vv._properties.currentDrag2, hv);
        vv._properties.scaledDirection.scaleInPlace(1 - Sv)
      }))
    }

    function Wz(vv, zv) {
      vv._properties.randomNoiseCoordinates1 && vv._properties.randomNoiseCoordinates2 ? (vv._properties.randomNoiseCoordinates1.f_(Math.random(), Math.random(), Math.random()), vv._properties.randomNoiseCoordinates2.f_(Math.random(), Math.random(), Math.random())) : (vv._properties.randomNoiseCoordinates1 = new ev.l(Math.random(), Math.random(), Math.random()), vv._properties.randomNoiseCoordinates2 = new ev.l(Math.random(), Math.random(), Math.random()))
    }

    function wz(vv, zv) {
      const Pv = zv._noiseTextureData,
        hv = zv._noiseTextureSize;
      if (Pv && hv && vv._properties.randomNoiseCoordinates1 && vv._properties.randomNoiseCoordinates2) {
        const Sv = zv._fetchR(vv._properties.randomNoiseCoordinates1.x, vv._properties.randomNoiseCoordinates1.y, hv.width, hv.height, Pv),
          gv = zv._fetchR(vv._properties.randomNoiseCoordinates1.z, vv._properties.randomNoiseCoordinates2.x, hv.width, hv.height, Pv),
          pv = zv._fetchR(vv._properties.randomNoiseCoordinates2.y, vv._properties.randomNoiseCoordinates2.z, hv.width, hv.height, Pv),
          dv = ev.i.fa[0],
          Nv = ev.i.fa[1];
        dv.f_((2 * Sv - 1) * zv.noiseStrength.x, (2 * gv - 1) * zv.noiseStrength.y, (2 * pv - 1) * zv.noiseStrength.z), dv.scaleToRef(zv._tempScaledUpdateSpeed, Nv), vv.direction.addInPlace(Nv)
      }
    }

    function az(vv, zv) {
      zv.gravity.scaleToRef(zv._tempScaledUpdateSpeed, zv._scaledGravity), vv.direction.addInPlace(zv._scaledGravity)
    }

    function sz(vv, zv) {
      vv.size = (0, wv.RandomRange)(zv.minSize, zv.maxSize), vv.scale.f_((0, wv.RandomRange)(zv.minScaleX, zv.maxScaleX), (0, wv.RandomRange)(zv.minScaleY, zv.maxScaleY))
    }

    function Cz(vv, zv) {
      vv._properties.currentSizeGradient = zv._sizeGradients[0], vv._properties.currentSize1 = vv._properties.currentSizeGradient.getFactor(), vv.size = vv._properties.currentSize1, zv._sizeGradients.length > 1 ? vv._properties.currentSize2 = zv._sizeGradients[1].getFactor() : vv._properties.currentSize2 = vv._properties.currentSize1, vv.scale.f_((0, wv.RandomRange)(zv.minScaleX, zv.maxScaleX), (0, wv.RandomRange)(zv.minScaleY, zv.maxScaleY))
    }

    function iz(vv, zv) {
      const Pv = zv._actualFrame / zv.targetStopDuration;
      hv.i.GetCurrentGradient(Pv, zv._startSizeGradients, ((Pv, hv, Sv) => {
        Pv !== zv._currentStartSizeGradient && (zv._currentStartSize1 = zv._currentStartSize2, zv._currentStartSize2 = hv.getFactor(), zv._currentStartSizeGradient = Pv);
        const ev = (0, wv.Lerp)(zv._currentStartSize1, zv._currentStartSize2, Sv);
        vv.scale.scaleInPlace(ev)
      }))
    }

    function cz(vv, zv) {
      hv.i.GetCurrentGradient(zv._ratio, zv._sizeGradients, ((zv, Pv, hv) => {
        zv !== vv._properties.currentSizeGradient && (vv._properties.currentSize1 = vv._properties.currentSize2, vv._properties.currentSize2 = Pv.getFactor(), vv._properties.currentSizeGradient = zv), vv.size = (0, wv.Lerp)(vv._properties.currentSize1, vv._properties.currentSize2, hv)
      }))
    }

    function Gz(vv, zv) {
      vv.remapData = new ev.m(0, 1, 0, 1)
    }

    function mz(vv, zv) {
      zv._colorRemapGradients && zv._colorRemapGradients.length > 0 && hv.i.GetCurrentGradient(zv._ratio, zv._colorRemapGradients, ((zv, Pv, hv) => {
        const Sv = (0, wv.Lerp)(zv.factor1, Pv.factor1, hv),
          ev = (0, wv.Lerp)(zv.factor2, Pv.factor2, hv);
        vv.remapData.x = Sv, vv.remapData.y = ev - Sv
      })), zv._alphaRemapGradients && zv._alphaRemapGradients.length > 0 && hv.i.GetCurrentGradient(zv._ratio, zv._alphaRemapGradients, ((zv, Pv, hv) => {
        const Sv = (0, wv.Lerp)(zv.factor1, Pv.factor1, hv),
          ev = (0, wv.Lerp)(zv.factor2, Pv.factor2, hv);
        vv.remapData.z = Sv, vv.remapData.w = ev - Sv
      }))
    }

    function jz(vv, zv) {
      const Pv = (0, wv.Clamp)(zv._actualFrame / zv.targetStopDuration);
      hv.i.GetCurrentGradient(Pv, zv._lifeTimeGradients, ((zv, hv) => {
        const Sv = zv,
          ev = hv,
          gv = Sv.getFactor(),
          pv = ev.getFactor(),
          dv = (Pv - Sv.gradient) / (ev.gradient - Sv.gradient);
        vv.lifeTime = (0, wv.Lerp)(gv, pv, dv)
      })), zv._emitPower = (0, wv.RandomRange)(zv.minEmitPower, zv.maxEmitPower)
    }

    function fz(vv, zv) {
      vv.lifeTime = (0, wv.RandomRange)(zv.minLifeTime, zv.maxLifeTime), zv._emitPower = (0, wv.RandomRange)(zv.minEmitPower, zv.maxEmitPower)
    }

    function Fz(vv, zv) {
      0 === zv._emitPower ? (vv._properties.initialDirection ? vv._properties.initialDirection.Vzv(vv.direction) : vv._properties.initialDirection = vv.direction.clone(), vv.direction.set(0, 0, 0)) : (vv._properties.initialDirection = null, vv.direction.scaleInPlace(zv._emitPower)), vv.direction.addInPlace(zv._inheritedVelocityOffset)
    }

    function Yz(vv, zv) {
      vv.angularSpeed = (0, wv.RandomRange)(zv.minAngularSpeed, zv.maxAngularSpeed), vv.angle = (0, wv.RandomRange)(zv.minInitialRotation, zv.maxInitialRotation)
    }

    function nz(vv, zv) {
      vv._properties.currentAngularSpeedGradient = zv._angularSpeedGradients[0], vv.angularSpeed = vv._properties.currentAngularSpeedGradient.getFactor(), vv._properties.currentAngularSpeed1 = vv.angularSpeed, zv._angularSpeedGradients.length > 1 ? vv._properties.currentAngularSpeed2 = zv._angularSpeedGradients[1].getFactor() : vv._properties.currentAngularSpeed2 = vv._properties.currentAngularSpeed1, vv.angle = (0, wv.RandomRange)(zv.minInitialRotation, zv.maxInitialRotation)
    }

    function Oz(vv, zv) {
      vv._properties.initialStartSpriteCellId = zv.startSpriteCellID, vv._properties.initialEndSpriteCellId = zv.endSpriteCellID, vv._properties.initialSpriteCellLoop = zv.spriteCellLoop
    }

    function Dz(vv, zv) {
      vv.previousItem = zv.previousItem, vv.nextItem = zv, zv.previousItem && (zv.previousItem.nextItem = vv), zv.previousItem = vv
    }

    function Kz(vv, zv) {
      vv.previousItem = zv, vv.nextItem = zv.nextItem, zv.nextItem && (zv.nextItem.previousItem = vv), zv.nextItem = vv
    }

    function Vz(vv) {
      vv.previousItem && (vv.previousItem.nextItem = vv.nextItem), vv.nextItem && (vv.nextItem.previousItem = vv.previousItem)
    }
    var Uz = Pv(39686);
    class Rz extends fv {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(vv) {
        this._startDirectionFunction !== vv && (this._startDirectionFunction = vv, this._directionCreation.process = vv ? vz : uv)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(vv) {
        this._startPositionFunction !== vv && (this._startPositionFunction = vv, this._positionCreation.process = vv ? pz : gz)
      }
      set onDispose(vv) {
        this._onDisposeObserver && this.uD.remove(this._onDisposeObserver), this._onDisposeObserver = this.uD.add(vv)
      }
      get mzv() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(vv) {
        this._useRampGradients !== vv && (this._useRampGradients = vv, this._resetEffect(), vv ? (this._rampCreation = {
          process: Gz,
          previousItem: null,
          nextItem: null
        }, Kz(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: mz,
          previousItem: null,
          nextItem: null
        }, Kz(this._remapGradientProcessing, this._gravityProcessing))) : (Vz(this._rampCreation), Vz(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(vv) {
        this._isLocal !== vv && (this._isLocal = vv, vv ? (this._isLocalCreation = {
          process: dz,
          previousItem: null,
          nextItem: null
        }, Kz(this._isLocalCreation, this._positionCreation)) : Vz(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(vv) {
        this._animationSheetEnabled !== vv && (this._animationSheetEnabled = vv, vv ? (this._sheetCreation = {
          process: Oz,
          previousItem: null,
          nextItem: null
        }, Kz(this._sheetCreation, this._colorDeadCreation)) : Vz(this._sheetCreation), this._reset())
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
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[vv]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[vv] ?? this._customWrappers[0]
      }
      setCustomEffect(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[zv] = new Hv.c(this._engine), this._customWrappers[zv].effect = vv, this._customWrappers[zv].drawContext && (this._customWrappers[zv].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Sv.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(vv) {
        if (this.noiseTexture !== vv) {
          if (this._noiseTexture = vv, !vv) return Vz(this._noiseCreation), void Vz(this._noiseProcessing);
          this._noiseCreation = {
            process: Wz,
            previousItem: null,
            nextItem: null
          }, Kz(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: wz,
            previousItem: null,
            nextItem: null
          }, Kz(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          pv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Nv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        Av || (Av = !0, Rv(Zv.g, Qv)), (0, Lv.b)(), super(vv), this._emitterInverseWorldMatrix = ev.c.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new ev.l, this.uD = new Sv.c, this.onStoppedObservable = new Sv.c, this.onStartedObservable = new Sv.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new lv.e(0, 0, 0, 0), this._colorDiff = new lv.e(0, 0, 0, 0), this._scaledGravity = ev.l.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = vv => {}, this.recycleParticle = vv => {
          const zv = this._particles.pop();
          zv !== vv && zv.copyTo(vv), zv.metadata = null, this._stockParticles.push(zv)
        }, this._createParticle = () => {
          let vv;
          return 0 !== this._stockParticles.length ? (vv = this._stockParticles.pop(), vv._reset()) : vv = new Yv(this), this._prepareParticle(vv), vv
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = zv, this._epsilon = pv, Pv && "Scene" !== Pv.getClassName() ? (this._engine = Pv, this.defaultProjectionMatrix = ev.c.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = Pv || dv.e.LastCreatedScene, this._engine = this._scene.ma(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.mF.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: fz,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: gz,
          previousItem: null,
          nextItem: null
        }, Kz(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: uv,
          previousItem: null,
          nextItem: null
        }, Kz(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Fz,
          previousItem: null,
          nextItem: null
        }, Kz(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: sz,
          previousItem: null,
          nextItem: null
        }, Kz(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Yz,
          previousItem: null,
          nextItem: null
        }, Kz(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Jv,
          previousItem: null,
          nextItem: null
        }, Kz(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Ev,
          previousItem: null,
          nextItem: null
        }, Kz(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Nv || (this._colorProcessing = {
          process: rv,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Xv,
          previousItem: null,
          nextItem: null
        }, Kz(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: ez,
          previousItem: null,
          nextItem: null
        }, Kz(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Nz,
          previousItem: null,
          nextItem: null
        }, Kz(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: az,
          previousItem: null,
          nextItem: null
        }, Kz(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = gv, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Hv.c(this._engine)
        }, this._customWrappers[0].effect = hv, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Tv.c, this.updateFunction = vv => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((vv => {
            this._noiseTextureData = vv
          })));
          const zv = vv === this._particles;
          for (let Pv = 0; Pv < vv.length; Pv++) {
            const hv = vv[Pv];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Sv = hv.age;
            if (hv.age += this._tempScaledUpdateSpeed, hv.age > hv.lifeTime) {
              const vv = hv.age - Sv,
                zv = hv.lifeTime - Sv;
              this._tempScaledUpdateSpeed = zv * this._tempScaledUpdateSpeed / vv, hv.age = hv.lifeTime
            }
            this._ratio = hv.age / hv.lifeTime, hv._properties.directionScale = this._tempScaledUpdateSpeed;
            let ev = this._updateQueueStart;
            for (; ev;) ev.process(hv, this), ev = ev.nextItem;
            if (this._isAnimationSheetEnabled && !Nv && hv.updateCellIndex(), hv._inheritParticleInfoToSubEmitters(), hv.age >= hv.lifeTime) {
              if (this._emitFromParticle(hv), hv._properties.attachedSubEmitters) {
                for (const vv of hv._properties.attachedSubEmitters) vv.particleSystem.disposeOnStop = !0, vv.particleSystem.stop();
                hv._properties.attachedSubEmitters = null
              }
              this.recycleParticle(hv), zv && Pv--
            } else;
          }
        }
      }
      serialize(vv) {
        throw new Error("Method not implemented.")
      }
      clone(vv, zv) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = jz : this._lifeTimeCreation.process = fz
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: iz,
          previousItem: null,
          nextItem: null
        }, Kz(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Vz(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(vv) {
        this.targetStopDuration !== vv && (this._targetStopDuration = vv, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(vv, zv, Pv) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, vv, zv, Pv), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(vv) {
        return this._removeFactorGradient(this._lifeTimeGradients, vv), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(vv, zv, Pv) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Cz, this._sizeGradientProcessing = {
          process: cz,
          previousItem: null,
          nextItem: null
        }, Dz(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, vv, zv, Pv), this
      }
      removeSizeGradient(vv) {
        return this._removeFactorGradient(this._sizeGradients, vv), 0 === this._sizeGradients?.length && (Vz(this._sizeGradientProcessing), this._sizeCreation.process = sz), this
      }
      addColorRemapGradient(vv, zv, Pv) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, vv, zv, Pv), this
      }
      removeColorRemapGradient(vv) {
        return this._removeFactorGradient(this._colorRemapGradients, vv), this
      }
      addAlphaRemapGradient(vv, zv, Pv) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, vv, zv, Pv), this
      }
      removeAlphaRemapGradient(vv) {
        return this._removeFactorGradient(this._alphaRemapGradients, vv), this
      }
      addAngularSpeedGradient(vv, zv, Pv) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = nz, this._angularSpeedGradientProcessing = {
          process: kv,
          previousItem: null,
          nextItem: null
        }, Dz(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, vv, zv, Pv), this
      }
      removeAngularSpeedGradient(vv) {
        return this._removeFactorGradient(this._angularSpeedGradients, vv), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Yz, Vz(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(vv, zv, Pv) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: zz,
          previousItem: null,
          nextItem: null
        }, Kz(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: hz,
          previousItem: null,
          nextItem: null
        }, Dz(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, vv, zv, Pv), this
      }
      removeVelocityGradient(vv) {
        return this._removeFactorGradient(this._velocityGradients, vv), 0 === this._velocityGradients?.length && (Vz(this._velocityCreation), Vz(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(vv, zv, Pv) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Pz,
          previousItem: null,
          nextItem: null
        }, Kz(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Sz,
          previousItem: null,
          nextItem: null
        }, Kz(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, vv, zv, Pv), this
      }
      removeLimitVelocityGradient(vv) {
        return this._removeFactorGradient(this._limitVelocityGradients, vv), 0 === this._limitVelocityGradients?.length && (Vz(this._limitVelocityCreation), Vz(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(vv, zv, Pv) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: lz,
          previousItem: null,
          nextItem: null
        }, Dz(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Tz,
          previousItem: null,
          nextItem: null
        }, Dz(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, vv, zv, Pv), this
      }
      removeDragGradient(vv) {
        return this._removeFactorGradient(this._dragGradients, vv), 0 === this._dragGradients?.length && (Vz(this._dragCreation), Vz(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(vv, zv, Pv) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, vv, zv, Pv), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(vv) {
        return this._removeFactorGradient(this._startSizeGradients, vv), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const vv = new Uint8Array(4 * this._rawTextureWidth),
          zv = lv.k.Color3[0];
        for (let Pv = 0; Pv < this._rawTextureWidth; Pv++) {
          const Sv = Pv / this._rawTextureWidth;
          hv.i.GetCurrentGradient(Sv, this._rampGradients, ((hv, Sv, ev) => {
            lv.b.LerpToRef(hv.color, Sv.color, ev, zv), vv[4 * Pv] = 255 * zv.r, vv[4 * Pv + 1] = 255 * zv.g, vv[4 * Pv + 2] = 255 * zv.b, vv[4 * Pv + 3] = 255
          }))
        }
        this._rampGradientsTexture = pv.e.CreateRGBATexture(vv, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((vv, zv) => vv.gradient < zv.gradient ? -1 : vv.gradient > zv.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(vv, zv) {
        this._rampGradients || (this._rampGradients = []);
        const Pv = new hv.f(vv, zv);
        return this._rampGradients.push(Pv), this._syncRampGradientTexture(), this
      }
      removeRampGradient(vv) {
        return this._removeGradientAndTexture(vv, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(vv, zv, Pv) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = ov, this._colorProcessing.process = bv);
        const Sv = new hv.b(vv, zv, Pv);
        return this._colorGradients.push(Sv), this._colorGradients.sort(((vv, zv) => vv.gradient < zv.gradient ? -1 : vv.gradient > zv.gradient ? 1 : 0)), this
      }
      removeColorGradient(vv) {
        if (!this._colorGradients) return this;
        let zv = 0;
        for (const Pv of this._colorGradients) {
          if (Pv.gradient === vv) {
            this._colorGradients.splice(zv, 1);
            break
          }
          zv++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Jv, this._colorProcessing.process = rv), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const vv of this._drawWrappers)
            if (vv)
              for (const zv of vv) zv?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(vv, zv, Pv, hv, Sv) {
        return Sv[4 * (((vv = .5 * Math.abs(vv) + .5) * Pv % Pv | 0) + ((zv = .5 * Math.abs(zv) + .5) * hv % hv | 0) * Pv)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const vv = this._engine,
          zv = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * zv), this._vertexBuffer = new gv.c(vv, this._vertexData, !0, zv);
        let Pv = 0;
        const hv = this._vertexBuffer.createVertexBuffer(gv.k.PositionKind, Pv, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[gv.k.PositionKind] = hv, Pv += 3;
        const Sv = this._vertexBuffer.createVertexBuffer(gv.k.ColorKind, Pv, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[gv.k.ColorKind] = Sv, Pv += 4;
        const ev = this._vertexBuffer.createVertexBuffer("angle", Pv, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = ev, Pv += 1;
        const pv = this._vertexBuffer.createVertexBuffer("size", Pv, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = pv, Pv += 2, this._isAnimationSheetEnabled) {
          const vv = this._vertexBuffer.createVertexBuffer("cellIndex", Pv, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = vv, Pv += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const vv = this._vertexBuffer.createVertexBuffer("direction", Pv, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = vv, Pv += 3
        }
        if (this._useRampGradients) {
          const vv = this._vertexBuffer.createVertexBuffer("remapData", Pv, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = vv, Pv += 4
        }
        let dv;
        if (this._useInstancing) {
          const zv = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new gv.c(vv, zv, !1, 2), dv = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else dv = this._vertexBuffer.createVertexBuffer("offset", Pv, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = dv, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const vv = [],
          zv = [];
        let Pv = 0;
        for (let hv = 0; hv < this._capacity; hv++) vv.push(Pv), vv.push(Pv + 1), vv.push(Pv + 2), vv.push(Pv), vv.push(Pv + 2), vv.push(Pv + 3), zv.push(Pv, Pv + 1, Pv + 1, Pv + 2, Pv + 2, Pv + 3, Pv + 3, Pv, Pv, Pv + 3), Pv += 4;
        this._indexBuffer = this._engine.createIndexBuffer(vv), this._linesIndexBuffer = this._engine.createIndexBuffer(zv)
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
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (vv) return this.startDelay = vv, void setTimeout((() => {
          this.start(0)
        }), vv);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const vv = this.noiseTexture;
          if (vv && vv.onGeneratedObservable) vv.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let zv = 0; zv < this.preWarmCycles; zv++) this.animate(!0), vv.render()
            }))
          }));
          else
            for (let zv = 0; zv < this.preWarmCycles; zv++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(vv))
      }
      _postStop(vv) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(vv, zv, Pv, hv) {
        let Sv = vv * this._vertexBufferSize;
        const gv = ev.i.fa[0].Vzv(this._scene?.floatingOriginOffset || ev.l.ZeroReadOnly);
        if (this._vertexData[Sv++] = zv.position.x + this.worldOffset.x - gv.x, this._vertexData[Sv++] = zv.position.y + this.worldOffset.y - gv.y, this._vertexData[Sv++] = zv.position.z + this.worldOffset.z - gv.z, this._vertexData[Sv++] = zv.color.r, this._vertexData[Sv++] = zv.color.g, this._vertexData[Sv++] = zv.color.b, this._vertexData[Sv++] = zv.color.a, this._vertexData[Sv++] = zv.angle, this._vertexData[Sv++] = zv.scale.x * zv.size, this._vertexData[Sv++] = zv.scale.y * zv.size, this._isAnimationSheetEnabled && (this._vertexData[Sv++] = zv.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Sv++] = zv.direction.x, this._vertexData[Sv++] = zv.direction.y, this._vertexData[Sv++] = zv.direction.z);
        else if (zv._properties.initialDirection) {
          let vv = zv._properties.initialDirection;
          this.isLocal && (ev.l.TransformNormalToRef(vv, this._emitterWorldMatrix, ev.i.fa[0]), vv = ev.i.fa[0]), 0 === vv.x && 0 === vv.z && (vv.x = .001), this._vertexData[Sv++] = vv.x, this._vertexData[Sv++] = vv.y, this._vertexData[Sv++] = vv.z
        } else {
          let vv = zv.direction;
          this.isLocal && (ev.l.TransformNormalToRef(vv, this._emitterWorldMatrix, ev.i.fa[0]), vv = ev.i.fa[0]), 0 === vv.x && 0 === vv.z && (vv.x = .001), this._vertexData[Sv++] = vv.x, this._vertexData[Sv++] = vv.y, this._vertexData[Sv++] = vv.z
        }
        this._useRampGradients && zv.remapData && (this._vertexData[Sv++] = zv.remapData.x, this._vertexData[Sv++] = zv.remapData.y, this._vertexData[Sv++] = zv.remapData.z, this._vertexData[Sv++] = zv.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === Pv ? Pv = this._epsilon : 1 === Pv && (Pv = 1 - this._epsilon), 0 === hv ? hv = this._epsilon : 1 === hv && (hv = 1 - this._epsilon)), this._vertexData[Sv++] = Pv, this._vertexData[Sv] = hv)
      }
      _prepareParticle(vv) {}
      _createNewOnes(vv) {
        let zv;
        for (let Pv = 0; Pv < vv && this._particles.length !== this._capacity; Pv++) {
          zv = this._createParticle(), this._particles.push(zv);
          let vv = this._createQueueStart;
          for (; vv;) vv.process(zv, this), vv = vv.nextItem;
          zv._inheritParticleInfoToSubEmitters()
        }
      }
      _update(vv) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const vv = this.emitter;
          this._emitterWorldMatrix = vv.getWorldMatrix()
        } else {
          const vv = this.emitter;
          this._emitterWorldMatrix = ev.c.Translation(vv.x, vv.y, vv.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(vv)
      }
      static _GetAttributeNamesOrOptions() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = [gv.k.PositionKind, gv.k.ColorKind, "angle", "offset", "size"];
        return vv && hv.push("cellIndex"), zv || hv.push("direction"), Pv && hv.push("remapData"), hv
      }
      static _GetEffectCreationOptions() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Mv.c)(hv), vv && hv.push("particlesInfos"), zv && hv.push("logarithmicDepthConstant"), Pv && (hv.push("vFogInfos"), hv.push("vFogColor")), hv
      }
      fillDefines(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Mv.m)(this, this._scene, vv), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && vv.push("#define FOG")), this._isAnimationSheetEnabled && vv.push("#define ANIMATESHEET"), this.useLogarithmicDepth && vv.push("#define LOGARITHMICDEPTH"), zv === fv.BLENDMODE_MULTIPLY && vv.push("#define BLENDMULTIPLYMODE"), this.isLocal && vv.push("#define LOCAL"), this._useRampGradients && vv.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (vv.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            vv.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            vv.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && vv.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            vv.push("#define BILLBOARDMODE_ALL")
        }
        Pv && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), vv.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(vv, zv, Pv) {
        zv.push(...Rz._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), vv.push(...Rz._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), Pv.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Bv.c)(vv, this._imageProcessingConfigurationDefines), (0, Bv.b)(Pv, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(vv) {
        var zv;
        const Pv = this._getCustomDrawWrapper(vv);
        if (Pv?.effect) return Pv;
        const hv = [];
        this.fillDefines(hv, vv);
        const ev = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          gv = Uz.d._PrepareStringDefines(ev, hv),
          pv = gv ? Uz.d.GetConfiguration(ev) : void 0;
        let dv = this._drawWrappers[ev];
        dv || (dv = this._drawWrappers[ev] = [], 0 === ev || this._renderPassObserver || (this._renderPassObserver = ((zv = this._engine)._onReleaseRenderPassObservable ?? (zv._onReleaseRenderPassObservable = new Sv.c)).add((vv => {
          const zv = this._drawWrappers[vv];
          if (zv) {
            for (const vv of zv) vv?.dispose();
            delete this._drawWrappers[vv]
          }
        }))));
        let Nv = dv[vv];
        Nv || (Nv = new Hv.c(this._engine), Nv.drawContext && (Nv.drawContext.useInstancing = this._useInstancing), dv[vv] = Nv);
        const lv = hv.join("\n");
        if (Nv.defines !== lv) {
          const vv = [],
            zv = [],
            Pv = [];
          this.fillUniformsAttributesAndSamplerNames(zv, vv, Pv), gv && (zv.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== pv?.defines.PREPASS_LOCAL_POSITION_INDEX && zv.push("inverseEmitterWM", "geometryWorldOffset")), Nv.setEffect(this._engine.createEffect("particles", {
            attributes: vv,
            uniformsNames: zv,
            samplers: Pv,
            defines: lv,
            shaderLanguage: this._shaderLanguage,
            multiTarget: gv,
            indexParameters: gv ? {
              buffersCount: pv?._mrtCount ?? 0
            } : void 0
          }, this._engine), lv)
        }
        return Nv
      }
      _bindGeometryRendering(vv) {
        const zv = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Pv = Uz.d.GetConfiguration(zv);
        if (!Pv?._defines) return;
        vv.setFloat("objectId", 0), vv.setInt("meshBlendTag", 0);
        const hv = this._scene?.activeCamera;
        if (vv.setFloat2("cameraInfo", hv?.minZ ?? 0, hv?.maxZ ?? 1), this.isLocal && void 0 !== Pv.defines.PREPASS_LOCAL_POSITION_INDEX) {
          vv.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const zv = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || ev.l.ZeroReadOnly, ev.i.fa[0]);
          vv.setVector3("geometryWorldOffset", zv)
        }
      }
      animate() {
        let vv, zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!zv && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (zv ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) vv = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const zv = this._calculateEmitRate();
            vv = zv * this._scaledUpdateSpeed | 0, this._newPartsExcess += zv * this._scaledUpdateSpeed - vv
          }
          if (this._newPartsExcess > 1 && (vv += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? vv = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(vv), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !zv) {
            let vv = 0;
            for (let zv = 0; zv < this._particles.length; zv++) {
              const Pv = this._particles[zv];
              this._appendParticleVertices(vv, Pv), vv += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const vv = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  zv = this._particles.length;
                zv < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, zv * vv, this._fixedCapacityHighWaterMark * vv), this._fixedCapacityHighWaterMark = zv, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const vv = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * vv), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let vv = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const zv = this._actualFrame / this.targetStopDuration;
          hv.i.GetCurrentGradient(zv, this._emitRateGradients, ((zv, Pv, hv) => {
            zv !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = Pv.getFactor(), this._currentEmitRateGradient = zv), vv = (0, wv.Lerp)(this._currentEmitRate1, this._currentEmitRate2, hv)
          }))
        }
        return vv
      }
      _appendParticleVertices(vv, zv) {
        this._appendParticleVertex(vv++, zv, 0, 0), this._useInstancing || (this._appendParticleVertex(vv++, zv, 1, 0), this._appendParticleVertex(vv++, zv, 1, 1), this._appendParticleVertex(vv, zv, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Rz.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Pv.e(337).then((() => Pv(60611))), Pv.e(331).then((() => Pv(60619)))])) : await Promise.all([Pv.e(320).then((() => Pv(60624))), Promise.all([Pv.e(313), Pv.e(349)]).then((() => Pv(60632)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== fv.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(fv.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(fv.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(vv) {
        const zv = this._getWrapper(vv),
          Pv = zv.effect,
          hv = this._engine;
        hv.enableEffect(zv);
        const Sv = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        Pv.setTexture("diffuseSampler", this.particleTexture), Pv.setMatrix("view", Sv);
        const gv = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (Pv.setMatrix("projection", gv), this._isAnimationSheetEnabled && this.particleTexture) {
          const vv = this.particleTexture.getBaseSize();
          Pv.setFloat3("particlesInfos", this.spriteCellWidth / vv.width, this.spriteCellHeight / vv.height, this.spriteCellWidth / vv.width)
        }
        if (Pv.setVector2("translationPivot", this.translationPivot), Pv.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const vv = this._scene.activeCamera;
          Pv.setVector3("eyePosition", vv.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), Pv.setTexture("rampSampler", this._rampGradientsTexture));
        const pv = Pv.defines;
        this._scene && ((0, Mv.e)(Pv, this, this._scene), this.applyFog && (0, yv.g)(this._scene, void 0, Pv)), pv.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Sv.invertToRef(ev.i.Matrix[0]), Pv.setMatrix("invView", ev.i.Matrix[0])), Pv._multiTarget && this._bindGeometryRendering(Pv), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? hv.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, Pv) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, Pv)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? hv.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, Pv) : hv.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, Pv), this.useLogarithmicDepth && this._scene && (0, yv.u)(pv, Pv, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(Pv), this._setEngineBasedOnBlendMode(vv), Pv._multiTarget && Uz.d._BindZeroAlphaDiscard(hv, Pv);
        let dv = !1;
        try {
          Uz.d._BindAttachmentsForEffect(hv, Pv) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(Pv), this._useInstancing ? this._scene?.forceWireframe ? hv.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : hv.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? hv.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : hv.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), dv = !0)
        } finally {
          Uz.d._RestoreAttachments(hv)
        }
        return dv ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const vv = this._engine;
        let zv;
        return vv.setState && (vv.setState(!1), this.forceDepthWrite && vv.setDepthWrite(!0)), zv = this.blendMode === fv.BLENDMODE_MULTIPLYADD ? this._render(fv.BLENDMODE_MULTIPLY) + this._render(fv.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), zv
      }
      _onDispose() {}
      dispose() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), vv && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), vv && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(zv, Pv), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const vv = this._scene.mF.indexOf(this);
          vv > -1 && this._scene.mF.splice(vv, 1), this._scene._activeParticleSystems.dispose()
        }
        this.uD.notifyObservers(this), this.uD.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Rz.ForceGLSL = !1;
    var xz, tz = Pv(36631);
    ! function(vv) {
      vv[vv.ATTACHED = 0] = "ATTACHED", vv[vv.END = 1] = "END"
    }(xz || (xz = {}));
    class qz {
      constructor(vv) {
        if (this.particleSystem = vv, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !vv.emitter || !vv.emitter.dispose) {
          const zv = (0, tz.b)("BABYLON.AbstractMesh");
          vv.emitter = new zv("SubemitterSystemEmitter", vv.rD()), vv._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let vv = this.particleSystem.emitter;
        if (vv) {
          if (vv instanceof ev.l) vv = vv.clone();
          else if (-1 !== vv.getClassName().indexOf("Mesh")) {
            vv = new((0, tz.b)("BABYLON.Mesh"))("", vv.rD()), vv.isVisible = !1
          }
        } else vv = new ev.l;
        const zv = new qz(this.particleSystem.clone(this.particleSystem.name, vv));
        return zv.particleSystem.name += "Clone", zv.type = this.type, zv.inheritDirection = this.inheritDirection, zv.inheritedVelocityAmount = this.inheritedVelocityAmount, zv.particleSystem._disposeEmitterOnDispose = !0, zv.particleSystem.disposeOnStop = !0, zv
      }
      serialize() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = {};
        return zv.type = this.type, zv.inheritDirection = this.inheritDirection, zv.inheritedVelocityAmount = this.inheritedVelocityAmount, zv.particleSystem = this.particleSystem.serialize(vv), zv
      }
      static _ParseParticleSystem(vv, zv, Pv) {
        throw (0, Iv.m)("ParseParticle")
      }
      static Parse(vv, zv, Pv) {
        const hv = vv.particleSystem,
          Sv = new qz(qz._ParseParticleSystem(hv, zv, Pv, !0));
        return Sv.type = vv.type, Sv.inheritDirection = vv.inheritDirection, Sv.inheritedVelocityAmount = vv.inheritedVelocityAmount, Sv.particleSystem._isSubEmitter = !0, Sv
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Iz = Pv(39212),
      Qz = Pv(39312);
    const Zz = () => {};
    class Az {
      constructor() {
        this.particlePositionGenerator = Zz, this.particleDestinationGenerator = Zz, this.particleDirectionGenerator = Zz
      }
      startDirectionFunction(vv, zv, Pv, hv) {
        const Sv = ev.i.fa[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Zz) this.particleDirectionGenerator(-1, Pv, Sv);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Zz) {
          this.particleDestinationGenerator(-1, Pv, Sv);
          const vv = ev.i.fa[1];
          Sv.subtractToRef(Pv.position, vv), vv.scaleToRef(1 / Pv.lifeTime, Sv)
        } else Sv.set(0, 0, 0);
        hv ? zv.Vzv(Sv) : ev.l.TransformNormalToRef(Sv, vv, zv)
      }
      startPositionFunction(vv, zv, Pv, hv) {
        const Sv = ev.i.fa[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Zz ? this.particlePositionGenerator(-1, Pv, Sv) : Sv.set(0, 0, 0), hv ? zv.Vzv(Sv) : ev.l.TransformCoordinatesToRef(Sv, vv, zv)
      }
      clone() {
        const vv = new Az;
        return Wv.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {}
      buildUniformLayout(vv) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const vv = {};
        return vv.type = this.getClassName(), vv.particlePositionGenerator = this.particlePositionGenerator, vv.particleDestinationGenerator = this.particleDestinationGenerator, vv
      }
      parse(vv) {
        vv.particlePositionGenerator && (this.particlePositionGenerator = vv.particlePositionGenerator), vv.particleDestinationGenerator && (this.particleDestinationGenerator = vv.particleDestinationGenerator)
      }
    }
    const Lz = ev.l.Zero(),
      Hz = ev.l.Zero(),
      Mz = ev.l.Zero();
    class yz {
      constructor() {
        this.strength = 0, this.position = ev.l.Zero()
      }
      _processParticle(vv, zv) {
        this.position.subtractToRef(vv.position, Lz);
        const Pv = Lz.lengthSquared() + 1;
        Lz.normalize().scaleToRef(this.strength / Pv, Hz), Hz.scaleToRef(zv._tempScaledUpdateSpeed, Mz), vv.direction.addInPlace(Mz)
      }
      serialize() {
        return {
          position: this.position.pPv(),
          strength: this.strength
        }
      }
    }
    const Bz = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Jz extends Rz {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = vv => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const zv = Math.floor(Math.random() * this._subEmitters.length);
          for (const Pv of this._subEmitters[zv])
            if (1 === Pv.type) {
              const zv = Pv.clone();
              vv._inheritParticleInfoToSubEmitter(zv), zv.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(zv.particleSystem), zv.particleSystem.start()
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
      set flowMap(vv) {
        this._flowMap !== vv && (this._flowMap = vv, this._flowMapUpdate && (Vz(this._flowMapUpdate), this._flowMapUpdate = null), vv && (this._flowMapUpdate = {
          process: vv => {
            const zv = this.rD()?.getTransformMatrix();
            this._flowMap._processParticle(vv, this.flowMapStrength * this._tempScaledUpdateSpeed, zv)
          },
          previousItem: null,
          nextItem: null
        }, Kz(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(vv) {
        super.addAttractor(vv), 1 === this._attractors.length && (this._attractorUpdate = {
          process: vv => {
            for (const zv of this._attractors) zv._processParticle(vv, this)
          },
          previousItem: null,
          nextItem: null
        }, Kz(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(vv) {
        super.removeAttractor(vv), 0 === this._attractors.length && this._attractorUpdate && Vz(this._attractorUpdate)
      }
      start() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(vv)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const vv of this.subEmitters) vv instanceof Jz ? this._subEmitters.push([new qz(vv)]) : vv instanceof qz ? this._subEmitters.push([vv]) : vv instanceof Array && this._subEmitters.push(vv)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const vv of this.activeSubSystems) vv.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const vv = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== vv && this._rootParticleSystem.activeSubSystems.splice(vv, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(vv) {
        vv && this._stopSubEmitters()
      }
      _prepareParticle(vv) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const zv = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          vv._properties.attachedSubEmitters = [];
          for (const Pv of zv)
            if (0 === Pv.type) {
              const zv = Pv.clone();
              vv._properties.attachedSubEmitters.push(zv), zv.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), vv && this.particles)
          for (const Pv of this.particles)
            if (Pv._properties.attachedSubEmitters)
              for (let vv = Pv._properties.attachedSubEmitters.length - 1; vv >= 0; vv -= 1) Pv._properties.attachedSubEmitters[vv].dispose();
        if (zv && this.activeSubSystems)
          for (let Pv = this.activeSubSystems.length - 1; Pv >= 0; Pv -= 1) this.activeSubSystems[Pv].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let vv = 0; vv < this._subEmitters.length; vv++)
            for (const zv of this._subEmitters[vv]) zv.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(vv, zv, Pv, hv) {
        let Sv;
        Sv = Pv instanceof Iz.b ? null : Pv;
        const gv = (0, tz.b)("BABYLON.Texture");
        if (gv && Sv)
          if (vv.texture) zv.particleTexture = gv.Parse(vv.texture, Sv, hv);
          else if (vv.textureName) {
          const Pv = vv.textureSettings;
          if (zv.particleTexture = new gv(hv + vv.textureName, Sv, !1, void 0 === vv.invertY || vv.invertY, Pv ? Pv.samplingMode : void 0), zv.particleTexture.name = vv.textureName, Pv) {
            const vv = zv.particleTexture;
            for (const zv of Bz) void 0 !== Pv[zv] && (vv[zv] = Pv[zv])
          }
        }
        if (vv.emitterId || 0 === vv.emitterId || void 0 !== vv.emitter ? (vv.emitterId || 0 === vv.emitterId) && Sv ? (zv.emitter = Sv.getLastMeshById(vv.emitterId), zv.emitter || (zv.emitter = ev.l.Zero())) : zv.emitter = ev.l.FromArray(vv.emitter) : zv.emitter = ev.l.Zero(), zv.isLocal = !!vv.isLocal, void 0 !== vv.renderingGroupId && (zv.renderingGroupId = vv.renderingGroupId), void 0 !== vv.isBillboardBased && (zv.isBillboardBased = vv.isBillboardBased), void 0 !== vv.billboardMode && (zv.billboardMode = vv.billboardMode), void 0 !== vv.useLogarithmicDepth && (zv.useLogarithmicDepth = vv.useLogarithmicDepth), vv.animations) {
          for (let Pv = 0; Pv < vv.animations.length; Pv++) {
            const hv = vv.animations[Pv],
              Sv = (0, tz.b)("BABYLON.Animation");
            Sv && zv.animations.push(Sv.Parse(hv))
          }
          zv.beginAnimationOnStart = vv.beginAnimationOnStart, zv.beginAnimationFrom = vv.beginAnimationFrom, zv.beginAnimationTo = vv.beginAnimationTo, zv.beginAnimationLoop = vv.beginAnimationLoop
        }
        if (vv.autoAnimate && Sv && Sv.beginAnimation(zv, vv.autoAnimateFrom, vv.autoAnimateTo, vv.autoAnimateLoop, vv.autoAnimateSpeed || 1), zv.startDelay = 0 | vv.startDelay, zv.minAngularSpeed = vv.minAngularSpeed, zv.maxAngularSpeed = vv.maxAngularSpeed, zv.minSize = vv.minSize, zv.maxSize = vv.maxSize, vv.minScaleX && (zv.minScaleX = vv.minScaleX, zv.maxScaleX = vv.maxScaleX, zv.minScaleY = vv.minScaleY, zv.maxScaleY = vv.maxScaleY), void 0 !== vv.preWarmCycles && (zv.preWarmCycles = vv.preWarmCycles, zv.preWarmStepOffset = vv.preWarmStepOffset), void 0 !== vv.minInitialRotation && (zv.minInitialRotation = vv.minInitialRotation, zv.maxInitialRotation = vv.maxInitialRotation), zv.minLifeTime = vv.minLifeTime, zv.maxLifeTime = vv.maxLifeTime, zv.minEmitPower = vv.minEmitPower, zv.maxEmitPower = vv.maxEmitPower, zv.emitRate = vv.emitRate, zv.gravity = ev.l.FromArray(vv.gravity), vv.noiseStrength && (zv.noiseStrength = ev.l.FromArray(vv.noiseStrength)), zv.color1 = lv.e.FromArray(vv.color1), zv.color2 = lv.e.FromArray(vv.color2), zv.colorDead = lv.e.FromArray(vv.colorDead), zv.updateSpeed = vv.updateSpeed, zv.targetStopDuration = vv.targetStopDuration, zv.blendMode = vv.blendMode, vv.colorGradients)
          for (const ev of vv.colorGradients) zv.addColorGradient(ev.gradient, lv.e.FromArray(ev.color1), ev.color2 ? lv.e.FromArray(ev.color2) : void 0);
        if (vv.rampGradients) {
          for (const Pv of vv.rampGradients) zv.addRampGradient(Pv.gradient, lv.b.FromArray(Pv.color));
          zv.useRampGradients = vv.useRampGradients
        }
        if (vv.colorRemapGradients)
          for (const ev of vv.colorRemapGradients) zv.addColorRemapGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.alphaRemapGradients)
          for (const ev of vv.alphaRemapGradients) zv.addAlphaRemapGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.sizeGradients)
          for (const ev of vv.sizeGradients) zv.addSizeGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.angularSpeedGradients)
          for (const ev of vv.angularSpeedGradients) zv.addAngularSpeedGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.velocityGradients)
          for (const ev of vv.velocityGradients) zv.addVelocityGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.dragGradients)
          for (const ev of vv.dragGradients) zv.addDragGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.emitRateGradients)
          for (const ev of vv.emitRateGradients) zv.addEmitRateGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.startSizeGradients)
          for (const ev of vv.startSizeGradients) zv.addStartSizeGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.lifeTimeGradients)
          for (const ev of vv.lifeTimeGradients) zv.addLifeTimeGradient(ev.gradient, void 0 !== ev.factor1 ? ev.factor1 : ev.factor, ev.factor2);
        if (vv.limitVelocityGradients) {
          for (const Pv of vv.limitVelocityGradients) zv.addLimitVelocityGradient(Pv.gradient, void 0 !== Pv.factor1 ? Pv.factor1 : Pv.factor, Pv.factor2);
          zv.limitVelocityDamping = vv.limitVelocityDamping
        }
        if (vv.noiseTexture && Sv) {
          const Pv = (0, tz.b)("BABYLON.ProceduralTexture");
          zv.noiseTexture = Pv.Parse(vv.noiseTexture, Sv, hv)
        }
        let pv;
        if (vv.particleEmitterType) {
          switch (vv.particleEmitterType.type) {
            case "SphereParticleEmitter":
              pv = new Cv;
              break;
            case "SphereDirectedParticleEmitter":
              pv = new iv;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              pv = new Gv;
              break;
            case "ConeDirectedParticleEmitter":
              pv = new mv;
              break;
            case "CylinderParticleEmitter":
              pv = new cv.g;
              break;
            case "CylinderDirectedParticleEmitter":
              pv = new cv.d;
              break;
            case "HemisphericParticleEmitter":
              pv = new sv;
              break;
            case "PointParticleEmitter":
              pv = new av;
              break;
            case "MeshParticleEmitter":
              pv = new jv;
              break;
            case "CustomParticleEmitter":
              pv = new Az;
              break;
            default:
              pv = new Tv.c
          }
          pv.parse(vv.particleEmitterType, Sv)
        } else pv = new Tv.c, pv.parse(vv, Sv);
        zv.particleEmitterType = pv, zv.startSpriteCellID = vv.startSpriteCellID, zv.endSpriteCellID = vv.endSpriteCellID, zv.spriteCellLoop = vv.spriteCellLoop ?? !0, zv.spriteCellWidth = vv.spriteCellWidth, zv.spriteCellHeight = vv.spriteCellHeight, zv.spriteCellChangeSpeed = vv.spriteCellChangeSpeed, zv.spriteRandomStartCell = vv.spriteRandomStartCell, zv.disposeOnStop = vv.disposeOnStop ?? !1, zv.manualEmitCount = vv.manualEmitCount ?? -1
      }
      static Parse(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sv = arguments.length > 4 ? arguments[4] : void 0;
        const gv = vv.name;
        let pv, dv, Nv = null,
          Tv = null;
        if (zv instanceof Iz.b ? pv = zv : (dv = zv, pv = dv.ma()), vv.customShader && (0, Iv.e)(pv.createEffectForParticles)) {
          Tv = vv.customShader;
          const zv = Tv.shaderOptions.defines.length > 0 ? Tv.shaderOptions.defines.join("\n") : "";
          Nv = pv.createEffectForParticles(Tv.shaderPath.fragmentElement, Tv.shaderOptions.uniforms, Tv.shaderOptions.samplers, zv)
        }
        const Wv = new Jz(gv, Sv || vv.GT, zv, Nv, vv.isAnimationSheetEnabled);
        if (Wv.customShader = Tv, Wv._rootUrl = Pv, vv.id && (Wv.id = vv.id), vv.subEmitters) {
          Wv.subEmitters = [];
          for (const hv of vv.subEmitters) {
            const vv = [];
            for (const Sv of hv) vv.push(qz.Parse(Sv, zv, Pv));
            Wv.subEmitters.push(vv)
          }
        }
        if (vv.attractors)
          for (const lv of vv.attractors) {
            const vv = new yz;
            vv.position = ev.l.FromArray(lv.position), vv.strength = lv.strength, Wv.addAttractor(vv)
          }
        return Jz._Parse(vv, Wv, zv, Pv), vv.textureMask && (Wv.textureMask = lv.e.FromArray(vv.textureMask)), vv.worldOffset && (Wv.worldOffset = ev.l.FromArray(vv.worldOffset)), vv.preventAutoStart && (Wv.preventAutoStart = vv.preventAutoStart), vv.metadata && (Wv.metadata = vv.metadata), hv || Wv.preventAutoStart || Wv.start(), Wv
      }
      serialize() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = {};
        if (Jz._Serialize(zv, this, vv), zv.textureMask = this.textureMask.pPv(), zv.customShader = this.customShader, zv.preventAutoStart = this.preventAutoStart, zv.worldOffset = this.worldOffset.pPv(), this.metadata && (zv.metadata = this.metadata), this.subEmitters) {
          zv.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const Pv of this._subEmitters) {
            const hv = [];
            for (const zv of Pv) zv.particleSystem.doNotSerialize || hv.push(zv.serialize(vv));
            zv.subEmitters.push(hv)
          }
        }
        if (this._attractors && this._attractors.length) {
          zv.attractors = [];
          for (const vv of this._attractors) zv.attractors.push(vv.serialize())
        }
        return zv
      }
      static _Serialize(vv, zv, Pv) {
        if (vv.name = zv.name, vv.id = zv.id, vv.GT = zv.getCapacity(), vv.disposeOnStop = zv.disposeOnStop, vv.manualEmitCount = zv.manualEmitCount, zv.emitter.position) {
          const Pv = zv.emitter;
          vv.emitterId = Pv.id
        } else {
          const Pv = zv.emitter;
          vv.emitter = Pv.pPv()
        }
        if (zv.particleEmitterType && (vv.particleEmitterType = zv.particleEmitterType.serialize()), zv.particleTexture)
          if (Pv) vv.texture = zv.particleTexture.serialize();
          else {
            const Pv = zv.particleTexture;
            vv.textureName = zv.particleTexture.name, vv.invertY = !!Pv._invertY;
            const hv = {};
            for (const vv of Bz) hv[vv] = Pv[vv];
            hv.samplingMode = Pv.samplingMode, vv.textureSettings = hv
          } vv.isLocal = zv.isLocal, Qz.c.AppendSerializedAnimations(zv, vv), vv.beginAnimationOnStart = zv.beginAnimationOnStart, vv.beginAnimationFrom = zv.beginAnimationFrom, vv.beginAnimationTo = zv.beginAnimationTo, vv.beginAnimationLoop = zv.beginAnimationLoop, vv.startDelay = zv.startDelay, vv.renderingGroupId = zv.renderingGroupId, vv.isBillboardBased = zv.isBillboardBased, vv.billboardMode = zv.billboardMode, vv.minAngularSpeed = zv.minAngularSpeed, vv.maxAngularSpeed = zv.maxAngularSpeed, vv.minSize = zv.minSize, vv.maxSize = zv.maxSize, vv.minScaleX = zv.minScaleX, vv.maxScaleX = zv.maxScaleX, vv.minScaleY = zv.minScaleY, vv.maxScaleY = zv.maxScaleY, vv.minEmitPower = zv.minEmitPower, vv.maxEmitPower = zv.maxEmitPower, vv.minLifeTime = zv.minLifeTime, vv.maxLifeTime = zv.maxLifeTime, vv.emitRate = zv.emitRate, vv.gravity = zv.gravity.pPv(), vv.noiseStrength = zv.noiseStrength.pPv(), vv.color1 = zv.color1.pPv(), vv.color2 = zv.color2.pPv(), vv.colorDead = zv.colorDead.pPv(), vv.updateSpeed = zv.updateSpeed, vv.targetStopDuration = zv.targetStopDuration, vv.blendMode = zv.blendMode, vv.preWarmCycles = zv.preWarmCycles, vv.preWarmStepOffset = zv.preWarmStepOffset, vv.minInitialRotation = zv.minInitialRotation, vv.maxInitialRotation = zv.maxInitialRotation, vv.startSpriteCellID = zv.startSpriteCellID, vv.spriteCellLoop = zv.spriteCellLoop, vv.endSpriteCellID = zv.endSpriteCellID, vv.spriteCellChangeSpeed = zv.spriteCellChangeSpeed, vv.spriteCellWidth = zv.spriteCellWidth, vv.spriteCellHeight = zv.spriteCellHeight, vv.spriteRandomStartCell = zv.spriteRandomStartCell, vv.isAnimationSheetEnabled = zv.isAnimationSheetEnabled, vv.useLogarithmicDepth = zv.useLogarithmicDepth;
        const hv = zv.getColorGradients();
        if (hv) {
          vv.colorGradients = [];
          for (const zv of hv) {
            const Pv = {
              gradient: zv.gradient,
              color1: zv.color1.pPv()
            };
            zv.color2 ? Pv.color2 = zv.color2.pPv() : Pv.color2 = zv.color1.pPv(), vv.colorGradients.push(Pv)
          }
        }
        const Sv = zv.getRampGradients();
        if (Sv) {
          vv.rampGradients = [];
          for (const zv of Sv) {
            const Pv = {
              gradient: zv.gradient,
              color: zv.color.pPv()
            };
            vv.rampGradients.push(Pv)
          }
          vv.useRampGradients = zv.useRampGradients
        }
        const ev = zv.getColorRemapGradients();
        if (ev) {
          vv.colorRemapGradients = [];
          for (const zv of ev) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.colorRemapGradients.push(Pv)
          }
        }
        const gv = zv.getAlphaRemapGradients();
        if (gv) {
          vv.alphaRemapGradients = [];
          for (const zv of gv) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.alphaRemapGradients.push(Pv)
          }
        }
        const pv = zv.getSizeGradients();
        if (pv) {
          vv.sizeGradients = [];
          for (const zv of pv) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.sizeGradients.push(Pv)
          }
        }
        const dv = zv.getAngularSpeedGradients();
        if (dv) {
          vv.angularSpeedGradients = [];
          for (const zv of dv) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.angularSpeedGradients.push(Pv)
          }
        }
        const Nv = zv.getVelocityGradients();
        if (Nv) {
          vv.velocityGradients = [];
          for (const zv of Nv) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.velocityGradients.push(Pv)
          }
        }
        const lv = zv.getDragGradients();
        if (lv) {
          vv.dragGradients = [];
          for (const zv of lv) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.dragGradients.push(Pv)
          }
        }
        const Tv = zv.getEmitRateGradients();
        if (Tv) {
          vv.emitRateGradients = [];
          for (const zv of Tv) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.emitRateGradients.push(Pv)
          }
        }
        const Wv = zv.getStartSizeGradients();
        if (Wv) {
          vv.startSizeGradients = [];
          for (const zv of Wv) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.startSizeGradients.push(Pv)
          }
        }
        const wv = zv.getLifeTimeGradients();
        if (wv) {
          vv.lifeTimeGradients = [];
          for (const zv of wv) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.lifeTimeGradients.push(Pv)
          }
        }
        const av = zv.getLimitVelocityGradients();
        if (av) {
          vv.limitVelocityGradients = [];
          for (const zv of av) {
            const Pv = {
              gradient: zv.gradient,
              factor1: zv.factor1
            };
            void 0 !== zv.factor2 ? Pv.factor2 = zv.factor2 : Pv.factor2 = zv.factor1, vv.limitVelocityGradients.push(Pv)
          }
          vv.limitVelocityDamping = zv.limitVelocityDamping
        }
        zv.noiseTexture && (vv.noiseTexture = zv.noiseTexture.serialize())
      }
      clone(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = {
          ...this._customWrappers
        };
        let Sv = null;
        const ev = this._engine;
        if ((0, Iv.e)(ev.createEffectForParticles) && null != this.customShader) {
          Sv = this.customShader;
          const vv = Sv.shaderOptions.defines.length > 0 ? Sv.shaderOptions.defines.join("\n") : "",
            zv = ev.createEffectForParticles(Sv.shaderPath.fragmentElement, Sv.shaderOptions.uniforms, Sv.shaderOptions.samplers, vv);
          hv[0] ? hv[0].effect = zv : this.setCustomEffect(zv, 0)
        }
        const gv = this.serialize(Pv),
          pv = !1 === Pv && this.particleTexture ? this.particleTexture.clone() : null;
        pv && (gv.textureName = void 0);
        const dv = Jz.Parse(gv, this._scene || this._engine, this._rootUrl);
        return dv.name = vv, dv.customShader = Sv, dv._customWrappers = hv, pv && (dv.particleTexture = pv), void 0 === zv && (zv = this.emitter), this.noiseTexture && (dv.noiseTexture = this.noiseTexture.clone()), dv.emitter = zv, this.preventAutoStart || dv.start(), dv
      }
    }
    Jz.BILLBOARDMODE_Y = 2, Jz.BILLBOARDMODE_ALL = 7, Jz.BILLBOARDMODE_STRETCHED = 8, Jz.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Ez = !1;
    Ez || (Ez = !0, qz._ParseParticleSystem = Jz.Parse)
  },
  40941: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      SkyMaterial: () => Gv,
      _MaxColorValueForRenderTarget: () => cv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(39312),
      gv = Pv(36591),
      pv = Pv(39588),
      dv = Pv(39647),
      Nv = Pv(40906),
      lv = Pv(40454),
      Tv = Pv(39387),
      Wv = Pv(36631),
      wv = Pv(39682),
      av = Pv(39656),
      sv = Pv(39636),
      Cv = Pv(39629);
    class iv extends pv.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function cv(vv) {
      switch (vv) {
        case Nv.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Nv.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Gv = (() => {
      var vv;
      let zv, pv, Nv, Wv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv = dv.d,
        Rv = [],
        xv = [],
        tv = [],
        qv = [],
        Iv = [],
        Qv = [],
        Zv = [],
        Av = [],
        Lv = [],
        Hv = [],
        Mv = [],
        yv = [],
        Bv = [],
        Jv = [],
        Ev = [],
        ov = [],
        bv = [],
        rv = [],
        kv = [],
        Xv = [],
        uv = [],
        vz = [],
        zz = [],
        Pz = [],
        hz = [],
        Sz = [],
        ez = [],
        gz = [],
        pz = [],
        dz = [];
      return vv = class extends Uv {
        constructor(vv, zv) {
          super(vv, zv, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, hv.f)(this, Rv, 1), this.turbidity = ((0, hv.f)(this, xv), (0, hv.f)(this, tv, 10)), this.rayleigh = ((0, hv.f)(this, qv), (0, hv.f)(this, Iv, 2)), this.mieCoefficient = ((0, hv.f)(this, Qv), (0, hv.f)(this, Zv, .005)), this.mieDirectionalG = ((0, hv.f)(this, Av), (0, hv.f)(this, Lv, .8)), this.distance = ((0, hv.f)(this, Hv), (0, hv.f)(this, Mv, 500)), this.inclination = ((0, hv.f)(this, yv), (0, hv.f)(this, Bv, .49)), this.azimuth = ((0, hv.f)(this, Jv), (0, hv.f)(this, Ev, .25)), this.sunPosition = ((0, hv.f)(this, ov), (0, hv.f)(this, bv, new gv.fa(0, 100, 0))), this.useSunPosition = ((0, hv.f)(this, rv), (0, hv.f)(this, kv, !1)), this.cameraOffset = ((0, hv.f)(this, Xv), (0, hv.f)(this, uv, gv.fa.Zero())), this.up = ((0, hv.f)(this, vz), (0, hv.f)(this, zz, gv.fa.Up())), this.dithering = ((0, hv.f)(this, Pz), (0, hv.f)(this, hz, !1)), this.rawHdrOutput = ((0, hv.f)(this, Sz), (0, hv.f)(this, ez, !1)), this.cloudiness = ((0, hv.f)(this, gz), (0, hv.f)(this, pz, 0)), this._cameraPosition = ((0, hv.f)(this, dz), gv.fa.Zero()), this._skyOrientation = new gv.Quaternion
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
        isReadyForSubMesh(zv, Pv) {
          const hv = Pv._drawWrapper;
          if (this.isFrozen && hv.effect && hv._wasPreviouslyReady) return !0;
          Pv.materialDefines || (Pv.materialDefines = new iv);
          const Sv = Pv.materialDefines,
            ev = this.rD();
          if (this._isReadyForSubMesh(Pv)) return !0;
          if ((0, Cv.$)(zv, ev, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Sv, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, Cv.P)(zv, Sv, !0, !1), Sv.IMAGEPROCESSINGPOSTPROCESS !== ev.imageProcessingConfiguration.applyByPostProcess && Sv.markAsMiscDirty(), Sv.DITHER !== this.dithering && Sv.markAsMiscDirty(), Sv.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Sv.markAsMiscDirty(), Sv.isDirty) {
            Sv.markAsProcessed(), ev.resetCachedMaterial();
            const zv = new av.e;
            Sv.FOG && zv.addFallback(1, "FOG"), Sv.IMAGEPROCESSINGPOSTPROCESS = ev.imageProcessingConfiguration.applyByPostProcess, Sv.DITHER = this.dithering, Sv.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const hv = [lv.i.PositionKind];
            Sv.VERTEXCOLOR && hv.push(lv.i.ColorKind);
            const gv = "sky",
              pv = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, sv.c)(pv);
            const dv = Sv.toString();
            Pv.setEffect(ev.ma().createEffect(gv, {
              attributes: hv,
              uniformsNames: pv,
              uniformBuffersNames: [],
              samplers: [],
              defines: dv,
              fallbacks: zv,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: vv._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, ev.ma()), Sv, this._materialContext)
          }
          return !(!Pv.effect || !Pv.effect.isReady()) && (Sv._renderId = ev.getRenderId(), hv._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(vv, zv, Pv) {
          const hv = this.rD(),
            Sv = Pv.materialDefines;
          if (!Sv) return;
          const ev = Pv.effect;
          if (!ev) return;
          this._activeEffect = ev, this.bindOnlyWorldMatrix(vv), this._activeEffect.setMatrix("viewProjection", hv.getTransformMatrix()), this._mustRebind(hv, ev, Pv) && ((0, sv.e)(ev, this, hv), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, Cv.u)(Sv, ev, hv)), hv.fogEnabled && zv.applyFog && hv.fogMode !== Tv.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", hv.getViewMatrix()), (0, Cv.g)(hv, zv, this._activeEffect, this.rawHdrOutput);
          const pv = hv.activeCamera;
          if (pv) {
            const vv = pv.getWorldMatrix();
            this._cameraPosition.x = vv.m[12], this._cameraPosition.y = vv.m[13], this._cameraPosition.z = vv.m[14], this._activeEffect.setVector3("cameraPosition", gv.TmpVectors.fa[0].Vzv(this._cameraPosition).VPv(hv.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const vv = hv.ma()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", cv(vv?.texture?.type))
          }
          if (!this.useSunPosition) {
            const vv = Math.PI * (this.inclination - .5),
              zv = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(zv) * Math.cos(vv), this.sunPosition.y = this.distance * Math.sin(-vv), this.sunPosition.z = this.distance * Math.sin(zv) * Math.cos(vv), gv.Quaternion.FromUnitVectorsToRef(gv.fa.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(zv, this._activeEffect, Pv)
        }
        getAnimatables() {
          return []
        }
        dispose(vv) {
          super.dispose(vv)
        }
        clone(zv) {
          return ev.c.Clone((() => new vv(zv, this.rD())), this)
        }
        serialize() {
          const vv = super.serialize();
          return vv.customType = "BABYLON.SkyMaterial", vv
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(zv, Pv, hv) {
          return ev.c.Parse((() => new vv(zv.name, Pv)), zv, Pv, hv)
        }
      }, (() => {
        const Pv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Uv[Symbol.metadata] ?? null) : void 0;
        zv = [(0, Sv.L)()], pv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], Wv = [(0, Sv.L)()], Gv = [(0, Sv.L)()], mv = [(0, Sv.L)()], jv = [(0, Sv.L)()], fv = [(0, Sv.L)()], Fv = [(0, Sv.I)()], Yv = [(0, Sv.L)()], nv = [(0, Sv.I)()], Ov = [(0, Sv.I)()], Dv = [(0, Sv.L)()], Kv = [(0, Sv.L)()], Vv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: vv => "luminance" in vv,
            get: vv => vv.luminance,
            set: (vv, zv) => {
              vv.luminance = zv
            }
          },
          metadata: Pv
        }, Rv, xv), (0, hv.e)(null, null, pv, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: vv => "turbidity" in vv,
            get: vv => vv.turbidity,
            set: (vv, zv) => {
              vv.turbidity = zv
            }
          },
          metadata: Pv
        }, tv, qv), (0, hv.e)(null, null, Nv, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: vv => "rayleigh" in vv,
            get: vv => vv.rayleigh,
            set: (vv, zv) => {
              vv.rayleigh = zv
            }
          },
          metadata: Pv
        }, Iv, Qv), (0, hv.e)(null, null, Wv, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: vv => "mieCoefficient" in vv,
            get: vv => vv.mieCoefficient,
            set: (vv, zv) => {
              vv.mieCoefficient = zv
            }
          },
          metadata: Pv
        }, Zv, Av), (0, hv.e)(null, null, Gv, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: vv => "mieDirectionalG" in vv,
            get: vv => vv.mieDirectionalG,
            set: (vv, zv) => {
              vv.mieDirectionalG = zv
            }
          },
          metadata: Pv
        }, Lv, Hv), (0, hv.e)(null, null, mv, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: vv => "distance" in vv,
            get: vv => vv.distance,
            set: (vv, zv) => {
              vv.distance = zv
            }
          },
          metadata: Pv
        }, Mv, yv), (0, hv.e)(null, null, jv, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: vv => "inclination" in vv,
            get: vv => vv.inclination,
            set: (vv, zv) => {
              vv.inclination = zv
            }
          },
          metadata: Pv
        }, Bv, Jv), (0, hv.e)(null, null, fv, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: vv => "azimuth" in vv,
            get: vv => vv.azimuth,
            set: (vv, zv) => {
              vv.azimuth = zv
            }
          },
          metadata: Pv
        }, Ev, ov), (0, hv.e)(null, null, Fv, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: vv => "sunPosition" in vv,
            get: vv => vv.sunPosition,
            set: (vv, zv) => {
              vv.sunPosition = zv
            }
          },
          metadata: Pv
        }, bv, rv), (0, hv.e)(null, null, Yv, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: vv => "useSunPosition" in vv,
            get: vv => vv.useSunPosition,
            set: (vv, zv) => {
              vv.useSunPosition = zv
            }
          },
          metadata: Pv
        }, kv, Xv), (0, hv.e)(null, null, nv, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: vv => "cameraOffset" in vv,
            get: vv => vv.cameraOffset,
            set: (vv, zv) => {
              vv.cameraOffset = zv
            }
          },
          metadata: Pv
        }, uv, vz), (0, hv.e)(null, null, Ov, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: vv => "up" in vv,
            get: vv => vv.up,
            set: (vv, zv) => {
              vv.up = zv
            }
          },
          metadata: Pv
        }, zz, Pz), (0, hv.e)(null, null, Dv, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: vv => "dithering" in vv,
            get: vv => vv.dithering,
            set: (vv, zv) => {
              vv.dithering = zv
            }
          },
          metadata: Pv
        }, hz, Sz), (0, hv.e)(null, null, Kv, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: vv => "rawHdrOutput" in vv,
            get: vv => vv.rawHdrOutput,
            set: (vv, zv) => {
              vv.rawHdrOutput = zv
            }
          },
          metadata: Pv
        }, ez, gz), (0, hv.e)(null, null, Vv, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: vv => "cloudiness" in vv,
            get: vv => vv.cloudiness,
            set: (vv, zv) => {
              vv.cloudiness = zv
            }
          },
          metadata: Pv
        }, pz, dz), Pv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pv
        })
      })(), vv._ShaderLoader = new wv.e((() => [Pv.e(321).then((() => Pv(60635))), Pv.e(314).then((() => Pv(60639)))]), (() => [Pv.e(338).then((() => Pv(60645))), Pv.e(332).then((() => Pv(60652)))])), vv
    })();
    (0, Wv.c)("BABYLON.SkyMaterial", Gv)
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
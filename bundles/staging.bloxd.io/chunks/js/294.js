export const id = 294;
export const ids = [294];
export const modules = {
  40748: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(39205),
      Mb = Ub(40751);
    class Tb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = Ub, this.nUb = [], this._maxBlockCapacity = ab || 64, this._selectionContent = new Ab.e(1024), this._creationFunc = bb
      }
      update(bb, ab, Ub) {
        Mb.b._CreateBlocks(bb, ab, Ub, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      rUb(bb) {
        for (let ab = 0; ab < this.blocks.length; ab++) {
          this.blocks[ab].addEntry(bb)
        }
      }
      iW(bb) {
        for (let ab = 0; ab < this.blocks.length; ab++) {
          this.blocks[ab].removeEntry(bb)
        }
      }
      select(bb, ab) {
        this._selectionContent.reset();
        for (let Ub = 0; Ub < this.blocks.length; Ub++) {
          this.blocks[Ub].select(bb, this._selectionContent, ab)
        }
        return ab ? this._selectionContent.concat(this.nUb) : this._selectionContent.concatWithNoDuplicate(this.nUb), this._selectionContent
      }
      intersects(bb, ab, Ub) {
        this._selectionContent.reset();
        for (let Ab = 0; Ab < this.blocks.length; Ab++) {
          this.blocks[Ab].intersects(bb, ab, this._selectionContent, Ub)
        }
        return Ub ? this._selectionContent.concat(this.nUb) : this._selectionContent.concatWithNoDuplicate(this.nUb), this._selectionContent
      }
      intersectsRay(bb) {
        this._selectionContent.reset();
        for (let ab = 0; ab < this.blocks.length; ab++) {
          this.blocks[ab].intersectsRay(bb, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.nUb), this._selectionContent
      }
    }
    Tb.CreationFuncForMeshes = (bb, ab) => {
      const Ub = bb.DH();
      !bb.isBlocked && Ub.boundingBox.intersectsMinMax(ab.wUb, ab.tUb) && ab.entries.push(bb)
    }, Tb.CreationFuncForSubMeshes = (bb, ab) => {
      bb.DH().boundingBox.intersectsMinMax(ab.wUb, ab.tUb) && ab.entries.push(bb)
    }
  },
  40751: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(36401),
      Mb = Ub(39420);
    class Tb {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.entries = [], this.SUb = new Array, this._capacity = Ub, this._depth = Ab, this._maxDepth = Mb, this._creationFunc = Tb, this._minPoint = bb, this._maxPoint = ab, this.SUb.push(bb.clone()), this.SUb.push(ab.clone()), this.SUb.push(bb.clone()), this.SUb[2].x = ab.x, this.SUb.push(bb.clone()), this.SUb[3].y = ab.y, this.SUb.push(bb.clone()), this.SUb[4].z = ab.z, this.SUb.push(ab.clone()), this.SUb[5].z = bb.z, this.SUb.push(ab.clone()), this.SUb[6].x = bb.x, this.SUb.push(ab.clone()), this.SUb[7].y = bb.y
      }
      get PL() {
        return this._capacity
      }
      get wUb() {
        return this._minPoint
      }
      get tUb() {
        return this._maxPoint
      }
      addEntry(bb) {
        if (this.blocks)
          for (let ab = 0; ab < this.blocks.length; ab++) {
            this.blocks[ab].addEntry(bb)
          } else this._creationFunc(bb, this), this.entries.length > this.PL && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(bb) {
        if (this.blocks) {
          for (let ab = 0; ab < this.blocks.length; ab++) {
            this.blocks[ab].removeEntry(bb)
          }
          return
        }
        const ab = this.entries.indexOf(bb);
        ab > -1 && this.entries.splice(ab, 1)
      }
      addEntries(bb) {
        for (let ab = 0; ab < bb.length; ab++) {
          const Ub = bb[ab];
          this.addEntry(Ub)
        }
      }
      select(bb, ab, Ub) {
        if (Mb.e.IsInFrustum(this.SUb, bb)) {
          if (this.blocks) {
            for (let Ab = 0; Ab < this.blocks.length; Ab++) {
              this.blocks[Ab].select(bb, ab, Ub)
            }
            return
          }
          Ub ? ab.concat(this.entries) : ab.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(bb, ab, Ub, Ab) {
        if (Mb.e.IntersectsSphere(this._minPoint, this._maxPoint, bb, ab)) {
          if (this.blocks) {
            for (let Mb = 0; Mb < this.blocks.length; Mb++) {
              this.blocks[Mb].intersects(bb, ab, Ub, Ab)
            }
            return
          }
          Ab ? Ub.concat(this.entries) : Ub.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(bb, ab) {
        if (bb.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let Ub = 0; Ub < this.blocks.length; Ub++) {
              this.blocks[Ub].intersectsRay(bb, ab)
            }
            return
          }
          ab.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Tb._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(bb, ab, Ub, Mb, Eb, Yb, Bb, eb) {
        Bb.blocks = new Array;
        const vb = new Ab.m((ab.x - bb.x) / 2, (ab.y - bb.y) / 2, (ab.z - bb.z) / 2);
        for (let Ab = 0; Ab < 2; Ab++)
          for (let ab = 0; ab < 2; ab++)
            for (let Lb = 0; Lb < 2; Lb++) {
              const Pb = bb.add(vb.multiplyByFloats(Ab, ab, Lb)),
                Xb = bb.add(vb.multiplyByFloats(Ab + 1, ab + 1, Lb + 1)),
                jb = new Tb(Pb, Xb, Mb, Eb + 1, Yb, eb);
              jb.addEntries(Ub), Bb.blocks.push(jb)
            }
      }
    }
  },
  40759: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => vb
    });
    var Ab = Ub(39188),
      Mb = Ub(36401),
      Tb = Ub(39555),
      Eb = Ub(40705),
      Yb = Ub(39263),
      Bb = Ub(36425),
      eb = Ub(40748);
    class vb {
      constructor(bb) {
        this.name = Yb.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Eb.w(Mb.m.Zero(), new Mb.m(1, 1, 1)), (bb = bb || Bb.d.LastCreatedScene) && (this.ZR = bb, this.ZR.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.ZR.getActiveSubMeshCandidates = bb => this.getActiveSubMeshCandidates(bb), this.ZR.getCollidingSubMeshCandidates = (bb, ab) => this.getCollidingSubMeshCandidates(bb, ab), this.ZR.getIntersectingSubMeshCandidates = (bb, ab) => this.getIntersectingSubMeshCandidates(bb, ab))
      }
      register() {
        this.ZR.onMeshRemovedObservable.add((bb => {
          const ab = this.ZR.selectionOctree;
          if (void 0 !== ab && null !== ab) {
            const Ub = ab.nUb.indexOf(bb); - 1 !== Ub && ab.nUb.splice(Ub, 1)
          }
        })), this.ZR.onMeshImportedObservable.add((bb => {
          const ab = this.ZR.selectionOctree;
          void 0 !== ab && null !== ab && ab.rUb(bb)
        }))
      }
      getActiveMeshCandidates() {
        return this.ZR.EAb?.select(this.ZR.frustumPlanes) || this.ZR._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(bb) {
        if (bb._submeshesOctree && bb.useOctreeForRenderingSelection) {
          return bb._submeshesOctree.select(this.ZR.frustumPlanes)
        }
        return this.ZR._getDefaultSubMeshCandidates(bb)
      }
      getIntersectingSubMeshCandidates(bb, ab) {
        if (bb._submeshesOctree && bb.useOctreeForPicking) {
          Eb.w.TransformToRef(ab, bb.getWorldMatrix(), this._tempRay);
          return bb._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.ZR._getDefaultSubMeshCandidates(bb)
      }
      getCollidingSubMeshCandidates(bb, ab) {
        if (bb._submeshesOctree && bb.useOctreeForCollisions) {
          const Ub = ab._velocityWorldLength + Math.max(ab._radius.x, ab._radius.y, ab._radius.z);
          return bb._submeshesOctree.intersects(ab._basePointWorld, Ub)
        }
        return this.ZR._getDefaultSubMeshCandidates(bb)
      }
      rebuild() {}
      dispose() {}
    }
    let Lb = !1;
    Lb || (Lb = !0, Ab.e.prototype.createOrUpdateSelectionOctree = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        Ub = this._getComponent(Yb.b.NAME_OCTREE);
      Ub || (Ub = new vb(this), this.iUb(Ub)), this.EAb || (this.EAb = new eb.b(eb.b.CreationFuncForMeshes, bb, ab));
      const Ab = this.getWorldExtends();
      return this.EAb.update(Ab.min, Ab.max, this.meshes), this.EAb
    }, Object.defineProperty(Ab.e.prototype, "selectionOctree", {
      get: function() {
        return this.EAb
      },
      enumerable: !0,
      configurable: !0
    }), Tb.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Ub = this.oN();
      let Ab = Ub._getComponent(Yb.b.NAME_OCTREE);
      Ab || (Ab = new vb(Ub), Ub.iUb(Ab)), this._submeshesOctree || (this._submeshesOctree = new eb.b(eb.b.CreationFuncForSubMeshes, bb, ab)), this.computeWorldMatrix(!0);
      const Mb = this.DH().boundingBox;
      return this._submeshesOctree.update(Mb.minimumWorld, Mb.maximumWorld, this.mD), this._submeshesOctree
    })
  },
  40705: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ib,
      f: () => Rb,
      h: () => jb,
      j: () => Xb,
      n: () => Wb,
      q: () => Nb,
      r: () => fb,
      t: () => pb,
      u: () => mb,
      w: () => Lb
    });
    var Ab = Ub(36405),
      Mb = Ub(36401),
      Tb = Ub(36410),
      Eb = Ub(39404),
      Yb = Ub(39240),
      Bb = Ub(36425),
      eb = Ub(39285);
    const vb = {
      internalPickerForMesh: void 0
    };
    class Lb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ab.e;
        this.origin = bb, this.direction = ab, this.length = Ub, this.epsilon = Mb
      }
      clone() {
        return new Lb(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Ab = Lb._TmpVector3[0].K9(bb.x - Ub, bb.y - Ub, bb.z - Ub),
          Mb = Lb._TmpVector3[1].K9(ab.x + Ub, ab.y + Ub, ab.z + Ub);
        let Tb, Eb, Yb, Bb, eb = 0,
          vb = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Ab.x || this.origin.x > Mb.x) return !1
        } else if (Tb = 1 / this.direction.x, Eb = (Ab.x - this.origin.x) * Tb, Yb = (Mb.x - this.origin.x) * Tb, Yb === -1 / 0 && (Yb = 1 / 0), Eb > Yb && (Bb = Eb, Eb = Yb, Yb = Bb), eb = Math.max(Eb, eb), vb = Math.min(Yb, vb), eb > vb) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Ab.y || this.origin.y > Mb.y) return !1
        } else if (Tb = 1 / this.direction.y, Eb = (Ab.y - this.origin.y) * Tb, Yb = (Mb.y - this.origin.y) * Tb, Yb === -1 / 0 && (Yb = 1 / 0), Eb > Yb && (Bb = Eb, Eb = Yb, Yb = Bb), eb = Math.max(Eb, eb), vb = Math.min(Yb, vb), eb > vb) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Ab.z || this.origin.z > Mb.z) return !1
        } else if (Tb = 1 / this.direction.z, Eb = (Ab.z - this.origin.z) * Tb, Yb = (Mb.z - this.origin.z) * Tb, Yb === -1 / 0 && (Yb = 1 / 0), Eb > Yb && (Bb = Eb, Eb = Yb, Yb = Bb), eb = Math.max(Eb, eb), vb = Math.min(Yb, vb), eb > vb) return !1;
        return !0
      }
      intersectsBox(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(bb.minimum, bb.maximum, ab)
      }
      intersectsSphere(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = bb.center.x - this.origin.x,
          Ab = bb.center.y - this.origin.y,
          Mb = bb.center.z - this.origin.z,
          Tb = Ub * Ub + Ab * Ab + Mb * Mb,
          Eb = bb.radius + ab,
          Yb = Eb * Eb;
        if (Tb <= Yb) return !0;
        const Bb = Ub * this.direction.x + Ab * this.direction.y + Mb * this.direction.z;
        if (Bb < 0) return !1;
        return Tb - Bb * Bb <= Yb
      }
      intersectsTriangle(bb, ab, Ub) {
        const Ab = Lb._TmpVector3[0],
          Tb = Lb._TmpVector3[1],
          Yb = Lb._TmpVector3[2],
          Bb = Lb._TmpVector3[3],
          eb = Lb._TmpVector3[4];
        ab.subtractToRef(bb, Ab), Ub.subtractToRef(bb, Tb), Mb.m.CrossToRef(this.direction, Tb, Yb);
        const vb = Mb.m.Dot(Ab, Yb);
        if (0 === vb) return null;
        const Pb = 1 / vb;
        this.origin.subtractToRef(bb, Bb);
        const Xb = Mb.m.Dot(Bb, Yb) * Pb;
        if (Xb < -this.epsilon || Xb > 1 + this.epsilon) return null;
        Mb.m.CrossToRef(Bb, Ab, eb);
        const jb = Mb.m.Dot(this.direction, eb) * Pb;
        if (jb < -this.epsilon || Xb + jb > 1 + this.epsilon) return null;
        const Rb = Mb.m.Dot(Tb, eb) * Pb;
        return Rb > this.length || Rb < 0 ? null : new Eb.d(1 - Xb - jb, Xb, Rb)
      }
      intersectsPlane(bb) {
        let ab;
        const Ub = Mb.m.Dot(bb.normal, this.direction);
        if (Math.abs(Ub) < 9.99999997475243e-7) return null;
        {
          const Ab = Mb.m.Dot(bb.normal, this.origin);
          return ab = (-bb.d - Ab) / Ub, ab < 0 ? ab < -9.99999997475243e-7 ? null : 0 : ab
        }
      }
      intersectsAxis(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (bb) {
          case "y": {
            const bb = (this.origin.y - ab) / this.direction.y;
            return bb > 0 ? null : new Mb.m(this.origin.x + this.direction.x * -bb, ab, this.origin.z + this.direction.z * -bb)
          }
          case "x": {
            const bb = (this.origin.x - ab) / this.direction.x;
            return bb > 0 ? null : new Mb.m(ab, this.origin.y + this.direction.y * -bb, this.origin.z + this.direction.z * -bb)
          }
          case "z": {
            const bb = (this.origin.z - ab) / this.direction.z;
            return bb > 0 ? null : new Mb.m(this.origin.x + this.direction.x * -bb, this.origin.y + this.direction.y * -bb, ab)
          }
          default:
            return null
        }
      }
      fAb(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Tb = arguments.length > 4 ? arguments[4] : void 0,
          Eb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Yb = Mb.j.Matrix[0];
        return bb.getWorldMatrix().invertToRef(Yb), this._tmpRay ? Lb.TransformToRef(this, Yb, this._tmpRay) : this._tmpRay = Lb.Transform(this, Yb), bb.intersects(this._tmpRay, ab, Ub, Ab, Tb, Eb)
      }
      intersectsMeshes(bb, ab, Ub) {
        Ub ? Ub.length = 0 : Ub = [];
        for (let Ab = 0; Ab < bb.length; Ab++) {
          const Mb = this.fAb(bb[Ab], ab);
          Mb.hit && Ub.push(Mb)
        }
        return Ub.sort(this._comparePickingInfo), Ub
      }
      _comparePickingInfo(bb, ab) {
        return bb.distance < ab.distance ? -1 : bb.distance > ab.distance ? 1 : 0
      }
      intersectionSegment(bb, ab, Ub) {
        const Ab = this.origin,
          Tb = Mb.j.Pj[0],
          Eb = Mb.j.Pj[1],
          Yb = Mb.j.Pj[2],
          Bb = Mb.j.Pj[3];
        ab.subtractToRef(bb, Tb), this.direction.scaleToRef(Lb._Rayl, Yb), Ab.addToRef(Yb, Eb), bb.subtractToRef(Ab, Bb);
        const eb = Mb.m.Dot(Tb, Tb),
          vb = Mb.m.Dot(Tb, Yb),
          Pb = Mb.m.Dot(Yb, Yb),
          Xb = Mb.m.Dot(Tb, Bb),
          jb = Mb.m.Dot(Yb, Bb),
          Rb = eb * Pb - vb * vb;
        let kb, yb, Zb = Rb,
          Db = Rb;
        Rb < Lb._Smallnum ? (kb = 0, Zb = 1, yb = jb, Db = Pb) : (kb = vb * jb - Pb * Xb, yb = eb * jb - vb * Xb, kb < 0 ? (kb = 0, yb = jb, Db = Pb) : kb > Zb && (kb = Zb, yb = jb + vb, Db = Pb)), yb < 0 ? (yb = 0, -Xb < 0 ? kb = 0 : -Xb > eb ? kb = Zb : (kb = -Xb, Zb = eb)) : yb > Db && (yb = Db, -Xb + vb < 0 ? kb = 0 : -Xb + vb > eb ? kb = Zb : (kb = -Xb + vb, Zb = eb));
        const zb = Math.abs(kb) < Lb._Smallnum ? 0 : kb / Zb,
          xb = Math.abs(yb) < Lb._Smallnum ? 0 : yb / Db,
          ib = Mb.j.Pj[4];
        Yb.scaleToRef(xb, ib);
        const fb = Mb.j.Pj[5];
        Tb.scaleToRef(zb, fb), fb.addInPlace(Bb);
        const mb = Mb.j.Pj[6];
        fb.subtractToRef(ib, mb);
        return xb > 0 && xb <= this.length && mb.lengthSquared() < Ub * Ub ? fb.length() : -1
      }
      update(bb, ab, Ub, Ab, Tb, Eb, Yb) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Lb._RayDistant || (Lb._RayDistant = Lb.Zero()), Lb._RayDistant.unprojectRayToRef(bb, ab, Ub, Ab, Mb.b.IdentityReadOnly, Eb, Yb);
          const Bb = Mb.j.Matrix[0];
          Tb.invertToRef(Bb), Lb.TransformToRef(Lb._RayDistant, Bb, this)
        } else this.unprojectRayToRef(bb, ab, Ub, Ab, Tb, Eb, Yb);
        return this
      }
      static Zero() {
        return new Lb(Mb.m.Zero(), Mb.m.Zero())
      }
      static CreateNew(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        return Lb.Zero().update(bb, ab, Ub, Ab, Mb, Tb, Eb)
      }
      static CreateNewFromTo(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb.b.IdentityReadOnly;
        const Ab = new Lb(new Mb.m(0, 0, 0), new Mb.m(0, 0, 0));
        return Lb.CreateFromToToRef(bb, ab, Ab, Ub)
      }
      static CreateFromToToRef(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Mb.b.IdentityReadOnly;
        Ub.origin.EUb(bb);
        const Tb = ab.subtractToRef(bb, Ub.direction),
          Eb = Math.sqrt(Tb.x * Tb.x + Tb.y * Tb.y + Tb.z * Tb.z);
        return Ub.length = Eb, Ub.direction.normalize(), Lb.TransformToRef(Ub, Ab, Ub)
      }
      static Transform(bb, ab) {
        const Ub = new Lb(new Mb.m(0, 0, 0), new Mb.m(0, 0, 0));
        return Lb.TransformToRef(bb, ab, Ub), Ub
      }
      static TransformToRef(bb, ab, Ub) {
        Mb.m.TransformCoordinatesToRef(bb.origin, ab, Ub.origin), Mb.m.TransformNormalToRef(bb.direction, ab, Ub.direction), Ub.length = bb.length, Ub.epsilon = bb.epsilon;
        const Ab = Ub.direction,
          Tb = Ab.length();
        if (0 !== Tb && 1 !== Tb) {
          const bb = 1 / Tb;
          Ab.x *= bb, Ab.y *= bb, Ab.z *= bb, Ub.length *= Tb
        }
        return Ub
      }
      unprojectRayToRef(bb, ab, Ub, Ab, Tb, Eb, Yb) {
        const eb = Mb.j.Matrix[0];
        Tb.multiplyToRef(Eb, eb), eb.multiplyToRef(Yb, eb), eb.invert();
        const vb = Bb.d.LastCreatedEngine,
          Lb = Mb.j.Pj[0];
        Lb.x = bb / Ub * 2 - 1, Lb.y = -(ab / Ab * 2 - 1), Lb.z = vb?.hUb ? 1 : vb?.isNDCHalfZRange ? 0 : -1;
        const Pb = Mb.j.Pj[1].K9(Lb.x, Lb.y, 1 - 1e-8),
          Xb = Mb.j.Pj[2],
          jb = Mb.j.Pj[3];
        Mb.m.TransformCoordinatesToRef(Lb, eb, Xb), Mb.m.TransformCoordinatesToRef(Pb, eb, jb), this.origin.EUb(Xb), jb.subtractToRef(Xb, this.direction), this.direction.normalize()
      }
    }

    function Pb(bb, ab, Ub, Ab, Mb) {
      let Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Eb = Lb.Zero();
      return Xb(bb, ab, Ub, Ab, Eb, Mb, Tb), Eb
    }

    function Xb(bb, ab, Ub, Ab, Tb, Eb) {
      let Yb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Bb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const eb = bb.vj();
      if (!Eb && !(Eb = bb.activeCamera) && !(Eb = bb.cameraToUseForPointers)) return bb;
      const vb = Eb.viewport,
        Lb = eb.getRenderHeight(),
        {
          x: Pb,
          y: Xb,
          width: jb,
          height: Rb
        } = vb.toGlobal(eb.getRenderWidth(), Lb),
        kb = 1 / eb.getHardwareScalingLevel();
      return ab = ab * kb - Pb, Ub = Ub * kb - (Lb - Xb - Rb), Tb.update(ab, Ub, jb, Rb, Ab || Mb.b.IdentityReadOnly, Yb ? Mb.b.IdentityReadOnly : Eb.getViewMatrix(), Eb.getProjectionMatrix(), Bb), bb
    }

    function jb(bb, ab, Ub, Ab) {
      const Mb = Lb.Zero();
      return Rb(bb, ab, Ub, Mb, Ab), Mb
    }

    function Rb(bb, ab, Ub, Ab, Tb) {
      if (!Yb.e) return bb;
      const Eb = bb.vj();
      if (!Tb && !(Tb = bb.activeCamera) && !(Tb = bb.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Bb = Tb.viewport,
        eb = Eb.getRenderHeight(),
        {
          x: vb,
          y: Lb,
          width: Pb,
          height: Xb
        } = Bb.toGlobal(Eb.getRenderWidth(), eb),
        jb = Mb.b.Identity(),
        Rb = 1 / Eb.getHardwareScalingLevel();
      return ab = ab * Rb - vb, Ub = Ub * Rb - (eb - Lb - Xb), Ab.update(ab, Ub, Pb, Xb, jb, jb, Tb.getProjectionMatrix()), bb
    }

    function kb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
      return yb(bb, Ub, Ab, ab(Ab, Ub.enableDistantPicking), Mb, Tb, Eb, Yb)
    }

    function yb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
      const Bb = ab.intersects(Ab, Mb, Eb, Tb, Ub, Yb);
      return Bb && Bb.hit ? !Mb && null != bb && Bb.distance >= bb.distance ? null : Bb : null
    }

    function Zb(bb, ab) {
      return "InstancedLinesMesh" === bb || "LinesMesh" === bb ? ab.intersectionThreshold : 0
    }

    function Db(bb) {
      const ab = bb.getClassName();
      if ("GreasedLineMesh" === ab) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const Ub = bb.rawBoundingInfo;
      return {
        rawBoundingInfo: Ub,
        intersectionThreshold: Ub ? Zb(ab, bb) : 0
      }
    }

    function zb(bb, ab, Ub, Ab, Mb) {
      const Tb = bb(Ub, ab.enableDistantPicking);
      return Tb.intersectsSphere(Ab.BAb, Mb) && Tb.intersectsBox(Ab.boundingBox, Mb) ? Tb : null
    }

    function xb(bb, ab, Ub, Ab, Tb, Eb) {
      let Bb = null;
      const eb = !!(bb.activeCameras && bb.activeCameras.length > 1 && bb.cameraToUseForPointers !== bb.activeCamera),
        Lb = bb.cameraToUseForPointers || bb.activeCamera,
        Pb = vb.internalPickerForMesh || kb,
        Xb = Pb === kb;
      for (let Yb = 0; Yb < bb.meshes.length; Yb++) {
        const vb = bb.meshes[Yb];
        if (Ub) {
          if (!Ub(vb, -1)) continue
        } else if (!vb.isEnabled() || !vb.isVisible || !vb.zR) continue;
        const jb = eb && vb.isWorldMatrixCameraDependent(),
          Rb = vb.computeWorldMatrix(jb, Lb);
        if (vb.hasThinInstances && vb.Cbb) {
          const bb = Pb(Bb, ab, vb, Rb, !0, !0, Eb);
          if (bb) {
            if (Tb) return bb;
            const {
              rawBoundingInfo: Yb,
              intersectionThreshold: eb
            } = Db(vb), Lb = vb._thinInstanceDataStorage.matrixData;
            if (Lb) {
              const bb = Mb.j.Matrix[0],
                jb = Mb.j.Matrix[1],
                kb = Math.min(vb.W8, Lb.length >> 4);
              for (let Zb = 0; Zb < kb; Zb++) {
                if (Ub && !Ub(vb, Zb)) continue;
                Mb.b.FromArrayToRef(Lb, Zb << 4, bb), bb.multiplyToRef(Rb, jb);
                const kb = Xb && Yb ? zb(ab, vb, jb, Yb, eb) : null;
                if (Xb && Yb && !kb) continue;
                const Db = Xb && kb ? yb(Bb, vb, jb, kb, Ab, Tb, Eb, !0) : Pb(Bb, ab, vb, jb, Ab, Tb, Eb, !0);
                if (Db && (Bb = Db, Bb.thinInstanceIndex = Zb, Ab)) return Bb
              }
            }
          }
        } else {
          const bb = Pb(Bb, ab, vb, Rb, Ab, Tb, Eb);
          if (bb && (Bb = bb, Ab)) return Bb
        }
      }
      return Bb || new Yb.e
    }

    function ib(bb, ab, Ub, Ab) {
      if (!Yb.e) return null;
      const Tb = [],
        Eb = !!(bb.activeCameras && bb.activeCameras.length > 1 && bb.cameraToUseForPointers !== bb.activeCamera),
        Bb = bb.cameraToUseForPointers || bb.activeCamera,
        eb = vb.internalPickerForMesh || kb,
        Lb = eb === kb;
      for (let Yb = 0; Yb < bb.meshes.length; Yb++) {
        const vb = bb.meshes[Yb];
        if (Ub) {
          if (!Ub(vb, -1)) continue
        } else if (!vb.isEnabled() || !vb.isVisible || !vb.zR) continue;
        const Pb = Eb && vb.isWorldMatrixCameraDependent(),
          Xb = vb.computeWorldMatrix(Pb, Bb);
        if (vb.hasThinInstances && vb.Cbb) {
          if (eb(null, ab, vb, Xb, !0, !0, Ab)) {
            const {
              rawBoundingInfo: bb,
              intersectionThreshold: Eb
            } = Db(vb), Yb = vb._thinInstanceDataStorage.matrixData;
            if (Yb) {
              const Bb = Mb.j.Matrix[0],
                Pb = Mb.j.Matrix[1],
                jb = Math.min(vb.W8, Yb.length >> 4);
              for (let Rb = 0; Rb < jb; Rb++) {
                if (Ub && !Ub(vb, Rb)) continue;
                Mb.b.FromArrayToRef(Yb, Rb << 4, Bb), Bb.multiplyToRef(Xb, Pb);
                const jb = Lb && bb ? zb(ab, vb, Pb, bb, Eb) : null;
                if (Lb && bb && !jb) continue;
                const kb = Lb && jb ? yb(null, vb, Pb, jb, !1, !1, Ab, !0) : eb(null, ab, vb, Pb, !1, !1, Ab, !0);
                kb && (kb.thinInstanceIndex = Rb, Tb.push(kb))
              }
            }
          }
        } else {
          const bb = eb(null, ab, vb, Xb, !1, !1, Ab);
          bb && Tb.push(bb)
        }
      }
      return Tb
    }

    function fb(bb, ab, Ub, Ab, Tb, Eb) {
      if (!Yb.e) return null;
      const Bb = xb(bb, (Ab => (bb._tempPickingRay || (bb._tempPickingRay = Lb.Zero()), Xb(bb, ab, Ub, Ab, bb._tempPickingRay, Eb || null), bb._tempPickingRay)), Ab, Tb, !0);
      return Bb && (Bb.ray = Pb(bb, ab, Ub, Mb.b.Identity(), Eb || null)), Bb
    }

    function mb(bb, ab, Ub, Ab, Tb, Eb, Yb) {
      const Bb = xb(bb, ((Ab, Mb) => (bb._tempPickingRay || (bb._tempPickingRay = Lb.Zero()), Xb(bb, ab, Ub, Ab, bb._tempPickingRay, Eb || null, !1, Mb), bb._tempPickingRay)), Ab, Tb, !1, Yb);
      return Bb && (Bb.ray = Pb(bb, ab, Ub, Mb.b.Identity(), Eb || null)), Bb
    }

    function pb(bb, ab, Ub, Ab, Tb) {
      const Eb = xb(bb, (Ub => (bb._pickWithRayInverseMatrix || (bb._pickWithRayInverseMatrix = Mb.b.Identity()), Ub.invertToRef(bb._pickWithRayInverseMatrix), bb._cachedRayForTransform || (bb._cachedRayForTransform = Lb.Zero()), Lb.TransformToRef(ab, bb._pickWithRayInverseMatrix, bb._cachedRayForTransform), bb._cachedRayForTransform)), Ub, Ab, !1, Tb);
      return Eb && (Eb.ray = ab), Eb
    }

    function Nb(bb, ab, Ub, Ab, Mb, Tb) {
      return ib(bb, (Ab => Pb(bb, ab, Ub, Ab, Mb || null)), Ab, Tb)
    }

    function Wb(bb, ab, Ub, Ab) {
      return ib(bb, (Ub => (bb._pickWithRayInverseMatrix || (bb._pickWithRayInverseMatrix = Mb.b.Identity()), Ub.invertToRef(bb._pickWithRayInverseMatrix), bb._cachedRayForTransform || (bb._cachedRayForTransform = Lb.Zero()), Lb.TransformToRef(ab, bb._pickWithRayInverseMatrix, bb._cachedRayForTransform), bb._cachedRayForTransform)), Ub, Ab)
    }

    function Hb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Ab = arguments.length > 3 ? arguments[3] : void 0,
        Tb = arguments.length > 4 ? arguments[4] : void 0;
      Ab || (Ab = bb.getWorldMatrix()), ab.length = Ub, Tb ? ab.origin.EUb(Tb) : ab.origin.EUb(bb.position);
      const Eb = Mb.j.Pj[2];
      Eb.set(0, 0, bb._scene.useRightHandedSystem ? -1 : 1);
      const Yb = Mb.j.Pj[3];
      return Mb.m.TransformNormalToRef(Eb, Ab, Yb), Mb.m.NormalizeToRef(Yb, ab.direction), ab
    }

    function Ib(bb, ab) {
      ab && (ab.prototype.getForwardRay = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        return Hb(this, new Lb(Mb.m.Zero(), Mb.m.Zero(), bb), bb, ab, Ub)
      }, ab.prototype.getForwardRayToRef = function(bb) {
        return Hb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), bb && (eb.b._IsPickingAvailable = !0, bb.prototype.createPickingRay = function(bb, ab, Ub, Ab) {
        return Pb(this, bb, ab, Ub, Ab, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Lb._TmpVector3 = (0, Tb.b)(6, Mb.m.Zero), Lb._RayDistant = Lb.Zero(), Lb._Smallnum = 1e-8, Lb._Rayl = 1e9
  },
  40701: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb.w
    });
    var Ab = Ub(39188),
      Mb = Ub(39310),
      Tb = Ub(40705);
    let Eb = !1;
    Eb || (Eb = !0, (0, Tb.e)(Ab.e, Mb.b), Ab.e.prototype.createPickingRayToRef = function(bb, ab, Ub, Ab, Mb) {
      let Eb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Yb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Tb.j)(this, bb, ab, Ub, Ab, Mb, Eb, Yb)
    }, Ab.e.prototype.createPickingRayInCameraSpace = function(bb, ab, Ub) {
      return (0, Tb.h)(this, bb, ab, Ub)
    }, Ab.e.prototype.createPickingRayInCameraSpaceToRef = function(bb, ab, Ub, Ab) {
      return (0, Tb.f)(this, bb, ab, Ub, Ab)
    }, Ab.e.prototype.pickWithBoundingInfo = function(bb, ab, Ub, Ab, Mb) {
      return (0, Tb.r)(this, bb, ab, Ub, Ab, Mb)
    }, Ab.e.prototype.GP = function(bb, ab, Ub, Ab, Mb, Eb) {
      let Yb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Tb.u)(this, bb, ab, Ub, Ab, Mb, Eb, Yb)
    }, Ab.e.prototype.pickWithRay = function(bb, ab, Ub, Ab) {
      return (0, Tb.t)(this, bb, ab, Ub, Ab)
    }, Ab.e.prototype.multiPick = function(bb, ab, Ub, Ab, Mb) {
      return (0, Tb.q)(this, bb, ab, Ub, Ab, Mb)
    }, Ab.e.prototype.multiPickWithRay = function(bb, ab, Ub) {
      return (0, Tb.n)(this, bb, ab, Ub)
    })
  },
  40709: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => vb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36401),
      Eb = Ub(39359),
      Yb = Ub(40712),
      Bb = Ub(39314),
      eb = Ub(36447);
    let vb = (() => {
        var bb;
        let ab, Ub, Bb, eb, vb, Lb, Pb, Xb, jb = Yb.b,
          Rb = [],
          kb = [],
          yb = [],
          Zb = [],
          Db = [],
          zb = [],
          xb = [],
          ib = [],
          fb = [],
          mb = [],
          pb = [],
          Nb = [],
          Wb = [];
        return bb = class extends jb {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(bb) {
            this._shadowFrustumSize = bb, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(bb) {
            this._shadowOrthoScale = bb, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(bb) {
            this._orthoLeft = bb
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(bb) {
            this._orthoRight = bb
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(bb) {
            this._orthoTop = bb
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(bb) {
            this._orthoBottom = bb
          }
          constructor(bb, ab, Ub, Mb) {
            super(bb, Ub, Mb), this._shadowFrustumSize = ((0, Ab.k)(this, Rb), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Ab.k)(this, kb, !0), this.autoCalcShadowZBounds = ((0, Ab.k)(this, yb), (0, Ab.k)(this, Zb, !1)), this._orthoLeft = ((0, Ab.k)(this, Db), (0, Ab.k)(this, zb, Number.MAX_VALUE)), this._orthoRight = ((0, Ab.k)(this, xb), (0, Ab.k)(this, ib, Number.MIN_VALUE)), this._orthoTop = ((0, Ab.k)(this, fb), (0, Ab.k)(this, mb, Number.MIN_VALUE)), this._orthoBottom = ((0, Ab.k)(this, pb), (0, Ab.k)(this, Nb, Number.MAX_VALUE)), (0, Ab.k)(this, Wb), this.position = ab.scale(-1), this.direction = ab
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Eb.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(bb, ab, Ub) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(bb) : this._setDefaultAutoExtendShadowProjectionMatrix(bb, ab, Ub)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(bb) {
            const ab = this.oN().activeCamera;
            Tb.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : ab ? ab.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ab ? ab.maxZ : 1e4, bb, this.oN().vj().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(bb, ab, Ub) {
            const Ab = this.oN().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const bb = Tb.m.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Ab = Number.MAX_VALUE,
                Mb = -Number.MAX_VALUE;
              for (let Eb = 0; Eb < Ub.length; Eb++) {
                const Yb = Ub[Eb];
                if (!Yb) continue;
                const Bb = Yb.DH().boundingBox;
                for (let Ub = 0; Ub < Bb.vectorsWorld.length; Ub++) Tb.m.TransformCoordinatesToRef(Bb.vectorsWorld[Ub], ab, bb), bb.x < this._orthoLeft && (this._orthoLeft = bb.x), bb.y < this._orthoBottom && (this._orthoBottom = bb.y), bb.x > this._orthoRight && (this._orthoRight = bb.x), bb.y > this._orthoTop && (this._orthoTop = bb.y), this.autoCalcShadowZBounds && (bb.z < Ab && (Ab = bb.z), bb.z > Mb && (Mb = bb.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Ab, this._shadowMaxZ = Mb)
            }
            const Mb = this._orthoRight - this._orthoLeft,
              Eb = this._orthoTop - this._orthoBottom,
              Yb = void 0 !== this.shadowMinZ ? this.shadowMinZ : Ab?.minZ || 0,
              Bb = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Ab?.maxZ || 1e4,
              eb = this.oN().vj().hUb;
            Tb.b.OrthoOffCenterLHToRef(this._orthoLeft - Mb * this.shadowOrthoScale, this._orthoRight + Mb * this.shadowOrthoScale, this._orthoBottom - Eb * this.shadowOrthoScale, this._orthoTop + Eb * this.shadowOrthoScale, eb ? Bb : Yb, eb ? Yb : Bb, bb, this.oN().vj().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(bb, ab) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, ab), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, ab), this)
          }
          transferToNodeMaterialEffect(bb, ab) {
            return this.computeTransformedInformation() ? (bb.setFloat3(ab, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (bb.setFloat3(ab, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(bb) {
            const ab = this._scene.vj();
            return !ab.hUb && ab.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(bb) {
            const ab = this._scene.vj();
            return ab.hUb && ab.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(bb, ab) {
            bb["DIRLIGHT" + ab] = !0
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(jb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Bb = [(0, Mb.K)()], eb = [(0, Mb.K)()], vb = [(0, Mb.K)("orthoLeft")], Lb = [(0, Mb.K)("orthoRight")], Pb = [(0, Mb.K)("orthoTop")], Xb = [(0, Mb.K)("orthoBottom")], (0, Ab.h)(bb, null, ab, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: bb => "shadowFrustumSize" in bb,
              get: bb => bb.shadowFrustumSize
            },
            metadata: Tb
          }, null, Rb), (0, Ab.h)(bb, null, Ub, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "shadowOrthoScale" in bb,
              get: bb => bb.shadowOrthoScale
            },
            metadata: Tb
          }, null, Rb), (0, Ab.h)(null, null, Bb, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoUpdateExtends" in bb,
              get: bb => bb.autoUpdateExtends,
              set: (bb, ab) => {
                bb.autoUpdateExtends = ab
              }
            },
            metadata: Tb
          }, kb, yb), (0, Ab.h)(null, null, eb, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoCalcShadowZBounds" in bb,
              get: bb => bb.autoCalcShadowZBounds,
              set: (bb, ab) => {
                bb.autoCalcShadowZBounds = ab
              }
            },
            metadata: Tb
          }, Zb, Db), (0, Ab.h)(null, null, vb, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoLeft" in bb,
              get: bb => bb._orthoLeft,
              set: (bb, ab) => {
                bb._orthoLeft = ab
              }
            },
            metadata: Tb
          }, zb, xb), (0, Ab.h)(null, null, Lb, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoRight" in bb,
              get: bb => bb._orthoRight,
              set: (bb, ab) => {
                bb._orthoRight = ab
              }
            },
            metadata: Tb
          }, ib, fb), (0, Ab.h)(null, null, Pb, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoTop" in bb,
              get: bb => bb._orthoTop,
              set: (bb, ab) => {
                bb._orthoTop = ab
              }
            },
            metadata: Tb
          }, mb, pb), (0, Ab.h)(null, null, Xb, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoBottom" in bb,
              get: bb => bb._orthoBottom,
              set: (bb, ab) => {
                bb._orthoBottom = ab
              }
            },
            metadata: Tb
          }, Nb, Wb), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb
      })(),
      Lb = !1;
    Lb || (Lb = !0, Bb.c.AddNodeConstructor("Light_Type_1", ((bb, ab) => () => new vb(bb, Tb.m.Zero(), ab))), (0, eb.f)("BABYLON.DirectionalLight", vb))
  },
  40719: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => ga
    });
    var Ab = Ub(38015),
      Mb = Ub(36431),
      Tb = Ub(36401),
      Eb = Ub(39244),
      Yb = Ub(40727),
      Bb = Ub(36425),
      eb = Ub(39380),
      vb = Ub(36593),
      Lb = Ub(38020),
      Pb = Ub(37982),
      Xb = Ub(36436);
    class jb {
      constructor() {
        this.direction1 = new Tb.m(0, 1, 0), this.direction2 = new Tb.m(0, 1, 0)
      }
      startDirectionFunction(bb, ab, Ub, Ab) {
        const Mb = (0, Xb.RandomRange)(this.direction1.x, this.direction2.x),
          Eb = (0, Xb.RandomRange)(this.direction1.y, this.direction2.y),
          Yb = (0, Xb.RandomRange)(this.direction1.z, this.direction2.z);
        Ab ? ab.K9(Mb, Eb, Yb) : Tb.m.TransformNormalFromFloatsToRef(Mb, Eb, Yb, bb, ab)
      }
      startPositionFunction(bb, ab, Ub, Ab) {
        Ab ? ab.K9(0, 0, 0) : Tb.m.TransformCoordinatesFromFloatsToRef(0, 0, 0, bb, ab)
      }
      clone() {
        const bb = new jb;
        return Pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.qUb(), bb.direction2 = this.direction2.qUb(), bb
      }
      parse(bb) {
        Tb.m.FromArrayToRef(bb.direction1, 0, this.direction1), Tb.m.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    class Rb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = bb, this.radiusRange = ab, this.directionRandomizer = Ub
      }
      startDirectionFunction(bb, ab, Ub, Ab) {
        const Mb = Ub.position.subtract(bb.getTranslation()).normalize(),
          Eb = (0, Xb.RandomRange)(0, this.directionRandomizer),
          Yb = (0, Xb.RandomRange)(0, this.directionRandomizer),
          Bb = (0, Xb.RandomRange)(0, this.directionRandomizer);
        Mb.x += Eb, Mb.y += Yb, Mb.z += Bb, Mb.normalize(), Ab ? ab.EUb(Mb) : Tb.m.TransformNormalFromFloatsToRef(Mb.x, Mb.y, Mb.z, bb, ab)
      }
      startPositionFunction(bb, ab, Ub, Ab) {
        const Mb = this.radius - (0, Xb.RandomRange)(0, this.radius * this.radiusRange),
          Eb = (0, Xb.RandomRange)(0, 1),
          Yb = (0, Xb.RandomRange)(0, 2 * Math.PI),
          Bb = Math.acos(2 * Eb - 1),
          eb = Mb * Math.cos(Yb) * Math.sin(Bb),
          vb = Mb * Math.cos(Bb),
          Lb = Mb * Math.sin(Yb) * Math.sin(Bb);
        Ab ? ab.K9(eb, Math.abs(vb), Lb) : Tb.m.TransformCoordinatesFromFloatsToRef(eb, Math.abs(vb), Lb, bb, ab)
      }
      clone() {
        const bb = new Rb(this.radius, this.directionRandomizer);
        return Pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class kb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = bb, this.radiusRange = ab, this.directionRandomizer = Ub
      }
      startDirectionFunction(bb, ab, Ub, Ab) {
        const Mb = Ub.position.subtract(bb.getTranslation()).normalize(),
          Eb = (0, Xb.RandomRange)(0, this.directionRandomizer),
          Yb = (0, Xb.RandomRange)(0, this.directionRandomizer),
          Bb = (0, Xb.RandomRange)(0, this.directionRandomizer);
        Mb.x += Eb, Mb.y += Yb, Mb.z += Bb, Mb.normalize(), Ab ? ab.EUb(Mb) : Tb.m.TransformNormalFromFloatsToRef(Mb.x, Mb.y, Mb.z, bb, ab)
      }
      startPositionFunction(bb, ab, Ub, Ab) {
        const Mb = this.radius - (0, Xb.RandomRange)(0, this.radius * this.radiusRange),
          Eb = (0, Xb.RandomRange)(0, 1),
          Yb = (0, Xb.RandomRange)(0, 2 * Math.PI),
          Bb = Math.acos(2 * Eb - 1),
          eb = Mb * Math.cos(Yb) * Math.sin(Bb),
          vb = Mb * Math.cos(Bb),
          Lb = Mb * Math.sin(Yb) * Math.sin(Bb);
        Ab ? ab.K9(eb, vb, Lb) : Tb.m.TransformCoordinatesFromFloatsToRef(eb, vb, Lb, bb, ab)
      }
      clone() {
        const bb = new kb(this.radius, this.directionRandomizer);
        return Pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class yb extends kb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Tb.m(0, 1, 0),
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Tb.m(0, 1, 0);
        super(bb), this.direction1 = ab, this.direction2 = Ub
      }
      startDirectionFunction(bb, ab, Ub, Ab) {
        const Mb = (0, Xb.RandomRange)(this.direction1.x, this.direction2.x),
          Eb = (0, Xb.RandomRange)(this.direction1.y, this.direction2.y),
          Yb = (0, Xb.RandomRange)(this.direction1.z, this.direction2.z);
        Ab ? ab.K9(Mb, Eb, Yb) : Tb.m.TransformNormalFromFloatsToRef(Mb, Eb, Yb, bb, ab)
      }
      clone() {
        const bb = new yb(this.radius, this.direction1, this.direction2);
        return Pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.qUb(), bb.direction2 = this.direction2.qUb(), bb
      }
      parse(bb) {
        super.parse(bb), Tb.m.FromArrayToRef(bb.direction1, 0, this.direction1), Tb.m.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    var Zb = Ub(37979);
    class Db {
      get radius() {
        return this._radius
      }
      set radius(bb) {
        this._radius = bb, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(bb) {
        this._angle = bb, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = Ub, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = ab, this.radius = bb
      }
      startDirectionFunction(bb, ab, Ub, Ab) {
        const Mb = Ub.position.subtract(bb.getTranslation()).normalize(),
          Eb = (0, Xb.RandomRange)(0, this.directionRandomizer),
          Yb = (0, Xb.RandomRange)(0, this.directionRandomizer),
          Bb = (0, Xb.RandomRange)(0, this.directionRandomizer);
        Mb.x += Eb, Mb.y += Yb, Mb.z += Bb, Mb.normalize(), Ab ? ab.EUb(Mb) : Tb.m.TransformNormalFromFloatsToRef(Mb.x, Mb.y, Mb.z, bb, ab)
      }
      startPositionFunction(bb, ab, Ub, Ab) {
        const Mb = (0, Xb.RandomRange)(0, 2 * Math.PI);
        let Eb;
        this.emitFromSpawnPointOnly ? Eb = 1e-4 : (Eb = (0, Xb.RandomRange)(0, this.heightRange), Eb = 1 - Eb * Eb);
        let Yb = this._radius - (0, Xb.RandomRange)(0, this._radius * this.radiusRange);
        Yb *= Eb;
        const Bb = Yb * Math.sin(Mb),
          eb = Yb * Math.cos(Mb),
          vb = Eb * this._height;
        if (Ab) return ab.x = Bb, ab.y = vb, void(ab.z = eb);
        Tb.m.TransformCoordinatesFromFloatsToRef(Bb, vb, eb, bb, ab)
      }
      clone() {
        const bb = new Db(this._radius, this._angle, this.directionRandomizer);
        return Pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat2("radius", this._radius, this.radiusRange), bb.setFloat("coneAngle", this._angle), bb.setFloat2("height", this._height, this.heightRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 2), bb.addUniform("coneAngle", 1), bb.addUniform("height", 2), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let bb = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (bb += "\n#define CONEEMITTERSPAWNPOINT"), bb
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this._radius, bb.angle = this._angle, bb.directionRandomizer = this.directionRandomizer, bb.radiusRange = this.radiusRange, bb.heightRange = this.heightRange, bb.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.angle = bb.angle, this.directionRandomizer = bb.directionRandomizer, this.radiusRange = void 0 !== bb.radiusRange ? bb.radiusRange : 1, this.heightRange = void 0 !== bb.heightRange ? bb.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== bb.emitFromSpawnPointOnly && bb.emitFromSpawnPointOnly
      }
    }
    class zb extends Db {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Tb.m(0, 1, 0),
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Tb.m(0, 1, 0);
        super(bb, ab), this.direction1 = Ub, this.direction2 = Ab
      }
      startDirectionFunction(bb, ab, Ub, Ab) {
        const Mb = (0, Xb.RandomRange)(this.direction1.x, this.direction2.x),
          Eb = (0, Xb.RandomRange)(this.direction1.y, this.direction2.y),
          Yb = (0, Xb.RandomRange)(this.direction1.z, this.direction2.z);
        Ab ? ab.K9(Mb, Eb, Yb) : Tb.m.TransformNormalFromFloatsToRef(Mb, Eb, Yb, bb, ab)
      }
      clone() {
        const bb = new zb(this.radius, this.angle, this.direction1, this.direction2);
        return Pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        super.applyToShader(bb), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        super.buildUniformLayout(bb), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.qUb(), bb.direction2 = this.direction2.qUb(), bb
      }
      parse(bb) {
        super.parse(bb), Tb.m.FromArrayToRef(bb.direction1, 0, this.direction1), Tb.m.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    class xb {
      get mesh() {
        return this._mesh
      }
      set mesh(bb) {
        this._mesh !== bb && (this._mesh = bb, bb ? (this._indices = bb.uUb(), this._positions = bb.getVerticesData(Eb.m.PositionKind), this._normals = bb.getVerticesData(Eb.m.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Tb.m.Zero(), this._mesh = null, this.direction1 = new Tb.m(0, 1, 0), this.direction2 = new Tb.m(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = bb
      }
      startDirectionFunction(bb, ab, Ub, Ab) {
        if (this.useMeshNormalsForDirection && this._normals) return void Tb.m.TransformNormalToRef(this._storedNormal, bb, ab);
        const Mb = (0, Xb.RandomRange)(this.direction1.x, this.direction2.x),
          Eb = (0, Xb.RandomRange)(this.direction1.y, this.direction2.y),
          Yb = (0, Xb.RandomRange)(this.direction1.z, this.direction2.z);
        Ab ? ab.K9(Mb, Eb, Yb) : Tb.m.TransformNormalFromFloatsToRef(Mb, Eb, Yb, bb, ab)
      }
      startPositionFunction(bb, ab, Ub, Ab) {
        if (!this._indices || !this._positions) return;
        const Mb = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Eb = Math.random(),
          Yb = Math.random() * (1 - Eb),
          Bb = 1 - Eb - Yb,
          eb = this._indices[Mb],
          vb = this._indices[Mb + 1],
          Lb = this._indices[Mb + 2],
          Pb = Tb.j.Pj[0],
          Xb = Tb.j.Pj[1],
          jb = Tb.j.Pj[2],
          Rb = Tb.j.Pj[3];
        Tb.m.FromArrayToRef(this._positions, 3 * eb, Pb), Tb.m.FromArrayToRef(this._positions, 3 * vb, Xb), Tb.m.FromArrayToRef(this._positions, 3 * Lb, jb), Rb.x = Eb * Pb.x + Yb * Xb.x + Bb * jb.x, Rb.y = Eb * Pb.y + Yb * Xb.y + Bb * jb.y, Rb.z = Eb * Pb.z + Yb * Xb.z + Bb * jb.z, Ab ? ab.K9(Rb.x, Rb.y, Rb.z) : Tb.m.TransformCoordinatesFromFloatsToRef(Rb.x, Rb.y, Rb.z, bb, ab), this.useMeshNormalsForDirection && this._normals && (Tb.m.FromArrayToRef(this._normals, 3 * eb, Pb), Tb.m.FromArrayToRef(this._normals, 3 * vb, Xb), Tb.m.FromArrayToRef(this._normals, 3 * Lb, jb), this._storedNormal.x = Eb * Pb.x + Yb * Xb.x + Bb * jb.x, this._storedNormal.y = Eb * Pb.y + Yb * Xb.y + Bb * jb.y, this._storedNormal.z = Eb * Pb.z + Yb * Xb.z + Bb * jb.z)
      }
      clone() {
        const bb = new xb(this.mesh);
        return Pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.qUb(), bb.direction2 = this.direction2.qUb(), bb.meshId = this.mesh?.id, bb.useMeshNormalsForDirection = this.useMeshNormalsForDirection, bb
      }
      parse(bb, ab) {
        Tb.m.FromArrayToRef(bb.direction1, 0, this.direction1), Tb.m.FromArrayToRef(bb.direction2, 0, this.direction2), bb.meshId && ab && (this.mesh = ab.getLastMeshById(bb.meshId)), this.useMeshNormalsForDirection = bb.useMeshNormalsForDirection
      }
    }
    class ib {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(bb) {
        this._targetStopDuration !== bb && (this._targetStopDuration = bb)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(bb) {
        this._noiseTexture !== bb && (this._noiseTexture = bb, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(bb) {
        this._attractors.push(bb)
      }
      removeAttractor(bb) {
        const ab = this._attractors.indexOf(bb); - 1 !== ab && this._attractors.splice(ab, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(bb) {
        this._animationSheetEnabled !== bb && (this._animationSheetEnabled = bb)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(bb) {
        this._isAnimationSheetEnabled != bb && (this._isAnimationSheetEnabled = bb, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(bb) {
        this._useLogarithmicDepth = bb && this.oN().vj().getCaps().fragmentDepthSupported
      }
      oN() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(bb) {
        switch (bb) {
          case ib.BLENDMODE_MULTIPLYADD:
            return;
          case ib.BLENDMODE_ADD:
            bb = 1;
            break;
          case ib.BLENDMODE_ONEONE:
            bb = 6;
            break;
          case ib.BLENDMODE_STANDARD:
            bb = 2;
            break;
          case ib.BLENDMODE_MULTIPLY:
            bb = 4;
            break;
          case ib.BLENDMODE_SUBTRACT:
            bb = 3
        }
        this._engine.setAlphaMode(bb)
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
      addEmitRateGradient(bb, ab, Ub) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, bb, ab, Ub), this
      }
      removeEmitRateGradient(bb) {
        return this._removeFactorGradient(this._emitRateGradients, bb), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Tb.m.Zero()
      }
      set direction1(bb) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = bb)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Tb.m.Zero()
      }
      set direction2(bb) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = bb)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Tb.m.Zero()
      }
      set minEmitBox(bb) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = bb)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Tb.m.Zero()
      }
      set maxEmitBox(bb) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = bb)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(bb) {
        this._billboardMode !== bb && (this._billboardMode = bb, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(bb) {
        this._isBillboardBased !== bb && (this._isBillboardBased = bb, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(bb) {
        this._attachImageProcessingConfiguration(bb)
      }
      _attachImageProcessingConfiguration(bb) {
        bb !== this._imageProcessingConfiguration && (!bb && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = bb)
      }
      _reset() {}
      _addFactorGradient(bb, ab, Ub, Mb) {
        const Tb = new Ab.e(ab, Ub, Mb);
        bb.push(Tb), bb.sort(((bb, ab) => bb.gradient < ab.gradient ? -1 : bb.gradient > ab.gradient ? 1 : 0))
      }
      _removeFactorGradient(bb, ab) {
        if (!bb) return;
        let Ub = 0;
        for (const Ab of bb) {
          if (Ab.gradient === ab) {
            bb.splice(Ub, 1);
            break
          }
          Ub++
        }
      }
      _removeGradientAndTexture(bb, ab, Ub) {
        if (!ab) return this;
        let Ab = 0;
        for (const Mb of ab) {
          if (Mb.gradient === bb) {
            ab.splice(Ab, 1);
            break
          }
          Ab++
        }
        return Ub && Ub.dispose(), this
      }
      constructor(bb) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Tb.m.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Tb.m(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = ib.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Tb.l(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Tb.m(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Tb.m.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new vb.g(1, 1, 1, 1), this.color2 = new vb.g(1, 1, 1, 1), this.colorDead = new vb.g(0, 0, 0, 1), this.textureMask = new vb.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new eb.e, this.id = bb, this.name = bb
      }
      createPointEmitter(bb, ab) {
        const Ub = function(bb, ab) {
          const Ub = new jb;
          return Ub.direction1 = bb, Ub.direction2 = ab, Ub
        }(bb, ab);
        return this.particleEmitterType = Ub, Ub
      }
      createHemisphericEmitter() {
        const bb = function() {
          return new Rb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = bb, bb
      }
      createSphereEmitter() {
        const bb = function() {
          return new kb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = bb, bb
      }
      createDirectedSphereEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Tb.m(0, 1, 0),
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Tb.m(0, 1, 0);
          return new yb(bb, ab, Ub)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Tb.m(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Tb.m(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createCylinderEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new Zb.d(bb, ab, Ub, Ab)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = bb, bb
      }
      createDirectedCylinderEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Tb.m(0, 1, 0),
            Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Tb.m(0, 1, 0);
          return new Zb.c(bb, ab, Ub, Ab, Mb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Tb.m(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Tb.m(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createConeEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Db(bb, ab)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = bb, bb
      }
      createDirectedConeEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Tb.m(0, 1, 0),
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Tb.m(0, 1, 0);
          return new zb(bb, ab, Ub, Ab)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Tb.m(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Tb.m(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createBoxEmitter(bb, ab, Ub, Ab) {
        const Mb = new Lb.e;
        return this.particleEmitterType = Mb, this.direction1 = bb, this.direction2 = ab, this.minEmitBox = Ub, this.maxEmitBox = Ab, Mb
      }
      createMeshEmitter() {
        const bb = function() {
          return new xb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = bb, bb
      }
    }
    ib.BLENDMODE_ONEONE = 0, ib.BLENDMODE_STANDARD = 1, ib.BLENDMODE_ADD = 2, ib.BLENDMODE_MULTIPLY = 3, ib.BLENDMODE_MULTIPLYADD = 4, ib.BLENDMODE_SUBTRACT = -1;
    class fb {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new vb.g(0, 0, 0, 0), this.currentColor2 = new vb.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Tb.m.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class mb {
      constructor(bb) {
        this.particleSystem = bb, this.position = Tb.m.Zero(), this.direction = Tb.m.Zero(), this.color = new vb.g(0, 0, 0, 0), this.colorStep = new vb.g(0, 0, 0, 0), this.initialColor = new vb.g(0, 0, 0, 0), this.colorDead = new vb.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Tb.l(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new fb, this.id = mb._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let bb = this.age,
          ab = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === ab ? (ab = 1, bb = this._properties.randomCellOffset) : bb += this._properties.randomCellOffset);
        const Ub = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Ab;
        Ab = this._properties.initialSpriteCellLoop ? (0, Xb.Clamp)(bb * ab % this.lifeTime / this.lifeTime) : (0, Xb.Clamp)(bb * ab / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Ab * Ub | 0
      }
      _inheritParticleInfoToSubEmitter(bb) {
        if (bb.particleSystem.emitter.position) {
          const ab = bb.particleSystem.emitter;
          if (ab.position.EUb(this.position), bb.inheritDirection) {
            const bb = Tb.j.Pj[0];
            this.direction.normalizeToRef(bb), ab.setDirection(bb, 0, Math.PI / 2)
          }
        } else {
          bb.particleSystem.emitter.EUb(this.position)
        }
        this.direction.scaleToRef(bb.inheritedVelocityAmount / 2, Tb.j.Pj[0]), bb.particleSystem._inheritedVelocityOffset.EUb(Tb.j.Pj[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const bb of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(bb)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = mb._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(bb) {
        bb.position.EUb(this.position), this._properties.initialDirection ? bb._properties.initialDirection ? bb._properties.initialDirection.EUb(this._properties.initialDirection) : bb._properties.initialDirection = this._properties.initialDirection.clone() : bb._properties.initialDirection = null, bb.direction.EUb(this.direction), this._properties.localPosition && (bb._properties.localPosition ? bb._properties.localPosition.EUb(this._properties.localPosition) : bb._properties.localPosition = this._properties.localPosition.clone()), bb.color.EUb(this.color), bb.colorStep.EUb(this.colorStep), bb.initialColor.EUb(this.initialColor), bb.colorDead.EUb(this.colorDead), bb.lifeTime = this.lifeTime, bb.age = this.age, bb._properties.randomCellOffset = this._properties.randomCellOffset, bb.size = this.size, bb.scale.EUb(this.scale), bb.angle = this.angle, bb.angularSpeed = this.angularSpeed, bb.particleSystem = this.particleSystem, bb.cellIndex = this.cellIndex, bb.id = this.id, bb._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (bb._properties.currentColorGradient = this._properties.currentColorGradient, bb._properties.currentColor1.EUb(this._properties.currentColor1), bb._properties.currentColor2.EUb(this._properties.currentColor2)), this._properties.currentSizeGradient && (bb._properties.currentSizeGradient = this._properties.currentSizeGradient, bb._properties.currentSize1 = this._properties.currentSize1, bb._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (bb._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, bb._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, bb._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (bb._properties.currentVelocityGradient = this._properties.currentVelocityGradient, bb._properties.currentVelocity1 = this._properties.currentVelocity1, bb._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (bb._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, bb._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, bb._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (bb._properties.currentDragGradient = this._properties.currentDragGradient, bb._properties.currentDrag1 = this._properties.currentDrag1, bb._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (bb._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, bb._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, bb._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (bb.remapData && this.remapData ? bb.remapData.EUb(this.remapData) : bb.remapData = new Tb.o(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2 ? (bb._properties.randomNoiseCoordinates1.EUb(this._properties.randomNoiseCoordinates1), bb._properties.randomNoiseCoordinates2.EUb(this._properties.randomNoiseCoordinates2)) : (bb._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), bb._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), bb.metadata = this.metadata
      }
    }
    mb._Count = 0;
    var pb = Ub(40196);
    class Nb {
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
      constructor(bb, ab, Ub, Ab) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = ab, this.tC = bb, this._scene = Ub, this._host = Ab, this._activeTargets = [], ab._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            RT: this._getCorrectLoopMode()
          }, this._animation.dataType === pb.e.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Tb.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const bb = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, bb)
        }
        if (this.tC instanceof Array) {
          let bb = 0;
          for (const ab of this.tC) this._preparePath(ab, bb), this._getOriginalValues(bb), bb++;
          this._targetIsArray = !0
        } else this._preparePath(this.tC), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Mb = ab.getEvents();
        if (Mb && Mb.length > 0)
          for (const Tb of Mb) this._events.push(Tb._clone());
        this._enableBlending = bb && bb.animationPropertiesOverride ? bb.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = this._animation.targetPropertyPath;
        if (Ub.length > 1) {
          let Ab = bb;
          for (let bb = 0; bb < Ub.length - 1; bb++) {
            const ab = Ub[bb];
            if (Ab = Ab[ab], void 0 === Ab) throw new Error(`Invalid property (${ab}) in property path (${Ub.join(".")})`)
          }
          this._targetPath = Ub[Ub.length - 1], this._activeTargets[ab] = Ab
        } else this._targetPath = Ub[0], this._activeTargets[ab] = bb;
        if (void 0 === this._activeTargets[ab][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${Ub.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.tC instanceof Array) {
            let bb = 0;
            for (const ab of this.tC) void 0 !== this._originalValue[bb] && this._setValue(ab, this._activeTargets[bb], this._originalValue[bb], -1, bb), bb++
          } else void 0 !== this._originalValue[0] && this._setValue(this.tC, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let bb = 0; bb < this._events.length; bb++) this._events[bb].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const bb = this._animation.runtimeAnimations.indexOf(this);
        bb > -1 && this._animation.runtimeAnimations.splice(bb, 1)
      }
      setValue(bb, ab) {
        if (this._targetIsArray)
          for (let Ub = 0; Ub < this.tC.length; Ub++) {
            const Ab = this.tC[Ub];
            this._setValue(Ab, this._activeTargets[Ub], bb, ab, Ub)
          } else this._setValue(this.tC, this._directTarget, bb, ab, 0)
      }
      _getOriginalValues() {
        let bb, ab = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Ub = this._activeTargets[ab];
        if (pb.e.InheritOriginalValueFromActiveAnimations) {
          const bb = this._scene._activeAnimatables;
          for (let Ab = 0; Ab < bb.length; Ab++) {
            const Mb = bb[Ab]._runtimeAnimations;
            for (let bb = 0; bb < Mb.length; bb++) {
              const Ab = Mb[bb];
              if (Ab !== this && Ab._targetPath === this._targetPath)
                for (let bb = 0; bb < Ab._activeTargets.length; bb++)
                  if (Ab._activeTargets[bb] === Ub && void 0 !== Ab._originalValue[bb]) return void(Ab._originalValue[bb] && Ab._originalValue[bb].clone ? this._originalValue[ab] = Ab._originalValue[bb].clone() : this._originalValue[ab] = Ab._originalValue[bb])
            }
          }
        }
        bb = Ub.getLocalMatrix && "_matrix" === this._targetPath ? Ub.getLocalMatrix() : Ub[this._targetPath], bb && bb.clone ? this._originalValue[ab] = bb.clone() : this._originalValue[ab] = bb
      }
      _registerTargetForLateAnimationBinding(bb, ab) {
        const Ub = bb.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(Ub), Ub._lateAnimationHolders || (Ub._lateAnimationHolders = {}), Ub._lateAnimationHolders[bb.targetPath] || (Ub._lateAnimationHolders[bb.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: ab
        }), bb.isAdditive ? (Ub._lateAnimationHolders[bb.targetPath].additiveAnimations.push(bb), Ub._lateAnimationHolders[bb.targetPath].totalAdditiveWeight += bb.weight) : (Ub._lateAnimationHolders[bb.targetPath].animations.push(bb), Ub._lateAnimationHolders[bb.targetPath].totalWeight += bb.weight)
      }
      _setValue(bb, ab, Ub, Ab, Mb) {
        const Eb = this._scene._animationWrites,
          Yb = this._scene._animationWriteCount++;
        let Bb = Eb[Yb];
        if (Bb || (Bb = Eb[Yb] = {
            runtimeAnimation: this,
            target: bb,
            weight: Ab,
            additive: !1,
            blendingFactor: 1,
            qR: !1
          }), Bb.runtimeAnimation = this, Bb.target = bb, Bb.weight = Ab, Bb.additive = this.isAdditive, Bb.qR = !1, this._currentActiveTarget = ab, this._weight = Ab, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const bb = ab[this._targetPath];
            bb.clone ? this._originalBlendValue = bb.clone() : this._originalBlendValue = bb
          }
          this._originalBlendValue.m ? pb.e.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Tb.b.DecomposeLerpToRef(this._originalBlendValue, Ub, this._blendingFactor, this._currentValue) : this._currentValue = Tb.b.DecomposeLerp(this._originalBlendValue, Ub, this._blendingFactor) : this._currentValue ? Tb.b.LerpToRef(this._originalBlendValue, Ub, this._blendingFactor, this._currentValue) : this._currentValue = Tb.b.Lerp(this._originalBlendValue, Ub, this._blendingFactor) : this._currentValue = pb.e._UniversalLerp(this._originalBlendValue, Ub, this._blendingFactor);
          const Ab = bb && bb.animationPropertiesOverride ? bb.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Bb.blendingFactor = this._blendingFactor, this._blendingFactor += Ab
        } else Bb.blendingFactor = 1, this._currentValue ? this._currentValue.EUb ? this._currentValue.EUb(Ub) : this._currentValue = Ub : this._currentValue = Ub?.clone ? Ub.clone() : Ub; - 1 !== Ab ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Mb]) : this._animationState.RT === pb.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Mb], ab[this._targetPath]) : ab[this._targetPath] = this._originalValue[Mb] + this._currentValue : ab[this._targetPath] = this._currentValue, bb.Aab && bb.Aab(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.tC && this.tC.animationPropertiesOverride) {
          return "MorphTarget" === this.tC.getClassName?.() && null == this.tC._animationPropertiesOverride ? this._animation.RT : this.tC.animationPropertiesOverride.RT
        }
        return this._animation.RT
      }
      goToFrame(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const Ub = this._animation.getKeys();
        bb < Ub[0].frame ? bb = Ub[0].frame : bb > Ub[Ub.length - 1].frame && (bb = Ub[Ub.length - 1].frame);
        const Ab = this._events;
        if (Ab.length)
          for (let Tb = 0; Tb < Ab.length; Tb++) Ab[Tb].onlyOnce || (Ab[Tb].isDone = Ab[Tb].frame < bb);
        this._currentFrame = bb;
        const Mb = this._animation._interpolate(bb, this._animationState);
        this.setValue(Mb, ab)
      }
      _prepareForSpeedRatioChange(bb) {
        const ab = this._previousElapsedTime * (this._animation.framePerSecond * bb) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - ab
      }
      animate(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Eb = this._animation,
          Yb = Eb.targetPropertyPath;
        if (!Yb || Yb.length < 1) return this._stopped = !0, !1;
        let Bb, eb = !0;
        const vb = this._events;
        let Lb;
        if (this._coreRuntimeAnimation) Lb = Ub - ab, Bb = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Bb, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Tb;
          (ab < this._minFrame || ab > this._maxFrame) && (ab = this._minFrame), (Ub < this._minFrame || Ub > this._maxFrame) && (Ub = this._maxFrame), Lb = Ub - ab;
          let Yb = bb * (Eb.framePerSecond * Mb) / 1e3 + this._absoluteFrameOffset,
            Pb = 0,
            Xb = !1;
          const jb = Ab && this._animationState.RT === pb.e.ANIMATIONLOOPMODE_YOYO;
          if (jb) {
            const bb = (Yb - ab) / Lb,
              Ub = Math.sin(bb * Math.PI);
            Yb = Math.abs(Ub) * Lb + ab;
            const Ab = Ub >= 0 ? 1 : -1;
            this._yoyoDirection !== Ab && (Xb = !0), this._yoyoDirection = Ab
          }
          if (this._previousElapsedTime = bb, this._previousAbsoluteFrame = Yb, !Ab && Ub >= ab && (Yb >= Lb && Mb > 0 || Yb <= 0 && Mb < 0)) eb = !1, Pb = Eb.evaluate(Ub);
          else if (!Ab && ab >= Ub && (Yb <= Lb && Mb < 0 || Yb >= 0 && Mb > 0)) eb = !1, Pb = Eb.evaluate(ab);
          else if (this._animationState.RT !== pb.e.ANIMATIONLOOPMODE_CYCLE) {
            const bb = Ub.toString() + ab.toString();
            if (!this._offsetsCache[bb]) {
              this._animationState.repeatCount = 0, this._animationState.RT = pb.e.ANIMATIONLOOPMODE_CYCLE;
              const Ab = Eb._interpolate(ab, this._animationState),
                Mb = Eb._interpolate(Ub, this._animationState);
              switch (this._animationState.RT = this._getCorrectLoopMode(), Eb.dataType) {
                case pb.e.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[bb] = Mb - Ab;
                  break;
                case pb.e.ANIMATIONTYPE_QUATERNION:
                case pb.e.ANIMATIONTYPE_VECTOR3:
                case pb.e.ANIMATIONTYPE_VECTOR2:
                case pb.e.ANIMATIONTYPE_SIZE:
                case pb.e.ANIMATIONTYPE_COLOR3:
                case pb.e.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[bb] = Mb.subtract(Ab)
              }
              this._highLimitsCache[bb] = Mb
            }
            Pb = this._highLimitsCache[bb], Tb = this._offsetsCache[bb]
          }
          if (void 0 === Tb) switch (Eb.dataType) {
            case pb.e.ANIMATIONTYPE_FLOAT:
              Tb = 0;
              break;
            case pb.e.ANIMATIONTYPE_QUATERNION:
              Tb = pb.r;
              break;
            case pb.e.ANIMATIONTYPE_VECTOR3:
              Tb = pb.x;
              break;
            case pb.e.ANIMATIONTYPE_VECTOR2:
              Tb = pb.v;
              break;
            case pb.e.ANIMATIONTYPE_SIZE:
              Tb = pb.u;
              break;
            case pb.e.ANIMATIONTYPE_COLOR3:
              Tb = pb.m;
              break;
            case pb.e.ANIMATIONTYPE_COLOR4:
              Tb = pb.p
          }
          const Rb = this._host ? this._host.syncRoot : null;
          let kb, yb = this._playbackFrames,
            Zb = !1;
          if (Rb) {
            const bb = Rb.toFrame - Rb.fromFrame,
              Ub = Rb.masterFrame,
              Ab = (Ub - Rb.fromFrame) / bb;
            Bb = ab + Lb * Ab;
            const Mb = Rb.getAnimations()[0];
            if (Mb && 0 !== bb) {
              const bb = Lb * Ab,
                ab = Mb._playbackTo - Mb._playbackFrom;
              if (0 !== ab && Mb._playbackFrom <= Rb.fromFrame && Mb._playbackTo >= Rb.toFrame) {
                yb = Lb * Math.round((Mb._playbackFrames - (Mb._currentFrame - Mb._playbackFrom)) / ab) + bb
              } else Zb = (Ub - this._playbackSyncMasterFrame) * (Mb._playbackFrames - this._playbackSyncMasterPlayed) < 0, yb = bb;
              Zb = Zb || Mb._playbackJumped, this._playbackSyncMasterPlayed = Mb._playbackFrames, this._playbackSyncMasterFrame = Ub
            }
          } else Bb = Yb > 0 && ab > Ub || Yb < 0 && ab < Ub ? eb && 0 !== Lb ? Ub + Yb % Lb : ab : eb && 0 !== Lb ? ab + Yb % Lb : Ub;
          if (!jb && (Mb > 0 && this.currentFrame > Bb || Mb < 0 && this.currentFrame < Bb) || jb && Xb) {
            this._onLoop();
            for (let bb = 0; bb < vb.length; bb++) vb[bb].onlyOnce || (vb[bb].isDone = !1);
            this._animationState.key = Mb > 0 ? 0 : Eb.getKeys().length - 1
          }
          if (this._currentFrame = Bb, this._animationState.repeatCount = 0 === Lb ? 0 : Yb / Lb | 0, this._animationState.highLimitValue = Pb, this._animationState.offsetValue = Tb, this._playbackFrom = ab, this._playbackTo = Ub, this._playbackJumped = Zb, this._playbackSyncRoot = Rb, Rb) kb = yb;
          else if (eb) kb = jb ? Bb === ab && Yb === Ub ? Lb : Bb - ab : Yb;
          else {
            const bb = 0 !== Lb ? Math.floor(this._playbackFrames / Lb) : 0;
            kb = (Bb === Ub ? bb + 1 : bb) * Lb
          }
          this._playbackFrames = kb, this._playbackProgress = this._animationState.RT === pb.e.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Lb : kb
        }
        const Pb = Eb._interpolate(Bb, this._animationState);
        if (this.setValue(Pb, Tb), vb.length)
          for (let Xb = 0; Xb < vb.length; Xb++)
            if (Lb >= 0 && Bb >= vb[Xb].frame && vb[Xb].frame >= ab || Lb < 0 && Bb <= vb[Xb].frame && vb[Xb].frame <= ab) {
              const bb = vb[Xb];
              bb.isDone || (bb.onlyOnce && (vb.splice(Xb, 1), Xb--), bb.isDone = !0, bb.action(Bb))
            } return eb || (this._stopped = !0), eb
      }
    }
    var Wb = Ub(39010);
    class Hb {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(bb) {
        this._weight = -1 !== bb ? Math.min(Math.max(bb, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(bb) {
        for (let ab = 0; ab < this._runtimeAnimations.length; ab++) {
          this._runtimeAnimations[ab]._prepareForSpeedRatioChange(bb)
        }
        this._speedRatio = bb, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Yb = arguments.length > 6 ? arguments[6] : void 0,
          Bb = arguments.length > 7 ? arguments[7] : void 0,
          eb = arguments.length > 8 ? arguments[8] : void 0,
          vb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Lb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = ab, this.fromFrame = Ub, this.toFrame = Ab, this.loopAnimation = Tb, this.onAnimationEnd = Yb, this.onAnimationLoop = eb, this.isAdditive = vb, this.playOrder = Lb, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.jD = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Mb.b, this.onAnimationLoopObservable = new Mb.b, this._scene = bb, Bb && this.appendAnimations(ab, Bb), this._speedRatio = Eb, bb._activeAnimatables.push(this)
      }
      syncWith(bb) {
        if (this._syncRoot = bb, bb) {
          const bb = this._scene._activeAnimatables.indexOf(this);
          bb > -1 && (this._scene._activeAnimatables.splice(bb, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(bb, ab) {
        for (let Ub = 0; Ub < ab.length; Ub++) {
          const Ab = ab[Ub],
            Mb = new Nb(bb, Ab, this._scene, this);
          Mb._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Mb)
        }
      }
      getAnimationByTargetProperty(bb) {
        const ab = this._runtimeAnimations;
        for (let Ub = 0; Ub < ab.length; Ub++)
          if (ab[Ub].animation.targetProperty === bb) return ab[Ub].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(bb) {
        const ab = this._runtimeAnimations;
        for (let Ub = 0; Ub < ab.length; Ub++)
          if (ab[Ub].animation.targetProperty === bb) return ab[Ub];
        return null
      }
      reset() {
        const bb = this._runtimeAnimations;
        for (let ab = 0; ab < bb.length; ab++) bb[ab].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(bb) {
        const ab = this._runtimeAnimations;
        for (let Ub = 0; Ub < ab.length; Ub++) ab[Ub].animation.enableBlending = !0, ab[Ub].animation.blendingSpeed = bb
      }
      disableBlending() {
        const bb = this._runtimeAnimations;
        for (let ab = 0; ab < bb.length; ab++) bb[ab].animation.enableBlending = !1
      }
      goToFrame(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this._runtimeAnimations;
        if (Ub[0]) {
          const ab = Ub[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? Ub[0].currentFrame;
          const Ab = 0 === this.speedRatio ? 0 : (bb - this._frameToSyncFromJump) / ab * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Ab
        }
        for (let Ab = 0; Ab < Ub.length; Ab++) Ub[Ab].goToFrame(bb, ab ? this._weight : -1);
        this._goToFrame = bb
      }
      get paused() {
        return this.jD
      }
      pause() {
        this.jD || (this.jD = !0)
      }
      restart() {
        this.jD = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (bb || ab) {
          const Mb = this._scene._activeAnimatables.indexOf(this);
          if (Mb > -1) {
            const Tb = this._runtimeAnimations;
            for (let Ub = Tb.length - 1; Ub >= 0; Ub--) {
              const Ab = Tb[Ub];
              bb && Ab.animation.name != bb || (ab && !ab(Ab.target) || (Ab.dispose(), Tb.splice(Ub, 1)))
            }
            0 == Tb.length && (Ub || this._scene._activeAnimatables.splice(Mb, 1), Ab || this._raiseOnAnimationEnd())
          }
        } else {
          const bb = this._scene._activeAnimatables.indexOf(this);
          if (bb > -1) {
            Ub || this._scene._activeAnimatables.splice(bb, 1);
            const ab = this._runtimeAnimations;
            for (let bb = 0; bb < ab.length; bb++) ab[bb].dispose();
            this._runtimeAnimations.length = 0, Ab || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((bb => {
          this.onAnimationEndObservable.add((() => {
            bb(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(bb) {
        if (this.jD) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = bb), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = bb, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += bb - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Hb.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let ab = !1;
        const Ub = this._runtimeAnimations;
        let Ab;
        for (Ab = 0; Ab < Ub.length; Ab++) {
          const Mb = Ub[Ab].animate(bb - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          ab = ab || Mb
        }
        if (this.animationStarted = ab, !ab) {
          if (this.disposeOnEnd)
            for (Ab = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Ab, 1), Ab = 0; Ab < Ub.length; Ab++) Ub[Ab].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return ab
      }
    }

    function Ib(bb) {
      if (0 === bb.totalWeight && 0 === bb.totalAdditiveWeight) return bb.originalValue;
      let ab = 1;
      const Ub = Tb.j.Pj[0],
        Ab = Tb.j.Pj[1],
        Mb = Tb.j.Quaternion[0];
      let Eb = 0;
      const Yb = bb.animations[0],
        Bb = bb.originalValue;
      let eb, vb = !1;
      if (bb.totalWeight < 1) eb = 1 - bb.totalWeight, Bb.decompose(Ab, Mb, Ub);
      else {
        if (Eb = 1, ab = bb.totalWeight, eb = Yb.weight / ab, 1 == eb) {
          if (!bb.totalAdditiveWeight) return Yb.currentValue;
          vb = !0
        }
        Yb.currentValue.decompose(Ab, Mb, Ub)
      }
      if (!vb) {
        Ab.scaleInPlace(eb), Ub.scaleInPlace(eb), Mb.scaleInPlace(eb);
        for (let Yb = Eb; Yb < bb.animations.length; Yb++) {
          const Eb = bb.animations[Yb];
          if (0 === Eb.weight) continue;
          eb = Eb.weight / ab;
          const Bb = Tb.j.Pj[2],
            vb = Tb.j.Pj[3],
            Lb = Tb.j.Quaternion[1];
          Eb.currentValue.decompose(vb, Lb, Bb), vb.scaleAndAddToRef(eb, Ab), Lb.scaleAndAddToRef(Tb.e.Dot(Mb, Lb) > 0 ? eb : -eb, Mb), Bb.scaleAndAddToRef(eb, Ub)
        }
        Mb.normalize()
      }
      for (let Pb = 0; Pb < bb.additiveAnimations.length; Pb++) {
        const ab = bb.additiveAnimations[Pb];
        if (0 === ab.weight) continue;
        const Eb = Tb.j.Pj[2],
          Yb = Tb.j.Pj[3],
          Bb = Tb.j.Quaternion[1];
        ab.currentValue.decompose(Yb, Bb, Eb), Yb.multiplyToRef(Ab, Yb), Tb.m.LerpToRef(Ab, Yb, ab.weight, Ab), Mb.multiplyToRef(Bb, Bb), Tb.e.SlerpToRef(Mb, Bb, ab.weight, Mb), Eb.scaleAndAddToRef(ab.weight, Ub)
      }
      const Lb = Yb ? Yb._animationState.workValue : Tb.j.Matrix[0].clone();
      return Tb.b.ComposeToRef(Ab, Mb, Ub, Lb), Lb
    }

    function db(bb, ab) {
      if (0 === bb.totalWeight && 0 === bb.totalAdditiveWeight) return ab;
      const Ub = bb.animations[0],
        Ab = bb.originalValue;
      let Mb = ab;
      if (0 === bb.totalWeight && bb.totalAdditiveWeight > 0) Mb.EUb(Ab);
      else if (1 === bb.animations.length) {
        if (Tb.e.SlerpToRef(Ab, Ub.currentValue, Math.min(1, bb.totalWeight), Mb), 0 === bb.totalAdditiveWeight) return Mb
      } else if (bb.animations.length > 1) {
        let Ub, Eb, Yb = 1;
        if (bb.totalWeight < 1) {
          const ab = 1 - bb.totalWeight;
          Ub = [], Eb = [], Ub.push(Ab), Eb.push(ab)
        } else {
          if (2 === bb.animations.length && (Tb.e.SlerpToRef(bb.animations[0].currentValue, bb.animations[1].currentValue, bb.animations[1].weight / bb.totalWeight, ab), 0 === bb.totalAdditiveWeight)) return ab;
          Ub = [], Eb = [], Yb = bb.totalWeight
        }
        for (let ab = 0; ab < bb.animations.length; ab++) {
          const Ab = bb.animations[ab];
          Ub.push(Ab.currentValue), Eb.push(Ab.weight / Yb)
        }
        let Bb = 0;
        for (let bb = 0; bb < Ub.length;) bb ? (Bb += Eb[bb], Tb.e.SlerpToRef(Mb, Ub[bb], Eb[bb] / Bb, Mb), bb++) : (Tb.e.SlerpToRef(Ub[bb], Ub[bb + 1], Eb[bb + 1] / (Eb[bb] + Eb[bb + 1]), ab), Mb = ab, Bb = Eb[bb] + Eb[bb + 1], bb += 2)
      }
      for (let Eb = 0; Eb < bb.additiveAnimations.length; Eb++) {
        const ab = bb.additiveAnimations[Eb];
        0 !== ab.weight && (Mb.multiplyToRef(ab.currentValue, Tb.j.Quaternion[0]), Tb.e.SlerpToRef(Mb, Tb.j.Quaternion[0], ab.weight, Mb))
      }
      return Mb
    }

    function Fb(bb, ab) {
      ab && (ab.prototype.copyAnimationRange = function(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new pb.e(this.name, "_matrix", bb.animations[0].framePerSecond, pb.e.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Tb = bb.animations[0].getRange(ab);
        if (!Tb) return !1;
        const Eb = Tb.from,
          Yb = Tb.to,
          Bb = bb.animations[0].getKeys(),
          eb = bb.length,
          vb = bb.getParent(),
          Lb = this.getParent(),
          Pb = Ab && vb && eb && this.length && eb !== this.length,
          Xb = Pb && Lb && vb ? Lb.length / vb.length : 1,
          jb = Ab && !Lb && Mb && (1 !== Mb.x || 1 !== Mb.y || 1 !== Mb.z),
          Rb = this.animations[0].getKeys();
        let kb, yb, Zb;
        for (let Db = 0, zb = Bb.length; Db < zb; Db++) kb = Bb[Db], kb.frame >= Eb && kb.frame <= Yb && (Ab ? (Zb = kb.value.clone(), Pb ? (yb = Zb.getTranslation(), Zb.setTranslation(yb.scaleInPlace(Xb))) : jb && Mb ? (yb = Zb.getTranslation(), Zb.setTranslation(yb.multiplyInPlace(Mb))) : Zb = kb.value) : Zb = kb.value, Rb.push({
          frame: kb.frame + Ub,
          value: Zb
        }));
        return this.animations[0].createRange(ab, Eb + Ub, Yb + Ub), !0
      }), bb && (bb.prototype._animate = function(bb) {
        const ab = this._animationWrites,
          Ub = this._animationWriteCount;
        let Ab = 0;
        for (let Tb = this._animationStepWriteCount; Tb < Ub; Tb++) {
          const bb = ab[Tb];
          bb.qR && -1 === bb.weight || (bb.qR = !0, ab[Tb] = ab[Ab], ab[Ab] = bb, Ab++)
        }
        for (let Tb = Ab; Tb < Ub; Tb++) {
          const bb = ab[Tb];
          bb.runtimeAnimation = null, bb.target = null
        }
        if (this._animationWriteCount = Ab, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Mb = Wb.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Mb
        }
        this.deltaTime = void 0 !== bb ? bb : this.useConstantAnimationDeltaTime ? 16 : (Mb - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Mb;
        const Eb = this._activeAnimatables;
        if (0 === Eb.length) return;
        this._animationTime += this.deltaTime;
        const Yb = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Tb = 0; Tb < Eb.length; Tb++) {
          const bb = Eb[Tb];
          !bb._animate(Yb) && bb.disposeOnEnd && Tb--
        }! function(bb) {
          if (bb._registeredForLateAnimationBindings.length) {
            for (let ab = 0; ab < bb._registeredForLateAnimationBindings.length; ab++) {
              const Ub = bb._registeredForLateAnimationBindings.data[ab];
              for (const bb in Ub._lateAnimationHolders) {
                const ab = Ub._lateAnimationHolders[bb],
                  Ab = ab.animations[0],
                  Mb = ab.originalValue;
                if (void 0 === Mb || null === Mb) continue;
                const Eb = pb.e.AllowMatrixDecomposeForInterpolation && Mb.m;
                let Yb = Ub[bb];
                if (Eb) Yb = Ib(ab);
                else if (void 0 !== Mb.w) Yb = db(ab, Yb || Tb.e.Identity());
                else {
                  let bb = 0,
                    Ub = 1;
                  const Tb = Ab && Ab._animationState.RT === pb.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (ab.totalWeight < 1) Yb = Tb ? Mb.clone ? Mb.clone() : Mb : Ab && Mb.scale ? Mb.scale(1 - ab.totalWeight) : Ab ? Mb * (1 - ab.totalWeight) : Mb.clone ? Mb.clone() : Mb;
                  else if (Ab) {
                    Ub = ab.totalWeight;
                    const Eb = Ab.weight / Ub;
                    Yb = 1 !== Eb ? Ab.currentValue.scale ? Ab.currentValue.scale(Eb) : Ab.currentValue * Eb : (ab.animations.length > 1 || ab.additiveAnimations.length > 0) && Ab.currentValue.clone ? Ab.currentValue.clone() : Ab.currentValue, Tb && (Yb.addToRef ? Yb.addToRef(Mb, Yb) : Yb += Mb), bb = 1
                  }
                  for (let Ab = bb; Ab < ab.animations.length; Ab++) {
                    const bb = ab.animations[Ab],
                      Mb = bb.weight / Ub;
                    Mb && (bb.currentValue.scaleAndAddToRef ? bb.currentValue.scaleAndAddToRef(Mb, Yb) : Yb += bb.currentValue * Mb)
                  }
                  for (let Ab = 0; Ab < ab.additiveAnimations.length; Ab++) {
                    const bb = ab.additiveAnimations[Ab],
                      Ub = bb.weight;
                    Ub && (bb.currentValue.scaleAndAddToRef ? bb.currentValue.scaleAndAddToRef(Ub, Yb) : Yb += bb.currentValue * Ub)
                  }
                }
                Ub[bb] = Yb
              }
              Ub._lateAnimationHolders = {}
            }
            bb._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, bb.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((bb, ab) => bb.playOrder - ab.playOrder))
      }, bb.prototype.beginWeightedAnimation = function(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Eb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 ? arguments[7] : void 0,
          Bb = arguments.length > 8 ? arguments[8] : void 0,
          eb = arguments.length > 9 ? arguments[9] : void 0,
          vb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Lb = this.beginAnimation(bb, ab, Ub, Mb, Tb, Eb, Yb, !1, Bb, eb, vb);
        return Lb.weight = Ab, Lb
      }, bb.prototype.beginAnimation = function(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Tb = arguments.length > 5 ? arguments[5] : void 0,
          Eb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Bb = arguments.length > 8 ? arguments[8] : void 0,
          eb = arguments.length > 9 ? arguments[9] : void 0,
          vb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Mb < 0) {
          const bb = ab;
          ab = Ub, Ub = bb, Mb = -Mb
        }
        ab > Ub && (Mb = -Mb), Yb && this.stopAnimation(bb, void 0, Bb), Eb || (Eb = new Hb(this, bb, ab, Ub, Ab, Mb, Tb, void 0, eb, vb));
        const Lb = !Bb || Bb(bb);
        if (bb.animations && Lb && Eb.appendAnimations(bb, bb.animations), bb.getAnimatables) {
          const vb = bb.getAnimatables();
          for (let bb = 0; bb < vb.length; bb++) this.beginAnimation(vb[bb], ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb)
        }
        return Eb.reset(), Eb
      }, bb.prototype.beginHierarchyAnimation = function(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Eb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 ? arguments[7] : void 0,
          Bb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          eb = arguments.length > 9 ? arguments[9] : void 0,
          vb = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Lb = bb.getDescendants(ab),
          Pb = [];
        Pb.push(this.beginAnimation(bb, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, void 0, vb));
        for (const Xb of Lb) Pb.push(this.beginAnimation(Xb, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, void 0, vb));
        return Pb
      }, bb.prototype.beginDirectAnimation = function(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Tb < 0) {
          const bb = Ub;
          Ub = Ab, Ab = bb, Tb = -Tb
        }
        Ub > Ab && (Tb = -Tb);
        return new Hb(this, bb, Ub, Ab, Mb, Tb, arguments.length > 6 ? arguments[6] : void 0, ab, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, bb.prototype.beginDirectHierarchyAnimation = function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        let eb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const vb = bb.getDescendants(ab),
          Lb = [];
        Lb.push(this.beginDirectAnimation(bb, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb));
        for (const Pb of vb) Lb.push(this.beginDirectAnimation(Pb, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb));
        return Lb
      }, bb.prototype.getAnimatableByTarget = function(bb) {
        for (let ab = 0; ab < this._activeAnimatables.length; ab++)
          if (this._activeAnimatables[ab].target === bb) return this._activeAnimatables[ab];
        return null
      }, bb.prototype.getAllAnimatablesByTarget = function(bb) {
        const ab = [];
        for (let Ub = 0; Ub < this._activeAnimatables.length; Ub++) this._activeAnimatables[Ub].target === bb && ab.push(this._activeAnimatables[Ub]);
        return ab
      }, bb.prototype.stopAnimation = function(bb, ab, Ub) {
        const Ab = this.getAllAnimatablesByTarget(bb);
        for (const Mb of Ab) Mb.stop(ab, Ub)
      }, bb.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let bb = 0; bb < this._activeAnimatables.length; bb++) this._activeAnimatables[bb].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const bb of this.animationGroups) bb.stop()
      })
    }
    Hb.ProcessPausedAnimatables = !1;
    var hb, Gb = Ub(36410),
      Qb = Ub(39314),
      qb = Ub(38982);
    class ub extends Qb.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(bb) {
        (bb.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.EUb(bb), this._markAsDirtyAndDecompose())
      }
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(bb, ab.oN(), !1), this.name = bb, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = ab, this._localMatrix = Ab?.clone() ?? Tb.b.Identity(), this._restMatrix = Mb ?? this._localMatrix.clone(), this._bindMatrix = Eb ?? this._localMatrix.clone(), this._index = Yb, this._absoluteMatrix = new Tb.b, this._absoluteBindMatrix = new Tb.b, this._absoluteInverseBindMatrix = new Tb.b, this._finalMatrix = new Tb.b, ab.bones.push(this), this.setParent(Ub, !1), this._updateAbsoluteBindMatrices()
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
      set parent(bb) {
        this.setParent(bb)
      }
      setParent(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== bb) {
          if (this.parent) {
            const bb = this.parent.children.indexOf(this); - 1 !== bb && this.parent.children.splice(bb, 1)
          }
          this._parentNode = bb, this.parent && this.parent.children.push(this), ab && this._updateAbsoluteBindMatrices(), this.Aab()
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
      setRestMatrix(bb) {
        this._restMatrix.EUb(bb)
      }
      setRestPose(bb) {
        this.setRestMatrix(bb)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(bb) {
        this.i5(bb)
      }
      setBindPose(bb) {
        this.setBindMatrix(bb)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const bb = Tb.j.Pj[0],
            ab = Tb.j.Quaternion[0],
            Ub = Tb.j.Pj[1];
          this.getRestMatrix().decompose(bb, ab, Ub), this._linkedTransformNode.position.EUb(Ub), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Tb.e.Identity(), this._linkedTransformNode.rotationQuaternion.EUb(ab), this._linkedTransformNode.nY.EUb(bb)
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
      linkTransformNode(bb) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = bb, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.Xbb
      }
      set position(bb) {
        this._decompose(), this.Xbb.EUb(bb), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(bb) {
        this.setRotation(bb)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(bb) {
        this.setRotationQuaternion(bb)
      }
      get nY() {
        return this.getScale()
      }
      set nY(bb) {
        this.setScale(bb)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Tb.m.Zero(), this._localRotation = Tb.e.Zero(), this.Xbb = Tb.m.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Xbb))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Tb.b.ComposeToRef(this._localScaling, this._localRotation, this.Xbb, this._localMatrix)) : this._needToCompose = !1)
      }
      i5(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.EUb(bb), ab && this._updateAbsoluteBindMatrices(), Ub ? this._matrix = bb : this.Aab()
      }
      _updateAbsoluteBindMatrices(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (bb || (bb = this._bindMatrix), this.parent ? bb.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.EUb(bb), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), ab)
          for (let Ub = 0; Ub < this.children.length; Ub++) this.children[Ub]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      Aab() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.Aab(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.Aab(), this._needToDecompose = !0
      }
      _updatePosition(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Mb = this.getLocalMatrix();
        if (0 == ab) Ab ? (Mb.addAtIndex(12, bb.x), Mb.addAtIndex(13, bb.y), Mb.addAtIndex(14, bb.z)) : Mb.setTranslationFromFloats(bb.x, bb.y, bb.z);
        else {
          const ab = ub._TmpMats[0],
            Eb = ub._TmpVecs[0];
          this.parent ? (ab.EUb(this.parent.getAbsoluteMatrix()), Ub && ab.multiplyToRef(Ub.getWorldMatrix(), ab)) : Tb.b.IdentityToRef(ab), Ab && ab.setTranslationFromFloats(0, 0, 0), ab.invert(), Tb.m.TransformCoordinatesToRef(bb, ab, Eb), Ab ? (Mb.addAtIndex(12, Eb.x), Mb.addAtIndex(13, Eb.y), Mb.addAtIndex(14, Eb.z)) : Mb.setTranslationFromFloats(Eb.x, Eb.y, Eb.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(bb, ab, Ub, !0)
      }
      setPosition(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(bb, ab, Ub, !1)
      }
      setAbsolutePosition(bb, ab) {
        this.setPosition(bb, 1, ab)
      }
      scale(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Mb = this.getLocalMatrix(),
          Eb = ub._TmpMats[0];
        Tb.b.ScalingToRef(bb, ab, Ub, Eb), Eb.multiplyToRef(Mb, Mb), Eb.invert();
        for (const Tb of this.children) {
          const Ab = Tb.getLocalMatrix();
          Ab.multiplyToRef(Eb, Ab), Ab.multiplyAtIndex(12, bb), Ab.multiplyAtIndex(13, ab), Ab.multiplyAtIndex(14, Ub), Tb._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Ab)
          for (const Tb of this.children) Tb.scale(bb, ab, Ub, Ab)
      }
      setScale(bb) {
        this._decompose(), this._localScaling.EUb(bb), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(bb) {
        this._decompose(), bb.EUb(this._localScaling)
      }
      setYawPitchRoll(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Ab) {
          const Eb = ub._TmpQuat;
          return Tb.e.RotationYawPitchRollToRef(bb, ab, Ub, Eb), void this.setRotationQuaternion(Eb, Ab, Mb)
        }
        const Eb = ub._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Eb, Mb)) return;
        const Yb = ub._TmpMats[1];
        Tb.b.RotationYawPitchRollToRef(bb, ab, Ub, Yb), Eb.multiplyToRef(Yb, Yb), this._rotateWithMatrix(Yb, Ab, Mb)
      }
      rotate(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        const Mb = ub._TmpMats[0];
        Mb.setTranslationFromFloats(0, 0, 0), Tb.b.RotationAxisToRef(bb, ab, Mb), this._rotateWithMatrix(Mb, Ub, Ab)
      }
      setAxisAngle(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === Ub) {
          const Mb = ub._TmpQuat;
          return Tb.e.RotationAxisToRef(bb, ab, Mb), void this.setRotationQuaternion(Mb, Ub, Ab)
        }
        const Mb = ub._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Mb, Ab)) return;
        const Eb = ub._TmpMats[1];
        Tb.b.RotationAxisToRef(bb, ab, Eb), Mb.multiplyToRef(Eb, Eb), this._rotateWithMatrix(Eb, Ub, Ab)
      }
      setRotation(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(bb.y, bb.x, bb.z, ab, Ub)
      }
      setRotationQuaternion(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ab) return this._decompose(), this._localRotation.EUb(bb), void this._markAsDirtyAndCompose();
        const Ab = ub._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ab, Ub)) return;
        const Mb = ub._TmpMats[1];
        Tb.b.FromQuaternionToRef(bb, Mb), Ab.multiplyToRef(Mb, Mb), this._rotateWithMatrix(Mb, ab, Ub)
      }
      setRotationMatrix(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ab) {
          const Ab = ub._TmpQuat;
          return Tb.e.FromRotationMatrixToRef(bb, Ab), void this.setRotationQuaternion(Ab, ab, Ub)
        }
        const Ab = ub._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ab, Ub)) return;
        const Mb = ub._TmpMats[1];
        Mb.EUb(bb), Ab.multiplyToRef(bb, Mb), this._rotateWithMatrix(Mb, ab, Ub)
      }
      _rotateWithMatrix(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = this.getLocalMatrix(),
          Mb = Ab.m[12],
          Tb = Ab.m[13],
          Eb = Ab.m[14],
          Yb = this.getParent(),
          Bb = ub._TmpMats[3],
          eb = ub._TmpMats[4];
        Yb && 1 == ab ? (Ub ? (Bb.EUb(Ub.getWorldMatrix()), Yb.getAbsoluteMatrix().multiplyToRef(Bb, Bb)) : Bb.EUb(Yb.getAbsoluteMatrix()), eb.EUb(Bb), eb.invert(), Ab.multiplyToRef(Bb, Ab), Ab.multiplyToRef(bb, Ab), Ab.multiplyToRef(eb, Ab)) : 1 == ab && Ub ? (Bb.EUb(Ub.getWorldMatrix()), eb.EUb(Bb), eb.invert(), Ab.multiplyToRef(Bb, Ab), Ab.multiplyToRef(bb, Ab), Ab.multiplyToRef(eb, Ab)) : Ab.multiplyToRef(bb, Ab), Ab.setTranslationFromFloats(Mb, Tb, Eb), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(bb, ab) {
        const Ub = ub._TmpMats[2];
        return bb.EUb(this.getAbsoluteMatrix()), ab ? (bb.multiplyToRef(ab.getWorldMatrix(), bb), Tb.b.ScalingToRef(ab.nY.x, ab.nY.y, ab.nY.z, Ub)) : Tb.b.IdentityToRef(Ub), bb.invert(), !isNaN(bb.m[0]) && (Ub.multiplyAtIndex(0, this._scalingDeterminant), bb.multiplyToRef(Ub, bb), !0)
      }
      eZ() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ub = Tb.m.Zero();
        return this.getPositionToRef(bb, ab, Ub), Ub
      }
      getPositionToRef() {
        let bb = arguments.length > 1 ? arguments[1] : void 0,
          ab = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const bb = this.getLocalMatrix();
          ab.x = bb.m[12], ab.y = bb.m[13], ab.z = bb.m[14]
        } else {
          const Ub = ub._TmpMats[0].EUb(this.getAbsoluteMatrix());
          bb && Ub.multiplyToRef(bb.getWorldMatrix(), Ub), ab.x = Ub.m[12], ab.y = Ub.m[13], ab.z = Ub.m[14]
        }
      }
      getAbsolutePosition() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const ab = Tb.m.Zero();
        return this.getPositionToRef(1, bb, ab), ab
      }
      getAbsolutePositionToRef(bb, ab) {
        this.getPositionToRef(1, bb, ab)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.EUb(this._localMatrix);
          const bb = this._skeleton.getPoseMatrix();
          bb && this._absoluteMatrix.multiplyToRef(bb, this._absoluteMatrix)
        }
        const bb = this.children,
          ab = bb.length;
        for (let Ub = 0; Ub < ab; Ub++) bb[Ub].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      YC(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ub = Tb.m.Zero();
        return this.getDirectionToRef(bb, ab, Ub), Ub
      }
      getDirectionToRef(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = ub._TmpMats[0].EUb(this.getAbsoluteMatrix());
        ab && Ab.multiplyToRef(ab.getWorldMatrix(), Ab), Tb.m.TransformNormalToRef(bb, Ab, Ub), Ub.normalize()
      }
      getRotation() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ub = Tb.m.Zero();
        return this.getRotationToRef(bb, ab, Ub), Ub
      }
      getRotationToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = ub._TmpQuat;
        this.getRotationQuaternionToRef(bb, ab, Ab), Ab.toEulerAnglesToRef(Ub)
      }
      getRotationQuaternion() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ub = Tb.e.Identity();
        return this.getRotationQuaternionToRef(bb, ab, Ub), Ub
      }
      getRotationQuaternionToRef() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ab = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), ab.EUb(this._localRotation);
        else {
          const Ub = ub._TmpMats[0],
            Ab = this.getAbsoluteMatrix();
          bb ? Ab.multiplyToRef(bb.getWorldMatrix(), Ub) : Ub.EUb(Ab), Ub.multiplyAtIndex(0, this._scalingDeterminant), Ub.multiplyAtIndex(1, this._scalingDeterminant), Ub.multiplyAtIndex(2, this._scalingDeterminant), Ub.decompose(void 0, ab, void 0)
        }
      }
      getRotationMatrix() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 ? arguments[1] : void 0;
        const Ub = Tb.b.Identity();
        return this.getRotationMatrixToRef(bb, ab, Ub), Ub
      }
      getRotationMatrixToRef() {
        let bb = arguments.length > 1 ? arguments[1] : void 0,
          ab = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(ab);
        else {
          const Ub = ub._TmpMats[0],
            Ab = this.getAbsoluteMatrix();
          bb ? Ab.multiplyToRef(bb.getWorldMatrix(), Ub) : Ub.EUb(Ab), Ub.multiplyAtIndex(0, this._scalingDeterminant), Ub.multiplyAtIndex(1, this._scalingDeterminant), Ub.multiplyAtIndex(2, this._scalingDeterminant), Ub.getRotationMatrixToRef(ab)
        }
      }
      getAbsolutePositionFromLocal(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ub = Tb.m.Zero();
        return this.getAbsolutePositionFromLocalToRef(bb, ab, Ub), Ub
      }
      getAbsolutePositionFromLocalToRef(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = ub._TmpMats[0].EUb(this.getAbsoluteMatrix());
        ab && Ab.multiplyToRef(ab.getWorldMatrix(), Ab), Tb.m.TransformCoordinatesToRef(bb, Ab, Ub)
      }
      getLocalPositionFromAbsolute(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ub = Tb.m.Zero();
        return this.getLocalPositionFromAbsoluteToRef(bb, ab, Ub), Ub
      }
      getLocalPositionFromAbsoluteToRef(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = ub._TmpMats[0].EUb(this.getAbsoluteMatrix());
        ab && Ab.multiplyToRef(ab.getWorldMatrix(), Ab), Ab.invert(), Tb.m.TransformCoordinatesToRef(bb, Ab, Ub)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const bb = this._skeleton.bones.indexOf(this);
        if (-1 !== bb && this._skeleton.bones.splice(bb, 1), this._parentNode && this._parentNode.children) {
          const bb = this._parentNode.children,
            ab = bb.indexOf(this); - 1 !== ab && bb.splice(ab, 1)
        }
        super.dispose()
      }
    }
    ub._TmpVecs = (0, Gb.b)(2, Tb.m.Zero), ub._TmpQuat = Tb.e.Identity(), ub._TmpMats = (0, Gb.b)(5, Tb.b.Identity), (hb = ub.prototype).copyAnimationRange ?? (hb.copyAnimationRange = (0, qb.i)("Bone", "copyAnimationRange"));
    var rb = Ub(39188);
    let Kb = !1;
    var ob = Ub(39064),
      lb = Ub(39425),
      tb = Ub(39440),
      wb = Ub(39432),
      sb = Ub(39227);

    function gb(bb, ab) {
      const Ub = (0, Xb.RandomRange)(0, 1);
      vb.g.LerpToRef(ab.color1, ab.color2, Ub, bb.color)
    }

    function Cb(bb, ab) {
      ab.colorDead.subtractToRef(bb.color, ab._colorDiff), ab._colorDiff.scaleToRef(1 / bb.lifeTime, bb.colorStep)
    }

    function Vb(bb, ab) {
      bb._properties.currentColorGradient = ab._colorGradients[0], bb._properties.currentColorGradient.getColorToRef(bb.color), bb._properties.currentColor1.EUb(bb.color), ab._colorGradients.length > 1 ? ab._colorGradients[1].getColorToRef(bb._properties.currentColor2) : bb._properties.currentColor2.EUb(bb.color)
    }

    function Ob(bb, ab) {
      const Ub = ab._colorGradients;
      Ab.g.GetCurrentGradient(ab._ratio, Ub, ((ab, Ub, Ab) => {
        ab !== bb._properties.currentColorGradient && (bb._properties.currentColor1.EUb(bb._properties.currentColor2), Ub.getColorToRef(bb._properties.currentColor2), bb._properties.currentColorGradient = ab), vb.g.LerpToRef(bb._properties.currentColor1, bb._properties.currentColor2, Ab, bb.color), bb.color.a < 0 && (bb.color.a = 0)
      }))
    }

    function cb(bb, ab) {
      bb.colorStep.scaleToRef(ab._scaledUpdateSpeed, ab._scaledColorStep), bb.color.addInPlace(ab._scaledColorStep), bb.color.a < 0 && (bb.color.a = 0)
    }

    function Jb(bb, ab) {
      Ab.g.GetCurrentGradient(ab._ratio, ab._angularSpeedGradients, ((ab, Ub, Ab) => {
        ab !== bb._properties.currentAngularSpeedGradient && (bb._properties.currentAngularSpeed1 = bb._properties.currentAngularSpeed2, bb._properties.currentAngularSpeed2 = Ub.getFactor(), bb._properties.currentAngularSpeedGradient = ab), bb.angularSpeed = (0, Xb.Lerp)(bb._properties.currentAngularSpeed1, bb._properties.currentAngularSpeed2, Ab)
      }))
    }

    function nb(bb, ab) {
      bb.angle += bb.angularSpeed * ab._scaledUpdateSpeed
    }

    function Sb(bb, ab) {
      ab.particleEmitterType.startDirectionFunction(ab._emitterWorldMatrix, bb.direction, bb, ab.isLocal, ab._emitterInverseWorldMatrix)
    }

    function ba(bb, ab) {
      ab.startDirectionFunction(ab._emitterWorldMatrix, bb.direction, bb, ab.isLocal)
    }

    function aa(bb, ab) {
      bb._properties.currentVelocityGradient = ab._velocityGradients[0], bb._properties.currentVelocity1 = bb._properties.currentVelocityGradient.getFactor(), ab._velocityGradients.length > 1 ? bb._properties.currentVelocity2 = ab._velocityGradients[1].getFactor() : bb._properties.currentVelocity2 = bb._properties.currentVelocity1
    }

    function Ua(bb, ab) {
      bb._properties.currentLimitVelocityGradient = ab._limitVelocityGradients[0], bb._properties.currentLimitVelocity1 = bb._properties.currentLimitVelocityGradient.getFactor(), ab._limitVelocityGradients.length > 1 ? bb._properties.currentLimitVelocity2 = ab._limitVelocityGradients[1].getFactor() : bb._properties.currentLimitVelocity2 = bb._properties.currentLimitVelocity1
    }

    function Aa(bb, ab) {
      Ab.g.GetCurrentGradient(ab._ratio, ab._velocityGradients, ((ab, Ub, Ab) => {
        ab !== bb._properties.currentVelocityGradient && (bb._properties.currentVelocity1 = bb._properties.currentVelocity2, bb._properties.currentVelocity2 = Ub.getFactor(), bb._properties.currentVelocityGradient = ab), bb._properties.directionScale *= (0, Xb.Lerp)(bb._properties.currentVelocity1, bb._properties.currentVelocity2, Ab)
      }))
    }

    function Ma(bb, ab) {
      Ab.g.GetCurrentGradient(ab._ratio, ab._limitVelocityGradients, ((Ub, Ab, Mb) => {
        Ub !== bb._properties.currentLimitVelocityGradient && (bb._properties.currentLimitVelocity1 = bb._properties.currentLimitVelocity2, bb._properties.currentLimitVelocity2 = Ab.getFactor(), bb._properties.currentLimitVelocityGradient = Ub);
        const Tb = (0, Xb.Lerp)(bb._properties.currentLimitVelocity1, bb._properties.currentLimitVelocity2, Mb);
        bb.direction.length() > Tb && bb.direction.scaleInPlace(ab.limitVelocityDamping)
      }))
    }

    function Ta(bb) {
      bb.direction.scaleToRef(bb._properties.directionScale, bb._properties.scaledDirection)
    }

    function Ea(bb, ab) {
      ab.particleEmitterType.startPositionFunction(ab._emitterWorldMatrix, bb.position, bb, ab.isLocal)
    }

    function Ya(bb, ab) {
      ab.startPositionFunction(ab._emitterWorldMatrix, bb.position, bb, ab.isLocal)
    }

    function Ba(bb, ab) {
      bb._properties.localPosition ? bb._properties.localPosition.EUb(bb.position) : bb._properties.localPosition = bb.position.clone(), Tb.m.TransformCoordinatesToRef(bb._properties.localPosition, ab._emitterWorldMatrix, bb.position)
    }

    function ea(bb, ab) {
      ab.isLocal && bb._properties.localPosition ? (bb._properties.localPosition.addInPlace(bb._properties.scaledDirection), Tb.m.TransformCoordinatesToRef(bb._properties.localPosition, ab._emitterWorldMatrix, bb.position)) : bb.position.addInPlace(bb._properties.scaledDirection)
    }

    function va(bb, ab) {
      bb._properties.currentDragGradient = ab._dragGradients[0], bb._properties.currentDrag1 = bb._properties.currentDragGradient.getFactor(), ab._dragGradients.length > 1 ? bb._properties.currentDrag2 = ab._dragGradients[1].getFactor() : bb._properties.currentDrag2 = bb._properties.currentDrag1
    }

    function La(bb, ab) {
      Ab.g.GetCurrentGradient(ab._ratio, ab._dragGradients, ((ab, Ub, Ab) => {
        ab !== bb._properties.currentDragGradient && (bb._properties.currentDrag1 = bb._properties.currentDrag2, bb._properties.currentDrag2 = Ub.getFactor(), bb._properties.currentDragGradient = ab);
        const Mb = (0, Xb.Lerp)(bb._properties.currentDrag1, bb._properties.currentDrag2, Ab);
        bb._properties.scaledDirection.scaleInPlace(1 - Mb)
      }))
    }

    function Pa(bb, ab) {
      bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2 ? (bb._properties.randomNoiseCoordinates1.K9(Math.random(), Math.random(), Math.random()), bb._properties.randomNoiseCoordinates2.K9(Math.random(), Math.random(), Math.random())) : (bb._properties.randomNoiseCoordinates1 = new Tb.m(Math.random(), Math.random(), Math.random()), bb._properties.randomNoiseCoordinates2 = new Tb.m(Math.random(), Math.random(), Math.random()))
    }

    function Xa(bb, ab) {
      const Ub = ab._noiseTextureData,
        Ab = ab._noiseTextureSize;
      if (Ub && Ab && bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2) {
        const Mb = ab._fetchR(bb._properties.randomNoiseCoordinates1.x, bb._properties.randomNoiseCoordinates1.y, Ab.width, Ab.height, Ub),
          Eb = ab._fetchR(bb._properties.randomNoiseCoordinates1.z, bb._properties.randomNoiseCoordinates2.x, Ab.width, Ab.height, Ub),
          Yb = ab._fetchR(bb._properties.randomNoiseCoordinates2.y, bb._properties.randomNoiseCoordinates2.z, Ab.width, Ab.height, Ub),
          Bb = Tb.j.Pj[0],
          eb = Tb.j.Pj[1];
        Bb.K9((2 * Mb - 1) * ab.noiseStrength.x, (2 * Eb - 1) * ab.noiseStrength.y, (2 * Yb - 1) * ab.noiseStrength.z), Bb.scaleToRef(ab._tempScaledUpdateSpeed, eb), bb.direction.addInPlace(eb)
      }
    }

    function ja(bb, ab) {
      ab.gravity.scaleToRef(ab._tempScaledUpdateSpeed, ab._scaledGravity), bb.direction.addInPlace(ab._scaledGravity)
    }

    function Ra(bb, ab) {
      bb.size = (0, Xb.RandomRange)(ab.minSize, ab.maxSize), bb.scale.K9((0, Xb.RandomRange)(ab.minScaleX, ab.maxScaleX), (0, Xb.RandomRange)(ab.minScaleY, ab.maxScaleY))
    }

    function ka(bb, ab) {
      bb._properties.currentSizeGradient = ab._sizeGradients[0], bb._properties.currentSize1 = bb._properties.currentSizeGradient.getFactor(), bb.size = bb._properties.currentSize1, ab._sizeGradients.length > 1 ? bb._properties.currentSize2 = ab._sizeGradients[1].getFactor() : bb._properties.currentSize2 = bb._properties.currentSize1, bb.scale.K9((0, Xb.RandomRange)(ab.minScaleX, ab.maxScaleX), (0, Xb.RandomRange)(ab.minScaleY, ab.maxScaleY))
    }

    function ya(bb, ab) {
      const Ub = ab._actualFrame / ab.targetStopDuration;
      Ab.g.GetCurrentGradient(Ub, ab._startSizeGradients, ((Ub, Ab, Mb) => {
        Ub !== ab._currentStartSizeGradient && (ab._currentStartSize1 = ab._currentStartSize2, ab._currentStartSize2 = Ab.getFactor(), ab._currentStartSizeGradient = Ub);
        const Tb = (0, Xb.Lerp)(ab._currentStartSize1, ab._currentStartSize2, Mb);
        bb.scale.scaleInPlace(Tb)
      }))
    }

    function Za(bb, ab) {
      Ab.g.GetCurrentGradient(ab._ratio, ab._sizeGradients, ((ab, Ub, Ab) => {
        ab !== bb._properties.currentSizeGradient && (bb._properties.currentSize1 = bb._properties.currentSize2, bb._properties.currentSize2 = Ub.getFactor(), bb._properties.currentSizeGradient = ab), bb.size = (0, Xb.Lerp)(bb._properties.currentSize1, bb._properties.currentSize2, Ab)
      }))
    }

    function Da(bb, ab) {
      bb.remapData = new Tb.o(0, 1, 0, 1)
    }

    function za(bb, ab) {
      ab._colorRemapGradients && ab._colorRemapGradients.length > 0 && Ab.g.GetCurrentGradient(ab._ratio, ab._colorRemapGradients, ((ab, Ub, Ab) => {
        const Mb = (0, Xb.Lerp)(ab.factor1, Ub.factor1, Ab),
          Tb = (0, Xb.Lerp)(ab.factor2, Ub.factor2, Ab);
        bb.remapData.x = Mb, bb.remapData.y = Tb - Mb
      })), ab._alphaRemapGradients && ab._alphaRemapGradients.length > 0 && Ab.g.GetCurrentGradient(ab._ratio, ab._alphaRemapGradients, ((ab, Ub, Ab) => {
        const Mb = (0, Xb.Lerp)(ab.factor1, Ub.factor1, Ab),
          Tb = (0, Xb.Lerp)(ab.factor2, Ub.factor2, Ab);
        bb.remapData.z = Mb, bb.remapData.w = Tb - Mb
      }))
    }

    function xa(bb, ab) {
      const Ub = (0, Xb.Clamp)(ab._actualFrame / ab.targetStopDuration);
      Ab.g.GetCurrentGradient(Ub, ab._lifeTimeGradients, ((ab, Ab) => {
        const Mb = ab,
          Tb = Ab,
          Eb = Mb.getFactor(),
          Yb = Tb.getFactor(),
          Bb = (Ub - Mb.gradient) / (Tb.gradient - Mb.gradient);
        bb.lifeTime = (0, Xb.Lerp)(Eb, Yb, Bb)
      })), ab._emitPower = (0, Xb.RandomRange)(ab.minEmitPower, ab.maxEmitPower)
    }

    function ia(bb, ab) {
      bb.lifeTime = (0, Xb.RandomRange)(ab.minLifeTime, ab.maxLifeTime), ab._emitPower = (0, Xb.RandomRange)(ab.minEmitPower, ab.maxEmitPower)
    }

    function fa(bb, ab) {
      0 === ab._emitPower ? (bb._properties.initialDirection ? bb._properties.initialDirection.EUb(bb.direction) : bb._properties.initialDirection = bb.direction.clone(), bb.direction.set(0, 0, 0)) : (bb._properties.initialDirection = null, bb.direction.scaleInPlace(ab._emitPower)), bb.direction.addInPlace(ab._inheritedVelocityOffset)
    }

    function ma(bb, ab) {
      bb.angularSpeed = (0, Xb.RandomRange)(ab.minAngularSpeed, ab.maxAngularSpeed), bb.angle = (0, Xb.RandomRange)(ab.minInitialRotation, ab.maxInitialRotation)
    }

    function pa(bb, ab) {
      bb._properties.currentAngularSpeedGradient = ab._angularSpeedGradients[0], bb.angularSpeed = bb._properties.currentAngularSpeedGradient.getFactor(), bb._properties.currentAngularSpeed1 = bb.angularSpeed, ab._angularSpeedGradients.length > 1 ? bb._properties.currentAngularSpeed2 = ab._angularSpeedGradients[1].getFactor() : bb._properties.currentAngularSpeed2 = bb._properties.currentAngularSpeed1, bb.angle = (0, Xb.RandomRange)(ab.minInitialRotation, ab.maxInitialRotation)
    }

    function Na(bb, ab) {
      bb._properties.initialStartSpriteCellId = ab.startSpriteCellID, bb._properties.initialEndSpriteCellId = ab.endSpriteCellID, bb._properties.initialSpriteCellLoop = ab.spriteCellLoop
    }

    function Wa(bb, ab) {
      bb.previousItem = ab.previousItem, bb.nextItem = ab, ab.previousItem && (ab.previousItem.nextItem = bb), ab.previousItem = bb
    }

    function Ha(bb, ab) {
      bb.previousItem = ab, bb.nextItem = ab.nextItem, ab.nextItem && (ab.nextItem.previousItem = bb), ab.nextItem = bb
    }

    function Ia(bb) {
      bb.previousItem && (bb.previousItem.nextItem = bb.nextItem), bb.nextItem && (bb.nextItem.previousItem = bb.previousItem)
    }
    var da = Ub(39493);
    class Fa extends ib {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(bb) {
        this._startDirectionFunction !== bb && (this._startDirectionFunction = bb, this._directionCreation.process = bb ? ba : Sb)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(bb) {
        this._startPositionFunction !== bb && (this._startPositionFunction = bb, this._positionCreation.process = bb ? Ya : Ea)
      }
      set onDispose(bb) {
        this._onDisposeObserver && this.UW.remove(this._onDisposeObserver), this._onDisposeObserver = this.UW.add(bb)
      }
      get Jab() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(bb) {
        this._useRampGradients !== bb && (this._useRampGradients = bb, this._resetEffect(), bb ? (this._rampCreation = {
          process: Da,
          previousItem: null,
          nextItem: null
        }, Ha(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: za,
          previousItem: null,
          nextItem: null
        }, Ha(this._remapGradientProcessing, this._gravityProcessing))) : (Ia(this._rampCreation), Ia(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(bb) {
        this._isLocal !== bb && (this._isLocal = bb, bb ? (this._isLocalCreation = {
          process: Ba,
          previousItem: null,
          nextItem: null
        }, Ha(this._isLocalCreation, this._positionCreation)) : Ia(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(bb) {
        this._animationSheetEnabled !== bb && (this._animationSheetEnabled = bb, bb ? (this._sheetCreation = {
          process: Na,
          previousItem: null,
          nextItem: null
        }, Ha(this._sheetCreation, this._colorDeadCreation)) : Ia(this._sheetCreation), this._reset())
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[bb]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[bb] ?? this._customWrappers[0]
      }
      setCustomEffect(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[ab] = new lb.b(this._engine), this._customWrappers[ab].effect = bb, this._customWrappers[ab].drawContext && (this._customWrappers[ab].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Mb.b), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(bb) {
        if (this.noiseTexture !== bb) {
          if (this._noiseTexture = bb, !bb) return Ia(this._noiseCreation), void Ia(this._noiseProcessing);
          this._noiseCreation = {
            process: Pa,
            previousItem: null,
            nextItem: null
          }, Ha(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: Xa,
            previousItem: null,
            nextItem: null
          }, Ha(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Eb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Yb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        Kb || (Kb = !0, Fb(rb.e, ub)), (0, ob.d)(), super(bb), this._emitterInverseWorldMatrix = Tb.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Tb.m, this.UW = new Mb.b, this.onStoppedObservable = new Mb.b, this.onStartedObservable = new Mb.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new vb.g(0, 0, 0, 0), this._colorDiff = new vb.g(0, 0, 0, 0), this._scaledGravity = Tb.m.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = bb => {}, this.recycleParticle = bb => {
          const ab = this._particles.pop();
          ab !== bb && ab.copyTo(bb), ab.metadata = null, this._stockParticles.push(ab)
        }, this._createParticle = () => {
          let bb;
          return 0 !== this._stockParticles.length ? (bb = this._stockParticles.pop(), bb._reset()) : bb = new mb(this), this._prepareParticle(bb), bb
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = ab, this._epsilon = Yb, Ub && "Scene" !== Ub.getClassName() ? (this._engine = Ub, this.defaultProjectionMatrix = Tb.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = Ub || Bb.d.LastCreatedScene, this._engine = this._scene.vj(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.pD.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: ia,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Ea,
          previousItem: null,
          nextItem: null
        }, Ha(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: Sb,
          previousItem: null,
          nextItem: null
        }, Ha(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: fa,
          previousItem: null,
          nextItem: null
        }, Ha(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Ra,
          previousItem: null,
          nextItem: null
        }, Ha(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: ma,
          previousItem: null,
          nextItem: null
        }, Ha(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: gb,
          previousItem: null,
          nextItem: null
        }, Ha(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Cb,
          previousItem: null,
          nextItem: null
        }, Ha(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, eb || (this._colorProcessing = {
          process: cb,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: nb,
          previousItem: null,
          nextItem: null
        }, Ha(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Ta,
          previousItem: null,
          nextItem: null
        }, Ha(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: ea,
          previousItem: null,
          nextItem: null
        }, Ha(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: ja,
          previousItem: null,
          nextItem: null
        }, Ha(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Eb, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new lb.b(this._engine)
        }, this._customWrappers[0].effect = Ab, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Lb.e, this.updateFunction = bb => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((bb => {
            this._noiseTextureData = bb
          })));
          const ab = bb === this._particles;
          for (let Ub = 0; Ub < bb.length; Ub++) {
            const Ab = bb[Ub];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Mb = Ab.age;
            if (Ab.age += this._tempScaledUpdateSpeed, Ab.age > Ab.lifeTime) {
              const bb = Ab.age - Mb,
                ab = Ab.lifeTime - Mb;
              this._tempScaledUpdateSpeed = ab * this._tempScaledUpdateSpeed / bb, Ab.age = Ab.lifeTime
            }
            this._ratio = Ab.age / Ab.lifeTime, Ab._properties.directionScale = this._tempScaledUpdateSpeed;
            let Tb = this._updateQueueStart;
            for (; Tb;) Tb.process(Ab, this), Tb = Tb.nextItem;
            if (this._isAnimationSheetEnabled && !eb && Ab.updateCellIndex(), Ab._inheritParticleInfoToSubEmitters(), Ab.age >= Ab.lifeTime) {
              if (this._emitFromParticle(Ab), Ab._properties.attachedSubEmitters) {
                for (const bb of Ab._properties.attachedSubEmitters) bb.particleSystem.disposeOnStop = !0, bb.particleSystem.stop();
                Ab._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Ab), ab && Ub--
            } else;
          }
        }
      }
      serialize(bb) {
        throw new Error("Method not implemented.")
      }
      clone(bb, ab) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = xa : this._lifeTimeCreation.process = ia
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: ya,
          previousItem: null,
          nextItem: null
        }, Ha(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Ia(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(bb) {
        this.targetStopDuration !== bb && (this._targetStopDuration = bb, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(bb, ab, Ub) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, bb, ab, Ub), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(bb) {
        return this._removeFactorGradient(this._lifeTimeGradients, bb), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(bb, ab, Ub) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = ka, this._sizeGradientProcessing = {
          process: Za,
          previousItem: null,
          nextItem: null
        }, Wa(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, bb, ab, Ub), this
      }
      removeSizeGradient(bb) {
        return this._removeFactorGradient(this._sizeGradients, bb), 0 === this._sizeGradients?.length && (Ia(this._sizeGradientProcessing), this._sizeCreation.process = Ra), this
      }
      addColorRemapGradient(bb, ab, Ub) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, bb, ab, Ub), this
      }
      removeColorRemapGradient(bb) {
        return this._removeFactorGradient(this._colorRemapGradients, bb), this
      }
      addAlphaRemapGradient(bb, ab, Ub) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, bb, ab, Ub), this
      }
      removeAlphaRemapGradient(bb) {
        return this._removeFactorGradient(this._alphaRemapGradients, bb), this
      }
      addAngularSpeedGradient(bb, ab, Ub) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = pa, this._angularSpeedGradientProcessing = {
          process: Jb,
          previousItem: null,
          nextItem: null
        }, Wa(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, bb, ab, Ub), this
      }
      removeAngularSpeedGradient(bb) {
        return this._removeFactorGradient(this._angularSpeedGradients, bb), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = ma, Ia(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(bb, ab, Ub) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: aa,
          previousItem: null,
          nextItem: null
        }, Ha(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Aa,
          previousItem: null,
          nextItem: null
        }, Wa(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, bb, ab, Ub), this
      }
      removeVelocityGradient(bb) {
        return this._removeFactorGradient(this._velocityGradients, bb), 0 === this._velocityGradients?.length && (Ia(this._velocityCreation), Ia(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(bb, ab, Ub) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Ua,
          previousItem: null,
          nextItem: null
        }, Ha(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Ma,
          previousItem: null,
          nextItem: null
        }, Ha(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, bb, ab, Ub), this
      }
      removeLimitVelocityGradient(bb) {
        return this._removeFactorGradient(this._limitVelocityGradients, bb), 0 === this._limitVelocityGradients?.length && (Ia(this._limitVelocityCreation), Ia(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(bb, ab, Ub) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: va,
          previousItem: null,
          nextItem: null
        }, Wa(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: La,
          previousItem: null,
          nextItem: null
        }, Wa(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, bb, ab, Ub), this
      }
      removeDragGradient(bb) {
        return this._removeFactorGradient(this._dragGradients, bb), 0 === this._dragGradients?.length && (Ia(this._dragCreation), Ia(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(bb, ab, Ub) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, bb, ab, Ub), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(bb) {
        return this._removeFactorGradient(this._startSizeGradients, bb), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const bb = new Uint8Array(4 * this._rawTextureWidth),
          ab = vb.m.Color3[0];
        for (let Ub = 0; Ub < this._rawTextureWidth; Ub++) {
          const Mb = Ub / this._rawTextureWidth;
          Ab.g.GetCurrentGradient(Mb, this._rampGradients, ((Ab, Mb, Tb) => {
            vb.c.LerpToRef(Ab.color, Mb.color, Tb, ab), bb[4 * Ub] = 255 * ab.r, bb[4 * Ub + 1] = 255 * ab.g, bb[4 * Ub + 2] = 255 * ab.b, bb[4 * Ub + 3] = 255
          }))
        }
        this._rampGradientsTexture = Yb.e.CreateRGBATexture(bb, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((bb, ab) => bb.gradient < ab.gradient ? -1 : bb.gradient > ab.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(bb, ab) {
        this._rampGradients || (this._rampGradients = []);
        const Ub = new Ab.d(bb, ab);
        return this._rampGradients.push(Ub), this._syncRampGradientTexture(), this
      }
      removeRampGradient(bb) {
        return this._removeGradientAndTexture(bb, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(bb, ab, Ub) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Vb, this._colorProcessing.process = Ob);
        const Mb = new Ab.c(bb, ab, Ub);
        return this._colorGradients.push(Mb), this._colorGradients.sort(((bb, ab) => bb.gradient < ab.gradient ? -1 : bb.gradient > ab.gradient ? 1 : 0)), this
      }
      removeColorGradient(bb) {
        if (!this._colorGradients) return this;
        let ab = 0;
        for (const Ub of this._colorGradients) {
          if (Ub.gradient === bb) {
            this._colorGradients.splice(ab, 1);
            break
          }
          ab++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = gb, this._colorProcessing.process = cb), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const bb of this._drawWrappers)
            if (bb)
              for (const ab of bb) ab?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(bb, ab, Ub, Ab, Mb) {
        return Mb[4 * (((bb = .5 * Math.abs(bb) + .5) * Ub % Ub | 0) + ((ab = .5 * Math.abs(ab) + .5) * Ab % Ab | 0) * Ub)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const bb = this._engine,
          ab = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * ab), this._vertexBuffer = new Eb.c(bb, this._vertexData, !0, ab);
        let Ub = 0;
        const Ab = this._vertexBuffer.createVertexBuffer(Eb.m.PositionKind, Ub, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Eb.m.PositionKind] = Ab, Ub += 3;
        const Mb = this._vertexBuffer.createVertexBuffer(Eb.m.ColorKind, Ub, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Eb.m.ColorKind] = Mb, Ub += 4;
        const Tb = this._vertexBuffer.createVertexBuffer("angle", Ub, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Tb, Ub += 1;
        const Yb = this._vertexBuffer.createVertexBuffer("size", Ub, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Yb, Ub += 2, this._isAnimationSheetEnabled) {
          const bb = this._vertexBuffer.createVertexBuffer("cellIndex", Ub, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = bb, Ub += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const bb = this._vertexBuffer.createVertexBuffer("direction", Ub, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = bb, Ub += 3
        }
        if (this._useRampGradients) {
          const bb = this._vertexBuffer.createVertexBuffer("remapData", Ub, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = bb, Ub += 4
        }
        let Bb;
        if (this._useInstancing) {
          const ab = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Eb.c(bb, ab, !1, 2), Bb = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Bb = this._vertexBuffer.createVertexBuffer("offset", Ub, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Bb, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const bb = [],
          ab = [];
        let Ub = 0;
        for (let Ab = 0; Ab < this._capacity; Ab++) bb.push(Ub), bb.push(Ub + 1), bb.push(Ub + 2), bb.push(Ub), bb.push(Ub + 2), bb.push(Ub + 3), ab.push(Ub, Ub + 1, Ub + 1, Ub + 2, Ub + 2, Ub + 3, Ub + 3, Ub, Ub, Ub + 3), Ub += 4;
        this._indexBuffer = this._engine.createIndexBuffer(bb), this._linesIndexBuffer = this._engine.createIndexBuffer(ab)
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (bb) return this.startDelay = bb, void setTimeout((() => {
          this.start(0)
        }), bb);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const bb = this.noiseTexture;
          if (bb && bb.onGeneratedObservable) bb.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let ab = 0; ab < this.preWarmCycles; ab++) this.animate(!0), bb.render()
            }))
          }));
          else
            for (let ab = 0; ab < this.preWarmCycles; ab++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(bb))
      }
      _postStop(bb) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(bb, ab, Ub, Ab) {
        let Mb = bb * this._vertexBufferSize;
        const Eb = Tb.j.Pj[0].EUb(this._scene?.floatingOriginOffset || Tb.m.ZeroReadOnly);
        if (this._vertexData[Mb++] = ab.position.x + this.worldOffset.x - Eb.x, this._vertexData[Mb++] = ab.position.y + this.worldOffset.y - Eb.y, this._vertexData[Mb++] = ab.position.z + this.worldOffset.z - Eb.z, this._vertexData[Mb++] = ab.color.r, this._vertexData[Mb++] = ab.color.g, this._vertexData[Mb++] = ab.color.b, this._vertexData[Mb++] = ab.color.a, this._vertexData[Mb++] = ab.angle, this._vertexData[Mb++] = ab.scale.x * ab.size, this._vertexData[Mb++] = ab.scale.y * ab.size, this._isAnimationSheetEnabled && (this._vertexData[Mb++] = ab.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Mb++] = ab.direction.x, this._vertexData[Mb++] = ab.direction.y, this._vertexData[Mb++] = ab.direction.z);
        else if (ab._properties.initialDirection) {
          let bb = ab._properties.initialDirection;
          this.isLocal && (Tb.m.TransformNormalToRef(bb, this._emitterWorldMatrix, Tb.j.Pj[0]), bb = Tb.j.Pj[0]), 0 === bb.x && 0 === bb.z && (bb.x = .001), this._vertexData[Mb++] = bb.x, this._vertexData[Mb++] = bb.y, this._vertexData[Mb++] = bb.z
        } else {
          let bb = ab.direction;
          this.isLocal && (Tb.m.TransformNormalToRef(bb, this._emitterWorldMatrix, Tb.j.Pj[0]), bb = Tb.j.Pj[0]), 0 === bb.x && 0 === bb.z && (bb.x = .001), this._vertexData[Mb++] = bb.x, this._vertexData[Mb++] = bb.y, this._vertexData[Mb++] = bb.z
        }
        this._useRampGradients && ab.remapData && (this._vertexData[Mb++] = ab.remapData.x, this._vertexData[Mb++] = ab.remapData.y, this._vertexData[Mb++] = ab.remapData.z, this._vertexData[Mb++] = ab.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === Ub ? Ub = this._epsilon : 1 === Ub && (Ub = 1 - this._epsilon), 0 === Ab ? Ab = this._epsilon : 1 === Ab && (Ab = 1 - this._epsilon)), this._vertexData[Mb++] = Ub, this._vertexData[Mb] = Ab)
      }
      _prepareParticle(bb) {}
      _createNewOnes(bb) {
        let ab;
        for (let Ub = 0; Ub < bb && this._particles.length !== this._capacity; Ub++) {
          ab = this._createParticle(), this._particles.push(ab);
          let bb = this._createQueueStart;
          for (; bb;) bb.process(ab, this), bb = bb.nextItem;
          ab._inheritParticleInfoToSubEmitters()
        }
      }
      _update(bb) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const bb = this.emitter;
          this._emitterWorldMatrix = bb.getWorldMatrix()
        } else {
          const bb = this.emitter;
          this._emitterWorldMatrix = Tb.b.Translation(bb.x, bb.y, bb.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(bb)
      }
      static _GetAttributeNamesOrOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = [Eb.m.PositionKind, Eb.m.ColorKind, "angle", "offset", "size"];
        return bb && Ab.push("cellIndex"), ab || Ab.push("direction"), Ub && Ab.push("remapData"), Ab
      }
      static _GetEffectCreationOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, tb.e)(Ab), bb && Ab.push("particlesInfos"), ab && Ab.push("logarithmicDepthConstant"), Ub && (Ab.push("vFogInfos"), Ab.push("vFogColor")), Ab
      }
      fillDefines(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, tb.k)(this, this._scene, bb), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && bb.push("#define FOG")), this._isAnimationSheetEnabled && bb.push("#define ANIMATESHEET"), this.useLogarithmicDepth && bb.push("#define LOGARITHMICDEPTH"), ab === ib.BLENDMODE_MULTIPLY && bb.push("#define BLENDMULTIPLYMODE"), this.isLocal && bb.push("#define LOCAL"), this._useRampGradients && bb.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (bb.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            bb.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            bb.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && bb.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            bb.push("#define BILLBOARDMODE_ALL")
        }
        Ub && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), bb.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(bb, ab, Ub) {
        ab.push(...Fa._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), bb.push(...Fa._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), Ub.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, sb.f)(bb, this._imageProcessingConfigurationDefines), (0, sb.b)(Ub, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(bb) {
        var ab;
        const Ub = this._getCustomDrawWrapper(bb);
        if (Ub?.effect) return Ub;
        const Ab = [];
        this.fillDefines(Ab, bb);
        const Tb = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Eb = da.d._PrepareStringDefines(Tb, Ab),
          Yb = Eb ? da.d.GetConfiguration(Tb) : void 0;
        let Bb = this._drawWrappers[Tb];
        Bb || (Bb = this._drawWrappers[Tb] = [], 0 === Tb || this._renderPassObserver || (this._renderPassObserver = ((ab = this._engine)._onReleaseRenderPassObservable ?? (ab._onReleaseRenderPassObservable = new Mb.b)).add((bb => {
          const ab = this._drawWrappers[bb];
          if (ab) {
            for (const bb of ab) bb?.dispose();
            delete this._drawWrappers[bb]
          }
        }))));
        let eb = Bb[bb];
        eb || (eb = new lb.b(this._engine), eb.drawContext && (eb.drawContext.useInstancing = this._useInstancing), Bb[bb] = eb);
        const vb = Ab.join("\n");
        if (eb.defines !== vb) {
          const bb = [],
            ab = [],
            Ub = [];
          this.fillUniformsAttributesAndSamplerNames(ab, bb, Ub), Eb && (ab.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Yb?.defines.PREPASS_LOCAL_POSITION_INDEX && ab.push("inverseEmitterWM", "geometryWorldOffset")), eb.setEffect(this._engine.createEffect("particles", {
            attributes: bb,
            uniformsNames: ab,
            samplers: Ub,
            defines: vb,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Eb,
            indexParameters: Eb ? {
              buffersCount: Yb?._mrtCount ?? 0
            } : void 0
          }, this._engine), vb)
        }
        return eb
      }
      _bindGeometryRendering(bb) {
        const ab = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Ub = da.d.GetConfiguration(ab);
        if (!Ub?._defines) return;
        bb.setFloat("objectId", 0), bb.setInt("meshBlendTag", 0);
        const Ab = this._scene?.activeCamera;
        if (bb.setFloat2("cameraInfo", Ab?.minZ ?? 0, Ab?.maxZ ?? 1), this.isLocal && void 0 !== Ub.defines.PREPASS_LOCAL_POSITION_INDEX) {
          bb.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const ab = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Tb.m.ZeroReadOnly, Tb.j.Pj[0]);
          bb.setVector3("geometryWorldOffset", ab)
        }
      }
      animate() {
        let bb, ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!ab && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (ab ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) bb = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const ab = this._calculateEmitRate();
            bb = ab * this._scaledUpdateSpeed | 0, this._newPartsExcess += ab * this._scaledUpdateSpeed - bb
          }
          if (this._newPartsExcess > 1 && (bb += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? bb = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(bb), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !ab) {
            let bb = 0;
            for (let ab = 0; ab < this._particles.length; ab++) {
              const Ub = this._particles[ab];
              this._appendParticleVertices(bb, Ub), bb += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const bb = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  ab = this._particles.length;
                ab < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, ab * bb, this._fixedCapacityHighWaterMark * bb), this._fixedCapacityHighWaterMark = ab, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const bb = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * bb), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let bb = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const ab = this._actualFrame / this.targetStopDuration;
          Ab.g.GetCurrentGradient(ab, this._emitRateGradients, ((ab, Ub, Ab) => {
            ab !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = Ub.getFactor(), this._currentEmitRateGradient = ab), bb = (0, Xb.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Ab)
          }))
        }
        return bb
      }
      _appendParticleVertices(bb, ab) {
        this._appendParticleVertex(bb++, ab, 0, 0), this._useInstancing || (this._appendParticleVertex(bb++, ab, 1, 0), this._appendParticleVertex(bb++, ab, 1, 1), this._appendParticleVertex(bb, ab, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Fa.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Ub.e(336).then((() => Ub(60283))), Ub.e(330).then((() => Ub(60289)))])) : await Promise.all([Ub.e(319).then((() => Ub(60298))), Promise.all([Ub.e(312), Ub.e(348)]).then((() => Ub(60306)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== ib.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(ib.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(ib.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(bb) {
        const ab = this._getWrapper(bb),
          Ub = ab.effect,
          Ab = this._engine;
        Ab.enableEffect(ab);
        const Mb = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        Ub.setTexture("diffuseSampler", this.particleTexture), Ub.setMatrix("view", Mb);
        const Eb = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (Ub.setMatrix("projection", Eb), this._isAnimationSheetEnabled && this.particleTexture) {
          const bb = this.particleTexture.getBaseSize();
          Ub.setFloat3("particlesInfos", this.spriteCellWidth / bb.width, this.spriteCellHeight / bb.height, this.spriteCellWidth / bb.width)
        }
        if (Ub.setVector2("translationPivot", this.translationPivot), Ub.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const bb = this._scene.activeCamera;
          Ub.setVector3("eyePosition", bb.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), Ub.setTexture("rampSampler", this._rampGradientsTexture));
        const Yb = Ub.defines;
        this._scene && ((0, tb.f)(Ub, this, this._scene), this.applyFog && (0, wb.l)(this._scene, void 0, Ub)), Yb.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Mb.invertToRef(Tb.j.Matrix[0]), Ub.setMatrix("invView", Tb.j.Matrix[0])), Ub._multiTarget && this._bindGeometryRendering(Ub), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Ab.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, Ub) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, Ub)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Ab.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, Ub) : Ab.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, Ub), this.useLogarithmicDepth && this._scene && (0, wb.u)(Yb, Ub, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(Ub), this._setEngineBasedOnBlendMode(bb), Ub._multiTarget && da.d._BindZeroAlphaDiscard(Ab, Ub);
        let Bb = !1;
        try {
          da.d._BindAttachmentsForEffect(Ab, Ub) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(Ub), this._useInstancing ? this._scene?.forceWireframe ? Ab.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Ab.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Ab.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Ab.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Bb = !0)
        } finally {
          da.d._RestoreAttachments(Ab)
        }
        return Bb ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const bb = this._engine;
        let ab;
        return bb.setState && (bb.setState(!1), this.forceDepthWrite && bb.setDepthWrite(!0)), ab = this.blendMode === ib.BLENDMODE_MULTIPLYADD ? this._render(ib.BLENDMODE_MULTIPLY) + this._render(ib.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), ab
      }
      _onDispose() {}
      dispose() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), bb && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), bb && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(ab, Ub), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const bb = this._scene.pD.indexOf(this);
          bb > -1 && this._scene.pD.splice(bb, 1), this._scene._activeParticleSystems.dispose()
        }
        this.UW.notifyObservers(this), this.UW.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Fa.ForceGLSL = !1;
    var ha, Ga = Ub(36447);
    ! function(bb) {
      bb[bb.ATTACHED = 0] = "ATTACHED", bb[bb.END = 1] = "END"
    }(ha || (ha = {}));
    class Qa {
      constructor(bb) {
        if (this.particleSystem = bb, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !bb.emitter || !bb.emitter.dispose) {
          const ab = (0, Ga.b)("BABYLON.AbstractMesh");
          bb.emitter = new ab("SubemitterSystemEmitter", bb.oN()), bb._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let bb = this.particleSystem.emitter;
        if (bb) {
          if (bb instanceof Tb.m) bb = bb.clone();
          else if (-1 !== bb.getClassName().indexOf("Mesh")) {
            bb = new((0, Ga.b)("BABYLON.Mesh"))("", bb.oN()), bb.isVisible = !1
          }
        } else bb = new Tb.m;
        const ab = new Qa(this.particleSystem.clone(this.particleSystem.name, bb));
        return ab.particleSystem.name += "Clone", ab.type = this.type, ab.inheritDirection = this.inheritDirection, ab.inheritedVelocityAmount = this.inheritedVelocityAmount, ab.particleSystem._disposeEmitterOnDispose = !0, ab.particleSystem.disposeOnStop = !0, ab
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = {};
        return ab.type = this.type, ab.inheritDirection = this.inheritDirection, ab.inheritedVelocityAmount = this.inheritedVelocityAmount, ab.particleSystem = this.particleSystem.serialize(bb), ab
      }
      static _ParseParticleSystem(bb, ab, Ub) {
        throw (0, qb.l)("ParseParticle")
      }
      static Parse(bb, ab, Ub) {
        const Ab = bb.particleSystem,
          Mb = new Qa(Qa._ParseParticleSystem(Ab, ab, Ub, !0));
        return Mb.type = bb.type, Mb.inheritDirection = bb.inheritDirection, Mb.inheritedVelocityAmount = bb.inheritedVelocityAmount, Mb.particleSystem._isSubEmitter = !0, Mb
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var qa = Ub(39002),
      ua = Ub(39124);
    const ra = () => {};
    class Ka {
      constructor() {
        this.particlePositionGenerator = ra, this.particleDestinationGenerator = ra, this.particleDirectionGenerator = ra
      }
      startDirectionFunction(bb, ab, Ub, Ab) {
        const Mb = Tb.j.Pj[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== ra) this.particleDirectionGenerator(-1, Ub, Mb);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== ra) {
          this.particleDestinationGenerator(-1, Ub, Mb);
          const bb = Tb.j.Pj[1];
          Mb.subtractToRef(Ub.position, bb), bb.scaleToRef(1 / Ub.lifeTime, Mb)
        } else Mb.set(0, 0, 0);
        Ab ? ab.EUb(Mb) : Tb.m.TransformNormalToRef(Mb, bb, ab)
      }
      startPositionFunction(bb, ab, Ub, Ab) {
        const Mb = Tb.j.Pj[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== ra ? this.particlePositionGenerator(-1, Ub, Mb) : Mb.set(0, 0, 0), Ab ? ab.EUb(Mb) : Tb.m.TransformCoordinatesToRef(Mb, bb, ab)
      }
      clone() {
        const bb = new Ka;
        return Pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {}
      buildUniformLayout(bb) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.particlePositionGenerator = this.particlePositionGenerator, bb.particleDestinationGenerator = this.particleDestinationGenerator, bb
      }
      parse(bb) {
        bb.particlePositionGenerator && (this.particlePositionGenerator = bb.particlePositionGenerator), bb.particleDestinationGenerator && (this.particleDestinationGenerator = bb.particleDestinationGenerator)
      }
    }
    const oa = Tb.m.Zero(),
      la = Tb.m.Zero(),
      ta = Tb.m.Zero();
    class wa {
      constructor() {
        this.strength = 0, this.position = Tb.m.Zero()
      }
      _processParticle(bb, ab) {
        this.position.subtractToRef(bb.position, oa);
        const Ub = oa.lengthSquared() + 1;
        oa.normalize().scaleToRef(this.strength / Ub, la), la.scaleToRef(ab._tempScaledUpdateSpeed, ta), bb.direction.addInPlace(ta)
      }
      serialize() {
        return {
          position: this.position.qUb(),
          strength: this.strength
        }
      }
    }
    const sa = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class ga extends Fa {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = bb => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const ab = Math.floor(Math.random() * this._subEmitters.length);
          for (const Ub of this._subEmitters[ab])
            if (1 === Ub.type) {
              const ab = Ub.clone();
              bb._inheritParticleInfoToSubEmitter(ab), ab.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(ab.particleSystem), ab.particleSystem.start()
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
      set flowMap(bb) {
        this._flowMap !== bb && (this._flowMap = bb, this._flowMapUpdate && (Ia(this._flowMapUpdate), this._flowMapUpdate = null), bb && (this._flowMapUpdate = {
          process: bb => {
            const ab = this.oN()?.getTransformMatrix();
            this._flowMap._processParticle(bb, this.flowMapStrength * this._tempScaledUpdateSpeed, ab)
          },
          previousItem: null,
          nextItem: null
        }, Ha(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(bb) {
        super.addAttractor(bb), 1 === this._attractors.length && (this._attractorUpdate = {
          process: bb => {
            for (const ab of this._attractors) ab._processParticle(bb, this)
          },
          previousItem: null,
          nextItem: null
        }, Ha(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(bb) {
        super.removeAttractor(bb), 0 === this._attractors.length && this._attractorUpdate && Ia(this._attractorUpdate)
      }
      start() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(bb)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const bb of this.subEmitters) bb instanceof ga ? this._subEmitters.push([new Qa(bb)]) : bb instanceof Qa ? this._subEmitters.push([bb]) : bb instanceof Array && this._subEmitters.push(bb)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const bb of this.activeSubSystems) bb.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const bb = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== bb && this._rootParticleSystem.activeSubSystems.splice(bb, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(bb) {
        bb && this._stopSubEmitters()
      }
      _prepareParticle(bb) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const ab = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          bb._properties.attachedSubEmitters = [];
          for (const Ub of ab)
            if (0 === Ub.type) {
              const ab = Ub.clone();
              bb._properties.attachedSubEmitters.push(ab), ab.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), bb && this.particles)
          for (const Ub of this.particles)
            if (Ub._properties.attachedSubEmitters)
              for (let bb = Ub._properties.attachedSubEmitters.length - 1; bb >= 0; bb -= 1) Ub._properties.attachedSubEmitters[bb].dispose();
        if (ab && this.activeSubSystems)
          for (let Ub = this.activeSubSystems.length - 1; Ub >= 0; Ub -= 1) this.activeSubSystems[Ub].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let bb = 0; bb < this._subEmitters.length; bb++)
            for (const ab of this._subEmitters[bb]) ab.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(bb, ab, Ub, Ab) {
        let Mb;
        Mb = Ub instanceof qa.d ? null : Ub;
        const Eb = (0, Ga.b)("BABYLON.Texture");
        if (Eb && Mb)
          if (bb.texture) ab.particleTexture = Eb.Parse(bb.texture, Mb, Ab);
          else if (bb.textureName) {
          const Ub = bb.textureSettings;
          if (ab.particleTexture = new Eb(Ab + bb.textureName, Mb, !1, void 0 === bb.invertY || bb.invertY, Ub ? Ub.samplingMode : void 0), ab.particleTexture.name = bb.textureName, Ub) {
            const bb = ab.particleTexture;
            for (const ab of sa) void 0 !== Ub[ab] && (bb[ab] = Ub[ab])
          }
        }
        if (bb.emitterId || 0 === bb.emitterId || void 0 !== bb.emitter ? (bb.emitterId || 0 === bb.emitterId) && Mb ? (ab.emitter = Mb.getLastMeshById(bb.emitterId), ab.emitter || (ab.emitter = Tb.m.Zero())) : ab.emitter = Tb.m.FromArray(bb.emitter) : ab.emitter = Tb.m.Zero(), ab.isLocal = !!bb.isLocal, void 0 !== bb.renderingGroupId && (ab.renderingGroupId = bb.renderingGroupId), void 0 !== bb.isBillboardBased && (ab.isBillboardBased = bb.isBillboardBased), void 0 !== bb.billboardMode && (ab.billboardMode = bb.billboardMode), void 0 !== bb.useLogarithmicDepth && (ab.useLogarithmicDepth = bb.useLogarithmicDepth), bb.animations) {
          for (let Ub = 0; Ub < bb.animations.length; Ub++) {
            const Ab = bb.animations[Ub],
              Mb = (0, Ga.b)("BABYLON.Animation");
            Mb && ab.animations.push(Mb.Parse(Ab))
          }
          ab.beginAnimationOnStart = bb.beginAnimationOnStart, ab.beginAnimationFrom = bb.beginAnimationFrom, ab.beginAnimationTo = bb.beginAnimationTo, ab.beginAnimationLoop = bb.beginAnimationLoop
        }
        if (bb.autoAnimate && Mb && Mb.beginAnimation(ab, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), ab.startDelay = 0 | bb.startDelay, ab.minAngularSpeed = bb.minAngularSpeed, ab.maxAngularSpeed = bb.maxAngularSpeed, ab.minSize = bb.minSize, ab.maxSize = bb.maxSize, bb.minScaleX && (ab.minScaleX = bb.minScaleX, ab.maxScaleX = bb.maxScaleX, ab.minScaleY = bb.minScaleY, ab.maxScaleY = bb.maxScaleY), void 0 !== bb.preWarmCycles && (ab.preWarmCycles = bb.preWarmCycles, ab.preWarmStepOffset = bb.preWarmStepOffset), void 0 !== bb.minInitialRotation && (ab.minInitialRotation = bb.minInitialRotation, ab.maxInitialRotation = bb.maxInitialRotation), ab.minLifeTime = bb.minLifeTime, ab.maxLifeTime = bb.maxLifeTime, ab.minEmitPower = bb.minEmitPower, ab.maxEmitPower = bb.maxEmitPower, ab.emitRate = bb.emitRate, ab.gravity = Tb.m.FromArray(bb.gravity), bb.noiseStrength && (ab.noiseStrength = Tb.m.FromArray(bb.noiseStrength)), ab.color1 = vb.g.FromArray(bb.color1), ab.color2 = vb.g.FromArray(bb.color2), ab.colorDead = vb.g.FromArray(bb.colorDead), ab.updateSpeed = bb.updateSpeed, ab.targetStopDuration = bb.targetStopDuration, ab.blendMode = bb.blendMode, bb.colorGradients)
          for (const Tb of bb.colorGradients) ab.addColorGradient(Tb.gradient, vb.g.FromArray(Tb.color1), Tb.color2 ? vb.g.FromArray(Tb.color2) : void 0);
        if (bb.rampGradients) {
          for (const Ub of bb.rampGradients) ab.addRampGradient(Ub.gradient, vb.c.FromArray(Ub.color));
          ab.useRampGradients = bb.useRampGradients
        }
        if (bb.colorRemapGradients)
          for (const Tb of bb.colorRemapGradients) ab.addColorRemapGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.alphaRemapGradients)
          for (const Tb of bb.alphaRemapGradients) ab.addAlphaRemapGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.sizeGradients)
          for (const Tb of bb.sizeGradients) ab.addSizeGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.angularSpeedGradients)
          for (const Tb of bb.angularSpeedGradients) ab.addAngularSpeedGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.velocityGradients)
          for (const Tb of bb.velocityGradients) ab.addVelocityGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.dragGradients)
          for (const Tb of bb.dragGradients) ab.addDragGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.emitRateGradients)
          for (const Tb of bb.emitRateGradients) ab.addEmitRateGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.startSizeGradients)
          for (const Tb of bb.startSizeGradients) ab.addStartSizeGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.lifeTimeGradients)
          for (const Tb of bb.lifeTimeGradients) ab.addLifeTimeGradient(Tb.gradient, void 0 !== Tb.factor1 ? Tb.factor1 : Tb.factor, Tb.factor2);
        if (bb.limitVelocityGradients) {
          for (const Ub of bb.limitVelocityGradients) ab.addLimitVelocityGradient(Ub.gradient, void 0 !== Ub.factor1 ? Ub.factor1 : Ub.factor, Ub.factor2);
          ab.limitVelocityDamping = bb.limitVelocityDamping
        }
        if (bb.noiseTexture && Mb) {
          const Ub = (0, Ga.b)("BABYLON.ProceduralTexture");
          ab.noiseTexture = Ub.Parse(bb.noiseTexture, Mb, Ab)
        }
        let Yb;
        if (bb.particleEmitterType) {
          switch (bb.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Yb = new kb;
              break;
            case "SphereDirectedParticleEmitter":
              Yb = new yb;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Yb = new Db;
              break;
            case "ConeDirectedParticleEmitter":
              Yb = new zb;
              break;
            case "CylinderParticleEmitter":
              Yb = new Zb.d;
              break;
            case "CylinderDirectedParticleEmitter":
              Yb = new Zb.c;
              break;
            case "HemisphericParticleEmitter":
              Yb = new Rb;
              break;
            case "PointParticleEmitter":
              Yb = new jb;
              break;
            case "MeshParticleEmitter":
              Yb = new xb;
              break;
            case "CustomParticleEmitter":
              Yb = new Ka;
              break;
            default:
              Yb = new Lb.e
          }
          Yb.parse(bb.particleEmitterType, Mb)
        } else Yb = new Lb.e, Yb.parse(bb, Mb);
        ab.particleEmitterType = Yb, ab.startSpriteCellID = bb.startSpriteCellID, ab.endSpriteCellID = bb.endSpriteCellID, ab.spriteCellLoop = bb.spriteCellLoop ?? !0, ab.spriteCellWidth = bb.spriteCellWidth, ab.spriteCellHeight = bb.spriteCellHeight, ab.spriteCellChangeSpeed = bb.spriteCellChangeSpeed, ab.spriteRandomStartCell = bb.spriteRandomStartCell, ab.disposeOnStop = bb.disposeOnStop ?? !1, ab.manualEmitCount = bb.manualEmitCount ?? -1
      }
      static Parse(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Mb = arguments.length > 4 ? arguments[4] : void 0;
        const Eb = bb.name;
        let Yb, Bb, eb = null,
          Lb = null;
        if (ab instanceof qa.d ? Yb = ab : (Bb = ab, Yb = Bb.vj()), bb.customShader && (0, qb.c)(Yb.createEffectForParticles)) {
          Lb = bb.customShader;
          const ab = Lb.shaderOptions.defines.length > 0 ? Lb.shaderOptions.defines.join("\n") : "";
          eb = Yb.createEffectForParticles(Lb.shaderPath.fragmentElement, Lb.shaderOptions.uniforms, Lb.shaderOptions.samplers, ab)
        }
        const Pb = new ga(Eb, Mb || bb.PL, ab, eb, bb.isAnimationSheetEnabled);
        if (Pb.customShader = Lb, Pb._rootUrl = Ub, bb.id && (Pb.id = bb.id), bb.subEmitters) {
          Pb.subEmitters = [];
          for (const Ab of bb.subEmitters) {
            const bb = [];
            for (const Mb of Ab) bb.push(Qa.Parse(Mb, ab, Ub));
            Pb.subEmitters.push(bb)
          }
        }
        if (bb.attractors)
          for (const vb of bb.attractors) {
            const bb = new wa;
            bb.position = Tb.m.FromArray(vb.position), bb.strength = vb.strength, Pb.addAttractor(bb)
          }
        return ga._Parse(bb, Pb, ab, Ub), bb.textureMask && (Pb.textureMask = vb.g.FromArray(bb.textureMask)), bb.worldOffset && (Pb.worldOffset = Tb.m.FromArray(bb.worldOffset)), bb.preventAutoStart && (Pb.preventAutoStart = bb.preventAutoStart), bb.metadata && (Pb.metadata = bb.metadata), Ab || Pb.preventAutoStart || Pb.start(), Pb
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = {};
        if (ga._Serialize(ab, this, bb), ab.textureMask = this.textureMask.qUb(), ab.customShader = this.customShader, ab.preventAutoStart = this.preventAutoStart, ab.worldOffset = this.worldOffset.qUb(), this.metadata && (ab.metadata = this.metadata), this.subEmitters) {
          ab.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const Ub of this._subEmitters) {
            const Ab = [];
            for (const ab of Ub) ab.particleSystem.doNotSerialize || Ab.push(ab.serialize(bb));
            ab.subEmitters.push(Ab)
          }
        }
        if (this._attractors && this._attractors.length) {
          ab.attractors = [];
          for (const bb of this._attractors) ab.attractors.push(bb.serialize())
        }
        return ab
      }
      static _Serialize(bb, ab, Ub) {
        if (bb.name = ab.name, bb.id = ab.id, bb.PL = ab.getCapacity(), bb.disposeOnStop = ab.disposeOnStop, bb.manualEmitCount = ab.manualEmitCount, ab.emitter.position) {
          const Ub = ab.emitter;
          bb.emitterId = Ub.id
        } else {
          const Ub = ab.emitter;
          bb.emitter = Ub.qUb()
        }
        if (ab.particleEmitterType && (bb.particleEmitterType = ab.particleEmitterType.serialize()), ab.particleTexture)
          if (Ub) bb.texture = ab.particleTexture.serialize();
          else {
            const Ub = ab.particleTexture;
            bb.textureName = ab.particleTexture.name, bb.invertY = !!Ub._invertY;
            const Ab = {};
            for (const bb of sa) Ab[bb] = Ub[bb];
            Ab.samplingMode = Ub.samplingMode, bb.textureSettings = Ab
          } bb.isLocal = ab.isLocal, ua.b.AppendSerializedAnimations(ab, bb), bb.beginAnimationOnStart = ab.beginAnimationOnStart, bb.beginAnimationFrom = ab.beginAnimationFrom, bb.beginAnimationTo = ab.beginAnimationTo, bb.beginAnimationLoop = ab.beginAnimationLoop, bb.startDelay = ab.startDelay, bb.renderingGroupId = ab.renderingGroupId, bb.isBillboardBased = ab.isBillboardBased, bb.billboardMode = ab.billboardMode, bb.minAngularSpeed = ab.minAngularSpeed, bb.maxAngularSpeed = ab.maxAngularSpeed, bb.minSize = ab.minSize, bb.maxSize = ab.maxSize, bb.minScaleX = ab.minScaleX, bb.maxScaleX = ab.maxScaleX, bb.minScaleY = ab.minScaleY, bb.maxScaleY = ab.maxScaleY, bb.minEmitPower = ab.minEmitPower, bb.maxEmitPower = ab.maxEmitPower, bb.minLifeTime = ab.minLifeTime, bb.maxLifeTime = ab.maxLifeTime, bb.emitRate = ab.emitRate, bb.gravity = ab.gravity.qUb(), bb.noiseStrength = ab.noiseStrength.qUb(), bb.color1 = ab.color1.qUb(), bb.color2 = ab.color2.qUb(), bb.colorDead = ab.colorDead.qUb(), bb.updateSpeed = ab.updateSpeed, bb.targetStopDuration = ab.targetStopDuration, bb.blendMode = ab.blendMode, bb.preWarmCycles = ab.preWarmCycles, bb.preWarmStepOffset = ab.preWarmStepOffset, bb.minInitialRotation = ab.minInitialRotation, bb.maxInitialRotation = ab.maxInitialRotation, bb.startSpriteCellID = ab.startSpriteCellID, bb.spriteCellLoop = ab.spriteCellLoop, bb.endSpriteCellID = ab.endSpriteCellID, bb.spriteCellChangeSpeed = ab.spriteCellChangeSpeed, bb.spriteCellWidth = ab.spriteCellWidth, bb.spriteCellHeight = ab.spriteCellHeight, bb.spriteRandomStartCell = ab.spriteRandomStartCell, bb.isAnimationSheetEnabled = ab.isAnimationSheetEnabled, bb.useLogarithmicDepth = ab.useLogarithmicDepth;
        const Ab = ab.getColorGradients();
        if (Ab) {
          bb.colorGradients = [];
          for (const ab of Ab) {
            const Ub = {
              gradient: ab.gradient,
              color1: ab.color1.qUb()
            };
            ab.color2 ? Ub.color2 = ab.color2.qUb() : Ub.color2 = ab.color1.qUb(), bb.colorGradients.push(Ub)
          }
        }
        const Mb = ab.getRampGradients();
        if (Mb) {
          bb.rampGradients = [];
          for (const ab of Mb) {
            const Ub = {
              gradient: ab.gradient,
              color: ab.color.qUb()
            };
            bb.rampGradients.push(Ub)
          }
          bb.useRampGradients = ab.useRampGradients
        }
        const Tb = ab.getColorRemapGradients();
        if (Tb) {
          bb.colorRemapGradients = [];
          for (const ab of Tb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.colorRemapGradients.push(Ub)
          }
        }
        const Eb = ab.getAlphaRemapGradients();
        if (Eb) {
          bb.alphaRemapGradients = [];
          for (const ab of Eb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.alphaRemapGradients.push(Ub)
          }
        }
        const Yb = ab.getSizeGradients();
        if (Yb) {
          bb.sizeGradients = [];
          for (const ab of Yb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.sizeGradients.push(Ub)
          }
        }
        const Bb = ab.getAngularSpeedGradients();
        if (Bb) {
          bb.angularSpeedGradients = [];
          for (const ab of Bb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.angularSpeedGradients.push(Ub)
          }
        }
        const eb = ab.getVelocityGradients();
        if (eb) {
          bb.velocityGradients = [];
          for (const ab of eb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.velocityGradients.push(Ub)
          }
        }
        const vb = ab.getDragGradients();
        if (vb) {
          bb.dragGradients = [];
          for (const ab of vb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.dragGradients.push(Ub)
          }
        }
        const Lb = ab.getEmitRateGradients();
        if (Lb) {
          bb.emitRateGradients = [];
          for (const ab of Lb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.emitRateGradients.push(Ub)
          }
        }
        const Pb = ab.getStartSizeGradients();
        if (Pb) {
          bb.startSizeGradients = [];
          for (const ab of Pb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.startSizeGradients.push(Ub)
          }
        }
        const Xb = ab.getLifeTimeGradients();
        if (Xb) {
          bb.lifeTimeGradients = [];
          for (const ab of Xb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.lifeTimeGradients.push(Ub)
          }
        }
        const jb = ab.getLimitVelocityGradients();
        if (jb) {
          bb.limitVelocityGradients = [];
          for (const ab of jb) {
            const Ub = {
              gradient: ab.gradient,
              factor1: ab.factor1
            };
            void 0 !== ab.factor2 ? Ub.factor2 = ab.factor2 : Ub.factor2 = ab.factor1, bb.limitVelocityGradients.push(Ub)
          }
          bb.limitVelocityDamping = ab.limitVelocityDamping
        }
        ab.noiseTexture && (bb.noiseTexture = ab.noiseTexture.serialize())
      }
      clone(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = {
          ...this._customWrappers
        };
        let Mb = null;
        const Tb = this._engine;
        if ((0, qb.c)(Tb.createEffectForParticles) && null != this.customShader) {
          Mb = this.customShader;
          const bb = Mb.shaderOptions.defines.length > 0 ? Mb.shaderOptions.defines.join("\n") : "",
            ab = Tb.createEffectForParticles(Mb.shaderPath.fragmentElement, Mb.shaderOptions.uniforms, Mb.shaderOptions.samplers, bb);
          Ab[0] ? Ab[0].effect = ab : this.setCustomEffect(ab, 0)
        }
        const Eb = this.serialize(Ub),
          Yb = !1 === Ub && this.particleTexture ? this.particleTexture.clone() : null;
        Yb && (Eb.textureName = void 0);
        const Bb = ga.Parse(Eb, this._scene || this._engine, this._rootUrl);
        return Bb.name = bb, Bb.customShader = Mb, Bb._customWrappers = Ab, Yb && (Bb.particleTexture = Yb), void 0 === ab && (ab = this.emitter), this.noiseTexture && (Bb.noiseTexture = this.noiseTexture.clone()), Bb.emitter = ab, this.preventAutoStart || Bb.start(), Bb
      }
    }
    ga.BILLBOARDMODE_Y = 2, ga.BILLBOARDMODE_ALL = 7, ga.BILLBOARDMODE_STRETCHED = 8, ga.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Ca = !1;
    Ca || (Ca = !0, Qa._ParseParticleSystem = ga.Parse)
  },
  40769: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      SkyMaterial: () => Db,
      _MaxColorValueForRenderTarget: () => Zb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(39124),
      Eb = Ub(36392),
      Yb = Ub(39389),
      Bb = Ub(39454),
      eb = Ub(40732),
      vb = Ub(40248),
      Lb = Ub(39185),
      Pb = Ub(36447),
      Xb = Ub(39485),
      jb = Ub(39460),
      Rb = Ub(39440),
      kb = Ub(39432);
    class yb extends Yb.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function Zb(bb) {
      switch (bb) {
        case eb.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case eb.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Db = (() => {
      var bb;
      let ab, Yb, eb, Pb, Db, zb, xb, ib, fb, mb, pb, Nb, Wb, Hb, Ib, db = Bb.d,
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [],
        qb = [],
        ub = [],
        rb = [],
        Kb = [],
        ob = [],
        lb = [],
        tb = [],
        wb = [],
        sb = [],
        gb = [],
        Cb = [],
        Vb = [],
        Ob = [],
        cb = [],
        Jb = [],
        nb = [],
        Sb = [],
        ba = [],
        aa = [],
        Ua = [],
        Aa = [],
        Ma = [],
        Ta = [],
        Ea = [],
        Ya = [],
        Ba = [];
      return bb = class extends db {
        constructor(bb, ab) {
          super(bb, ab, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Ab.k)(this, Fb, 1), this.turbidity = ((0, Ab.k)(this, hb), (0, Ab.k)(this, Gb, 10)), this.rayleigh = ((0, Ab.k)(this, Qb), (0, Ab.k)(this, qb, 2)), this.mieCoefficient = ((0, Ab.k)(this, ub), (0, Ab.k)(this, rb, .005)), this.mieDirectionalG = ((0, Ab.k)(this, Kb), (0, Ab.k)(this, ob, .8)), this.distance = ((0, Ab.k)(this, lb), (0, Ab.k)(this, tb, 500)), this.inclination = ((0, Ab.k)(this, wb), (0, Ab.k)(this, sb, .49)), this.azimuth = ((0, Ab.k)(this, gb), (0, Ab.k)(this, Cb, .25)), this.sunPosition = ((0, Ab.k)(this, Vb), (0, Ab.k)(this, Ob, new Eb.Pj(0, 100, 0))), this.useSunPosition = ((0, Ab.k)(this, cb), (0, Ab.k)(this, Jb, !1)), this.cameraOffset = ((0, Ab.k)(this, nb), (0, Ab.k)(this, Sb, Eb.Pj.Zero())), this.up = ((0, Ab.k)(this, ba), (0, Ab.k)(this, aa, Eb.Pj.Up())), this.dithering = ((0, Ab.k)(this, Ua), (0, Ab.k)(this, Aa, !1)), this.rawHdrOutput = ((0, Ab.k)(this, Ma), (0, Ab.k)(this, Ta, !1)), this.cloudiness = ((0, Ab.k)(this, Ea), (0, Ab.k)(this, Ya, 0)), this._cameraPosition = ((0, Ab.k)(this, Ba), Eb.Pj.Zero()), this._skyOrientation = new Eb.Quaternion
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
        isReadyForSubMesh(ab, Ub) {
          const Ab = Ub._drawWrapper;
          if (this.isFrozen && Ab.effect && Ab._wasPreviouslyReady) return !0;
          Ub.materialDefines || (Ub.materialDefines = new yb);
          const Mb = Ub.materialDefines,
            Tb = this.oN();
          if (this._isReadyForSubMesh(Ub)) return !0;
          if ((0, kb.bb)(ab, Tb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Mb, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, kb.R)(ab, Mb, !0, !1), Mb.IMAGEPROCESSINGPOSTPROCESS !== Tb.imageProcessingConfiguration.applyByPostProcess && Mb.markAsMiscDirty(), Mb.DITHER !== this.dithering && Mb.markAsMiscDirty(), Mb.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Mb.markAsMiscDirty(), Mb.isDirty) {
            Mb.markAsProcessed(), Tb.resetCachedMaterial();
            const ab = new jb.d;
            Mb.FOG && ab.addFallback(1, "FOG"), Mb.IMAGEPROCESSINGPOSTPROCESS = Tb.imageProcessingConfiguration.applyByPostProcess, Mb.DITHER = this.dithering, Mb.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Ab = [vb.g.PositionKind];
            Mb.VERTEXCOLOR && Ab.push(vb.g.ColorKind);
            const Eb = "sky",
              Yb = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Rb.e)(Yb);
            const Bb = Mb.toString();
            Ub.setEffect(Tb.vj().createEffect(Eb, {
              attributes: Ab,
              uniformsNames: Yb,
              uniformBuffersNames: [],
              samplers: [],
              defines: Bb,
              fallbacks: ab,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Tb.vj()), Mb, this._materialContext)
          }
          return !(!Ub.effect || !Ub.effect.isReady()) && (Mb._renderId = Tb.getRenderId(), Ab._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(bb, ab, Ub) {
          const Ab = this.oN(),
            Mb = Ub.materialDefines;
          if (!Mb) return;
          const Tb = Ub.effect;
          if (!Tb) return;
          this._activeEffect = Tb, this.bindOnlyWorldMatrix(bb), this._activeEffect.setMatrix("viewProjection", Ab.getTransformMatrix()), this._mustRebind(Ab, Tb, Ub) && ((0, Rb.f)(Tb, this, Ab), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, kb.u)(Mb, Tb, Ab)), Ab.fogEnabled && ab.applyFog && Ab.fogMode !== Lb.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", Ab.getViewMatrix()), (0, kb.l)(Ab, ab, this._activeEffect, this.rawHdrOutput);
          const Yb = Ab.activeCamera;
          if (Yb) {
            const bb = Yb.getWorldMatrix();
            this._cameraPosition.x = bb.m[12], this._cameraPosition.y = bb.m[13], this._cameraPosition.z = bb.m[14], this._activeEffect.setVector3("cameraPosition", Eb.TmpVectors.Pj[0].EUb(this._cameraPosition).MAb(Ab.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const bb = Ab.vj()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", Zb(bb?.texture?.type))
          }
          if (!this.useSunPosition) {
            const bb = Math.PI * (this.inclination - .5),
              ab = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(ab) * Math.cos(bb), this.sunPosition.y = this.distance * Math.sin(-bb), this.sunPosition.z = this.distance * Math.sin(ab) * Math.cos(bb), Eb.Quaternion.FromUnitVectorsToRef(Eb.Pj.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(ab, this._activeEffect, Ub)
        }
        getAnimatables() {
          return []
        }
        dispose(bb) {
          super.dispose(bb)
        }
        clone(ab) {
          return Tb.b.Clone((() => new bb(ab, this.oN())), this)
        }
        serialize() {
          const bb = super.serialize();
          return bb.customType = "BABYLON.SkyMaterial", bb
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(ab, Ub, Ab) {
          return Tb.b.Parse((() => new bb(ab.name, Ub)), ab, Ub, Ab)
        }
      }, (() => {
        const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(db[Symbol.metadata] ?? null) : void 0;
        ab = [(0, Mb.K)()], Yb = [(0, Mb.K)()], eb = [(0, Mb.K)()], Pb = [(0, Mb.K)()], Db = [(0, Mb.K)()], zb = [(0, Mb.K)()], xb = [(0, Mb.K)()], ib = [(0, Mb.K)()], fb = [(0, Mb.I)()], mb = [(0, Mb.K)()], pb = [(0, Mb.I)()], Nb = [(0, Mb.I)()], Wb = [(0, Mb.K)()], Hb = [(0, Mb.K)()], Ib = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: bb => "luminance" in bb,
            get: bb => bb.luminance,
            set: (bb, ab) => {
              bb.luminance = ab
            }
          },
          metadata: Ub
        }, Fb, hb), (0, Ab.h)(null, null, Yb, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: bb => "turbidity" in bb,
            get: bb => bb.turbidity,
            set: (bb, ab) => {
              bb.turbidity = ab
            }
          },
          metadata: Ub
        }, Gb, Qb), (0, Ab.h)(null, null, eb, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: bb => "rayleigh" in bb,
            get: bb => bb.rayleigh,
            set: (bb, ab) => {
              bb.rayleigh = ab
            }
          },
          metadata: Ub
        }, qb, ub), (0, Ab.h)(null, null, Pb, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: bb => "mieCoefficient" in bb,
            get: bb => bb.mieCoefficient,
            set: (bb, ab) => {
              bb.mieCoefficient = ab
            }
          },
          metadata: Ub
        }, rb, Kb), (0, Ab.h)(null, null, Db, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: bb => "mieDirectionalG" in bb,
            get: bb => bb.mieDirectionalG,
            set: (bb, ab) => {
              bb.mieDirectionalG = ab
            }
          },
          metadata: Ub
        }, ob, lb), (0, Ab.h)(null, null, zb, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: bb => "distance" in bb,
            get: bb => bb.distance,
            set: (bb, ab) => {
              bb.distance = ab
            }
          },
          metadata: Ub
        }, tb, wb), (0, Ab.h)(null, null, xb, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: bb => "inclination" in bb,
            get: bb => bb.inclination,
            set: (bb, ab) => {
              bb.inclination = ab
            }
          },
          metadata: Ub
        }, sb, gb), (0, Ab.h)(null, null, ib, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: bb => "azimuth" in bb,
            get: bb => bb.azimuth,
            set: (bb, ab) => {
              bb.azimuth = ab
            }
          },
          metadata: Ub
        }, Cb, Vb), (0, Ab.h)(null, null, fb, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: bb => "sunPosition" in bb,
            get: bb => bb.sunPosition,
            set: (bb, ab) => {
              bb.sunPosition = ab
            }
          },
          metadata: Ub
        }, Ob, cb), (0, Ab.h)(null, null, mb, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSunPosition" in bb,
            get: bb => bb.useSunPosition,
            set: (bb, ab) => {
              bb.useSunPosition = ab
            }
          },
          metadata: Ub
        }, Jb, nb), (0, Ab.h)(null, null, pb, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "cameraOffset" in bb,
            get: bb => bb.cameraOffset,
            set: (bb, ab) => {
              bb.cameraOffset = ab
            }
          },
          metadata: Ub
        }, Sb, ba), (0, Ab.h)(null, null, Nb, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: bb => "up" in bb,
            get: bb => bb.up,
            set: (bb, ab) => {
              bb.up = ab
            }
          },
          metadata: Ub
        }, aa, Ua), (0, Ab.h)(null, null, Wb, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: bb => "dithering" in bb,
            get: bb => bb.dithering,
            set: (bb, ab) => {
              bb.dithering = ab
            }
          },
          metadata: Ub
        }, Aa, Ma), (0, Ab.h)(null, null, Hb, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: bb => "rawHdrOutput" in bb,
            get: bb => bb.rawHdrOutput,
            set: (bb, ab) => {
              bb.rawHdrOutput = ab
            }
          },
          metadata: Ub
        }, Ta, Ea), (0, Ab.h)(null, null, Ib, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: bb => "cloudiness" in bb,
            get: bb => bb.cloudiness,
            set: (bb, ab) => {
              bb.cloudiness = ab
            }
          },
          metadata: Ub
        }, Ya, Ba), Ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ub
        })
      })(), bb._ShaderLoader = new Xb.e((() => [Ub.e(320).then((() => Ub(60315))), Ub.e(313).then((() => Ub(60317)))]), (() => [Ub.e(337).then((() => Ub(60319))), Ub.e(331).then((() => Ub(60322)))])), bb
    })();
    (0, Pb.f)("BABYLON.SkyMaterial", Db)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
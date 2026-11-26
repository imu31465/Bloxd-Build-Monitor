export const id = 296;
export const ids = [296];
export const modules = {
  41852: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => de,
      $c: () => ye,
      Ab: () => pe,
      Ac: () => Je,
      Ae: () => fx,
      Bc: () => Ze,
      Be: () => rx,
      Bf: () => eJ,
      C: () => Ye,
      Cf: () => dx,
      D: () => MV,
      Db: () => YV,
      Dc: () => XV,
      Dd: () => iV,
      De: () => ux,
      F: () => GV,
      Fc: () => ne,
      Ff: () => VJ,
      Ge: () => Kx,
      Hb: () => BV,
      Hd: () => ke,
      He: () => gx,
      Hf: () => xJ,
      J: () => zV,
      Jc: () => Qe,
      Kb: () => je,
      Ke: () => ix,
      Kf: () => sx,
      Lc: () => xe,
      Ld: () => QV,
      Lf: () => Tx,
      N: () => Le,
      Ne: () => Dx,
      Ob: () => SV,
      Oc: () => NV,
      Od: () => wV,
      P: () => rV,
      Pe: () => Ix,
      Pf: () => Ex,
      Qd: () => Ee,
      Qe: () => Rx,
      Rf: () => Sx,
      Sb: () => Vx,
      Sc: () => tV,
      Se: () => cx,
      Sf: () => ax,
      T: () => fV,
      Td: () => Ke,
      Uc: () => JV,
      Ue: () => Wx,
      V: () => yJ,
      Vb: () => WV,
      W: () => Oe,
      We: () => Lx,
      Wf: () => ox,
      X: () => sV,
      Xd: () => hV,
      Xf: () => qx,
      Y: () => Ie,
      Yc: () => AV,
      Yd: () => ve,
      Zb: () => dV,
      Zf: () => bx,
      _e: () => lx,
      ac: () => IV,
      ad: () => EV,
      ae: () => se,
      ag: () => Cx,
      b: () => UV,
      bc: () => ee,
      bg: () => Px,
      cb: () => uV,
      ce: () => he,
      cf: () => hx,
      cg: () => tx,
      dc: () => be,
      de: () => Ve,
      e: () => yV,
      ed: () => bV,
      ee: () => OV,
      eg: () => Hx,
      fc: () => HV,
      gb: () => Se,
      gd: () => kV,
      gf: () => UJ,
      h: () => PV,
      he: () => LV,
      hf: () => Ax,
      hg: () => jx,
      i: () => aV,
      id: () => Ux,
      if: () => zx,
      ig: () => mx,
      jb: () => oV,
      jc: () => RV,
      jg: () => vx,
      k: () => nx,
      le: () => FV,
      mc: () => Ue,
      md: () => yx,
      mf: () => Nx,
      n: () => px,
      nb: () => Jx,
      nc: () => jV,
      ng: () => kx,
      ob: () => Yx,
      oe: () => ZV,
      of: () => Gx,
      p: () => pV,
      pd: () => TV,
      qb: () => cV,
      qf: () => Mx,
      rc: () => qV,
      rf: () => Xx,
      s: () => le,
      sc: () => we,
      se: () => Qx,
      td: () => DV,
      u: () => fe,
      ub: () => xx,
      uc: () => nV,
      v: () => mV,
      vc: () => me,
      vd: () => gV,
      ve: () => JJ,
      vf: () => YJ,
      w: () => He,
      we: () => Bx,
      xb: () => ex,
      xc: () => lV,
      yb: () => re,
      yc: () => KV,
      ye: () => Fx,
      yf: () => Ox,
      z: () => vV,
      zc: () => ue,
      zd: () => CV
    });
    const JV = -2147483648,
      YV = 12,
      UV = 12,
      yV = 4095,
      pV = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      QV = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      nV = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      wV = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      ZV = {
        Alive: 16
      },
      vV = 32,
      rV = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      kV = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      bV = 4294967295,
      EV = 0,
      BV = 4294967295,
      jV = 4,
      qV = 123,
      tV = -2147483648,
      FV = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      TV = 51,
      PV = 5,
      AV = 4294967295,
      NV = 4294967295,
      XV = 128,
      MV = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      zV = 16,
      GV = 255,
      WV = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      RV = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      gV = {
        Hotbar: 256,
        Drop: 257
      },
      DV = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      iV = {
        Rate: 0,
        Gyro: 1
      },
      CV = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      aV = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      oV = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      cV = {
        LookPointed: 1,
        Held: 2
      },
      hV = 3,
      lV = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      LV = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      fV = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      mV = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      KV = {
        Stackable: 1
      },
      HV = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      uV = {
        Detail: 1,
        RoomForOne: 2
      },
      sV = {
        HaveIngredients: 1,
        Listed: 2
      },
      SV = {
        HasOpts: 1
      },
      IV = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      dV = {
        Up: 1,
        Down: 2
      },
      OV = {
        TwoD: 1,
        Loop: 2
      },
      Ve = {
        StopAfter: 1
      },
      ee = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      xe = {
        Pose: 1,
        Visible: 2,
        Clip: 4,
        Perch: 8
      },
      Je = 255,
      Ye = 65535,
      Ue = 255,
      ye = 65535,
      pe = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      Qe = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      ne = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      we = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      Ze = 4294967295,
      ve = 4294967295,
      re = 255,
      ke = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      be = {
        critical: 123
      },
      Ee = 4294967295,
      Be = {
        BYTES: 4,
        iZ: (VV, eV) => VV.getUint32(eV + 0, !0)
      },
      je = {
        BYTES: 12,
        serverId: (VV, eV) => VV.getInt32(eV + 0, !0),
        index: (VV, eV) => VV.getUint32(eV + 4, !0),
        kind: (VV, eV) => VV.getUint16(eV + 8, !0)
      },
      qe = {
        BYTES: 20,
        pos: (VV, eV, xV) => VV.getInt32(eV + 0 + 4 * xV, !0),
        actual: (VV, eV) => VV.getUint32(eV + 12, !0),
        dataLen: (VV, eV) => VV.getUint32(eV + 16, !0)
      },
      te = {
        BYTES: 20,
        what: (VV, eV) => VV.getUint8(eV + 0),
        value: (VV, eV) => VV.getInt16(eV + 2, !0),
        pos: (VV, eV, xV) => VV.getInt32(eV + 4 + 4 * xV, !0),
        block: (VV, eV) => VV.getUint32(eV + 16, !0)
      },
      Fe = {
        BYTES: 4,
        item: (VV, eV) => VV.getUint16(eV + 0, !0),
        slot: (VV, eV) => VV.getUint8(eV + 2)
      },
      Te = {
        BYTES: 16,
        target: (VV, eV) => VV.getInt32(eV + 0, !0),
        damage: (VV, eV) => VV.getFloat32(eV + 4, !0),
        distance: (VV, eV) => VV.getFloat32(eV + 8, !0),
        crit: (VV, eV) => VV.getUint8(eV + 12)
      },
      Pe = {
        BYTES: 4,
        slot: (VV, eV) => VV.getUint16(eV + 0, !0)
      },
      Ae = {
        BYTES: 20,
        what: (VV, eV) => VV.getUint8(eV + 0),
        value: (VV, eV) => VV.getInt16(eV + 2, !0),
        pos: (VV, eV, xV) => VV.getInt32(eV + 4 + 4 * xV, !0),
        block: (VV, eV) => VV.getUint32(eV + 16, !0)
      },
      Ne = {
        BYTES: 12,
        serverId: (VV, eV) => VV.getInt32(eV + 0, !0),
        index: (VV, eV) => VV.getUint32(eV + 4, !0),
        what: (VV, eV) => VV.getUint16(eV + 8, !0)
      },
      Xe = {
        BYTES: 24,
        cx: (VV, eV) => VV.getInt32(eV + 0, !0),
        cy: (VV, eV) => VV.getInt32(eV + 4, !0),
        cz: (VV, eV) => VV.getInt32(eV + 8, !0),
        slot: (VV, eV) => VV.getUint32(eV + 12, !0),
        generation: (VV, eV) => VV.getUint32(eV + 16, !0),
        flags: (VV, eV) => VV.getUint32(eV + 20, !0)
      },
      Me = {
        BYTES: 44,
        pos: (VV, eV, xV) => VV.getFloat64(eV + 0 + 8 * xV, !0),
        sound: (VV, eV) => VV.getUint16(eV + 24, !0),
        flags: (VV, eV) => VV.getUint16(eV + 26, !0),
        handle: (VV, eV) => VV.getUint32(eV + 28, !0),
        volume: (VV, eV) => VV.getFloat32(eV + 32, !0),
        rate: (VV, eV) => VV.getFloat32(eV + 36, !0),
        refDist: (VV, eV) => VV.getFloat32(eV + 40, !0)
      },
      ze = {
        BYTES: 28,
        pos: (VV, eV, xV) => VV.getFloat64(eV + 0 + 8 * xV, !0),
        handle: (VV, eV) => VV.getUint32(eV + 24, !0)
      },
      Ge = {
        BYTES: 16,
        handle: (VV, eV) => VV.getUint32(eV + 0, !0),
        volume: (VV, eV) => VV.getFloat32(eV + 4, !0),
        rate: (VV, eV) => VV.getFloat32(eV + 8, !0),
        refDist: (VV, eV) => VV.getFloat32(eV + 12, !0)
      },
      We = {
        BYTES: 12,
        handle: (VV, eV) => VV.getUint32(eV + 0, !0),
        to: (VV, eV) => VV.getFloat32(eV + 4, !0),
        ms: (VV, eV) => VV.getUint16(eV + 8, !0),
        flags: (VV, eV) => VV.getUint16(eV + 10, !0)
      },
      Re = {
        BYTES: 4,
        handle: (VV, eV) => VV.getUint32(eV + 0, !0)
      },
      ge = {
        BYTES: 8,
        reason: (VV, eV) => VV.getUint8(eV + 0),
        code: (VV, eV) => VV.getUint8(eV + 1),
        version: (VV, eV) => VV.getUint32(eV + 4, !0)
      },
      De = {
        BYTES: 4,
        key: (VV, eV) => VV.getUint8(eV + 0),
        tag: (VV, eV) => VV.getUint8(eV + 1)
      },
      ie = {
        BYTES: 16,
        save: (VV, eV) => VV.getUint32(eV + 0, !0),
        index: (VV, eV) => VV.getUint32(eV + 4, !0),
        ptr: (VV, eV) => VV.getUint32(eV + 8, !0),
        len: (VV, eV) => VV.getUint32(eV + 12, !0)
      },
      Ce = {
        BYTES: 16,
        save: (VV, eV) => VV.getUint32(eV + 0, !0),
        kind: (VV, eV) => VV.getUint8(eV + 4),
        parts: (VV, eV) => VV.getUint32(eV + 8, !0),
        bytes: (VV, eV) => VV.getUint32(eV + 12, !0)
      },
      ae = {
        BYTES: 4,
        totalTicks: (VV, eV) => VV.getUint32(eV + 0, !0)
      },
      oe = {
        BYTES: 24,
        what: (VV, eV) => VV.getUint8(eV + 0),
        int: (VV, eV) => VV.getInt32(eV + 4, !0),
        x: (VV, eV) => VV.getFloat64(eV + 8, !0),
        y: (VV, eV) => VV.getFloat64(eV + 16, !0)
      },
      ce = {
        BYTES: 8,
        what: (VV, eV) => VV.getUint8(eV + 0),
        kind: (VV, eV) => VV.getUint8(eV + 1),
        save: (VV, eV) => VV.getUint32(eV + 4, !0)
      },
      he = {
        BYTES: 4,
        yZ: (VV, eV) => VV.getUint16(eV + 0, !0)
      },
      le = {
        BYTES: 360,
        eye: (VV, eV, xV) => VV.getFloat64(eV + 0 + 8 * xV, !0),
        localPos: (VV, eV, xV) => VV.getFloat64(eV + 24 + 8 * xV, !0),
        rxV: (VV, eV, xV) => VV.getFloat64(eV + 48 + 8 * xV, !0),
        viewProj: (VV, eV, xV) => VV.getFloat32(eV + 72 + 4 * xV, !0),
        origin: (VV, eV, xV) => VV.getInt32(eV + 136 + 4 * xV, !0),
        heading: (VV, eV) => VV.getFloat32(eV + 148, !0),
        pitch: (VV, eV) => VV.getFloat32(eV + 152, !0),
        tanHalfFovX: (VV, eV) => VV.getFloat32(eV + 156, !0),
        tanHalfFovY: (VV, eV) => VV.getFloat32(eV + 160, !0),
        viewportCss: (VV, eV, xV) => VV.getFloat32(eV + 164 + 4 * xV, !0),
        localVel: (VV, eV, xV) => VV.getFloat32(eV + 172 + 4 * xV, !0),
        actionDir: (VV, eV, xV) => VV.getFloat32(eV + 184 + 4 * xV, !0),
        localId: (VV, eV) => VV.getInt32(eV + 196, !0),
        playerFlags: (VV, eV) => VV.getUint32(eV + 200, !0),
        targetBlock: (VV, eV, xV) => VV.getInt32(eV + 204 + 4 * xV, !0),
        targetAdjacent: (VV, eV, xV) => VV.getInt32(eV + 216 + 4 * xV, !0),
        targetBlockId: (VV, eV) => VV.getUint32(eV + 228, !0),
        targetNormal: (VV, eV, xV) => VV.getInt8(eV + 232 + 1 * xV),
        targetFlags: (VV, eV) => VV.getUint8(eV + 235),
        pickedEntity: (VV, eV) => VV.getInt32(eV + 236, !0),
        breakingPos: (VV, eV, xV) => VV.getInt32(eV + 240 + 4 * xV, !0),
        breakingProgress: (VV, eV) => VV.getFloat32(eV + 252, !0),
        JA: (VV, eV) => VV.getUint16(eV + 256, !0),
        selectedSlot: (VV, eV) => VV.getUint8(eV + 258),
        heldFlags: (VV, eV) => VV.getUint8(eV + 259),
        heldAttrVersion: (VV, eV) => VV.getUint32(eV + 260, !0),
        inventoryVersion: (VV, eV) => VV.getUint32(eV + 264, !0),
        effectsVersion: (VV, eV) => VV.getUint32(eV + 268, !0),
        entitiesVersion: (VV, eV) => VV.getUint32(eV + 272, !0),
        entRenderPtr: (VV, eV) => VV.getUint32(eV + 276, !0),
        entCapacity: (VV, eV) => VV.getUint32(eV + 280, !0),
        frameMs: (VV, eV) => VV.getFloat32(eV + 284, !0),
        fps: (VV, eV) => VV.getFloat32(eV + 288, !0),
        entVisPtr: (VV, eV) => VV.getUint32(eV + 292, !0),
        momentumFrac: (VV, eV) => VV.getFloat32(eV + 296, !0),
        chunkSlotsPtr: (VV, eV) => VV.getUint32(eV + 300, !0),
        chunkSlotsLen: (VV, eV) => VV.getUint32(eV + 304, !0),
        walkThroughPtr: (VV, eV) => VV.getUint32(eV + 308, !0),
        walkThroughLen: (VV, eV) => VV.getUint32(eV + 312, !0),
        audioViewPtr: (VV, eV) => VV.getUint32(eV + 316, !0),
        inventoryViewPtr: (VV, eV) => VV.getUint32(eV + 320, !0),
        eventOverflowGen: (VV, eV) => VV.getUint32(eV + 324, !0),
        eventOverflowMask: (VV, eV) => VV.getUint32(eV + 328, !0),
        promptEntity: (VV, eV) => VV.getInt32(eV + 332, !0),
        replayViewPtr: (VV, eV) => VV.getUint32(eV + 336, !0),
        slotIcon: (VV, eV) => VV.getUint32(eV + 340, !0),
        localDeaths: (VV, eV) => VV.getUint32(eV + 344, !0),
        cameraFar: (VV, eV) => VV.getFloat32(eV + 348, !0),
        gliderBoostFuel: (VV, eV) => VV.getUint32(eV + 352, !0),
        interactLabel: (VV, eV) => VV.getUint16(eV + 356, !0),
        interactIcon: (VV, eV) => VV.getUint16(eV + 358, !0)
      },
      Le = {
        BYTES: 16,
        voxelsPtr: (VV, eV) => VV.getUint32(eV + 0, !0),
        version: (VV, eV) => VV.getUint32(eV + 4, !0),
        generation: (VV, eV) => VV.getUint32(eV + 8, !0),
        hn: (VV, eV) => VV.getUint32(eV + 12, !0)
      },
      fe = {
        BYTES: 56,
        listener: (VV, eV, xV) => VV.getFloat64(eV + 0 + 8 * xV, !0),
        forward: (VV, eV, xV) => VV.getFloat32(eV + 24 + 4 * xV, !0),
        up: (VV, eV, xV) => VV.getFloat32(eV + 36 + 4 * xV, !0),
        dropped: (VV, eV) => VV.getUint32(eV + 48, !0),
        unfollowed: (VV, eV) => VV.getUint32(eV + 52, !0)
      },
      me = {
        BYTES: 8,
        item: (VV, eV) => VV.getUint16(eV + 0, !0),
        amount: (VV, eV) => VV.getUint16(eV + 2, !0),
        attrVersion: (VV, eV) => VV.getUint32(eV + 4, !0)
      },
      Ke = {
        BYTES: 76,
        version: (VV, eV) => VV.getUint32(eV + 0, !0),
        state: (VV, eV) => VV.getUint8(eV + 4),
        cameraMode: (VV, eV) => VV.getUint8(eV + 5),
        iZ: (VV, eV) => VV.getUint32(eV + 8, !0),
        totalTicks: (VV, eV) => VV.getUint32(eV + 12, !0),
        speed: (VV, eV) => VV.getFloat32(eV + 16, !0),
        markIn: (VV, eV) => VV.getUint32(eV + 20, !0),
        markOut: (VV, eV) => VV.getUint32(eV + 24, !0),
        editVersion: (VV, eV) => VV.getUint32(eV + 28, !0),
        drops: (VV, eV, xV) => VV.getUint32(eV + 32 + 4 * xV, !0)
      },
      He = {
        BYTES: 6,
        flags: (VV, eV) => VV.getUint8(eV + 0),
        harvestType: (VV, eV) => VV.getUint8(eV + 1),
        harvestLevel: (VV, eV) => VV.getUint8(eV + 2),
        attachedTop: (VV, eV) => VV.getUint16(eV + 4, !0)
      },
      ue = {
        BYTES: 3,
        flags: (VV, eV) => VV.getUint8(eV + 0),
        harvests: (VV, eV) => VV.getUint8(eV + 1),
        level: (VV, eV) => VV.getUint8(eV + 2)
      },
      se = {
        BYTES: 12,
        item: (VV, eV) => VV.getUint32(eV + 0, !0),
        amount: (VV, eV) => VV.getFloat64(eV + 4, !0)
      },
      Se = {
        BYTES: 16,
        recipes: (VV, eV) => VV.getUint32(eV + 0, !0),
        ingredients: (VV, eV) => VV.getUint32(eV + 4, !0),
        craftAllTimes: (VV, eV) => VV.getUint32(eV + 8, !0),
        flags: (VV, eV) => VV.getUint32(eV + 12, !0)
      },
      Ie = {
        BYTES: 10,
        item: (VV, eV) => VV.getUint16(eV + 0, !0),
        recipe: (VV, eV) => VV.getUint16(eV + 2, !0),
        produces: (VV, eV) => VV.getUint16(eV + 4, !0),
        requires: (VV, eV) => VV.getUint16(eV + 6, !0),
        flags: (VV, eV) => VV.getUint8(eV + 8)
      },
      de = {
        BYTES: 4,
        amount: (VV, eV) => VV.getUint16(eV + 0, !0),
        items: (VV, eV) => VV.getUint16(eV + 2, !0)
      },
      Oe = {
        BYTES: 8,
        amount: (VV, eV) => VV.getUint32(eV + 0, !0),
        item: (VV, eV) => VV.getUint16(eV + 4, !0),
        from: (VV, eV) => VV.getUint16(eV + 6, !0)
      },
      Vx = {
        BYTES: 16,
        serverId: (VV, eV) => VV.getInt32(eV + 0, !0),
        len: (VV, eV) => VV.getUint32(eV + 4, !0),
        kind: (VV, eV) => VV.getUint16(eV + 8, !0),
        variation: (VV, eV) => VV.getUint16(eV + 10, !0),
        pose: (VV, eV) => VV.getUint8(eV + 12),
        meta: (VV, eV) => VV.getUint8(eV + 13),
        mesh: (VV, eV) => VV.getUint8(eV + 14),
        flags: (VV, eV) => VV.getUint8(eV + 15)
      },
      ex = {
        BYTES: 56,
        terrainOpaque: (VV, eV) => VV.getUint32(eV + 0, !0),
        terrainTransparent: (VV, eV) => VV.getUint32(eV + 4, !0),
        terrainPack: (VV, eV) => VV.getUint32(eV + 8, !0),
        earthSky: (VV, eV) => VV.getUint32(eV + 12, !0),
        skyMeshes: (VV, eV) => VV.getUint32(eV + 16, !0),
        regular: (VV, eV) => VV.getUint32(eV + 20, !0),
        thin: (VV, eV) => VV.getUint32(eV + 24, !0),
        line: (VV, eV) => VV.getUint32(eV + 28, !0),
        text: (VV, eV) => VV.getUint32(eV + 32, !0),
        particles: (VV, eV) => VV.getUint32(eV + 36, !0),
        terrainParts: (VV, eV) => VV.getUint32(eV + 40, !0),
        terrainCompiling: (VV, eV) => VV.getUint32(eV + 44, !0),
        ringCopiesMax: (VV, eV) => VV.getUint32(eV + 48, !0),
        ringBusyWrites: (VV, eV) => VV.getUint32(eV + 52, !0)
      },
      xx = {
        BYTES: 16,
        fov: (VV, eV) => VV.getFloat32(eV + 0, !0),
        baseFov: (VV, eV) => VV.getFloat32(eV + 4, !0),
        aspect: (VV, eV) => VV.getFloat32(eV + 8, !0),
        bodyHeading: (VV, eV) => VV.getFloat32(eV + 12, !0)
      },
      Jx = {
        BYTES: 32,
        eye: (VV, eV, xV) => VV.getFloat64(eV + 0 + 8 * xV, !0),
        heading: (VV, eV) => VV.getFloat32(eV + 24, !0),
        pitch: (VV, eV) => VV.getFloat32(eV + 28, !0)
      },
      Yx = {
        BYTES: 48,
        feet: (VV, eV, xV) => VV.getFloat64(eV + 0 + 8 * xV, !0),
        eyeHeight: (VV, eV) => VV.getFloat32(eV + 24, !0),
        heading: (VV, eV) => VV.getFloat32(eV + 28, !0),
        headingIsDrawn: (VV, eV) => VV.getUint32(eV + 32, !0),
        pitch: (VV, eV) => VV.getFloat32(eV + 36, !0),
        lookHeading: (VV, eV) => VV.getFloat32(eV + 40, !0)
      },
      Ux = 32,
      yx = 63,
      px = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function Qx(VV, eV, xV, JV, YV) {
      var UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV;
      switch (VV) {
        case 32:
          return 4 === JV && (null === (UV = YV.tickEnd) || void 0 === UV || UV.call(YV, Be.iZ(eV, xV)), !0);
        case 33:
          return 12 === JV && (null === (yV = YV.entitySpawned) || void 0 === yV || yV.call(YV, je.serverId(eV, xV), je.index(eV, xV), je.kind(eV, xV)), !0);
        case 34:
          return 12 === JV && (null === (pV = YV.entityDespawned) || void 0 === pV || pV.call(YV, je.serverId(eV, xV), je.index(eV, xV), je.kind(eV, xV)), !0);
        case 39:
          return !(JV < 20) && (null === (QV = YV.changeBlockFail) || void 0 === QV || QV.call(YV, qe.pos(eV, xV, 0), qe.pos(eV, xV, 1), qe.pos(eV, xV, 2), qe.actual(eV, xV), qe.dataLen(eV, xV), xV + 20, JV - 20), !0);
        case 46:
          return 0 === JV && (null === (nV = YV.changeBlockFailEnd) || void 0 === nV || nV.call(YV), !0);
        case 48:
          return 20 === JV && (null === (wV = YV.inventoryEvent) || void 0 === wV || wV.call(YV, te.what(eV, xV), te.value(eV, xV), te.pos(eV, xV, 0), te.pos(eV, xV, 1), te.pos(eV, xV, 2), te.block(eV, xV)), !0);
        case 49:
          return 4 === JV && (null === (ZV = YV.heldItemChanged) || void 0 === ZV || ZV.call(YV, Fe.item(eV, xV), Fe.slot(eV, xV)), !0);
        case 50:
          return 16 === JV && (null === (vV = YV.shotDamage) || void 0 === vV || vV.call(YV, Te.target(eV, xV), Te.damage(eV, xV), Te.distance(eV, xV), Te.crit(eV, xV)), !0);
        case 51:
          return !(JV < 4) && (null === (rV = YV.enchantOffer) || void 0 === rV || rV.call(YV, Pe.slot(eV, xV), xV + 4, JV - 4), !0);
        case 52:
          return !(JV < 20) && (null === (kV = YV.uiEvent) || void 0 === kV || kV.call(YV, Ae.what(eV, xV), Ae.value(eV, xV), Ae.pos(eV, xV, 0), Ae.pos(eV, xV, 1), Ae.pos(eV, xV, 2), Ae.block(eV, xV), xV + 20, JV - 20), !0);
        case 53:
          return 12 === JV && (null === (bV = YV.entityInfoChanged) || void 0 === bV || bV.call(YV, Ne.serverId(eV, xV), Ne.index(eV, xV), Ne.what(eV, xV)), !0);
        case 55:
          return 24 === JV && (null === (EV = YV.chunkSlot) || void 0 === EV || EV.call(YV, Xe.cx(eV, xV), Xe.cy(eV, xV), Xe.cz(eV, xV), Xe.slot(eV, xV), Xe.generation(eV, xV), Xe.flags(eV, xV)), !0);
        case 40:
          return 44 === JV && (null === (BV = YV.playSound) || void 0 === BV || BV.call(YV, Me.pos(eV, xV, 0), Me.pos(eV, xV, 1), Me.pos(eV, xV, 2), Me.sound(eV, xV), Me.flags(eV, xV), Me.handle(eV, xV), Me.volume(eV, xV), Me.rate(eV, xV), Me.refDist(eV, xV)), !0);
        case 41:
          return 28 === JV && (null === (jV = YV.soundPos) || void 0 === jV || jV.call(YV, ze.pos(eV, xV, 0), ze.pos(eV, xV, 1), ze.pos(eV, xV, 2), ze.handle(eV, xV)), !0);
        case 42:
          return 16 === JV && (null === (qV = YV.soundSet) || void 0 === qV || qV.call(YV, Ge.handle(eV, xV), Ge.volume(eV, xV), Ge.rate(eV, xV), Ge.refDist(eV, xV)), !0);
        case 43:
          return 12 === JV && (null === (tV = YV.soundFade) || void 0 === tV || tV.call(YV, We.handle(eV, xV), We.to(eV, xV), We.ms(eV, xV), We.flags(eV, xV)), !0);
        case 44:
          return 4 === JV && (null === (FV = YV.soundStop) || void 0 === FV || FV.call(YV, Re.handle(eV, xV)), !0);
        case 45:
          return 0 === JV && (null === (TV = YV.soundReset) || void 0 === TV || TV.call(YV), !0);
        case 56:
          return 8 === JV && (null === (PV = YV.replayFailed) || void 0 === PV || PV.call(YV, ge.reason(eV, xV), ge.code(eV, xV), ge.version(eV, xV)), !0);
        case 57:
          return !(JV < 4) && (null === (AV = YV.replayOption) || void 0 === AV || AV.call(YV, De.key(eV, xV), De.tag(eV, xV), xV + 4, JV - 4), !0);
        case 58:
          return 16 === JV && (null === (NV = YV.replayFilePart) || void 0 === NV || NV.call(YV, ie.save(eV, xV), ie.index(eV, xV), ie.ptr(eV, xV), ie.len(eV, xV)), !0);
        case 59:
          return 16 === JV && (null === (XV = YV.replayFileReady) || void 0 === XV || XV.call(YV, Ce.save(eV, xV), Ce.kind(eV, xV), Ce.parts(eV, xV), Ce.bytes(eV, xV)), !0);
        case 60:
          return !(JV < 4) && (null === (MV = YV.replayOpened) || void 0 === MV || MV.call(YV, ae.totalTicks(eV, xV), xV + 4, JV - 4), !0);
        case 61:
          return !(JV < 24) && (null === (zV = YV.replayUiEvent) || void 0 === zV || zV.call(YV, oe.what(eV, xV), oe.int(eV, xV), oe.x(eV, xV), oe.y(eV, xV), xV + 24, JV - 24), !0);
        case 62:
          return 8 === JV && (null === (GV = YV.recorderEvent) || void 0 === GV || GV.call(YV, ce.what(eV, xV), ce.kind(eV, xV), ce.save(eV, xV)), !0);
        default:
          return !1
      }
    }
    const nx = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      CosmeticModel: 399,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let wx = new Uint8Array(0);

    function Zx(VV) {
      return wx.buffer !== VV.buffer && (wx = new Uint8Array(VV.buffer)), wx
    }

    function vx(VV, eV, xV) {
      const JV = VV.NZ(66, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint8(JV + 0, xV), !0
    }

    function rx(VV, eV, xV) {
      const JV = VV.NZ(67, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint32(JV + 0, xV, !0), !0
    }

    function kx(VV, eV, xV) {
      const JV = VV.NZ(68, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint8(JV + 0, xV), !0
    }

    function bx(VV, eV, xV, JV) {
      const YV = VV.NZ(69, eV, 4 + JV.length);
      if (YV < 0) return !1;
      const UV = VV.view;
      return UV.setUint8(YV + 0, xV), Zx(UV).set(JV, UV.byteOffset + YV + 4), !0
    }

    function Ex(VV, eV, xV, JV, YV) {
      const UV = VV.NZ(128, eV, 4 + YV.length);
      if (UV < 0) return !1;
      const yV = VV.view;
      return yV.setUint8(UV + 0, xV), yV.setUint16(UV + 2, JV, !0), Zx(yV).set(YV, yV.byteOffset + UV + 4), !0
    }

    function Bx(VV, eV, xV) {
      const JV = VV.NZ(131, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setInt32(JV + 0, xV, !0), !0
    }

    function jx(VV, eV, xV) {
      const JV = VV.NZ(132, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint32(JV + 0, xV, !0), !0
    }

    function qx(VV, eV, xV) {
      const JV = VV.NZ(133, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint32(JV + 0, xV, !0), !0
    }

    function tx(VV, eV, xV) {
      const JV = VV.NZ(144, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint8(JV + 0, xV), !0
    }

    function Fx(VV, eV, xV, JV, YV) {
      const UV = VV.NZ(145, eV, 12);
      if (UV < 0) return !1;
      const yV = VV.view;
      return yV.setInt32(UV + 0, xV, !0), yV.setInt32(UV + 4, JV, !0), yV.setInt32(UV + 8, YV, !0), !0
    }

    function Tx(VV, eV, xV, JV) {
      const YV = VV.NZ(256, eV, 4 + JV.length);
      if (YV < 0) return !1;
      const UV = VV.view;
      return UV.setUint16(YV + 0, xV, !0), Zx(UV).set(JV, UV.byteOffset + YV + 4), !0
    }

    function Px(VV, eV, xV) {
      const JV = VV.NZ(258, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint8(JV + 0, xV), !0
    }

    function Ax(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
      const nV = VV.NZ(320, eV, 48 + QV.length);
      if (nV < 0) return !1;
      const wV = VV.view;
      wV.setUint32(nV + 0, xV, !0), wV.setUint16(nV + 4, JV, !0), wV.setUint16(nV + 6, YV, !0), wV.setUint32(nV + 8, UV, !0);
      for (let ZV = 0; ZV < 3; ZV++) wV.setFloat64(nV + 12 + 8 * ZV, yV[ZV], !0);
      for (let ZV = 0; ZV < 3; ZV++) wV.setFloat32(nV + 36 + 4 * ZV, pV[ZV], !0);
      return Zx(wV).set(QV, wV.byteOffset + nV + 48), !0
    }

    function Nx(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
      const nV = VV.NZ(321, eV, 48 + QV.length);
      if (nV < 0) return !1;
      const wV = VV.view;
      wV.setUint32(nV + 0, xV, !0), wV.setInt32(nV + 4, JV, !0), wV.setUint16(nV + 8, YV, !0), wV.setUint16(nV + 10, UV, !0);
      for (let ZV = 0; ZV < 3; ZV++) wV.setFloat64(nV + 12 + 8 * ZV, yV[ZV], !0);
      for (let ZV = 0; ZV < 3; ZV++) wV.setFloat32(nV + 36 + 4 * ZV, pV[ZV], !0);
      return Zx(wV).set(QV, wV.byteOffset + nV + 48), !0
    }

    function Xx(VV, eV, xV, JV, YV, UV, yV) {
      const pV = VV.NZ(322, eV, 44 + yV.length);
      if (pV < 0) return !1;
      const QV = VV.view;
      QV.setUint32(pV + 0, xV, !0), QV.setUint32(pV + 4, JV, !0);
      for (let nV = 0; nV < 3; nV++) QV.setFloat64(pV + 8 + 8 * nV, YV[nV], !0);
      for (let nV = 0; nV < 3; nV++) QV.setFloat32(pV + 32 + 4 * nV, UV[nV], !0);
      return Zx(QV).set(yV, QV.byteOffset + pV + 44), !0
    }

    function Mx(VV, eV, xV) {
      const JV = VV.NZ(323, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint32(JV + 0, xV, !0), !0
    }

    function zx(VV, eV, xV, JV, YV, UV) {
      const yV = VV.NZ(324, eV, 32 + UV.length);
      if (yV < 0) return !1;
      const pV = VV.view;
      pV.setUint32(yV + 0, xV, !0), pV.setUint32(yV + 4, JV, !0);
      for (let QV = 0; QV < 3; QV++) pV.setFloat64(yV + 8 + 8 * QV, YV[QV], !0);
      return Zx(pV).set(UV, pV.byteOffset + yV + 32), !0
    }

    function Gx(VV, eV) {
      return !(VV.NZ(325, eV, 0) < 0)
    }

    function Wx(VV, eV, xV, JV, YV, UV) {
      const yV = VV.NZ(384, eV, 16);
      if (yV < 0) return !1;
      const pV = VV.view;
      return pV.setUint32(yV + 0, xV, !0), pV.setUint32(yV + 4, JV, !0), pV.setFloat32(yV + 8, YV, !0), pV.setFloat32(yV + 12, UV, !0), !0
    }

    function Rx(VV, eV, xV, JV, YV, UV, yV) {
      const pV = VV.NZ(385, eV, 36 + yV.length);
      if (pV < 0) return !1;
      const QV = VV.view;
      QV.setUint32(pV + 0, xV, !0), QV.setUint32(pV + 4, JV, !0);
      for (let nV = 0; nV < 3; nV++) QV.setFloat64(pV + 8 + 8 * nV, YV[nV], !0);
      return QV.setUint32(pV + 32, UV, !0), Zx(QV).set(yV, QV.byteOffset + pV + 36), !0
    }

    function gx(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
      const nV = VV.NZ(386, eV, 56 + QV.length);
      if (nV < 0) return !1;
      const wV = VV.view;
      wV.setUint32(nV + 0, xV, !0), wV.setUint8(nV + 4, JV);
      for (let ZV = 0; ZV < 4; ZV++) wV.setFloat32(nV + 8 + 4 * ZV, YV[ZV], !0);
      for (let ZV = 0; ZV < 3; ZV++) wV.setFloat64(nV + 24 + 8 * ZV, UV[ZV], !0);
      return wV.setUint32(nV + 48, yV, !0), wV.setUint32(nV + 52, pV, !0), Zx(wV).set(QV, wV.byteOffset + nV + 56), !0
    }

    function Dx(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
      const nV = VV.NZ(387, eV, 56);
      if (nV < 0) return !1;
      const wV = VV.view;
      wV.setUint32(nV + 0, xV, !0), wV.setUint16(nV + 4, JV, !0), wV.setUint8(nV + 6, YV);
      for (let ZV = 0; ZV < 3; ZV++) wV.setFloat64(nV + 8 + 8 * ZV, UV[ZV], !0);
      for (let ZV = 0; ZV < 2; ZV++) wV.setFloat32(nV + 32 + 4 * ZV, yV[ZV], !0);
      wV.setFloat32(nV + 40, pV, !0);
      for (let ZV = 0; ZV < 3; ZV++) wV.setFloat32(nV + 44 + 4 * ZV, QV[ZV], !0);
      return !0
    }

    function ix(VV, eV, xV) {
      const JV = VV.NZ(388, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint32(JV + 0, xV, !0), !0
    }

    function Cx(VV, eV, xV, JV) {
      const YV = VV.NZ(389, eV, 8);
      if (YV < 0) return !1;
      const UV = VV.view;
      return UV.setInt32(YV + 0, xV, !0), UV.setFloat32(YV + 4, JV, !0), !0
    }

    function ax(VV, eV, xV, JV) {
      const YV = VV.NZ(390, eV, 8);
      if (YV < 0) return !1;
      const UV = VV.view;
      return UV.setInt32(YV + 0, xV, !0), UV.setFloat32(YV + 4, JV, !0), !0
    }

    function ox(VV, eV, xV, JV, YV, UV) {
      const yV = VV.NZ(391, eV, 12);
      if (yV < 0) return !1;
      const pV = VV.view;
      return pV.setFloat32(yV + 0, xV, !0), pV.setFloat32(yV + 4, JV, !0), pV.setUint8(yV + 8, YV), pV.setUint8(yV + 9, UV), !0
    }

    function cx(VV, eV, xV) {
      const JV = VV.NZ(392, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint32(JV + 0, xV, !0), !0
    }

    function hx(VV, eV, xV, JV, YV) {
      const UV = VV.NZ(393, eV, 12);
      if (UV < 0) return !1;
      const yV = VV.view;
      return yV.setUint32(UV + 0, xV, !0), yV.setUint16(UV + 4, JV, !0), yV.setFloat32(UV + 8, YV, !0), !0
    }

    function lx(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV) {
      const vV = VV.NZ(394, eV, 56 + ZV.length);
      if (vV < 0) return !1;
      const rV = VV.view;
      rV.setUint32(vV + 0, xV, !0), rV.setUint16(vV + 4, JV, !0), rV.setUint8(vV + 6, YV), rV.setUint8(vV + 7, UV);
      for (let kV = 0; kV < 3; kV++) rV.setFloat64(vV + 8 + 8 * kV, yV[kV], !0);
      rV.setFloat32(vV + 32, pV, !0), rV.setInt32(vV + 36, QV, !0);
      for (let kV = 0; kV < 3; kV++) rV.setFloat32(vV + 40 + 4 * kV, nV[kV], !0);
      return rV.setFloat32(vV + 52, wV, !0), Zx(rV).set(ZV, rV.byteOffset + vV + 56), !0
    }

    function Lx(VV, eV, xV) {
      const JV = VV.NZ(398, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setUint32(JV + 0, xV, !0), !0
    }

    function fx(VV, eV, xV, JV, YV) {
      const UV = VV.NZ(399, eV, 12);
      if (UV < 0) return !1;
      const yV = VV.view;
      return yV.setUint32(UV + 0, xV, !0), yV.setUint32(UV + 4, JV, !0), yV.setFloat32(UV + 8, YV, !0), !0
    }

    function mx(VV, eV, xV) {
      const JV = VV.NZ(448, eV, 4);
      if (JV < 0) return !1;
      return VV.view.setFloat32(JV + 0, xV, !0), !0
    }

    function Kx(VV, eV, xV, JV) {
      const YV = VV.NZ(450, eV, 12);
      if (YV < 0) return !1;
      const UV = VV.view;
      for (let yV = 0; yV < 2; yV++) UV.setFloat32(YV + 0 + 4 * yV, xV[yV], !0);
      return UV.setUint8(YV + 8, JV), !0
    }

    function Hx(VV, eV, xV, JV) {
      const YV = VV.NZ(452, eV, 8);
      if (YV < 0) return !1;
      const UV = VV.view;
      return UV.setFloat32(YV + 0, xV, !0), UV.setUint8(YV + 4, JV), !0
    }

    function ux(VV, eV, xV, JV, YV) {
      const UV = VV.NZ(454, eV, 4);
      if (UV < 0) return !1;
      const yV = VV.view;
      return yV.setUint8(UV + 0, xV), yV.setUint8(UV + 1, JV), yV.setUint8(UV + 2, YV), !0
    }

    function sx(VV, eV, xV, JV) {
      const YV = VV.NZ(455, eV, 40);
      if (YV < 0) return !1;
      const UV = VV.view;
      for (let yV = 0; yV < 9; yV++) UV.setInt32(YV + 0 + 4 * yV, xV[yV], !0);
      return UV.setUint32(YV + 36, JV, !0), !0
    }

    function Sx(VV, eV, xV, JV) {
      const YV = VV.NZ(456, eV, 8);
      if (YV < 0) return !1;
      const UV = VV.view;
      return UV.setFloat32(YV + 0, xV, !0), UV.setUint8(YV + 4, JV), !0
    }

    function Ix(VV, eV, xV, JV, YV) {
      const UV = VV.NZ(457, eV, 16);
      if (UV < 0) return !1;
      const yV = VV.view;
      for (let pV = 0; pV < 3; pV++) yV.setInt32(UV + 0 + 4 * pV, xV[pV], !0);
      for (let pV = 0; pV < 3; pV++) yV.setInt8(UV + 12 + 1 * pV, JV[pV]);
      return yV.setUint8(UV + 15, YV), !0
    }

    function dx(VV, eV, xV, JV) {
      const YV = VV.NZ(530, eV, 4 + JV.length);
      if (YV < 0) return !1;
      const UV = VV.view;
      return UV.setUint8(YV + 0, xV), Zx(UV).set(JV, UV.byteOffset + YV + 4), !0
    }

    function Ox(VV, eV, xV, JV, YV, UV) {
      const yV = VV.NZ(531, eV, 12 + UV.length);
      if (yV < 0) return !1;
      const pV = VV.view;
      return pV.setFloat32(yV + 0, xV, !0), pV.setFloat32(yV + 4, JV, !0), pV.setUint32(yV + 8, YV, !0), Zx(pV).set(UV, pV.byteOffset + yV + 12), !0
    }

    function VJ(VV, eV, xV, JV, YV, UV) {
      const yV = VV.NZ(532, eV, 12 + UV.length);
      if (yV < 0) return !1;
      const pV = VV.view;
      return pV.setInt32(yV + 0, xV, !0), pV.setInt32(yV + 4, JV, !0), pV.setUint32(yV + 8, YV, !0), Zx(pV).set(UV, pV.byteOffset + yV + 12), !0
    }

    function eJ(VV, eV, xV, JV, YV) {
      const UV = VV.NZ(533, eV, 8 + YV.length);
      if (UV < 0) return !1;
      const yV = VV.view;
      return yV.setInt32(UV + 0, xV, !0), yV.setInt32(UV + 4, JV, !0), Zx(yV).set(YV, yV.byteOffset + UV + 8), !0
    }

    function xJ(VV, eV) {
      return !(VV.NZ(576, eV, 0) < 0)
    }

    function JJ(VV, eV, xV, JV, YV, UV) {
      const yV = VV.NZ(577, eV, 36 + UV.length);
      if (yV < 0) return !1;
      const pV = VV.view;
      pV.setUint8(yV + 0, xV);
      for (let QV = 0; QV < 16; QV++) pV.setUint8(yV + 4 + 1 * QV, JV[QV]);
      for (let QV = 0; QV < 16; QV++) pV.setUint8(yV + 20 + 1 * QV, YV[QV]);
      return Zx(pV).set(UV, pV.byteOffset + yV + 36), !0
    }

    function YJ(VV, eV, xV, JV) {
      const YV = VV.NZ(578, eV, 4 + JV.length);
      if (YV < 0) return !1;
      const UV = VV.view;
      return UV.setUint8(YV + 0, xV), Zx(UV).set(JV, UV.byteOffset + YV + 4), !0
    }

    function UJ(VV, eV, xV, JV, YV, UV, yV, pV) {
      const QV = VV.NZ(579, eV, 36);
      if (QV < 0) return !1;
      const nV = VV.view;
      return nV.setFloat64(QV + 0, xV, !0), nV.setFloat64(QV + 8, JV, !0), nV.setFloat64(QV + 16, YV, !0), nV.setFloat64(QV + 24, UV, !0), nV.setUint16(QV + 32, yV, !0), nV.setUint8(QV + 34, pV), !0
    }
    class yJ {
      constructor(VV, eV) {
        this.core = VV, this.afterCall = eV
      }
      canModify(VV, eV, xV) {
        const JV = this.core.SyV(VV, eV, xV);
        return this.afterCall(), JV
      }
      terrainBlocked(VV, eV, xV, JV, YV) {
        const UV = this.core.LpV(VV, eV, xV, JV, YV);
        return this.afterCall(), UV
      }
      gR(VV, eV, xV, JV) {
        const YV = this.core.zr(VV, eV, xV, JV);
        return this.afterCall(), YV
      }
      blockData(VV, eV, xV) {
        const JV = this.core.uyV(VV, eV, xV);
        return this.afterCall(), JV
      }
      cameraSweep(VV, eV, xV, JV, YV, UV, yV) {
        const pV = this.core.mUV(VV, eV, xV, JV, YV, UV, yV);
        return this.afterCall(), pV
      }
      hasServerTarget(VV) {
        const eV = this.core.QpV(VV);
        return this.afterCall(), eV
      }
      entityInteractable(VV) {
        const eV = this.core.JpV(VV);
        return this.afterCall(), eV
      }
      entityCrouching(VV) {
        const eV = this.core.xpV(VV);
        return this.afterCall(), eV
      }
      entityDrawn(VV) {
        const eV = this.core.SUV(VV);
        return this.afterCall(), eV
      }
      predictServerPosition(VV, eV, xV, JV) {
        const YV = this.core.FpV(VV, eV, xV, JV);
        return this.afterCall(), YV
      }
      setOtherEntitySetting(VV, eV, xV) {
        const JV = this.core.sUV(VV, eV, xV);
        return this.afterCall(), JV
      }
      entityInfoBatch(VV) {
        const eV = this.core.VyV(VV);
        return this.afterCall(), eV
      }
      entityName(VV) {
        const eV = this.core.YpV(VV);
        return this.afterCall(), eV
      }
      hasEffect(VV, eV) {
        const xV = this.core.ppV(VV, eV);
        return this.afterCall(), xV
      }
      scratchPtr() {
        const VV = this.core.cUV();
        return this.afterCall(), VV
      }
      invSwap(VV, eV) {
        const xV = this.core.bpV(VV, eV);
        return this.afterCall(), xV
      }
      invMove(VV, eV, xV) {
        const JV = this.core.vpV(VV, eV, xV);
        return this.afterCall(), JV
      }
      invQuickMove(VV, eV, xV, JV) {
        const YV = this.core.rpV(VV, eV, xV, JV);
        return this.afterCall(), YV
      }
      invRemove(VV, eV, xV) {
        const JV = this.core.kpV(VV, eV, xV);
        return this.afterCall(), JV
      }
      invEnchant(VV, eV, xV, JV, YV) {
        const UV = this.core.wpV(VV, eV, xV, JV, YV);
        return this.afterCall(), UV
      }
      craft(VV, eV, xV) {
        const JV = this.core.craft(VV, eV, xV);
        return this.afterCall(), JV
      }
      salvage(VV, eV, xV) {
        const JV = this.core.salvage(VV, eV, xV);
        return this.afterCall(), JV
      }
      selectSlot(VV) {
        const eV = this.core.NpV(VV);
        return this.afterCall(), eV
      }
      closeChest() {
        const VV = this.core.IyV();
        return this.afterCall(), VV
      }
      itemAttributesBatch(VV) {
        const eV = this.core.OUV(VV);
        return this.afterCall(), eV
      }
      itemNames() {
        const VV = this.core.mG();
        return this.afterCall(), VV
      }
      blockProps() {
        const VV = this.core.syV();
        return this.afterCall(), VV
      }
      itemProps() {
        const VV = this.core.EpV();
        return this.afterCall(), VV
      }
      salvageRecipe(VV) {
        const eV = this.core.xyV(VV);
        return this.afterCall(), eV
      }
      craftingView(VV, eV, xV) {
        const JV = this.core.IUV(VV, eV, xV);
        return this.afterCall(), JV
      }
      directorView() {
        const VV = this.core.lUV();
        return this.afterCall(), VV
      }
      directorDefaultPose() {
        const VV = this.core.KUV();
        return this.afterCall(), VV
      }
      directorEntity(VV) {
        const eV = this.core.LUV(VV);
        return this.afterCall(), eV
      }
      directorPose(VV, eV, xV, JV, YV, UV) {
        const yV = this.core.HUV(VV, eV, xV, JV, YV, UV);
        return this.afterCall(), yV
      }
      passTimings(VV) {
        const eV = this.core.tpV(VV);
        return this.afterCall(), eV
      }
      drawCensus() {
        const VV = this.core.epV();
        return this.afterCall(), VV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);